import Axios from "axios"
import { useEffect, useState } from "react"


function Fetch ()
{
    
    // fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
    //     console.log(data);
    // })

    //Another-Method for Fetch 
    const [fetch, setFetch] = useState("")

    function fetchs()
    {
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setFetch(res.data.fetch)
        })
    }

    useEffect(()=>{
        fetchs()
    },[])

    return(
        <>
        <button onClick={fetchs}> Generate Cat Facts </button>
        <p>
            {fetch}
        </p>
        </>
    )
}

export default Fetch