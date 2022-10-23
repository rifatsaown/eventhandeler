import React, { useEffect, useState } from 'react';
import { clearTheCart, getTotal } from '../../shared/fakedb';
import DataShow from '../DataShow/DataShow';

const DataLoad = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
    
    const money = getTotal(data as []);
    return (
        <div>
             <button onClick={clearTheCart}>Delete All</button>
             <h3>Money Needed : {money}</h3>
            {
                data.map(data => <DataShow {...data as object}></DataShow>)
            }
        </div>
    );
};

export default DataLoad;