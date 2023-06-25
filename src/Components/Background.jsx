import React from 'react'
import Coins from "../Pictures/Coins.png";
import  styled  from 'styled-components';

export default function Background() {

  return (
 <Container>
     <div>
      <img className='Backimage' src={Coins} alt='Coins' />
      </div>
     </Container>
  )

}

const Container = styled.div`

  
  .Backimage{
  
    height:100%;
    width:100%;

}


`;

