import React, { useEffect, useState } from 'react';
import DataShow from '../DataShow/DataShow';

const DataLoad = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
    return (
        <div>
            {
                data.map(data => <DataShow {...data as object}></DataShow>)
            }
        </div>
    );
};

export default DataLoad;