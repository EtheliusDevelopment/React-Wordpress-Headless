import React from 'react';
import { FaAdn } from "react-icons/fa";
import NavItemText from './NavItemText.jsx';
import { Link } from 'react-router-dom'
import './NavBarStyle.css'


const NavItem = (props) => {
    
    if(props.lastChild) {
        return (
        

            <li className="navItem" style={lastChild} >
                <Link className="link" style={style2} to={props.endpoint}>
               <FaAdn />
               <NavItemText text={props.text}/>
               </Link>
           </li>
           
           
       )
    } else {
        return (
        

            <li className="navItem" style={style} >
                <Link className="link" style={style2} to={props.endpoint}>
               <FaAdn />
               <NavItemText text={props.text}/>
               </Link>
           </li>
           
           
       )
    }

       
       
}



const lastChild = {
    
    marginTop : "auto",
    fontSize : " 3rem",
    width: "100%",
}

const style = {
    
    fontSize : "3rem",
    width: "100%",

   
}



const style2 = {
    textDecoration : "none",
    
    display: "flex",
    alignItems: "center",
    height: "5rem",
    color: "grey",
    justifyContent : " center",

    
   
}


export default NavItem
