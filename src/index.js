import React from 'react';
import ReactDOM from 'react-dom';import './index.css';
import * as serviceWorker from './serviceWorker';import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'; ReactDOM.render(<App />, document.getElementById('root'));
const Root = () => {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={App} />
          </Switch>
        </Router>
    )
  }
  ReactDOM.render(<Root />, document.getElementById('root'));
  serviceWorker.unregister();
