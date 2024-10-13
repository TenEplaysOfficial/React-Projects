import Backbtn from "../Backbtn";
import { useEffect, useState } from "react";

function Todolist() {
  const taskData = () => {
    try {
      const saveData = localStorage.getItem("tasks");
      return saveData ? JSON.parse(saveData) : ["Task 1", "Task 2"];
    } catch (error) {
      console.error("Failed to retrieve tasks from local storage:", error);
      return ["Task 1", "Task 2"];
    }
  };

  const [tasks, setTasks] = useState(taskData);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const inputText = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue) {
      if (!tasks.includes(inputValue)) {
        setTasks([...tasks, inputValue]);
      } else {
        alert("Task already exists!");
      }

      setInputValue("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Backbtn />
      <div className="hero">
        <div className="todolist">
          <h1 className="title-big ">Todo list</h1>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={inputText}
              placeholder="Add a new Task"
              className="input-task"
            ></input>
            <button className="button" onClick={addTask}>
              Submit
            </button>
          </div>
          <ul className="list-container">
            {tasks.map((task, index) => (
              <li key={index}>
                <span>{task}</span>

                <button className="button" onClick={() => removeTask(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todolist;
