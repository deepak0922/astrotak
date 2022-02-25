import hamburger from '../assets/hamburger.png';
import icon from '../assets/icon.png';
import profile from '../assets/profile.png';
import './NavBar.css';

function NavBar() {

return(
    <div className='navbar-a'>
        <ul>
            <li><img src={hamburger} alt="hamburger" className='hamburger-icon' /></li>
            <li><img src={icon} alt="icon" className='logo-icon' /></li>
            <li><img src={profile} alt="profile" className='profile-icon' /></li>
        </ul>
    </div>
);

}
export default NavBar;