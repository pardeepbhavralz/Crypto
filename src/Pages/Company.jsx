import React from 'react'
import { styled } from 'styled-components';
import BlueCoin from '../Pictures/cryptoblue.png';
import video from '../Pictures/video.mp4'


export default function Company() {
  return (
    <Container>
      <div className="Company-info">
      <div className="BackImg">
        <img src={BlueCoin} alt='ImageBlueCoins' className='BlueImg' />
        
      <div className="tittle">
        <h1>Why You Need a Cryptocurrency Development Company?</h1>
      <div className="passage">
        <p>Well, the answer is a bit complicated! There are several parts to this answer.<br/>
           Firstly, if you are an enthusiastic investor willing to create and launch your very-own digital currency or crypto coin (Bitcoin Clone), then you need a coin developer.<br/>
           Secondly, after creating your own coin, you will require a reliable exchange platform to trade your coins.<br/>
          Besides, an adept development company also provides other services that ensure seamless crypto coin investment.<br/>
          The services mainly include Initial Coin Offering (ICO) development, crypto wallet development, crypto mining, and crypto listing and token development.<br/>
          To sum up, these services offer a better environment for crypto management.</p>
      </div>
      </div>
      <div className="videocoin">
         <video className='coinvideo' src={video}  autoPlay loop  />
      </div>
      </div>
      <div className="provides">
        <div className="onepro">
<h2>Crypto Marketing</h2>
<li>Engage with influencers</li>
<li>Content marketing</li>
<li>Social media presence</li>
<li>Social media presences</li>
        </div>
        <div className="twopro">
<h2>Mession & Vision</h2>
<li>Secure and Efficient Transactions</li>
<li>Privacy and Data Protection</li>
<li>Financial Empowerment</li>
<li>Global Adoption</li>

        </div>
        <div className="threepro">
<h2>Startup Products</h2>
<li>Security and Trus</li>
<li>User-Friendly Interface</li>
<li>Partnerships and Integration</li>
<li>Scalability and Performance</li>

        </div>
      </div>

      </div>
    </Container>
  )
}




const Container = styled.div`

.BlueImg{
position:absolute;
  height:50rem;
  width:91.6rem;
}
.tittle{
  position:absolute;
color:#ffffff;
margin:4rem;
font-size:1.5rem;
font-family:  Georgia, 'Times New Roman', Times, serif;
.passage{
  position:absolute;
color:#ffffff;
padding:1rem;
font-size:1.4rem;
}

}
.coinvideo{
  position:absolute;
  justify-content:center;
  margin-top:30rem; 
  margin-left:21rem;
  width:50rem;
  border:.3rem solid white;
}
.provides{
  position:absolute;
  margin-top:60rem; 
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-left:15rem;
  gap:10rem;
  

}


@media screen and (max-width: 768px){

.BlueImg{
height:50rem;
width:48rem;
}
.tittle{
font-size:1rem;
}


@media screen and (max-width: 416px){
  .BlueImg{
height:70rem;
width:26rem;

  }
  .tittle{
    font-size:.8rem;
  }

}

}




`;