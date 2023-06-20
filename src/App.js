import React from "react";
import { useState } from "react";
import User from "./components/user";
import Edit from "./components/edit";
import Add from "./components/add";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const deleteUser = (user) => {
    const updatedUsers = users.filter((u) => u.id !== user.id);
    setUsers(updatedUsers);
  };

  const closeModal = () => {
    setEditingUser(null);
  };

  return (
    <div className="App container-fluid">
    <h1 className="bg-light">User Management</h1>
    <div className="row sticky-top">
    <div className="col-6">
    <Add addUser={addUser} />
    </div>
    <div className="col-6">
    {editingUser && (
        <Edit
          user={editingUser}
          updateUser={updateUser}
          closeModal={closeModal}
        />
      )}
    </div>   
    </div>
      <div className="row mt-3">
         {users.map((user) => (
          <User
            key={user.id}
            user={user}
            editUser={editUser}
            deleteUser={deleteUser}
          />
        ))}
      </div>
      
    </div>
  );
};

export default App;