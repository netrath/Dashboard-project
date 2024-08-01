import React from 'react';
import './styles.css';

const Report = () => {
  return (
    <div className="report">
      <h1>Jenkins Summary Report</h1>
      <div className="search-bar">
        <input type="text" placeholder="Enter Package Name" />
        <button>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>Recipe</th>
            <th>Docker</th>
            <th>CI Links</th>
            <th>Image</th>
            <th>Binary</th>
            <th>Commitment</th>
            <th>Size</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {/* Map your data here */}
        </tbody>
      </table>
    </div>
  );
};

export default Report;