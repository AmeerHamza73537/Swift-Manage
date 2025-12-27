import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUsers() {
    const { id } = useParams(); // it will destructure the id from URL and store it in {id}
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    // useEffect is to get the record by id
    useEffect(() => {
        axios.get('http://localhost:3000/getUser/' + id)
            .then(result => {
                console.log(result);
                setName(result.data.name);
                setEmail(result.data.email);
                setAge(result.data.age);
            })
            .catch(err => console.log(err));
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/updateUser/' + id, { name, email, age })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="d-flex vh-100 justify-content-center align-items-center" style={{ backgroundColor: '#ECF0F1' }}>
                <div className="w-50 bg-white rounded p-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <form onSubmit={Update}>
                        <h2 className="text-center" style={{ color: '#2C3E50' }}>Update User</h2>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" style={{ color: '#2C3E50' }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="form-control"
                                value={name}
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
                                value={email}
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
                                value={age}
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
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateUsers;
