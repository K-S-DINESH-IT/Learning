//clickevent's

const Button = () => {
    // let count =0 
    // const handleclick =(name)=>{
    //     if(count < 4)
    //     {
    //         count++
    //         console.log(`${name}, button is clicked ${count} time`);
    //     }
    //     else{
    //         console.log(`Stop clicking me`);
    //     }
    // }

    const handleclick= (e) =>{
        e.target.textContent = "clicked now"
    }
  return (
    // <button onClick={()=>handleclick("evil")}>Click Me</button>
    <button onClick={(e)=>handleclick(e)}>Click Me</button>
  )
}

export default Button
