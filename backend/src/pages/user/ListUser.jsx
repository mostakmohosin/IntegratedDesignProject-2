import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/people.css'

function ListUser() {
    const [person, setPeople] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetchPeople();
    }, []);

    const fetchPeople = async () => {
        try {
            const response = await axios.get('http://localhost:8081/donation/people');
            setPeople(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addPerson = async (e) => {
        e.preventDefault();

        const newPerson = {
            name: name,
            age: age,
            email: email
        };

        try {
            await axios.post('http://localhost:8081/donation/people', newPerson);
            fetchPeople();
            setName('');
            setAge('');
            setEmail('');
        } catch (error) {
            console.error(error);
        }
    };

    const deletePerson = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/donation/people/${id}`);
            fetchPeople();
        } catch (

        error) {
            console.error(error);
        }
    };

    return (
        <div className='main-content'>

            <h1>User List</h1>
            <div className='listPeople'>
                
                    <button type="submit">Add +</button>
                
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {person.map(person => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.email}</td>
                            <td>
                                <button>Delete</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default ListUser;
