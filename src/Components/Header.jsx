import React from 'react'
import { Link } from 'react-router-dom'

import { HiMenuAlt2 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'
import styled from 'styled-components'


const Header = () => {
    const [nav, setnav] = useState(false);
    const handleNva=()=>{
        setnav(!nav);
        console.log(nav);
        
    }
    return (
      
      <Container>
        <nav className='navbar'>
            <div className='logo_container' style={{ color: 'white' , fontStyle :'Georgia' }}>
               Crypto
            </div>
            <ul className='navlist'>
                <li className='navlink'>
                    <Link style={{ textDecoration: "none", color: 'white' }} to={'/'}> Home </Link>
                </li>
                <li className='navlink'>
                    <Link style={{ textDecoration: "none", color: 'white' }} to={'/About'}> About </Link>
                </li>
                <li className='navlink'>
                    <Link style={{ textDecoration: "none", color: 'white' }} to={'/Company'}> Company </Link>
                </li>
                <li className='navlink'>
                    <Link style={{ textDecoration: "none", color: 'white' }} to={'/Learn'}> Learn </Link>
                </li>
                
                    
                
            </ul>

            
            {/* burger section */}
            
            <div className='burger' onClick={handleNva}>
                <HiMenuAlt2 />
                
            </div>
            {
                !nav && 
                <div className='burger_nav'>
                <ul>

                    <li className='burgerLink'>
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/'}> Home </Link>
                    </li>
                    <li className='burgerLink'>
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/About'}> About </Link>
                    </li>
                    <li className='burgerLink'>
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/Company'}> Company </Link>
                    </li>
                    <li className='burgerLink'>
                        <Link style={{ textDecoration: "none", color: 'white' }} to={'/Learn'}> Learn </Link>
                    </li>
                    
                </ul>
                <div className='cancel' onClick={handleNva}><RxCross2 /></div>
            </div>

            }
            
        </nav>
        </Container>
    )
}

const Container=styled.div`
.navbar{
    display: flex;
    width: 100%;
    height: 60px;
    position:sticky;
    background:black;
    z-index:90;
    top: 0;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgb(209, 207, 207) 0px 10px 15px -3px, rgba(0, 0, 0, 0.574) 0px 4px 6px -2px;
}

/* burger */
.burger_nav{
    position: absolute;
    width: 100%;
    height: 180px;
    top: 0;
    left: 0;
    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 1s;
    display: none;

}


.burger_nav ul{
    list-style: none;
    padding: 5px 10px;
    width: 90%;
    text-align: center;

}
.burgerLink{
    font-size: 16px;
    margin: 8px 2px;
    width: 90%;
    text-transform: uppercase;
    color: white;
}
.burger{
    font-size: 30px;
    margin-right: 20px;
    display: none;
}


.cancel{
    top: 10px;
    right:30px;
    position: absolute;
    font-size: 25px;
    color: orangered;
    text-shadow: 2px 2px 2px red;
}

/* burger */

.navlist{
    display: flex;
    list-style: none;
    align-items: center;
    justify-content:space-evenly;
    width: 40vw;
    height:100%;
}

.logo_container{
    font-family: Georgia;
    font-size: 40px;
    font-weight: 700;
    margin: 0 0 0 10px;
}

.navlink{
    text-transform: uppercase;
    font-size: 'Roboto Slab', serif;
    color: black !important;
    
}

/* responsivness */
@media screen and (max-width:750px) {
    .logo_container{
        width: 30px;
    }
    .navlist{
        width: 60vw;
    }
}

@media screen and (max-width:550px){
    .navlist{
        display: none;
    }
    .burger{
        display: block;
    }
    .logo_container{
        width: 20px;
    }
    .burger_nav{
        display: block;
    }
}
`;


export default Header;