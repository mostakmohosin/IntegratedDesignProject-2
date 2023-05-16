import React from 'react'
import { Link } from "react-router-dom"

function Sidebar() {
    return (
      <aside className="sidebar">
        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/user">Users</Link></li>
          <li><Link to="/donor">Donor</Link></li>
          <li><Link to="/people">People</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </aside>
    );
  }

export default Sidebar