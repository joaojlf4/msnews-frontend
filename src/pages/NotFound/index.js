import React from 'react';

import Top from '../../components/Top';
import Footer from '../../components/Footer';
import { Container } from './styles';

export default function NotFound() {
  return (
    <>
      <Top></Top>
      <Container>
        <img src="https://static.thenounproject.com/png/75231-200.png" alt="?"/>
        <h1>404</h1>
        <p>Página não encontrada</p>
      </Container>
      <Footer></Footer>
    </>
  );
}
