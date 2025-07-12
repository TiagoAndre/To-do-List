import { useState } from 'react';
import './List.css';
import { GoTasklist } from "react-icons/go";
import { LuSquareKanban } from "react-icons/lu";
import TaskItemCard from '../TaskItemCard';
import TaskItemList from '../TaskItemList';

const List = ({ taskList, completedTask, deleteTask, filter }) => {

  const [viewMode, setViewMode] = useState('card');

  const handleToggle = () => {
    setViewMode(viewMode === 'card' ? 'list' : 'card');
  };

  return (
    <section className='tasks-container'>
      <div className='bar-tools'>
        <button className="toggle-view-btn" onClick={handleToggle}>
          {
            (viewMode === 'card')
              ? <>
                <GoTasklist size={22} />
                <span>Exibir em Lista</span>
              </>
              : <>
                <LuSquareKanban size={22} />
                <span>Exibir em Card</span>
              </>
          }
        </button>


        <select onChange={evento => filter(evento.target.value)}>
          <option value={'all'}>All</option>
          <option value={'incomplete'}>Incomplete</option>
          <option value={'completed'}>Completed</option>          
        </select>
      </div>

      {taskList.length > 0 ? (
        <div className={(viewMode === 'card') ? 'list-card' : 'list'}>
          {taskList.map(task => {
            return (viewMode === 'card')
              ? <TaskItemCard key={task.id} task={task} completedTask={completedTask} deleteTask={deleteTask} />
              : <TaskItemList key={task.id} task={task} completedTask={completedTask} deleteTask={deleteTask} />
          })}
        </div>
      ) : (
        <p className='no-task'> There is no any task created</p>
      )}




    </section>
  )
}

export default List;