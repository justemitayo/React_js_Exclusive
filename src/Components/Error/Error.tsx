import React from 'react'
import './Error.css'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className='error'>
        <h2>404 Not Found</h2>
        <p>Your visited page not found. You may go home page.</p>
        <button onClick={() => navigate('/')}>Back to home page</button>
    </div>
  )
}

export default Error