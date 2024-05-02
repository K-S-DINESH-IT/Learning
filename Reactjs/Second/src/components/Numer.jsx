import { useState } from "react"


const Numer = () => {
  let [Number, setnumber] = useState(0)

  function increse() {
    // setnumber (Number+1)

    setnumber(N => N + 1)
    setnumber(N => N + 1)
    setnumber(N => N + 1)
  }

  function decrese() {
    setnumber(N => N - 1)
  }

  function reset() {
    setnumber(0)
  }
  return (
    <div>
      <h1>Number: </h1>
      <input type="text" value={Number} />

      <br />
      <button onClick={increse}>Increse</button>
      <button onClick={decrese}>Decrese</button>
      <button onClick={reset} type="reset"> Reset</button>
    </div>
  )
}

export default Numer
