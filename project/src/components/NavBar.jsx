import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
function NavBar(){
    return(
        <div>
            <nav className="nav-container">
               <Link to="/">
                    <img src={logo} alt="Logo" height="70px" width="70px"/>
                </Link>
                <Link to="/" className="link">Home</Link>
                <Link to="/signup" className="link">Sign Up</Link>
                <Link to="/login" className="link">Login</Link>
            </nav>
        </div>
    );
};
export default NavBar;