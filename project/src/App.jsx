import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Services from './components/Services';
import NavBar from './components/NavBar';
import './App.css';



const App = () => {
    return (
        <div>
          <div className="main-container">
          <NavBar/>
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
