import { useEffect, useState } from "react"

function Clock()
{

    const [time, setTime] = useState(new Date())

    useEffect (()=>{
        const intervel = setInterval(()=>{
            setTime(new Date())
        },1000)

        return()=>
        {
            clearInterval(intervel)
        }
    
    },[])

    function formatTime()
    {
        let hours = time.getHours()
        let min = time.getMinutes()
        let sec = time.getSeconds()
        let meridian = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12 

        return `${padZero(hours)}: ${padZero(min)} : ${padZero(sec)} ${meridian}`
    }

    function padZero(number)
    {
        return(number < 10 ? "0" : "")+ number
    }
return(
    <>
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    </>
)
}
export default Clock