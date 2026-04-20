import { useState } from "react";
import { Check, X } from "lucide-react";

function EditTaskForm({ task, onSave, onCancel }) {

  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description });
  };

  return (
    <div className="space-y-4">
      {/* Title Input */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
        required
      />

      {/* Description Input */}
      <textarea
      value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="3"
        placeholder="Task Description"
        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white resize-none placeholder-gray-400"
      />

      {/* Buttons */}
      <div className="flex items-center space-x-2">
        <button type="button" className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg flex items-center gap-2 shadow-lg hover:from-green-700 hover:to-emerald-700 transition" onClick={handleSubmit}>
          <Check size={16} /> Save
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600 flex items-center gap-2 transition">
          <X size={16} /> Cancel
        </button>
      </div>
    </div>
  );
}

export default EditTaskForm;
