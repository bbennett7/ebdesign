import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Render } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Residential from './components/Residential';
import Commercial from './components/Commercial';
import Chadwick from './components/Properties/Chadwick';
import Jim from './components/Properties/Jim';
import Parc5 from './components/Properties/Parc5';
import Parker from './components/Properties/Parker';
import Rockwood from './components/Properties/Rockwood';
import Silverberg from './components/Properties/Silverberg';
import Contact from './components/Contact';
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
      <Route exact path="/commercial/The-Chadwick" component={Chadwick} />
      <Route exact path="/commercial/Jim" component={Jim} />
      <Route exact path="/commercial/Parc-5" component={Parc5} />
      <Route exact path="/commercial/Parker" component={Parker} />
      <Route exact path="/commercial/Rockwood" component={Rockwood} />
      <Route exact path="/commercial/Silverberg" component={Silverberg} />
      <Route exact path="/contact" component={Contact} />
    </React.Fragment>
  </Router>,
document.getElementById('root'));

serviceWorker.unregister();
