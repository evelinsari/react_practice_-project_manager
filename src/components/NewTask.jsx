import { useState } from "react";

export default function NewTask({onAdd}) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
        return 
    } 
    setEnteredTask('');
    onAdd(enteredTask)
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-teal-100"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-teal-700 hover:text-teal-950"
        onClick={handleClick}
      >
        Add task
      </button>
    </div>
  );
}
