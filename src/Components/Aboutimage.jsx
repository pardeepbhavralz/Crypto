import React from 'react'
import styled from 'styled-components';
import Bitcoin from '../Pictures/bitcoin.png'


export default function Aboutimage() {
  return (
    <Container>
<img src={Bitcoin} alt=' ' className='AboutImg' />
    </Container>
  )
}


const Container =styled.div`

.AboutImg{
  height:70rem;
width:auto;

}

@media screen and (max-width: 768px){
.AboutImg{
  height:100rem;
  width:48rem;
}
@media screen and (max-width: 416px){
  .AboutImg{
  height:100rem;
  width:26rem;
}
}

} 
`;
