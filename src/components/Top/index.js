import React from 'react';
import { Container, Navigation, Logo } from './styles';
import { Link } from 'react-router-dom';

export default function Header({ page='' }) {

  return (
      <>
        <div style={{
          zIndex: 1,
          position: "fixed",
          width: '100%',
          top: 0,
          height: '13vh',
          background: 'rgba(240, 240, 240, 0.7)',
          filter: 'blur(5px)',
        }}></div>
        <Container >
          <Navigation>
            <Logo>
              <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
                <span>MS</span>
                News {page === 'write' ? '| Draft' : ''}
              </Link> 
            </Logo>
          </Navigation>
        </Container>
    </>
  );
}
