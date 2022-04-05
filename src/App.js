import React from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from "react";
import AddTask from "./Components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 2,
      text: "Cooking for Ramadan",
      day: "Feb 8th at 1:30pm",
      reminder: true,
    },
    {
      id: 1,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);

  // Delete a Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //   Add Task
  const addTask = (task) => {
      const id = Math.floor(Math.random()*10000) + 1
      const newTask = {id, ...task}

      setTasks([...tasks, newTask])
  };

  //   Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
};

export default App;
