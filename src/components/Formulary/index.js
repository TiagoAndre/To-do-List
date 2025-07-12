import { useState } from 'react';
import './Formulary.css';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input';

const Formulary = ({ registerTask }) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#fff9c4');

  function cleanFormulary() {
    setName('')
    setDescription('')
    setColor('#fff9c4')
  }

  const submitFormulary = (evento) => {
    evento.preventDefault()

    registerTask({
      id: uuidv4(),
      name: name,
      description: description,
      color: color,
      completed: false
    })

    cleanFormulary()

  };

  return (
    <div>
      <form className='formulary' onSubmit={submitFormulary}>
        <Input 
          type='text'
          placeHolder="Task name..." 
          setInput={setName} 
          value={name}
        />
        <Input 
          type='text'
          placeHolder="Short description..." 
          setInput={setDescription} 
          value={description}
        />
        <Input 
          type='color'
          placeHolder="" 
          setInput={setColor} 
          value={color}
        />
        <button>Create Task</button>
      </form>
    </div>
  )
}

export default Formulary;