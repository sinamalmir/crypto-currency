import React from 'react';

const Coin = ({name ,price ,image,priceChange,marketCap,symbol}) => {


    return ( 
        
        <div className={priceChange > 0 ? 'sina' : 'nima'}>
        <div   className='container max-w-screen-2xl mx-auto  flex items-center justify-between md:p-3  md:pl-10 md:pr-10  p-2 m-2 rounded text-gray-600 font-thin text-sm' >
                <img src={image} alt='coin img'  style={{width:"50px"}} />
                <div className='flex flex-col items-center md:p-4 md:pl-10 md:pr-10 md:flex-row md:justify-between md:gap-x-10'>
                    <span className='text-white font-bold text-sm'> {symbol.toUpperCase()} <span className='font-thin text-xs text-gray-600 '>/USDT</span> </span>
                    <span>${price.toLocaleString()} </span>
                </div>

                <div className='flex flex-col items-center md:p-4 md:pl-10 md:pr-10 md:flex-row md:justify-between md:gap-x-10'>
                    <span className={ priceChange < 0 ? 'text-[rgb(255,38,38)]' : 'text-[rgb(0,203,0)]' }>
                        {priceChange.toFixed(2)}
                        </span>
                    <span> ${marketCap.toLocaleString()} </span>
                </div>
            </div>
        </div>
    );
};

export default Coin;