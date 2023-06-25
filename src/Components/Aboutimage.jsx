import React from 'react'
import styled from 'styled-components';
import bitcoin from '../Pictures/bitcoin.png';


export default function Aboutimage() {
  return (
    <Container>

<img className='bitscoin' src={bitcoin} alt='bitCoin' />
    </Container>
  )
}


const Container = styled.div`
.bitscoin{
    height:100%;
    width:100%;
    
}
`;