import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const App = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
            </nav>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/signup" element={<SignupForm/>} />
                    <Route path="/login" element={<LoginForm/>} />
                </Routes>
            </div>
    );
};

export default App;
