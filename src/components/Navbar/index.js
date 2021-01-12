import  React from 'react';
import {
    Nav,
    NavLink,
    NavBtn,
    NavBtnLink,
    Bars,
    NavMenu,

} from './NavbarElements';

const  Navbar=() =>{
    return(
        <Nav>
            <NavLink to='/'>
                <h1>Logo</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
            <NavLink to='/about' actvieStyle>
                About
            </NavLink>
            <NavLink to='/services' actvieStyle>
                Services
            </NavLink>
            <NavLink to='/contact-us' actvieStyle>
                Contact-Us
            </NavLink>
            <NavLink to='/sign-up' actvieStyle>
                Sign-Up
            </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
            </NavBtn>
        </Nav>
    );
}
export default Navbar;