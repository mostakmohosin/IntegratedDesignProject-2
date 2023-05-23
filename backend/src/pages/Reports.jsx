import axios from 'axios';
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

function Report() {

  const [id] = useState('');
  

  const [users, setDonor] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);



  async function Load() {
    const result = await axios.get(
      "http://localhost:8085/api/users/");
    setDonor(result.data.data);
    console.log(result.data);
  }

  async function DeleteDonor(id) {

    if (window.confirm("Are you sure to delete User") == true) {
      await axios.delete("http://localhost:8085/api/users/delete/" + id);
      Load();
    }
  }

  async function update(event) {
    event.preventDefault();

   

      await axios.put("http://localhost:8085/api/users/update/" + users.find(u => u.id === id).id || id,
        {
          

        });
      Load();
  }

  return (
    <div>
      <main className="main">
        <h1 className="App">Questions</h1>

        <Table striped bordered hover>
          <thead>
            <tr>

              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>

              <th>Action</th>
            </tr>
          </thead>
          {users.map(function fn(users) {
            return (
              <tbody>
                <tr>

                  <td>{users.fullname}</td>
                  <td>{users.username}</td>
                  <td>{users.email}</td>
                  <td>{users.phone}</td>
                  <td>{users.gender}</td>
                  
                  <td>
                    <button type="button" class="btn btn-danger" onClick={() => DeleteDonor(users.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </main>
    </div>
  );
}

export default Report;