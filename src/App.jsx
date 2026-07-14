import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')

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

function handleAddUser() {
  if (newName.trim() === '' || newEmail.trim() === '') {
    return
  }

  const newUser = {
    id: Date.now(),
    name: newName,
    email: newEmail,
    company: {
      name: 'User Added',
    },
  }

  setUsers([newUser, ...users])

  setNewName('')
  setNewEmail('')
}

  return (
    <div className="app">
      <h1>User Directory App</h1>
        <p className="subtitle">
    Search and manage user information
  </p>

<div className="add-user-form">
  <h2>Add New User</h2>

  <input
    type="text"
    placeholder="Enter name"
    value={newName}
    onChange={(event) => setNewName(event.target.value)}
  />

  <input
    type="email"
    placeholder="Enter email"
    value={newEmail}
    onChange={(event) => setNewEmail(event.target.value)}
  />

  <button onClick={handleAddUser}>Add New User</button>
</div>

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