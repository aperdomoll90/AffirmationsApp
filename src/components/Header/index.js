import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import LoginButton from './LoginButton'


function Header(){
    return (
        <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand > Affirmations</Navbar.Brand>
        <Nav>
        <Navbar > <LoginButton/> </Navbar>
        <Navbar > + </Navbar >
        </Nav>
      </Navbar>
            
 )
}

export default Header