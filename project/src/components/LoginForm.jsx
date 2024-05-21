import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('Enter Your Email');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
    };

    const login_css={
        alignItems:"center",
        padding:"15px",
        marginTop: "50px",
        marginBottom:"50px",
        marginLeft:"600px", 
        marginRight:"600px",       
        borderRadius:"5px",
        backgroundColor:"#f0f0f0"
    }
    const submit_button = {
        width: "100%",
        padding:"10px 15px",
        border:"none",
        borderRadius:"5px",
        backgroundColor:"#28a745", /* Example button color */
        color: "white",
        textAlign:"center",
        cursor: "pointer",
        fontSize: "16px"
    }

    return (
        <form onSubmit={handleSubmit} style={login_css}>
            <h2 style={{textAlign:"center"}}>Login</h2>
            <div><p>Are you a new member?<Link to="/signup" className="link">Sign Up</Link></p>
            
            </div>
            <div>
                <label>Email:</label><br/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label><br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <br/><br/>
            <button type="submit" style={submit_button}>Login</button><br/>
            <button type="reset">Reset</button>
        </form>
    );
};

export default LoginForm;
