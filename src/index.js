import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Render } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Backyard from './components/Properties/Residential-backyard';
import Bathroom from './components/Properties/Residential-bathroom';
import Kitchen from './components/Properties/Residential-kitchen';
import LivingRoom from './components/Properties/Residential-living-room';
import Bayridge from './components/Properties/Bayridge';
import Bayshore from './components/Properties/Bayshore';
import Chadwick from './components/Properties/Chadwick';
import Corsica from './components/Properties/Corsica';
import Lexington from './components/Properties/Lexington';
import Parc5 from './components/Properties/Parc5';
import Rockwood from './components/Properties/Rockwood';
import Vicino from './components/Properties/Vicino';
import Contact from './components/Contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Route path="/" component={App} />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/residential/backyard" component={Backyard} />
      <Route exact path="/residential/bathroom" component={Bathroom} />
      <Route exact path="/residential/kitchen" component={Kitchen} />
      <Route exact path="/residential/living-room" component={LivingRoom} />
      <Route exact path="/multi-family/Bayridge" component={Bayridge} />
      <Route exact path="/multi-family/Bayshore" component={Bayshore} />
      <Route exact path="/multi-family/The-Chadwick" component={Chadwick} />
      <Route exact path="/multi-family/Corsica" component={Corsica} />
      <Route exact path="/multi-family/The-Lexington" component={Lexington} />
      <Route exact path="/multi-family/Parc-5" component={Parc5} />
      <Route exact path="/multi-family/Rockwood" component={Rockwood} />
      <Route exact path="/multi-family/Vicino" component={Vicino} />
      <Route exact path="/contact" component={Contact} />
    </React.Fragment>
  </Router>,
document.getElementById('root'));

serviceWorker.unregister();
