import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Active');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;

    const newTask = {
      name: name.trim(),
      status: status
    };

    addTask(newTask);
    setName('');
    setStatus('Active');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <label htmlFor="status">Status:</label>
      <select
        id="status"
        value={status}
        onChange={handleStatusChange}
      >
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Archive">Archive</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
