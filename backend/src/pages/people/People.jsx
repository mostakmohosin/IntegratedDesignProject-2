import axios from 'axios';
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function People() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [id, setId] = useState('');
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");



  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);



  async function Load() {
    const result = await axios.get(
      "http://localhost:8085/api/users/");
    setUsers(result.data.data);
    console.log(result.data);
  }


  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/users/add",
        {

          fullname: fullname,
          username: username,
          email: email,
          phone: phone,
          gender: gender,
          password: password,
          c_password: c_password

        });
      alert("User Registation Successfully");
      Load();

    }
    catch (err) {
      alert("User Registation Failed");
    }
  }
  async function editUser(users) {
    setId(users.id);
    setFullName(users.fullname);
    setUserName(users.username);
    setEmail(users.email);
    setPhone(users.phone);
    setGender(users.gender);
    setPassword(users.password);
    setC_Password(users.c_password);

    handleShow();

  }

  async function DeleteUser(id) {

    if (window.confirm("Are you sure to delete User") == true) {
      await axios.delete("http://localhost:8085/api/users/delete/" + id);
      alert("Users deleted Successfully");
      Load();
    }
  }

  async function update(event) {
    event.preventDefault();

    try {

      await axios.put("http://localhost:8085/api/users/update/" + users.find(u => u.id === id).id || id,
        {
          id: id,
          fullname: fullname,
          username: username,
          email: email,
          phone: phone,
          gender: gender,
          password: password,
          c_password: c_password

        });
      alert("Registation Updated Successfully");
      Load();


    }
    catch (err) {
      alert(" Registation Failed");
    }
  }

  return (
    <div>
      <main className="main">
        <h1 className="App">People Details</h1>

        <Form className='formEdit'>
          <Container>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                  <Form.Control type="text" class="form-control" id="fullname"
                    value={fullname} placeholder='Enter FullName'
                    onChange={(event) => {
                      setFullName(event.target.value);
                    }} />

                </Form.Group>
              </Col>

              <Col>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                  <Form.Control type="text" class="form-control" id="username"
                    value={username} placeholder='UserName'
                    onChange={(event) => {
                      setUserName(event.target.value);
                    }} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                  <Form.Control type="text" class="form-control" id="email"
                    value={email} placeholder='Enter Email Address'
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }} />
                </Form.Group>
              </Col>
              <Col>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                  <Form.Control type="text" class="form-control" id="phone"
                    value={phone} placeholder='Enter Phone Number'
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }} />
                </Form.Group>
              </Col>
            </Row>

            

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Row>
              <Col><input type="radio" id="male" name="gender" value="male" 
              onChange={(event) => {
                setGender(event.target.value);
              }}/>
              <label for="male">Male </label>
                    <input type="radio" id="female" name="gender" value="female"
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}/> <label for="female">Female </label>
                    </Col>
                    
            </Row>
            </Form.Group>
            
            <Row>
              <Col>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                  <Form.Control type="text" class="form-control" id="password"
                    value={password} placeholder='Enter Password'
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }} />
                </Form.Group>
              </Col>
              <Col>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                  <Form.Control type="text" class="form-control" id="c_password"
                    value={c_password} placeholder='Enter Confirm Password'
                    onChange={(event) => {
                      setC_Password(event.target.value);
                    }} />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" onClick={save}>
              Submit
            </Button>
          </Container>
        </Form>


        <Table striped bordered hover>
          <thead>
            <tr>

              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Password</th>
              <th>Confirm Password</th>

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
                  <td>{users.password}</td>
                  <td>{users.c_password}</td>
                  <td>
                    <button type="button" class="btn btn-primary" onClick={() => editUser(users)} >Edit</button>&nbsp;
                    <button type="button" class="btn btn-danger" onClick={() => DeleteUser(users.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Update User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control type="text" class="form-control" id="fullname"
                  value={fullname} placeholder='Enter FullName'
                  onChange={(event) => {
                    setFullName(event.target.value);
                  }} />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control type="text" class="form-control" id="username"
                  value={username} placeholder='UserName'
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control type="text" class="form-control" id="email"
                  value={email} placeholder='Enter Email Address'
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control type="text" class="form-control" id="phone"
                  value={phone} placeholder='Enter Phone Number'
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }} />
              </Form.Group>

              
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Row>
              <Col><input type="radio" id="male" name="gender" value="male" 
              onChange={(event) => {
                setGender(event.target.value);
              }}/>
              <label for="male">Male </label>
                    <input type="radio" id="female" name="gender" value="female"
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}/> <label for="female">Female </label>
                    </Col>
                    
            </Row>
            </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control type="text" class="form-control" id="password"
                  value={password} placeholder='Enter Password'
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control type="text" class="form-control" id="c_password"
                  value={c_password} placeholder='Enter Confirm Password'
                  onChange={(event) => {
                    setC_Password(event.target.value);
                  }} />
              </Form.Group>



            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={update}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>


      </main>
    </div>
  );
}

export default People;