import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard'
import User from './pages/user/User';
import Donor from './pages/Donor/Donor';
import Reports from './pages/Reports';
import People from './pages/people/People';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <div className="main-container">
        <Sidebar />
        
        <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/user' element={<User />}/>
        <Route path='/donor' element={<Donor />}/>
        <Route path='/people' element={<People />}/>
        <Route path='/reports' element={<Reports />}/>
      </Routes>
      </div>
      </Router>
    </div>
  );
}







export default App;
