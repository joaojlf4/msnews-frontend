import React from 'react';
import GlobalStyle from './styles/global';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    window.open(process.env.REACT_APP_NEXT_URL, '_self');
  }, [])

  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default App;
