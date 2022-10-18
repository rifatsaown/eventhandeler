import React, { useEffect, useState } from 'react';

const DataLoad = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
    return (
        <div>
            
        </div>
    );
};

export default DataLoad;