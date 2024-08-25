import React, {useState, useEffect} from "react";

function FetchData(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((res) => setData(res))
        console.log(data);
    },[])
    return data;
}

export default FetchData;
