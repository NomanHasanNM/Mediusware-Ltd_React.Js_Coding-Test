import React, { useState } from 'react';
import TaskForm from './src/components/TaskForm';
import TaskList from './src/components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const filterTasks = (status) => {
    if (status === 'Active') {
      return tasks.filter(task => task.status === 'Active');
    } else if (status === 'Completed') {
      return tasks.filter(task => task.status === 'Completed');
    } else {
      const sortedTasks = tasks.sort((a, b) => {
        if (a.status === 'Active' && b.status !== 'Active') {
          return -1;
        } else if (a.status !== 'Active' && b.status === 'Active') {
          return 1;
        } else {
          return 0;
        }
      });
      return sortedTasks;
    }
  };

  return (
    <div>
      <h2>Task Tracker</h2>
      <TaskForm addTask={addTask} />

      <h3>Task List</h3>
      <button onClick={() => setTasks(filterTasks('Active'))}>Active</button>
      <button onClick={() => setTasks(filterTasks('Completed'))}>Completed</button>
      <button onClick={() => setTasks(filterTasks('Pending'))}>Pending</button>
      <button onClick={() => setTasks(filterTasks('Archive'))}>Archive</button>
      <button onClick={() => setTasks(filterTasks('All'))}>All</button>

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
