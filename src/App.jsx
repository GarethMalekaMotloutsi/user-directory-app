import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      setUsers(data)
    })
}, [])


  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase())
)


  return (
    <div className="app">
      <h1>User Directory</h1>

<input
  type="text"
  placeholder="Search users by name..."
  value={search}
  onChange={(event) => setSearch(event.target.value)}
  className="search-input"
/>

<div className="user-list">
  {filteredUsers.length > 0 ? (
    filteredUsers.map((user) => (
      <div className="user-card" key={user.id}>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Company: {user.company.name}</p>
      </div>
    ))
  ) : (
    <p className="no-users">No users found.</p>
  )}
</div>
    </div>
  )
}

export default App