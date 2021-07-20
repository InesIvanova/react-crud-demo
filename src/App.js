import './App.css';
import CreateUserComponent from './components/users/users/CreateUser';
import UserList from './components/users/users/ListUsers';
import React, { useState } from 'react'

function App() {
  const [users, setUsers] = useState();
  async function getUsers() {
    const response = await fetch("")
    const data = await response.json()
    setUsers(data)
  }

//  const users = [
//    {
//      id: 1,
//      email: "ines.ivanova@nmible.com",
//      first_name: "Ines",
//      last_name: "Ivanova"
//    },
//    {
//     id: 2,
//     email: "test@nmible.com",
//     first_name: "Test",
//     last_name: "Test"
//   },
//  ]
  return (
    <div className="container">
      <CreateUserComponent />
      <UserList users={users}/>
    </div>
  );
}

export default App;
