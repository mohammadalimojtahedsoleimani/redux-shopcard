import React from 'react';
import spinner from "../../assets/icons/Dual Ball-2.3s-230px.gif"

const Loader = () => {
    return (
        <div style={ { width : "100%" , textAlign : "center" } }>
            <img src={ spinner } alt="spinner gift"/>
        </div>
    );
};

export default Loader;