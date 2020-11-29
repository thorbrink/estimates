import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link className="App-link" to="/">Home</Link>
          <Link className="App-link" to="/testroute">Testroute</Link>
        </header>
      </div>
      <Switch>
          <Route path="/">
            Home
          </Route>
          <Route path="/testroute">
            Testroute
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
