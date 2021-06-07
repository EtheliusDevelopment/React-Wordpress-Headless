import React from 'react';
import NavBar from './components/layout/navbar/NavBar.jsx'
// import NavBarStyled from './components/layout/navbar/NavBarStyled.js';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
// import Main from './components/main/Main.jsx';
import Home from "./components/main/Home.jsx";
import AboutUs from "./components/main/AboutUs.jsx"
import Services from './components/main/Services.jsx';
import Different from './components/main/Different.jsx';


function App() {
  return (
  <>
  <Router>
  <NavBar />
 

  <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={AboutUs} />
        <Route path='/services' exact component={Services} />
        <Route path='/different' exact component={Different} />
        {/* <Route path='/services' exact component={Services} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/sign-up' exact component={SignUp} /> */}
    </Switch>
 
  
  
   
  </Router>
  
  </>
  )}

export default App;
