import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Write from './pages/Write';
import NotFound from './pages/NotFound';
import NewPage from './pages/New';
import Edit from './pages/Edit';

function App() {

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/news/:title" children={<NewPage />}/>
          <Route exact path="/write" component={Write} />
          <Route exact path="/edit/:title" component={Edit} />
          <Route exact path="/nao-encontrado" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
