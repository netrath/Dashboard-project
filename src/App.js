import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Report from './components/Report';
import Recipe from './components/Recipe';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Routes>
          <Route path="/Overview" element={<Overview />} />
          <Route path="/report" element={<Report />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
