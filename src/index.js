import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home'
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
  <App/>
  </Router>),
  // <App/>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
