import React, {useContext, useState} from 'react';

import {

    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText

  } from "reactstrap";

  import{Link} from "react-router-dom";

  import { Context } from "../Context/Context";

  const Header = () => {

    return(

        <Navbar className="bg-info" color="info" light expand="md">
            <NavbarBrand><Link to="/" className ="text-white"> GitFire App</Link></NavbarBrand>
            <NavbarToggler></NavbarToggler>
            <Collapse navbar>
            <Nav className="ms-auto" navbar>
               <NavItem>
               <NavLink tag={Link} to="/" className='text-white'>
                    Signup
                </NavLink>
               </NavItem>
               <NavItem>
               <NavLink tag={Link} to="/" className='text-white'>
                    Signin
                </NavLink>
               </NavItem>
               <NavItem>
                <NavLink tag={Link} to="/" className='text-white'>
                    Logout
                </NavLink>
               </NavItem>

            </Nav>
            
            </Collapse>
        </Navbar>

    )
  }


  export default Header;