import React from 'react'



const NavItemText = (props) => {
    return (
        <p className="NavItemText" style={style}>{props.text}</p>
    )
}

export default NavItemText


const style = {
    
    fontSize : "1.3rem",
    textTransform : "uppercase",
    textDecoration: "none",
    color: "white",
    marginLeft : "1.2rem",
    fontFamily : "Sora"
}