// import ComponentsA from "./Components/ComponentsA"
// import UseRef from "./Components/UseRef"

// import Task from "./Components/Task"
// import Fetch from "./Components/Fetch"
// import PredictAge from "./Components/PredictAge"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../src/Pages/Home"
import About from "../src/Pages/About"
import Contact from "../src/Pages/Contact"
import NavBar from "./Pages/NavBar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const client = new QueryClient({defaultOptions:{
  queries:{
    refetchOnWindowFocus: false
  }
}})
function App() {
  

  return (
    <>

      {/* <ComponentsA/> */}
      {/* <UseRef/> */}
      
      {/* <Fetch/>
      <PredictAge/> */}
      {/* <Task/> */}

<QueryClientProvider client={client}>

      <Router>
        
      <NavBar/>

        <Routes>
          <Route path ="/" element={<Home/>}/> 
          <Route path = "/about" element={<About/>}/>
          <Route path = "/contact" element={<Contact/>}/>
        </Routes>
      </Router>

      </QueryClientProvider>
    </>
  )
}

export default App
