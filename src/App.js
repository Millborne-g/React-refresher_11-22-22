import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddForm, setshowAddForm] = useState(false)
  
  const [tasks,setTask] = useState([])

  useEffect(() =>{
    const getData = async () =>{
      const tasksFromServer = await fetchtData()
      setTask(tasksFromServer)
    } 
    
    getData()
    
  },[])

  //fetch GET
  const fetchtData = async () => {
    const response = await fetch("http://localhost:5000/tasks")
    const data = await response.json()
    //console.log(data)

    return data
  }

  /*
  test
  tasks.map((task) => {
    console.log(task)
  })
  */
  //console.log(fetchtData().then((db)=>console.log(db)))

  //Add task
  const addTask = (task) =>{
    //console.log(task)

    const id = tasks.length+1

    //nag add tag id kay 3 ra ang gi send sa "AddTask.js"
    /**
     * 
      id: id,
      text: //gikan sa "task",
      day: //gikan sa "task",
      reminder: //gikan sa "task"
     */
    const newTask = {id,...task}
    //tawgon tung "task" na array para e add ang new task
    setTask([...tasks, newTask])


  }

  //Toggle
  const toggleReminder = (id) =>{
    setTask(
      tasks.map((task)=>(
        task.id === id ?
        {...task, reminder: !task.reminder} :
        task
      ))
    )
    
  }

  //Delete
  const onDelete = (id) =>{
    //console.log(id)
    setTask(
      tasks.filter((task) =>(
        task.id !== id
      ))
    )
  }

  return (
    <div className="container">
      {/* 
        Ang "onAdd" kay ga contain syag execution (ma true ang value sa "showAddForm" sya once na e activate sa user) e activate ni sya didto sa Button.js
        "addBtnTxt" to change color and text only
      */}
      <Header title={"Time tracker"} onAdd={()=>setshowAddForm(!showAddForm)} addBtnTxt={showAddForm}/>
      {
        showAddForm &&
        <AddTask onAdd={addTask}/>
      }

      {
        tasks.length > 0?
          <Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder}/> :
          "no task"
      }
      
      
    </div>
  );
}

export default App;
