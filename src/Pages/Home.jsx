import React from 'react'
import styled  from 'styled-components'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import{useNavigate} from 'react-router-dom'
import Background from '../Components/Background';
import Header from '../Components/Header';

export default function Home() {

  const navigate = useNavigate();

const changeToAbout=()=>{
  navigate('/About');
}
  



  return (
    
    <Container >
      <Header />
      <div className="Home">
        <div className='lineOne'>
        <h1>INVEST IN BITCOIN EASY WAY TO TRADE BITCOIN</h1>
        <h2>Invest In Current Trending Market</h2>
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
              <h4>ufyu</h4>
              <h4>ufyu</h4>
              <h4>ufyu</h4>
              <h4>ufyu</h4>
              <h4>ufyu</h4>
            </div>
            <div className="col-2">
              <h4>okijuhygrf</h4>
              <h4>okijuhygrf</h4>
              <h4>okijuhygrf</h4>
              <h4>okijuhygrf</h4>
              <h4>okijuhygrf</h4>
            </div>
            <div className="col-3">
              <h4>okijuhygtfr</h4>
              <h4>okijuhygtfr</h4>
              <h4>okijuhygtfr</h4>
              <h4>okijuhygtfr</h4>
              <h4>okijuhygtfr</h4>
            </div>
           
          
      
    
          </div>
      </div>
      <Background />
       
      
      
    </Container>
      
  )
}


const Container=styled.div`

.Home{

  margin:5%;
 
  padding:3%;
  position:absolute;
  color:white;
}
.Account{
  margin-top:3%;
  background-color:rgba(0,0,7,.5);
  color:white;
  text-align:center;
  padding:1%;
  input{
    height:1.5%;
  }
}



.lineOne{
font-family:  Georgia, 'Times New Roman', Times, serif;
text-align:center;
  
}




  .bottom-footer{
 
 color:#000000;
 display:flex;
 flex-direction:column;
 
 
 }



`;

