import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Render } from 'react-router-dom';

import './index.css';
import App from './App';

import Home from './components/Home'
import About from './components/About'
import Residential from './components/Residential'
import Commercial from './components/Commercial'
import Contact from './components/Contact'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Route path="/" component={App} />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/residential" component={Residential} />
      <Route exact path="/commercial" component={Commercial} />
      <Route exact path="/contact" component={Contact} />
    </React.Fragment>
  </Router>,
document.getElementById('root'));

serviceWorker.unregister();
