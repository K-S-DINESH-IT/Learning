import{ useQuery } from "@tanstack/react-query"
import Axios from "axios"
const Home = () => {

  const {data : catData, isLoading, refetch} =  useQuery({querykey: ['cat'],queryFn:()=>{
    return Axios.get("https://catfact.ninja/fact").then(res=> res.data)
  }})
if(isLoading)
{
  return <h1>Your Web page</h1>
}

  return (
    <div>
      <h2>{catData?.fact}</h2>
      <h1>Va Da Mapula </h1>
      <button onClick={refetch}>Fetch</button>
    </div>
  )
}

export default Home
