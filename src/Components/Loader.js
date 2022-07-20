import React from 'react';
import loader from '../gif/spinner.gif';

const Loader = () => {
    return (
        <div>
            <img src={loader} alt='loader' />
        </div>
    );
};

export default Loader;