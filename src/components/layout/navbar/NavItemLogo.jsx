import React from 'react';
import { FaAdn } from "react-icons/fa";
import NavItemText from './NavItemText.jsx';
import { Link } from 'react-router-dom';



const NavItemLogo = (props) => {
    
   
        return (
        

            <li className="logoLi" style={logo} >
                <Link className="link" style={style2} to="/">
               <FaAdn className="logoIcon"/>
               <NavItemText className="logoText" text={props.text}/>
               </Link>
           </li>
           
           
       )
 
       
}

const logo = {
    fontSize : "4rem",
    
    marginBottom : "4rem",
    width: "100%",
}







const style2 = {
    textDecoration : "none",
    
    display: "flex",
    alignItems: "center",
    height: "5rem",
    color: "fuchsia",
    justifyContent : "center",
   
}


export default NavItemLogo
