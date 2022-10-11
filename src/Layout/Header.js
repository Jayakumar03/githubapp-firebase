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

  import  {Context}  from "../Context/Context";

  const Header = () => {

    const userContext = useContext( Context)

    const [isOpen, setIsOpen]= useState(false)

    // method for toogle
    const toggle = () => setIsOpen(!isOpen)     /* error in this line */

    return(

        <Navbar  color="info" light expand="md">
            <NavbarBrand><Link to="/" className ="text-white"> GitFire App</Link></NavbarBrand>
            <NavbarText className="text-white">
                {
                 userContext &&  userContext.user?.email ? userContext.user.email: ""
                }
                </NavbarText>
            <NavbarToggler onClick={toggle}>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
                { 
                  userContext && userContext.user ? (
                   
                    <NavItem>
                <NavLink onClick={ () => {
                    userContext.setUser(null)
                } } className='text-white'>
                    Logout
                </NavLink>
               </NavItem>
                   ) : (
                    <>
                    <NavLink tag={Link} to="/signup" className='text-white'>
                            Signup
                      </NavLink>
                     <NavLink tag={Link} to="/signin" className='text-white'>
                     Signin
                       </NavLink>
            
                  </>
                   )
                }
               
            </Nav>
            </Collapse>
            </NavbarToggler>
        </Navbar>

    )
  }


  export default Header;