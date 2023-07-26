import React from 'react'
import { useAuth } from './contexts/Account'
import { useNavigate } from 'react-router-dom'

function Home() {

    const {authData} = useAuth()
    const navigate = useNavigate()
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Home Page</h1>
      <h3>Email: {authData.email}</h3>
      <h3>Group: {authData.group}</h3>

    <button onClick={()=>navigate('/fcuPortal/dashboard')}>Go to DashBoard</button>
    </div>
  )
}

export default Home
