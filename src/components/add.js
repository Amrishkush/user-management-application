import React, { useState } from 'react';

// AddUserForm component
const Add = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert('Please fill in all fields');
      return;
    }
    addUser({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="row justify-content-center">
     <form onSubmit={handleSubmit} className=' rounded bg-black bg-opacity-75 p-4 pt-0 pb-5'>
     <h2 className='text-white mb-3'>Add User</h2>
     <div className="col-12 ">
     <input
        className='col-12 form-control mt-2 font-monospace'
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
     </div>
     <div className="col-12 ">
     <input
     className='col-12 form-control mt-2 font-monospace'
        type="email"
        placeholder="Enter your E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     </div>
     <div className="col-12 ">
     <input
     className='col-12 form-control mt-2 font-monospace'
        type="number"
        placeholder="Enter Your Phone No."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
     </div>
     <div className="col-12 mt-2">
     <button className='btn btn-success mb-1' type="submit">Add User</button>
     </div>
      
      
      
      
    </form>
    </div>
    
  );
};


export default Add;