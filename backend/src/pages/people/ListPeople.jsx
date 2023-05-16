import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/people.css'

function ListPeople() {
    const [data, setPeople] = useState([]);
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

            <h1>People List</h1>
            <div className='listPeople'>
                <form onSubmit={addPerson}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
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
                    {data.map(person => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.email}</td>
                            <td>
                                <button onClick={() => deletePerson(person.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default ListPeople;
