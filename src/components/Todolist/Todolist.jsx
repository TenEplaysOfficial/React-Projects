import Backbtn from "../Backbtn";
import { useEffect, useState, useRef } from "react";

function Todolist() {
  const taskData = () => {
    try {
      if (typeof localStorage !== "undefined") {
        const saveData = localStorage.getItem("tasks");
        return saveData ? JSON.parse(saveData) : ["Task 1", "Task 2"];
      } else {
        console.warn("localStorage is not available in this environment.");
        return ["Task 1", "Task 2"];
      }
    } catch (error) {
      console.error("Failed to retrieve tasks from local storage:", error);
      return ["Task 1", "Task 2"];
    }
  };

  const [tasks, setTasks] = useState(taskData);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Todo list";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

   // Effect to clear error after 3 seconds
   useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const inputText = (e) => {
    setInputValue(e.target.value);
    setError(null);
  };

  const addTask = () => {
    const trimmedTask = inputValue.trim().toLowerCase();
    
    if (trimmedTask === "") {
      setError("Task cannot be empty!");
      return;
    }

    const taskExists = tasks.some(task => task.toLowerCase() === trimmedTask);

    if (!taskExists) {
      setTasks([...tasks, inputValue.trim()]);
      setError(null);
    } else {
      setError("Task already exists!");
    }

    setInputValue("");
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const removeTask = (index) => {
    const taskToDelete = tasks[index];
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setError(`Task '${taskToDelete}' has been removed.`);
    inputRef.current.focus();
  };

  return (
    <>
      <Backbtn />
      <div className="hero">
        <div className="todolist">
          <h1 className="title-big">Todo list</h1>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={inputText}
              onKeyDown={handleKeyDown}
              placeholder="Add a new Task"
              className="input-task"
              ref={inputRef} // Attach ref to the input field
            ></input>
            <button className="button" onClick={addTask}>
              Submit
            </button>
          </div>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
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
