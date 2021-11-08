import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements';

const NavBar = ({ user }) => {
    return (
<>
    <Nav>
      <NavLink to="/">
        <h1>Tire Pros Logo</h1>
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
            <NavLink to="/Warranties" activeStyle>
            Warranties
            </NavLink>
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