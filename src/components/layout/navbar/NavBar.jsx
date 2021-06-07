import React from 'react';
import NavWrapper from './NavWrapper';
import './NavBarStyle.css'

const NavBar = () => {
    return (


        <nav className="navbar" style={style}>
            <NavWrapper />
        </nav>
    )
}

const style = {
    
    transition: "0.4s ease",
    background : "teal",
    width: "8%",
    height : "100vh",
    position: "fixed",
    top : '0',
    left : '0',

    
}


export default NavBar
