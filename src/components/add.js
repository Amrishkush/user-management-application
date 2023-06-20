import React, { useState } from "react";

// AddUserForm component
const Add = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const uploadedImage = e.target.files[0];
    setImage(uploadedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }
    addUser({ name, email, phone, image });
    setName("");
    setEmail("");
    setPhone("");
    setImage(null);
  };

  return (
    <div className="row justify-content-center">
      <form
        onSubmit={handleSubmit}
        className=" row rounded bg-black bg-opacity-75 p-4 pt-0 pb-1"
      >
        <h2 className="text-white mb-3">Add User</h2>
        <div className="col-6">
          <input
            className="col-12 form-control mt-3 font-monospace"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-6 ">
          <input
            className="col-12 form-control mt-3 font-monospace"
            type="email"
            placeholder="Enter your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-6 ">
          <input
            className="col-12 form-control mt-3 font-monospace"
            type="number"
            placeholder="Enter Your Phone No."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="col-6">
          <input
            type="file"
            className="col-12 form-control mt-3 font-monospace"
            onChange={handleImage}
            accept="image/*"
          />
        </div>
        <div className=" mt-3">
          <button className="col-5 btn btn-success" type="submit">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
