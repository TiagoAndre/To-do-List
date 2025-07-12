import './TaskItemCard.css';
import { FaCheckCircle, FaRegTrashAlt } from "react-icons/fa";

const TaskItemCard = ({ task, completedTask, deleteTask }) => {


  return (
    <div className={task.completed ? 'card card-complete' : 'card'}>
      <div className="mark" style={{ backgroundColor: task.color }}></div>
      <h5 className={task.completed ? 'completed' : ''}>
        {task.name}
      </h5>
      <p className={task.completed ? 'completed' : ''}>
        {task.description}
      </p>

      <div className='tool-cards'>
        <button title={task.completed ? 'Incomplete Task' : 'Complete Task'} onClick={evento => completedTask(task.id)}><FaCheckCircle color='#6278F7' /></button>
        <button title='Remove Task' onClick={evento => deleteTask(task.id)}><FaRegTrashAlt color='grey' /></button>
      </div>
    </div>
  )
}

export default TaskItemCard;