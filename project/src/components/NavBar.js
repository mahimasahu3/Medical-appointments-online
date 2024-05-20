import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
function NavBar(){
    return(
        <div>
            <nav class="nav-container">
               <Link to="/">
                    <img src={'logo'} alt="Logo" className="nav-logo" />
                </Link>
                <Link to="/" class="link">Home</Link>
                <Link to="/signup" class="link">Sign Up</Link>
                <Link to="/login" class="link">Login</Link>
            </nav>
        </div>
    );
};
export default NavBar;