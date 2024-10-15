import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import GenericInput from './components/GenericInput';
import GenericTable from './components/GenericTable';

function App() {
  
  const [tasks, setTasks] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon"
  ]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTask(index, newTaskValue) {
    const updatedTasks = tasks.map((task, i) => (i === index ? newTaskValue : task));
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <Header />
      
      <GenericInput 
        placeholder="Entrez une nouvelle tâche" 
        onAddItem={addTask} 
      />
      
      <GenericTable 
        items={tasks} 
        onEditItem={editTask} 
        onDeleteItem={deleteTask}
      />
    </div>
  );
}

export default App;
