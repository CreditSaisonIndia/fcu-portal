import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogOut from './LogOut'


function Dashboard() {
    const navigate = useNavigate()
  return (
    <div style={{textAlign:'center'}}>
      <h1>WellCome to Dashboard</h1>
      <button onClick={()=>navigate('/fcuPortal')}>Go to Home</button>
      <LogOut/>
    </div>
  )
}

export default Dashboard
