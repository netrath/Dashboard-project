import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div>
    <div className="search">
      <input type="text" placeholder="Developer Name" />
      <button>Search</button>
    </div>

    <div className="details-table">
    <h2>Details</h2>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Package Name</th>
          <th>Recipe</th>
          <th>Docker</th>
          <th>CI Link</th>
          <th>Image</th>
          <th>Binary</th>
          <th>Comment</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        {/* Table rows will be added dynamically */}
      </tbody>
    </table>
  </div>
  </div>
  );
}

export default Search;
