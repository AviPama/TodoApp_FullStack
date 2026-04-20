import { X, Plus } from "lucide-react";
import React, { useState } from "react";

function TaskForm({ onClose, onSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
      onSubmit({ title, description });
    };

    return (
        <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-8">
            {/* Header with Close */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Add New Task</h2>

                {/* Close Button */}
                <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition">
                    <X size={26}/>
                </button>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task Title.........."
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task Description (optional)"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    rows="4"
                />

                {/* Buttons */}
                <div className="flex gap-3">
                    <button type="button" onClick={handleSubmit} className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition">
                        <Plus size={20} /> Add Task
                    </button>
                    <button onClick={onClose} className="flex-1 bg-gray-700 text-white py-3 px-4 rounded-lg hover:bg-gray-600 transition">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;