import Axios  from "axios"
import { useState } from "react"
function PredictAge()
{
    const [name , setName] = useState("")
    const [age , setAge]  = useState(0)

    function fetchData()
    {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>
        {
            setAge(res.data.age)

        })
    }
    return(
        <>
        <input type="text" onChange={(event)=>
        {
            setName(event.target.value)

        }} />
        <button onClick={fetchData}>Click</button>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        </>
    )
}
export default PredictAge