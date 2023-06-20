import React from "react";
import { useState, useEffect } from "react";
import User from "./user";
import Add from "./add";
import Edit from "./edit";
import "bootstrap/dist/css/bootstrap.css";

const Function = () => {
  const [users, setUsers] = useState([]);
  const [userForEdit, setUserForEdit] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    setUsers(JSON.parse(storedUsers));
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
  };

  const editUser = (user) => {
    setUserForEdit(user);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setUserForEdit(null);
  };

  const deleteUser = (user) => {
    const updatedUsers = users.filter((u) => u.id !== user.id);
    setUsers(updatedUsers);
  };

  const closeEdit = () => {
    setUserForEdit(null);
  };

  const deleteAll = () => {
    setUsers([]);
    closeEdit();
  };

  return (
    <div>
      <h1 className="bg-light">User Management</h1>
      <div
        className="row sticky-top justify-content-center pt-1"
        style={{ backgroundColor: "grey" }}
      >
        <div className="col-6">
          <Add addUser={addUser} />
        </div>
        <div className="col-6">
          {userForEdit && (
            <Edit
              user={userForEdit}
              updateUser={updateUser}
              closeEdit={closeEdit}
            />
          )}
        </div>
        <button className="btn btn-danger mt-1 mb-1 w-75" onClick={deleteAll}>
          Delete All Users
        </button>
      </div>

      <div className="row mt-1">
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

export default Function;
