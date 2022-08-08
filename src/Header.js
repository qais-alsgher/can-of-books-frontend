import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Login from './component/Login';
import Loguot from './component/Logout';
import { useAuth0 } from '@auth0/auth0-react'
function Header(){
    const{isAuthenticated} = useAuth0();
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/home" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link">Profile</Link></NavItem>
        {!isAuthenticated &&
        <Login />
                }
         {isAuthenticated &&
        <Loguot />
         }
      </Navbar>
    )
}

export default Header;
