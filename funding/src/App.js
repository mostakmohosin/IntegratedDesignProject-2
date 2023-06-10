import React, { useContext } from 'react'
//frontend

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Payment from './pages/Payment';
//dashboard
import Home1 from "./Dashboard/./pages/home/Home1";
import List from "./Dashboard/./pages/list/List";
import List1 from "./Dashboard/./pages/list/List1";
import List2 from "./Dashboard/./pages/list/List2";
import Single from "./Dashboard/./pages/single/Single";
import New from "./Dashboard/./pages/user/user";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { userInputs, donorInputs, peopleInputs } from "./Dashboard/./formSource";
import { AuthContext } from "./Dashboard/./context/AuthContext"
import New1 from './Dashboard/pages/donor/Donor';
import New2 from './Dashboard/pages/people/people';



function App() {
  const { currentUser } = useContext(AuthContext)



  const RequireAuth = ({ childern }) => {
    return currentUser ? childern : <Navigate to="/login" />
  };
  console.log(currentUser)

  return (
    <div>
      <div >


        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/event' element={<Event />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/payment' element={<Payment />} />
          </Routes>

        </BrowserRouter>



      </div>
      <div>
        <BrowserRouter>
          <Routes>



            <Route path="dashboard" element={<Home1 />} />

            <Route path="/users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="/donor">
              <Route index element={<List1 />} />
              <Route path=":donorId" element={<Single />} />
              <Route
                path="new"
                element={<New1 inputs={donorInputs} title="Add New Donor" />}
              />
              </Route>

              <Route path="/people">
                <Route index element={<List2 />} />
                <Route path=":peopleId" element={<Single />} />
                <Route
                  path="new"
                  element={<New2 inputs={peopleInputs} title="Add New People" />}
                />
              </Route>

          

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

