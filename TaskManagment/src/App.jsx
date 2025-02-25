import { useState } from "react";
import "./App.css";

function App() {
  // State for the list of tasks
  const [taskList, setTaskList] = useState([]);

  // State for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("pending"); // New: Status for task completion

  // State for tracking the task being edited
  const [editIndex, setEditIndex] = useState(null);

  // State for filtering tasks
  const [filter, setFilter] = useState("all"); // 'all', 'completed', 'pending'

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Create a new task object
    const newTask = {
      title,
      description,
      dueDate,
      status, // Include status in the task object
    };

    if (editIndex !== null) {
      // Update existing task
      const updatedTasks = taskList.map((task, index) =>
        index === editIndex ? newTask : task
      );
      setTaskList(updatedTasks);
      setEditIndex(null); // Reset edit mode
    } else {
      // Add new task
      setTaskList([...taskList, newTask]);
    }

    // Clear the form inputs
    setTitle("");
    setDescription("");
    setDueDate("");
    setStatus("pending"); // Reset status to 'pending'
  };

  // Handle editing a task
  const handleEdit = (index) => {
    // Populate the form with the task details
    const currentTask = taskList[index];
    setTitle(currentTask.title);
    setDescription(currentTask.description);
    setDueDate(currentTask.dueDate);
    setStatus(currentTask.status); // Set the status of the task being edited
    setEditIndex(index); // Set the index of the task being edited
  };

  // Handle deleting a task
  const handleDelete = (index) => {
    // Remove the task from the list (immutable update)
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  // Handle toggling task status (completed/pending)
  const toggleStatus = (index) => {
    const updatedTasks = taskList.map((task, i) =>
      i === index
        ? { ...task, status: task.status === "completed" ? "pending" : "completed" }
        : task
    );
    setTaskList(updatedTasks);
  };

  // Filter tasks based on status
  const filteredTasks = taskList.filter((task) => {
    if (filter === "completed") return task.status === "completed";
    if (filter === "pending") return task.status === "pending";
    return true; // 'all'
  });

  return (
    <>
      <h1>Task Management</h1>

      {/* Filter buttons */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      {/* Display the list of tasks */}
      <div className="task-list">
        {filteredTasks.map((task, index) => (
          <div key={index} className="task">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => toggleStatus(index)}>
              {task.status === "completed" ? "Mark as Pending" : "Mark as Completed"}
            </button>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Task input form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          id="deadline"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        
        <button type="submit">
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </form>
    </>
  );
}

export default App;