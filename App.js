import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import Games from './pages/Games';
import NewGame from './pages/NewGame';
import Rankings from './pages/Rankings';
import Statistics from './pages/Statistics';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={SplashScreen} />
        <Route path="/home" component={Home} />
        <Route path="/games" component={Games} />
        <Route path="/new-game" component={NewGame} />
        <Route path="/ranking" component={Rankings} />
        <Route path="/statistics" component={Statistics} />
      </Switch>
    </Router>
  );
}

export default App;
