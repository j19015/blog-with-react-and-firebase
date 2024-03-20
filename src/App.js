import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/home.js';
import CreatePost from './components/createPost.js';
import Login from './components/login.js';
import Logout from './components/logout.js';
import Navbar from './components/navbar.js';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
