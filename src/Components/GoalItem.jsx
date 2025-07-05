import React, { useState } from 'react'

const GoalItem = ({ goal, onDelete, onEdit, onToggleComplete }) => {
  const [isCompleted, setIsCompleted] = useState(goal.completed || false)

  const handleCheckbox = () => {
    setIsCompleted(!isCompleted)
    if (onToggleComplete) onToggleComplete(goal)
  }

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-cyan-50 to-blue-100 shadow-xl rounded-2xl border border-blue-100 mb-2 transition-all duration-300 ${isCompleted ? 'opacity-60 line-through' : ''}`}>
      <div className="flex items-center flex-1 w-full">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckbox}
          className="mr-4 accent-blue-500 w-6 h-6 rounded-full border-2 border-blue-400 shadow"
        />
        <div>
          <h3 className="text-xl font-bold text-blue-700">{goal.title || 'Goal Title'}</h3>
          {goal.description && <p className="text-gray-600">{goal.description}</p>}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <span className="text-xs text-gray-500 italic">
          {goal.dueIn ? `Due: ${goal.dueIn} days` : ''}
        </span>
        <span className={`font-semibold ${isCompleted ? 'text-gray-400' : 'text-green-500'}`}>
          {isCompleted ? 'Completed' : 'In Progress'}
        </span>
        <button
          className="px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-lg shadow hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 font-semibold"
          onClick={() => onEdit && onEdit(goal)}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-gradient-to-r from-red-400 to-pink-400 text-white rounded-lg shadow hover:from-red-500 hover:to-pink-500 transition-all duration-200 font-semibold"
          onClick={() => onDelete && onDelete(goal)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default GoalItem