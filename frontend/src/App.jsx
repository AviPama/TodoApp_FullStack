import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import FilterButtons from "./components/FilterButton.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Stats from "./components/Stats.jsx";

import { fetchTaskApi, createTaskApi, updateTaskApi, deleteTaskApi, toggleTaskApi } from "./api/tasksApi.js";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    try{
      setLoading(true);
      const data = await fetchTaskApi();
      setTasks(data);
    }catch(err){
      console.log("Error fetching", err);

    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const createTask = async (task) => {
    if(!task.title.trim()) return;
    try{
      const data = await createTaskApi(task);
      setTasks([...tasks, data]);
      setShowModal(false);
    }catch(err){
      console.log("Error creating task", err);
    }
  };

  const updateTask = async (id, updates) => {
    try{
      const data = await updateTaskApi(id, updates);
      setTasks(tasks.map((t) => (t._id === id ? data : t)));
      setEditingTask(null);
    }catch(err){
      console.log("Error updating task", err);
    }
  };

  const deleteTask = async (id) => {
    try{
      await deleteTaskApi(id);
      setTasks(tasks.filter((t) => t._id !== id));
    }catch(err){
      console.log("Error deleting task", err);
    }
  };

  const toggleTask = async (id) => {
    try{
      const data = await toggleTaskApi(id);
      setTasks(tasks.map((t) => (t._id === id ? data : t)));
    }catch(err){
      console.log("Error toggling task", err);
    }
  };


  const filteredTasks= tasks.filter((tasks)=>{
    if(filter === "completed") return tasks.completed;
    if(filter === "pending") return !tasks.completed;
    return true;
  })

  const stats= {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <Stats {...stats} />

        {/* Add New Task Button */}
        <div className="flex justify-end mb-4">
          <button 
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-900 transition">                       
            + Add New Task
          </button>
        </div>

        <FilterButtons filter={filter} setFilter={setFilter} />
        <TaskList 
        tasks={filteredTasks} 
        loading={loading} 
        editingTask={editingTask} 
        setEditingTask={setEditingTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        />
      </div>
      {/* Dark Full Screen Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          {/* Task Form */}
          <div className="w-full max-w-3xl px-8">
            <TaskForm onClose={() => setShowModal(false)} onSubmit={createTask} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;