import React from 'react'

// Destructure the card component to take in children
const Card = ( {children, bg = 'bg-gray-100'} ) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card