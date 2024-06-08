import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import Cookies from 'js-cookie';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Vérifier si l'utilisateur est authentifié
    const token = Cookies.get('authToken');
    setIsAuthenticated(!!token);
  }, []);
  const handleLogout = async () => {
    Cookies.remove('authToken');
    // Appeler la route logout pour supprimer le cookie de session
    await fetch('/api/auth/logout')
      .then((res) => { return res.json() })
      .then((data) => { console.log(data.message) });
    setIsAuthenticated(false);
  };
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Un site pour gérer vos tâches</h1>
          <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login handleLogin={setIsAuthenticated} />} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/addtask" element={<PrivateRoute><AddTask /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
