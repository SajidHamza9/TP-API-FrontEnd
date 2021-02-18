import React from 'react';
import Nav from './Components/Nav';
import NewsDetails from './Components/NewsDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path='/news/:newsId' component={NewsDetails} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
