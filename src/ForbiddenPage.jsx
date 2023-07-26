import React from 'react'

function ForbiddenPage() {

    console.log("Hi everyone");
  return (
    <div style={{textAlign: 'center'}}>
      <h2>Access Restricted</h2>
      <a href='http://localhost:3000'><button>Sign In</button></a>

    </div>
  )
}

export default ForbiddenPage
