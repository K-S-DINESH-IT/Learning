import Axios from "axios"
import {  useState } from "react"

function Task()
{
    
    const [off, setOff] = useState("")

    function offs(excuse)
    {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>
        {
           setOff(res.data[0].excuse);
        })
    }

    return(
        <>
            <button onClick={()=>offs ("family")}>Family</button>
            <button onClick={()=>offs ("office")}>Office</button>
            <button onClick={()=>offs ("party")}>Party</button>
            <p>{off}</p>
        </>
    )
}
export default Task