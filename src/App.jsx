import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      setUsers(data)
    })
}, [])

  return (
    <div className="app">
      <h1>User Directory</h1>

    <div className="user-list">
    {users.map((user) => (
    <div className="user-card" key={user.id}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  ))}
</div>
    </div>
  )
}

export default App