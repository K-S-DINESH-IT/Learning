import {useContext} from "react"

import { contexvel } from "./ComponentsA"
function ComponentsD ()
{

    const user = useContext(contexvel)
  return(
    <>
    <div className="box">
    <h1>ComponentD</h1>
    <h2>{`Bye ${user}`}</h2>
    </div>
    </>
  )
}

export default ComponentsD