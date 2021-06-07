import React from 'react'
import NavItem from './NavItem';
import NavItemLogo from './NavItemLogo';
import './NavBarStyle.css';

const NavWrapper = () => {
    return (
        <ul className="NavWrapper" style={style}>
            <NavItemLogo text="Ethelius Development"/>
            <NavItem text="Home"  endpoint="/" />
            <NavItem text="Our Products"  route="/about" endpoint="/products"  />
            <NavItem text="Our Services" endpoint="/services" />
            <NavItem text="Different" endpoint="/different" />
            <NavItem text="Reports" endpoint="/reports"/>
            <NavItem text="About Us"  lastChild={"x"} endpoint="/about" />
        </ul>
    )
}

const style = {
    // border : "2px solid #00d5e4",
    listStyle : "none",
    // width: "100%",
    display: "flex",
    flexDirection : "column",
    alignItems : "flex-start",
    justifyContent : " center",
    padding: "0",
    margin: "0",
    height: "100%",
}




export default NavWrapper
