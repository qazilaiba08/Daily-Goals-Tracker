import React from 'react'
import GoalItem from './GoalItem'

const GoalList = ({ goals, onEdit, onDelete }) => {

  return (
      <div className='justify-items-center p-6'>
      <h2 className="text-2xl font-bold mb-4">Your Goals</h2>
      <ul className="space-y-4">
        {goals && goals.length > 0 ? (
          goals.map((goal, idx) => (
            <GoalItem
              key={idx}
              goal={goal}
              onEdit={() => onEdit(idx)}
              onDelete={() => onDelete(idx)}
            />
          ))
        ) : (
          <p className="text-gray-500">No goals yet.</p>
        )}
      </ul>
    </div>
  )
}

export default GoalList