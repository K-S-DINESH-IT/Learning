// Hook - UseEffect

// 1.component everytime re-render
// 2.Component mounted in dom
// 3.mount+value change

import { useEffect, useState } from "react"

function UseEffect(){

    const [count, setCount] = useState(0)

    const [color, setColor] = useState("green")

    useEffect(()=>{
        document.title = `count: ${count} ${color}`
    },[count , color])

    function addCount(){
        setCount(c=> c+1)
    }

    function subCount(){
        setCount(c => c-1)
    }

    function changeColor(){
        setColor(c=> c === "green"? "red":"green")
    }
    return(
        <>
        <p style={{color: color}}>count : {count}</p><br />
        <button onClick={addCount}> Add</button><br />
        <button onClick={subCount}> Sub</button><br />
        <button onClick={changeColor}> ChangeColor</button><br />


        </>
    )
}

// function UseEffect(){
//     const [width, setWidth] = useState(window.innerWidth)
//     const [height, setHeight] = useState(window.innerHeight)

//     useEffect(()=>{
//         window.addEventListener("resize", handleResize)
//         console.log("Event Listener added")

//         return ()=>{
//             window.removeEventListener("resize", handleResize)
//             console.log("Event is Removed")
//         }
//     },[])

//     useEffect(()=>{
//         document.title = `Size ${width} * ${height}`
//     }, [height, width])

//     function handleResize(){
//         setHeight(window.innerHeight)
//         setWidth(window.innerWidth)
//     }

//     return(
//         <>
//         <p>Window Width: {width}</p>
//         <p>Window Height: {height} </p>
//         </>
//     )
// }
export default UseEffect