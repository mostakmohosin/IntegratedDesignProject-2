import React from 'react'

function Header() {
    return (
      <header className="header">
        <img src="logo.png" alt="Logo" />
        <nav className="navigation">
          <ul>
            <li><a >Logout</a></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header