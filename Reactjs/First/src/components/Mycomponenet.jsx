import { useState } from "react"

//React usestate hook
const Mycomponenet = () => {

    let [name ,setname] = useState("Barath")

    const updateName = ()=>{
        setname("Siva")
    }

    let [age, setAge] = useState(0)

    const updateage = ()=>{
        setAge(age +1)
    }

    let [isEmployed, setIsEmployed] =useState(true)
    const toggleEmp = ()=>{
        setIsEmployed(!isEmployed)
    }
  return (
    <>
      <div>
        <p>Name:{name}</p>
        <button onClick={updateName}> Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateage}>Set age</button>

        <p>Empploye: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmp}>Find</button>
      </div>
    </>
  )
}

export default Mycomponenet
