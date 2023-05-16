import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard'
import ListUser from './pages/user/ListUser';
import DonorList from './pages/Donor/DonorList';
import Reports from './pages/Reports';
import ListPeople from './pages/people/ListPeople';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <div className="main-container">
        <Sidebar />
        
        <Routes>
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/user' element={<ListUser />}/>
        <Route path='/donor' element={<DonorList />}/>
        <Route path='/people' element={<ListPeople />}/>
        <Route path='/reports' element={<Reports />}/>
      </Routes>
      </div>
      </Router>
    </div>
  );
}







export default App;
