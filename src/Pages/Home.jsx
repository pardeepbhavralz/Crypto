import React from 'react'
import { styled } from 'styled-components';
import Background from '../Components/Background';
import { useNavigate } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


export default function Home() {

        const navigate = useNavigate();

const changeToAbout=()=>{
  navigate('/About');
}
  



  return (
    
    <Container >
    
      <div className="Home">
        <div className='lineOne'>
        <h1>INVEST IN BITCOIN EASY WAY TO TRADE BITCOIN</h1><br/>
        <h2>Invest In Current Trending Market</h2><br />
        <h4>Many people are struggling to grasp the concept of Bitcoin after it became a household name. Over the recent years, Bitcoin has evolved from an underworld virtual currency to a new investment craze.</h4>
        </div>
      <div className="Account">
          <h2>Create your Account</h2><br />
            <label>Name :</label><br />
            <input type='text' placeholder='  Enter Name' id='Namee' /><br />
            <label>Userame :</label><br />
            <input type='text' placeholder='  Enter Userame' id='usernamee' /><br />
            <label>Email :</label><br />
            <input type='text' placeholder='  Enter Your EMail' id='Email' /><br />
            <label >Create Password :</label><br />
            <input type='text' placeholder='  Enter Password' id='Newpassword' /><br />
            <label>Password :</label><br />
            <input type='text' placeholder='  Enter Password Again' id='Againpassword' /><br />
            <br />
            < DoubleArrowIcon type="next" onClick={changeToAbout} /> 
            </div>    
       
          <div className='bottom-footer'>
          
            <div className="col">
              <h3>Company</h3>
              <h5>About</h5>
              <h5>Mession & Vision</h5>
              <h5>Location</h5>
              <h5>Contuct Us</h5>
            </div>
            <div className="col-2">
            <h3>Servires</h3>
              <h5>NFT Marketplace</h5>
              <h5>Crypto Marketing</h5>
              <h5>Mobile App Design</h5>
              <h5>Outsourcing</h5>
            </div>
            <div className="col-3">
            <h3>Solutions</h3>
              <h5>LMS</h5>
              <h5>AR/VR</h5>
              <h5>Enterprise Solutions</h5>
              <h5>Startup Products</h5>
            </div>
            <div className="col-4">
             <p>SC0-45 , Chandigarh</p>
             <p>Sector - 17</p>
            </div>
    
          </div>
      </div>
    



<Background />
    </Container>
  )
}


const Container = styled.div`

height:10rem;
width:10rem;


.Home{
position:absolute;
text-align:center;
color:#ffffff;
}
.lineOne{
padding:3rem;

font-family:  Georgia, 'Times New Roman', Times, serif;
text-align:center;

}
.Account{
  margin-top:3%;
  background-color:rgba(0,0,7,.5);
  color:white;
  margin:5rem;
  text-align:center;
  padding:1%;
  input{
    height:1.5%;
  }
}
.bottom-footer{
 

 color:#ffffff;
 display:flex;
 padding:2rem;
 background-color:black;
 flex-direction:row;
 justify-content:space-evenly;
 
 }



 @media screen and (max-width: 768px){

} 




`;
