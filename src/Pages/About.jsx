import React from 'react'

import styled from 'styled-components';
import Header from '../Components/Header';
import Aboutimage from '../Components/Aboutimage';


export default function About() {
  return (
    <Container>
      
      <Header />
    
     <div className="Cards">
    <div className="about-info">
        <h1 className='text'>What is cryptocurrency . How does cryptocurrency work </h1>
      
      <p className='passage'>Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It's a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.

Cryptocurrency received its name because it uses encryption to verify transactions. This means advanced coding is involved in storing and transmitting cryptocurrency data between wallets and to public ledgers. The aim of encryption is to provide security and safety.

The first cryptocurrency was Bitcoin, which was founded in 2009 and remains the best known today. Much of the interest in cryptocurrencies is to trade for profit, with speculators at times driving prices skyward.</p>
<p>Cryptocurrency, also known as "crypto," is a digital currency designed to act as a medium of exchange and a store of value but, because it's new, it's more commonly held as a speculative investment asset.

Cryptocurrency uses blockchain technology to record transactions in a ledger system. The most important aspect of this technology is that it can be viewed publicly but it can't be changed or controlled by any single entity, making cryptocurrency secure for online transactions and nearly impossible to counterfeit.</p><br />
    
      
     
</div>
        
      </div>
  
    
  
      <Aboutimage />
    </Container>
  )
}

const Container =styled.div`

.Cards{

  position: absolute;
  background-color:rgba(0,0,0,.5)
  
  
}

.about-info{
  text-align:center;
  padding:5%;
  color:white;

}
  




 

`;


