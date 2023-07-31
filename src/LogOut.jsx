import React from 'react'
import { useAuth } from './contexts/Account'

function LogOut() {
    const {signOut} = useAuth()
  return (
    <div>
      <button onClick={()=>signOut()}>Log out</button>
    </div>
  )
}

export default LogOut
