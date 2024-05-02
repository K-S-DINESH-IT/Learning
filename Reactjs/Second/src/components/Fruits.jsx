import { useState } from "react"

const Fruits = () => {

let [fruits , setfruits] = useState(["Apple", "Mangeo", "Kiwi"])

function handleclick()
{
     let newfurit = document.getElementById("fruitInput").value 

     document.getElementById("fruitInput").value = ""

     setfruits(f =>[...f, newfurit])
    }

    function removeFruite(index)
    {
        setfruits(fruits.filter((el, i)=> i !== index))
    
    }

  return (
    <div>
        <h1>Add a Fruits</h1>
        <ol>
            {fruits.map((fruits, index)=> <li onClick={()=>removeFruite(index)} key={index}>{fruits}</li> )}
        </ol>
        <input type="text" id="fruitInput" />
        <button onClick={handleclick}>Add</button>
    </div>
  )
}

export default Fruits
