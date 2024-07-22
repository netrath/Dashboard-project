import React, { useEffect, useState } from 'react';
import './Overview.css';

function Overview() {
  const [data, setData] = useState({ totalPackages: 20, completedBuilds: 15, failedBuilds: 3, inProgress: 2 });

  // Use your actual data fetching logic here
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/data')
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);


  return (
    <div className="overview">
      <h1>Overview</h1>
      <div className="card blue">Total Packages<br />{data.totalPackages}</div>
      <div className="card green">Completed Builds<br />{data.completedBuilds}</div>
      <div className="card red">Failed Builds<br />{data.failedBuilds}</div>
      <div className="card yellow">In Progress<br />{data.inProgress}</div>
    </div>
  );
}

export default Overview;
