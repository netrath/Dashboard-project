import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>DASHBOARD</h2>
      <button><Link to="/overview">Overview</Link></button>
      <button><Link to="/report">Report</Link></button>
      <button><Link to="/recipe">Recipe</Link></button>
      <button><Link to="/search">Search</Link></button>
      <button className="logout">Logout</button>
    </div>
  );
};

export default Sidebar;