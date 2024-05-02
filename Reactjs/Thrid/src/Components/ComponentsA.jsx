// import { useState } from "react"
import ComponentsB from "./ComponentsB"
import {createContext, useState} from 'react'

export const contexvel = createContext()
function ComponentsA (){
    const [user , setUser] = useState("Thug")
    

    return(
        <>
        <div className="box">

            <h1>ComponentA</h1>
        <h2>{`hello ${user}`}</h2>
        <contexvel.Provider value={user}>
            
        </contexvel.Provider>
        <ComponentsB  user = {user}/>

        </div>
    
        </>
    )
}
export default ComponentsA