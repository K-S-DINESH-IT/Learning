import {useState} from "react"

const Car = () => {

    let [car, setcar] = useState ({year:2024, make:"BMW", model:"pc"})

    function handleyear(e)
    {
  setcar(c=> ({...c , year: e.target.value}))
    }

       function handlemake(e)
    {
  setcar(c=> ({...c , make: e.target.value}))
    }

        function handlemodel(e)
    {
  setcar(c=> ({...c , model: e.target.value}))
    }
  return (
    <div>
      <p>Your Favourite car is {car.year} {car.make} {car.model}</p>
<input type="number" value={car.year} onChange={handleyear}/>
<input type="text" value={car.make} onChange={handlemake} />
<input type="text" value={car.model} onChange={handlemodel} />

    </div>
  )
}

export default Car
