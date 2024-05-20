import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Services from './components/Services';
import './App.css';
import logo from './logo.png';


const App = () => {
    return (
        <div>
          <div class="main-container">
          <img src={logo} href={Home} alt="medical"/>
          <nav class="nav-container">
                <Link to="/" class="link">Home</Link>
                
                <Link to="/signup" class="link">Sign Up</Link>
                <Link to="/login" class="link">Login</Link>
            </nav>
          </div>
            
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/signup" element={<SignupForm/>} />
                    <Route path="/login" element={<LoginForm/>} />
                    <Route path="/service" element={<Services/>} />
                </Routes>
            </div>
    );
};

export default App;
