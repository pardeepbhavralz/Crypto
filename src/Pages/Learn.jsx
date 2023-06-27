import React from 'react'
import styled from 'styled-components';
import Buy from '../Pictures/Buy-Bitcoin.png';
import Sell from '../Pictures/sell-coin.png'

export default function Learn() {
  return (
   <Container>
      <div className="learn">
        <div className="learn-about">
        <div className="learn-01">
          <marquee><h1>How buy cryptocurrency</h1></marquee>
          <p><h4>How to invest in Bitcoin in India is often an ambiguous question for new investors. However, individuals planning to purchase Bitcoins can take the following course of action to invest without breaking any law:</h4><br />
01: First, investors should submit essential documents, including the Aadhaar card and PAN card. After that, they should complete the KYC process thoroughly.<br />
02: ITobuy Bitcoins, an individual must place an order for their purchase on a cryptocurrency exchange.<br />
03: Once an order is placed, investors can transfer the payable amount from their bank accounts to the crypto exchange. Alternative modes of payment include RTGS, NEFT, debit or credit cards, and other digital payment methods used for routine transactions.
04: The next step for investors is to securely store their purchased Bitcoins in cryptocurrency wallets provided by the cryptocurrency exchange.<br />
05:<br/> A point to note he that any transaction here has an entry in a public ledger and transacted Bitcoins are registered with their wallet IDs instead of the names of sellers or owners.</p><br />
        </div>
        <div className="learn-02">
        <marquee><h1>How sell cryptocurrency</h1></marquee>
          <p> <h4>To sell cryptocurrency, follow these general steps:</h4><br />
  01:  Choose a cryptocurrency exchange: Research and select a reputable cryptocurrency exchange that supports the cryptocurrency you want to sell. Popular exchanges include Coinbase, Binance, Kraken, and Bitstamp.<br />
   02:  Create an account: Sign up for an account on the chosen cryptocurrency exchange. This usually involves providing your email address, creating a password, and completing any verification processes required by the exchange.<br />
    03: Complete identity verification (if necessary): Some exchanges require users to verify their identity before they can start trading. This typically involves submitting identification documents like a passport or driver's license and may require additional information such as proof of address.<br />
   04: Connect a bank account or wallet: Link your bank account or cryptocurrency wallet to the exchange. This step allows you to transfer the funds from the sale.<br />
   05: Initiate a sell order: Locate the "Sell" or "Trade" section on the exchange's platform. Select the cryptocurrency you want to sell and choose the currency (such as USD or EUR) you want to receive in exchange.<br />
   06: Set the amount: Enter the quantity or the specific amount of cryptocurrency you wish to sell. Make sure to double-check the details to avoid any mistakes.
  
  It's important to note that the specific steps may vary depending on the exchange you choose. Always ensure you are using a reputable and secure platform, and be aware of any fees or charges associated with the transaction.</p><br />
        </div>
      </div>
      <div className="imglearn">
        <div className="buyimg">
        <img src={Buy} alt='BuyImage' className='buyImg' />
        </div>
        <div className="sellimg">
        <img src={Sell} alt='SellImage' className='sellImg' />
        </div>
      </div>
      
      </div>
   </Container>
  )
}


const Container = styled.div`
display:flex;
text-align:center;
.learn-about{
  border:.2rem solid black;
  
}
.learn{
  font-size:1.1rem;
  padding:2rem;

.learn-01{
 
margin:2rem;
}
.learn-02{
  margin:2rem;
}
}
.imglearn{

display:flex;
padding:2rem;
gap:6rem;
margin-left:4rem;
.buyImg{
width:35rem;
}
.sellImg{
  width:34.5rem;
}
}

@media screen and (max-width: 768px){
  .learn-about{
    width:44rem;
  }
  .imglearn{
    flex-direction:column;
    margin-left:1.5rem;

  }
@media screen and (max-width: 416px){
  .learn-about{
    width:22rem;
    text-align:left;
    
    
  }
  .learn-01{
    font-size:1rem;
  }
  .learn-02{
    font-size:1rem;

  }
  .imglearn{
 margin-left:-2rem;
 flex-direction:column;
  
  }
  .buyImg{
    height:10rem;
   
  }
  .sellImg{
    height:11rem;
    
    
  }
}

}


`;