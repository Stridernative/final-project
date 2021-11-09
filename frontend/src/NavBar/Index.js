import React, { useState } from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements';
import { Link } from 'react-router-dom';
import { Button } from './Button.js'
import Dropdown from './Dropdown.js';


const NavBar = ({ user }) => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else{
            setDropdown(true);
        }
    };

    const  onMouseLeave =  () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else{
             setDropdown(false);
        }
    };


    return (
<>
    <Nav className ='navbar'>
      <NavLink to="/" className='navbar-logo'>
        <h1> Tire Pros Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/Services" activeStyle>
            Services
            </NavLink>
            <NavLink to="/Appointments" activeStyle>
            Appointments
            </NavLink>
            <NavLink to="/Quotes" activeStyle>
            Quotes
            </NavLink>
          
            <li className='nav-item'  
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                <Link to='/Warranties' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                Warranties <i className='fas fa-caret-down'/>
                </Link>
                {dropdown && <Dropdown />}
            </li>
            
            <NavLink to="/Financing" activeStyle>
            Financing
            </NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to="/login"> Login</NavBtnLink>
       </NavBtn>
    </Nav>  
</>
    );
};

export default NavBar;