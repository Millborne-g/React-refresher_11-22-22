import {FaTimes} from 'react-icons/fa'

const Task = ({task,onDelete,toggleReminder}) => {
  var clickCounter = 0
  const doubleClick = (val) =>{
    clickCounter=clickCounter+val
    if (clickCounter > 1){
      toggleReminder(task.id)
      clickCounter = 0
    }
  }
  return (
    //if ang task.reminder kay true ma "task.reminder" iyang classname
    <div className={`task ${task.reminder ? 'reminder':''}`} onClick={()=>doubleClick(1)}>
        <h3>{task.text}
        <FaTimes 
            style={{color: 'red', cursor: 'pointer'}}
            onClick={()=>onDelete(task.id)}
        />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task