import React from 'react';

function TaskForm(){
    const tasks=[];
    const newTask='';

    function AddTask(newTask){
        tasks.push(newTask)
    }
    return(
    <div>
 <label>
        New Task: <input name="newTask"  value={newTask}/>
      </label>
      <button onClick={()=>AddTask(newTask)}> Ajouter</button>
      </div>);

}
export default TaskForm