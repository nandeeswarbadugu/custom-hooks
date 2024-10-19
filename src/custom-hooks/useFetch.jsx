import { useState,useEffect } from "react";
import axios from "axios";


export const useFetch = (url,time) =>{
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);


    async function getDetails(){
        setLoading(true);
        try{
        const response = await axios.get(url);
        console.log("Inside func "+url)
        setData(response.data);
        console.log(response.data)
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
        
    }

    useEffect(()=>{
        console.log(url);
        const interval = setInterval(() => {
            getDetails();
        },time*1000);
        return () => clearInterval(interval);
    },[url]);

    return {data,loading,error};

}