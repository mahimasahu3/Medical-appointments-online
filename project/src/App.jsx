import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Services from './components/Services';
import NavBar from './components/NavBar';
import './App.css';
import Healthtips from './components/Health_Tips';



const App = () => {
    return (
        <div>
          <div className="main-container">
          <NavBar/>
          </div>
            
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/signup" element={<SignUpForm/>} />
                    <Route path="/login" element={<LoginForm/>} />
                    <Route path="/service" element={<Services/>} />
                    <Route path="/healthtips" element={<Healthtips/>} />
                </Routes>
            </div>
    );
};

export default App;
