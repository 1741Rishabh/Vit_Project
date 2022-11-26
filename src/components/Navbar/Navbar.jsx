import logo from '../../assets/Img/vit-logo-1.png'
import './Navbar.css'
function Navbar()
{
    return(
    <nav className="nav">
        <img src={logo} alt="img" />
        <h1>VIT BHOPAL</h1>
        <div className='nav_buttons'><button className="log_in_button">Login</button> <button className="register_button">Register</button></div>

    </nav>)
}

export default Navbar;

