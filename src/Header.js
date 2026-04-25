import './Header.css'
import { NavLink } from 'react-router-dom';
import logo1 from './images/logo.gif';

function Header() {
   
  return ( 
  <>
    <div id="header">
        <div id="section">
  <div><a href="index.html"><img src={logo1} alt="" /></a></div>
  <span>aviationschool@flying.com <br />
  <br />
  + 7958 917 9747 2481 000</span> </div>
  <ul>
   <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/abouts">About Us</NavLink></li>
        <li><NavLink to="/admissions">Admissions</NavLink></li>
        <li><NavLink to="/training-courses">Training Courses</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/school-calendar">School Calendar</NavLink></li>
        <li><NavLink to="/contact-us">Contact us</NavLink></li>
        <li><NavLink to="/enquery">Enquery</NavLink></li>
        <li><NavLink to="/auth">Auth</NavLink></li>
</ul>
      
    </div>
    </>
  );
}
export default Header;