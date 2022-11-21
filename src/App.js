import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddForm, setshowAddForm] = useState(false)
  
  const [tasks,setTask] = useState(
    [
      {
        id: 1,
        text: "task 1",
        day: "day 1",
        reminder: true
      },
      {
        id: 2,
        text: "task 2",
        day: "day 2",
        reminder: true
      },
      {
        id: 3,
        text: "task 3",
        day: "day 3",
        reminder: false
      },
    ]
  )

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
      {/* Ang ginabuhat ani kay ga pasa syag "onAdd" na naay function daan sa "Button". Para if i click ang button ma triggerni sya na function*/}
      <Header title={"Time tracker"} onAdd={()=>setshowAddForm(!showAddForm)} addBtnTxt={showAddForm}/>
      {
        showAddForm &&
        <AddTask onAdd={addTask}/>
      }
      
      <Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder}/>
    </div>
  );
}

export default App;
