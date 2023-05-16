import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img src="logo.png" alt="Logo" />
      <nav className="navigation">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Reports</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Orders</a></li>
        <li><a href="#">Reports</a></li>
      </ul>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <h1>Welcome to the Admin Panel</h1>
      <p>Use the links on the left to navigate to different pages.</p>
    </main>
  );
}

export default App;
