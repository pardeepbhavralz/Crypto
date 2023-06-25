import React from 'react'
import Logo from '../Pictures/Logo.png';
import styled from "styled-components";
import {Link} from "react-router-dom";



export default function Header() {
  
  
  const links =[
    {name:"Home",link:"/"},
    {name:"About",link:"/About"},
    {name:"Products",link:"/products"},
    {name:"Learn",link:"/learn"}
  ]
  



  return (
    <Container>
     
      <div className="Header">
        <img className="Header-Logo" src={Logo} alt='Logo' />
            <div className="Logo-text">
               <span className='company_TextLineOne'>Digital</span>
               <span className='company_TextLineTwo'>Dollars</span>
            </div>
            <ul className="links flex">
                { links.map(( {name, link} )=> {
                        return(
                            <li key={name}>
                                <Link to={link}>{name}</Link>
                                </li>
                        );         
                 })
              }
            </ul>
           
         
         

      </div>
      
    </Container>
  )
}


const Container =styled.div`
.Header{
  
  display:flex;
    background-color:rgb(0, 0, 0);
    
    align-items:center;
    .Header-Logo{
  height:50px;
    margin:1%;

}
.Logo-text{
display:flex;
flex-direction:column;
color:rgb(255, 209, 2);
font-family: Copperplate, Papyrus, fantasy;


}
.company_TextLineOne{
  font-size:79%;
  
}
.company_TextLineTwo{
  font-weight:786;
}

.links {
 list-style-type: none;
 display:flex;
 
 gap:15%;
li{
  a{
    color:white;
    text-decoration: none;
  }
 }
}
}







`;
 
