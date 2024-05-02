import { useState } from "react"

const Colorpicker = () => {

    let [color, setcolor] = useState()
    
      function hendlcolorchange(event)
      {
        setcolor(event.target.value) 
      } 
  return (
    <>
            <h1>Color Picker</h1>
            <div style={{backgroundColor:color}}>
                <p>Selected color: {color} </p>
            </div>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={hendlcolorchange}></input>

    </>
  )
}

export default Colorpicker