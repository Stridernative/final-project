import React, { useState } from 'react';
// import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements';
import { Link } from 'react-router-dom';
import { Button } from './Button.js'
import Dropdown from './Dropdown.js';
import './NavBar.css'
import img from '../Images/TireProsLogo.png';


function NavBar ( ) {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter= () => {
            setDropdown(true);
        }
    
    const  onMouseLeave = () => {
             setDropdown(false);
        }

        

    return (
<>
    <nav className ='navbar'>
      <Link to="/" className='navbar-logo'>
        <img className="logo" src={img} alt="Tire Pros" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/Appointments' className='nav-links' onClick={closeMobileMenu}>
                    Appointments
                </Link>
            </li>

            <li className='nav-item'>
                <Link to='/Financing' className='nav-links' onClick={closeMobileMenu}>
                    Financing
                </Link>
            </li>


            <li className='nav-item'  
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                <Link to='/Warranties' 
                className='nav-links-warranties' 
                onClick={closeMobileMenu}>
                Warranties <i className='fas fa-caret-down'/>
                </Link>
             {dropdown && <Dropdown />}
            </li>

            
          
            {/* <li className='nav-item'>
                <Link to='/Quotes' className='nav-links' onClick={closeMobileMenu}>
                    Quotes
                </Link>
            </li> */}

            <li className='nav-item'>
                <Link to='/Login' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Login
                </Link>
            </li>
        </ul>
        <Button />
        </nav>
        {/* <Bars /> */}
        {/* <NavMenu> */}
            {/* <Link to="/Services" activeStyle>
            Services
            </Link>
            <Link to="/Appointments" activeStyle>
            Appointments
            </Link>
            <Link to="/Quotes" activeStyle>
            Quotes
            </Link> */}
          
            {/* <Link to="/Financing" activeStyle>
            Financing
            </Link> */}
        {/* </NavMenu> */}
        {/* <NavBtn>
        <NavBtnLink to="/login"> Login</NavBtnLink>
       </NavBtn> */}
</>
    );
};

export default NavBar;