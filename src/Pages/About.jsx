import React from 'react'

import styled from 'styled-components';

import Aboutimage from '../Components/Aboutimage';
import { useNavigate } from 'react-router-dom';


export default function About() {

const navigate = useNavigate();

  const changeToCompany=()=>{
navigate('/Company');
  }



  return (
    <Container>
      
    
    
     <div className="Cards">
    <div className="about-info">
        <h1 className='text'>What is Cryptocurrency</h1>
      
      <p className='passage'>Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It's a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.

Cryptocurrency received its name because it uses encryption to verify transactions. This means advanced coding is involved in storing and transmitting cryptocurrency data between wallets and to public ledgers. The aim of encryption is to provide security and safety.<br/>

The first cryptocurrency was Bitcoin, which was founded in 2009 and remains the best known today. Much of the interest in cryptocurrencies is to trade for profit, with speculators at times driving prices skyward.
Cryptocurrency, also known as "crypto," is a digital currency designed to act as a medium of exchange and a store of value but, because it's new, it's more commonly held as a speculative investment asset.

Cryptocurrency uses blockchain technology to record transactions in a ledger system. The most important aspect of this technology is that it can be viewed publicly but it can't be changed or controlled by any single entity, making cryptocurrency secure for online transactions and nearly impossible to counterfeit.</p>

</div>

      <div className="about-info2">
        <h1 className='text'>How Cryptocurrency work</h1>
        <p className='passage'>Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions updated and held by currency holders.

Units of cryptocurrency are created through a process called mining, which involves using computer power to solve complicated mathematical problems that generate coins. Users can also buy the currencies from brokers, then store and spend them using cryptographic wallets.

If you own cryptocurrency, you dont own anything tangible. What you own is a key that allows you to move a record or a unit of measure from one person to another without a trusted third party.

Although Bitcoin has been around since 2009, cryptocurrencies and applications of blockchain technology are still emerging in financial terms, and more uses are expected in the future. Transactions including bonds, stocks, and other financial assets could eventually be traded using the technology.</p> <br />
        </div>  
        <div className="AboutOk">
          <button className='btn' onClick={changeToCompany}>Read More</button>
        </div>
      </div>
  
    
  
       <Aboutimage /> 
    </Container>
  )
}

const Container =styled.div`
.Cards{
  position:absolute;
  

}
.about-info {
  margin:3rem;
  background-color:rgba(0,0,0,.7);
  color:#ffffff;
  text-align:center;
.text{
  padding:1rem;
   font-family: Copperplate, Papyrus, fantasy;
   
}
.passage{
  font-size:1.2rem;
  padding:1rem;
}
}
.about-info2{
  margin:3rem;
  background-color:rgba(0,0,0,.7);
  color:#ffffff;
  text-align:center;
.text{
  padding:1rem;
   font-family: Copperplate, Papyrus, fantasy;
   
}
.passage{
  font-size:1.2rem;
  padding:1rem;
}
}
.AboutOk{
  text-align:center;
}
  .btn{
  height:2rem;
  width:8rem;

  }



@media screen and (max-width: 768px){
.Cards{
margin-top:-2rem;
font-size:1rem;
}

@media screen and (max-width: 416px){
  
  .Cards{
    font-size:.6rem;
    
  }
  .about-info{
   width:14rem;
   
   .text{
    margin-bottom:-3rem;
   }
   .passage{
    margin-bottom:-5rem;

   }
  
  }
  .about-info2{
   width:14rem;
   
   .text{
    margin-bottom:-3rem;
   }
   .passage{
    margin-bottom:-5rem;

   }
  
  }
}

}


`;