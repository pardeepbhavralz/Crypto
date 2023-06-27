import React from 'react'
import { styled } from 'styled-components'
import Coins from '../Pictures/Coins.png'



export default function Background() {
  return (
     <Container>
      
 <img className='Background' src={Coins} alt='Background Coins Image'/>
   </Container> 
  )
}

const Container = styled.div`
.Background {
height:51.5rem;
width:100rem;

}


@media screen and (max-width: 768px){

.Background{

height:60rem;
width:48rem;
}

}

@media screen and (max-width: 416px){
  .Background{
    height:72rem;
    width:26rem;
}

}


`;