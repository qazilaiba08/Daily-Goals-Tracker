import React, { useState, useEffect } from 'react'
import './App.css'
import GoalInput from './Components/GoalInput'
import GoalList from './Components/GoalList'

function App() {
  const [goals, setGoals] = useState([])
  const [quote, setQuote] = useState('')

  const addGoal = (goalText) => {
    setGoals([
      ...goals,
      { title: goalText, completed: false }
    ])
  }
  // fetch api ninjas quotes
  useEffect(() => {
    const apiKey = 'UdLPCaDHV30UPVaCRVX9Ag==56QyUDEinN4rLwbu'
    fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: { 'X-Api-Key': apiKey }
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) setQuote(data[0].quote)
        else setQuote('Stay motivated!')
      })
      .catch(() => setQuote('Stay motivated!'))
  }, [])

  const handleEdit = (idx) => {
  const newTitle = prompt('Edit your goal:', goals[idx].title)
  if (newTitle && newTitle.trim() !== '') {
    setGoals(goals.map((goal, i) =>
      i === idx ? { ...goal, title: newTitle } : goal
    ))
  }
}

const handleDelete = (idx) => {
  setGoals(goals.filter((_, i) => i !== idx))
}
  return (
    <div className=" bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
    <div className=" bg-gray-100 flex flex-col items-center m-50 p-40 border-gray-400 border-2 shadow-lg rounded-lg">
      <div className="mb-8">
        <img src="/src/assets/logo.png"
         className="w-24 h-24 rounded-full shadow-lg" />
      <h1 className='text-4xl font-bold text-cyan-700'>Daily Goals Tracker</h1>
      <p className="text-lg text-gray-600 mb-6">Track your daily goals and stay motivated!</p>
      </div>
      <div className="mb-6 max-w-xl w-full">
        <GoalInput addGoal={addGoal} />
      </div>
      <div className="mb-6 max-w-xl w-full">
       <GoalList goals={goals} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      <div className="mt-auto mb-4 text-center">
        <blockquote className="italic text-lg text-blue-700">"{quote}"</blockquote>
      </div>
    </div>
  </div>
  )
}

export default App
