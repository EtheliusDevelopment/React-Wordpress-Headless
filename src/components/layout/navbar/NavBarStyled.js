import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaAdn } from "react-icons/fa";

const NavWrapper = styled.ul`
    
    border: 2px solid red;
    list-style : none;
   
`

const NavItem = styled.li`
    font-size : 56px;
    color : green;
    border: 2px solid teal;
   
`
const NavLink = styled(Link)`
    margin-left : 2rem;
    font-size : 2rem;
    height : 80px;
    display : flex;
    justify-content : flex-start;
    align-items : center;
    color : yellowgreen;
    text-decoration : none;
    border : 3px solid yellow;

`
const IconText = styled.p`
    font-size : 46px;
    color : fuchsia;
    border: 2px solid fuchsia;
    margin-left: 40px; 
`


const NavBarStyled = () => {
    return (
        <NavWrapper>
            
            <NavItem>

                <NavLink to="#">

                 <FaAdn className="linkprova"/>
                 <IconText>
                 ciao da STyledComponents
                 </IconText>
                 
                 <br/>
                </NavLink>

            </NavItem>

        {/* ******************* */}
            <NavItem>
                <NavLink to="#">
                 <FaAdn />
                 <p>ciao da STyledComponents1</p>
                 <br/>
                </NavLink>
            </NavItem>



            <NavItem>
                <NavLink to="#">
                 <FaAdn />
                 <p>ciao da STyledComponents</p>
                 <br/>
                </NavLink>
            </NavItem>



            <NavItem>
                <NavLink to="#">
                 <FaAdn />
                 <p>ciao da STyledComponents</p>
                 <br/>
                </NavLink>
            </NavItem>


            <NavItem>
                <NavLink to="#">
                 <FaAdn />
                 <p>ciao da STyledComponents</p>
                 <br/>
                </NavLink>
            </NavItem>



               
            
        </NavWrapper>
    )
}

export default NavBarStyled
