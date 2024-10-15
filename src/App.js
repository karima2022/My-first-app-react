import logo from './img/note_13650723.png';
import './App.css';
import { useState } from 'react';

function App() {
  //variable tasks dynamique react
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
  
  //variable newTask dynamique react
  const [newTask, setNewTask] = useState('');


  function AddTask() {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }

  function DeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function EditTask(index, newTaskValue) {
    const updatedTasks = tasks.map((task, i) => (i === index ? newTaskValue : task));
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className='App-logo' />
        <style>{`p { color: blue; font-weight: bold; }`}</style>
        <p>Bienvenue sur ta ToDo-List!</p>
      </header>
      <div>
        <label>
          Nouvelle tâche: <input name="newTask" placeholder="Entrez une nouvelle tâche" value={newTask} onChange={e => setNewTask(e.target.value)} />
        </label>
        <button onClick={AddTask}>Ajouter</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Tâche</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
              <td>
                <button onClick={() => {
                  const newTaskValue = prompt("Modifier la tâche", task);
                  if (newTaskValue) {
                    EditTask(index, newTaskValue);
                  }
                }}>Modifier</button>
              </td>
              <td>
  <button className="delete-button" onClick={() => DeleteTask(index)}>&#10006;</button> {/* Unicode pour la croix ✖ */}
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
