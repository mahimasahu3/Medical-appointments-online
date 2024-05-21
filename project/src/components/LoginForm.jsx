import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
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
    const input_css={
        width:"100%",
        height:"25px"
    }
    const submit_button = {
       
        width: "100%",
        padding:"10px 15px",
        border:"none",
        borderRadius:"5px",
        backgroundColor:"#0064bd", /* Example button color */
        color: "white",
        textAlign:"center",
        cursor: "pointer",
        fontSize: "16px"
    }

    const reset_button = {
        marginTop:"10px",
        width: "100%",
        padding:"10px 15px",
        border:"none",
        borderRadius:"5px",
        backgroundColor:"#e62143", /* Example button color */
        color: "white",
        textAlign:"center",
        cursor: "pointer",
        fontSize: "16px"
    }

    return (
        <form onSubmit={handleSubmit} style={login_css}>
            <h2 style={{textAlign:"center"}}>Login</h2>
            <div><p>Are you a new member?<Link to="/signup" className="link" style={{color:"blue"}}>Sign Up Here</Link></p>
            
            </div>
            <div>
                <label>Email:</label><br/>
                <input type="email" style={input_css} value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label><br/>
                <input type="password" style={input_css} value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <br/><br/>
            <button type="submit" style={submit_button}>Login</button><br/>
            <button type="reset" style={reset_button}>Reset</button>
            <br/><br/><br/>
            <p style={{textAlign:"center"}}>Forgor Password?</p>
            
        </form>
    );
};

export default LoginForm;
