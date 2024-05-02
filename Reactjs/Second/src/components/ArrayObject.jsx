import {useState} from "react"

const ArrayObject = () => {

        const [task, setTask] = useState([])
        const[newTask, setNewtask] = useState([""])

    function handleInput(e)
    {
        setNewtask(e.traget.value)
    }

    function addTask()
    {
        if(newTask.trim() !== "")
        setNewtask(t=> [...t, newTask])
    setNewtask("")
    }

    function deleteTask(index){
        const updateTasks = task.filter((_,i)=> i !== index)
        setTask(updateTasks)
    }

    function moveUp(index)
    {
        if(index >0)
        {
            const updateTasks = [...task]

            const temp = updateTasks[index]

            updateTasks[index] = updateTasks[index-1]

            updateTasks[index-1] =temp
            
            setTask(updateTasks)

        }
    }

     function moveDown(index)
    {
        if(index < task.length-1)
        {
            const updateTasks = [...task]

            const temp = updateTasks[index]

            updateTasks[index] = updateTasks[index+1]

            updateTasks[index+1] =temp
            
            setTask(updateTasks)

        }
    }


    return (
    <div>
      <h1>Toda List with React</h1>

      <input type="text" placeholder="Enter the Todlist" value={newTask} onChange={handleInput} />

      <button onClick={addTask}>Add</button>

      <ol>
        {task.map((task,index)=> 
        <li key={index}> 
        <span>{task}</span>

        <button onClick={()=>deleteTask{index}}>Delet</button>

        <button onClick={()=>moveUp{index}}>Move Up</button>

        <button onClick={()=>moveDown{index}}>moveiDown</button>
        </li>)}
      </ol>
    </div>
  )
}

export default ArrayObject
