import  { useEffect, useState } from 'react'

const useFunc = (currency) => {
    
    const [data,setdata] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then(data=>setdata(data[currency]));
    },[currency])
    // console.log(data)
  return data;
}

export default useFunc
