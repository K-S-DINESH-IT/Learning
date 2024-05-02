import { useEffect, useRef } from "react"
function UseRef ()
{
    // const ref = useRef(0)
    // console.log(ref);

    const inputRef = useRef(null)
    const inputRefs = useRef(null)
    const inputRefss = useRef(null)
    useEffect(()=>
    {
        console.log("Component rendering");
    })

    function handleclick()
    {
        // ref.current++

        // console.log(ref.current);

        inputRef.current.style.backgroundColor="Yellow"
        inputRefs.current.style.backgroundColor=""
        inputRefss.current.style.backgroundColor=""
       
       
     
    }

    function handleclick2()
    {
        inputRef.current.style.backgroundColor=""
        inputRefs.current.style.backgroundColor="blue"
        inputRefss.current.style.backgroundColor=""
    }    
    function handleclick22()
    {
        inputRef.current.style.backgroundColor=""
        inputRefss.current.style.backgroundColor="green"
        inputRefs.current.style.backgroundColor=""

    }   
    return(
        <>
        <h1>UseRef </h1>

        <input ref={inputRef} />
        <button onClick={handleclick}>Click This</button>
       
        <input ref={inputRefs} />
        <button onClick={handleclick2}>Click This</button>
        
        <input ref={inputRefss} />
        <button onClick={handleclick22}>Click This</button>
        </>
    )
}

export default UseRef