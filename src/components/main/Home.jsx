import React from 'react'
import HomeComponentOne from './HomeComponents/HomeComponentOne';
import HomeComponentTwo from './HomeComponents/HomeComponentTwo';


const Home = () => {
    return (
       
            <div style={style}>
            <HomeComponentOne />
            <HomeComponentTwo />
            </div>
        
    )
}

const style = {
    // border : "4px solid red",
    // width : "100px", 
    color:"black", 
    marginLeft : "20%",
    marginTop : "0",
    height: "100%",
    padding : "2%"
}


export default Home
