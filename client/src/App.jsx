import React, { useEffect, useState } from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:80/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password })
    })
    const json = await response.json()

    if (!response.ok) {
        console.log("fail")
    }
    if (response.ok) {
        console.log("Success")
    }
  }
  
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setUsername(e.target.value)}  placeholder="Username">

        </input>
        <input type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="Password">

        </input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App