import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import Write from './pages/Write';
import NotFound from './pages/NotFound';
import NewPage from './pages/New';

function App() {

  return (
    <>
      <GlobalStyle />
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/news/:title" children={<NewPage />}/>
        <Route exact path="/write" component={Write} />
        <Route exact path="/nao-encontrado" component={NotFound} />
      </Router>
    </>
  );
}

export default App;
