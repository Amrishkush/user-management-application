

const User = ({ user, editUser, deleteUser }) => {
    const handleEdit = () => {
      editUser(user);
    };
  
    const handleDelete = () => {
      deleteUser(user);
    };
  
    return (
      <div className="col-5 border border-black rounded m-1 mx-5">
      <h3 className="bg-dark text-white rounded-bottom-4 pb-1">{user.name}</h3>
        <p><span className='fw-bold'>Email:</span> {user.email}</p>
        <p><span className='fw-bold'>Phone:</span> {user.phone}</p>
        <div className="">
          <button className="btn btn-warning m-3" onClick={handleEdit}>Edit</button>
          <button className="btn btn-danger m-3" onClick={handleDelete}>Delete</button>
        </div>
        </div>

    );
  };
  export default User;
