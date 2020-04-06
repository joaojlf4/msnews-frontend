import React from 'react';

import Top from '../../components/Top';
import Footer from '../../components/Footer';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

export default function NotFound() {
  return (
    <>
      <Top></Top>
      <Container>
        <img src="https://static.thenounproject.com/png/75231-200.png" alt="?"/>
        <h1>404</h1>
        <p>Página não encontrada</p>
        <Link to="/"><ArrowLeft size={25} color="#666"/>Voltar a página inicial</Link>
      </Container>
      <Footer></Footer>
    </>
  );
}
