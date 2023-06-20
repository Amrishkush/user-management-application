import React from "react";
import { useState } from "react";

const Edit = ({ user, updateUser, closeModal }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !email || !phone) {
        alert('Please fill in all fields');
        return;
      }
      updateUser({ id: user.id, name, email, phone });
      closeModal();
    };
  
    return (
        <div className="row sticky-top bg-info m-auto rounded-2 opacity-100">
          <h2>Edit User</h2>
          <form onSubmit={handleSubmit} className="">
            <input
             className="col-12 form-control mt-2 font-monospace"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
            className="col-12 form-control mt-2 font-monospace"
              type="email" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
            className="col-12 form-control mt-2 font-monospace"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className="col-12 mt-2 btn btn-success" type="submit">Save</button>
            <button className="col-12 mt-2 mb-2 btn btn-danger" onClick={closeModal}>Cancel</button>
          </form>
        </div>
      
    );
  };

  export default Edit;