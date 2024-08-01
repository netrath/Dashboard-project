import React from 'react';
import './styles.css';

const Recipe = () => {
  return (
    <div className="recipe">
      <div className="filter-section">
        <select>
          <option value="ALL">ALL</option>
          {/* Add more options if necessary */}
        </select>
        <label>
          <input type="checkbox" />
          Failed Jobs
        </label>
        <br />
        <button>Submit</button>
        <button>Full View</button>
        <button>Display Broken</button>
      </div>
      <div className="details-table">
        <table>
          <thead>
            <tr>
              <th>PACKAGE NAME</th>
              <th>RECIPE</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows will be added dynamically */}
          </tbody>
        </table>
        <button className="download-btn">Download Links</button>
      </div>
      <div className="legends">
        <h3>Legends</h3>
        <div className="legend-item">
          <span className="legend-color na"></span> NA
        </div>
        <div className="legend-item">
          <span className="legend-color all-good"></span> All Good
        </div>
        <div className="legend-item">
          <span className="legend-color failed"></span> Failed
        </div>
        <div className="legend-item">
          <span className="legend-color jenkins-broken"></span> Jenkins broken
        </div>
        <div className="legend-item">
          <span className="legend-color broken"></span> Broken
        </div>
        <div className="legend-item">
          <span className="legend-color job-not-run"></span> Job not run
        </div>
      </div>
    </div>
  );
};

export default Recipe;