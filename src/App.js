import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Un site pour gérer vos tâches</h1>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtask" element={<AddTask />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
