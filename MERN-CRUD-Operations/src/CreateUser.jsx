import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUsers() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/createUser', { name, email, age })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="d-flex vh-100 justify-content-center align-items-center" style={{ backgroundColor: '#ECF0F1' }}>
                <div className="w-50 bg-white rounded p-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <form onSubmit={Submit}>
                        <h2 className="text-center" style={{ color: '#2C3E50' }}>Add User</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" style={{ color: '#2C3E50' }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                style={{
                                    borderColor: '#D5D8DC',
                                    borderRadius: '4px',
                                    padding: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{ color: '#2C3E50' }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    borderColor: '#D5D8DC',
                                    borderRadius: '4px',
                                    padding: '10px',
                                    marginBottom: '10px'
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label" style={{ color: '#2C3E50' }}>Age</label>
                            <input
                                type="text"
                                id="age"
                                placeholder="Enter your age"
                                className="form-control"
                                onChange={(e) => setAge(e.target.value)}
                                style={{
                                    borderColor: '#D5D8DC',
                                    borderRadius: '4px',
                                    padding: '10px',
                                    marginBottom: '20px'
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn"
                            style={{
                                backgroundColor: '#27AE60',
                                color: '#FFFFFF',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateUsers;
