import React, { useState, useEffect } from "react";
import './ToDoList.css';


const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
      date: new Date(),
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFilterChange = (e) => setFilter(e.target.value);

  const handleSortChange = (e) => setSort(e.target.value);

  const sortedFilteredTasks = tasks
    .filter((task) =>
      filter === "all"
        ? true
        : filter === "completed"
        ? task.completed
        : !task.completed
    )
    .sort((a, b) =>
      sort === "date" ? b.date - a.date : a.text.localeCompare(b.text)
    );

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask} className="Add">Add Task</button>

      <div className="Filter">
        <label >
          Filter:
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
          </select>
        </label>

        <label>
          Sort:
          <select value={sort} onChange={handleSortChange}>
            <option value="date">Date</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </label>
      </div>

      <ul>
        {sortedFilteredTasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
            <button onClick={() => toggleCompletion(task.id)} className="Complete">
              Complete
            </button>
            <button onClick={() => removeTask(task.id)} className="Delet">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
