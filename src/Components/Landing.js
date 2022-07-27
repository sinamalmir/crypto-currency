import React , { useState,useEffect } from 'react';
import { getCoin } from '../service/api';

import Loader from './Loader';

import Coin from './Coin';

const Landing = () => {

    const [coins , setCoins] = useState([]);

    const [search , setSearch] = useState(''); 

    useEffect(() => {
        const fetchAPI = async () =>{
            const data = await getCoin();
            setCoins(data);
        }

        fetchAPI();

    },[])

    const changeHandler = (event) => {
        setSearch(event.target.value);
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className='text-center p-3 container 2xl:max-w-screen-2xl mx-auto ' >
            <input type="search" value={search} onChange={changeHandler} placeholder='search...' className='mb-5 w-full p-3 rounded bg-gray-100 text-black sticky top-3 ' />
            {
                coins.length ? 
                <div>
                    {searchedCoins.map(coin => <Coin 
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.market_cap_change_percentage_24h}
                    /> ) }
                </div> :
                <Loader />

            }

        </div>
    );
};

export default Landing;