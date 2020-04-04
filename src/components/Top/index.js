import React from 'react';
import { Container, Navigation, Logo } from './styles';
import { Link } from 'react-router-dom';

export default function Header({ page='' }) {

  // const [on, setOn] = useState(false);

  // function handleOverflow(){
  //   if(document.body.style.overflow === 'hidden'){
  //     document.body.style.overflow = 'initial'
  //   }else{
  //     document.body.style.overflow = 'hidden'
  //   }
  // }

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
            {/* <ul>
              <li><Link>Tricot</Link></li>
              <li><Link>Turismo</Link></li>
              <li><Link>Educação</Link></li>
            </ul>
            <Hamburger className="hamburger" onClick={e => {setOn(true); handleOverflow() }}>
              <div></div>
              <div></div>
              <div></div>
            </Hamburger> */}
          </Navigation>
        </Container>
        {/* <ResponsiveNav style={on ? { display: 'flex' } : { display: 'none' }}>
          <div>
            <Hamburger className="on" onClick={() => {setOn(false); handleOverflow()}}>
              <div></div>
              <div></div>
              <div></div>
            </Hamburger>
          </div>
        <ul>
          <li><Link>Tricot</Link></li>
          <li><Link>Turismo</Link></li>
          <li><Link>Educação</Link></li>
        </ul>
      </ResponsiveNav> */}
    </>
  );
}
