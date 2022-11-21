import {FaTimes} from 'react-icons/fa'

const Task = ({task,onDelete,toggleReminder}) => {
  return (
    //if ang task.reminder kay true ma "task.reminder" iyang classname
    <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>toggleReminder(task.id)}>
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