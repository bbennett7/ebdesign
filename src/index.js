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
import Bayridge from './components/Properties/Bayridge';
import Bayshore from './components/Properties/Bayshore';
import Chadwick from './components/Properties/Chadwick';
import Corsica from './components/Properties/Corsica';
import Jim from './components/Properties/Jim';
import Lexington from './components/Properties/Lexington';
import Parc5 from './components/Properties/Parc5';
import Rockwood from './components/Properties/Rockwood';
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
      <Route exact path="/commercial/Bayridge" component={Bayridge} />
      <Route exact path="/commercial/Bayshore" component={Bayshore} />
      <Route exact path="/commercial/The-Chadwick" component={Chadwick} />
      <Route exact path="/commercial/Corsica" component={Corsica} />
      <Route exact path="/commercial/Jim" component={Jim} />
      <Route exact path="/commercial/The-Lexington" component={Lexington} />
      <Route exact path="/commercial/Parc-5" component={Parc5} />
      <Route exact path="/commercial/Rockwood" component={Rockwood} />
      <Route exact path="/contact" component={Contact} />
    </React.Fragment>
  </Router>,
document.getElementById('root'));

serviceWorker.unregister();
