import React from 'react';

import { Container, Logo } from './styles';

export default function Footer() {
  return (
    <Container>
      <Logo href="/" style={{ textDecoration: 'none', color: '#e5e5e5' }}>
        <span>MS</span>
        News
      </Logo>
      {/* <div>
        <p>Contate nos por nossas redes sociais:</p>
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div> */} 
      <p>Copyright © 2020</p>
    </Container>
  );
}
