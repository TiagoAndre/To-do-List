import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Formulary from "./components/Formulary";
import List from "./components/List";
import { v4 as uuidv4 } from 'uuid';

function App() {


  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  //Initial tasks for tests
  const init = [
    {
      id: uuidv4(),
      name: 'Implementar autenticação',
      description: 'Desenvolver o fluxo de login e registro com validação e segurança.',
      completed: false,
      color: getRandomColor()
    },
    {
      id: uuidv4(),
      name: 'Criar API de produtos',
      description: 'Construir endpoints REST para CRUD de produtos no sistema.',
      completed: false,
      color: getRandomColor()
    },
    {
      id: uuidv4(),
      name: 'Configurar ambiente de testes',
      description: 'Adicionar Jest e configurar testes unitários para componentes.',
      completed: false,
      color: getRandomColor()
    },
    {
      id: uuidv4(),
      name: 'Ajustar layout responsivo',
      description: 'Corrigir bugs no design para funcionar bem em dispositivos móveis.',
      completed: false,
      color: getRandomColor()
    },
    {
      id: uuidv4(),
      name: 'Otimizar consulta ao banco',
      description: 'Melhorar performance das queries SQL para acelerar a busca de dados.',
      completed: false,
      color: getRandomColor()
    }
  ];

  const [tasks, setTasks] = useState([]) // Input here the "init"
  const [filter, setFilter] = useState('all'); 
  const [filteredTasks, setFilteredTasks] = useState([]); 

  function toggleCompleted(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) task.completed = !task.completed;

      return task;
    }))
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }


  useEffect(() => {
    let result = [];

    if (filter === 'completed') {
      result = tasks.filter(task => task.completed);
    } else if (filter === 'incomplete') {
      result = tasks.filter(task => !task.completed);
    } else {
      result = tasks;
    }

    setFilteredTasks(result);
  }, [tasks, filter]);


  return (
    <main>
      <Banner />
      <Formulary registerTask={task => setTasks([...tasks, task])} />
      <List taskList={filteredTasks} completedTask={toggleCompleted} deleteTask={removeTask} filter={setFilter} />
    </main>
  );
}

export default App;
