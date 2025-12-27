import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './App.css';

function User() {
  const [users, setUsers] = useState([]);

  // To show the data on frontend
  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(result => setUsers(result.data)) // setUsers will send the data to the state so that it can be shown on frontend
      .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deleteUser/' + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="d-flex vh-100 user justify-content-center align-items-center" style={{ backgroundColor: '#ECF0F1' }}>
      <div className="w-50 bg-white rounded p-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <table className="table" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead style={{ color: '#FFFFFF' }}>
            <Link to='/create' className='btn btn-success' style={{ backgroundColor: '#27AE60', color: '#FFFFFF', border: 'none' }}>
                Create User
            </Link>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link
                        to={`/update/${user._id}`}
                        className='btn'
                        style={{
                          backgroundColor: '#27AE60',
                          color: '#FFFFFF',
                          marginRight: '5px',
                          textDecoration: 'none',
                          borderRadius: '4px'
                        }}
                      >
                        Update
                      </Link>
                      <button
                        className='btn'
                        onClick={(e) => handleDelete(user._id)}
                        style={{
                          backgroundColor: '#E74C3C',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
