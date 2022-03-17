import { useEffect,useState } from "react";
const useFetch= (url)=>{
   const [data,setData]=useState(null);
   const [error,setError]= useState(null);
   const [loading ,setloading]= useState(true);

   useEffect(()=>{
       const fetchData =async ()=>{
           setloading(true);
           try{
             const response = await fetch(url);
             const json = await response.json();
            setData(json);
            setloading(false);
           }catch(error){
             setError(error);
             setloading(false);
           }
       }
       fetchData();
   },[url]);
   return {loading,error,data};
}
export default useFetch;