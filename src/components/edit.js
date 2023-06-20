import React from "react";
import { useState } from "react";

const Edit = ({ user, updateUser, closeEdit }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [image, setImage] = useState(user.image);

  const handleImage = (e) => {
    const updatedImage = e.target.files[0];
    setImage(updatedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }
    updateUser({ id: user.id, name, email, phone, image });
    closeEdit();
  };

  return (
    <div className="row sticky-top bg-info m-auto rounded-2 opacity-100">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit} className="row mx-1">
        <input
          className="col-12 form-control mt-3 mx-4 font-monospace"
          style={{width:"41%"}}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="col-12  form-control mt-3 font-monospace"
          style={{width:"41%"}}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="col-12 form-control mx-4 mt-3 font-monospace"
          style={{width:"41%"}}
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="col-12 form-control mt-3 font-monospace"
          style={{width:"41%"}}
          type="file"
          onChange={handleImage}
          accept="image/*"
        />

        <button className="col-5  mx-4 mt-3 mb-2 btn btn-success" type="submit">
          Save
        </button>
        <button className="col-5 mt-3 mb-2 btn btn-danger" onClick={closeEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Edit;
