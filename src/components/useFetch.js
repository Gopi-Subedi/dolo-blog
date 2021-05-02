import {useEffect, useState} from 'react';
// npx json-server --watch data/db.json --port 8000 is used to start json server
//npm install react-router-dom@5 @5 is used to install specific versioin i.e 5 of router 

const useFetch=(url)=>{

    const [data,setData]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const abortConst = new AbortController();
        // abort controller is used to abort the fecth if the user switches to other components

        setTimeout(()=>{
            fetch(url,{signal: abortConst.signal})
            .then(res=>{
                if(!res.ok){
                    throw Error("Could not fetch the data from that resouces!!!");
                }
                return res.json();
            })
            .then(data=>{
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err=>{
                if(err.name ==="AbortError"){
                    // make sure that A and E are in upper case
                    console.log('Fetch Abort!!!');
                }else{
                    console.log(err.message);
                setIsLoading(false);
                setError(err.message);
                }    
                
            })
        },1000);
        return  ()=>abortConst.abort();//This will abort the fetch operation
        
    },[url]);

    return {data, isLoading, error };

}

export default useFetch;