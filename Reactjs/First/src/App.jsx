
import Contant from "./components/Contant"
import Head from "./components/Head"
import Form from "./components/Form"
import Button from "./components/Button"
import Rendering from "./components/Rendering"
import Pic from "./components/Pic"
import Mycomponenet from "./components/Mycomponenet"
import Components from "./components/Components"

function App() {
  
  return (
    <>
     <Contant/>
     <Head/>
   <Form name="Loki" grade={99} isStatus={true}/>
   <Form name="Jams" grade={80} isStatus={true}/>
   <Form name="Cabi" grade={30} isStatus={false}/>
   <Form/> 

   <Rendering usename="Villen" isLoggedin ={false}></Rendering>
    <Rendering />
    
    <Button/>

   <Pic></Pic>

   <Mycomponenet/>

    <Components/>

    </>  
  )
}

export default App
