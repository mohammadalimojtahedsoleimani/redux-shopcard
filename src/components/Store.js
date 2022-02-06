import React , { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';

// Components
import Product from './shared/Product';

// redux
import { fetchProducts } from '../redux/products/productsAction';

// Style
import styles from "./Store.module.css";
import Loader from "./shared/Loader";

const Store = () => {

    const dispatch = useDispatch ();
    const productsState = useSelector ( state => state.productsState )

    useEffect ( () => {
        if ( ! productsState.products.length ) dispatch ( fetchProducts () )
    } , [] )

    return (
        <div className={ styles.container }>
            {
                productsState.loading ?
                    <Loader/>
                :
                productsState.error ?
                <p>Something went wrong</p> :
                productsState.products.map ( product => <Product
                key={ product.id }
                productData={ product }
                /> )
            }
        </div>
    );
};

export default Store;