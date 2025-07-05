import React, { useRef } from 'react'

const GoalInput = ({ addGoal }) => {
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value.trim()
    if (value) {
      addGoal(value)
      inputRef.current.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 w-full">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <input
          type="text"
          id="goal"
          name="goal"
          ref={inputRef}
          placeholder="Enter your goal"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 text-lg"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
        >
          Add Goal
        </button>
      </div>
    </form>
  )
}

export default GoalInput