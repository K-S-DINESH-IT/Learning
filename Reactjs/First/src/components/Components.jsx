import { useState } from "react"


const Components = () => {

    let [word , setWord] = useState()

    function handleChange(e)
    {
        setWord(e.target.value)
    }


    let [payment, setPayment] = useState()
    function handleChangepay(e)
    {
        setPayment(e.target.value)
    }
  return (
    <>
       <input value={word} onChange={handleChange} />
       <p>Name : {word}</p>


       <select value={payment} onChange={handleChangepay} >
       <option value="">Select option</option>
       <option value="Gpay">Gpay</option>
       <option value="PhoenPay">PhoenPay</option>
       <option value="Paytm">Paytm</option>
       </select>

       <p>Payment Name: {payment}</p>


       <label >
        <input type="radio" name="" id="" />
        <input type="radio" name="" id="" />
       </label>
    </>
  )
}

export default Components
