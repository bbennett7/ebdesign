import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Backyard from './components/Residential-backyard';
import Bathroom from './components/Residential-bathroom';
import DiningRoom from './components/Residential-dining-room';
import Kitchen from './components/Residential-kitchen';
import LivingRoom from './components/Residential-living-room';
import Bayshore from './components/Bayshore';
import Chadwick from './components/Chadwick';
import Corsica from './components/Corsica';
import Harborview from './components/Harborview'
import Lexington from './components/Lexington';
import Parc5 from './components/Parc5';
import Portrero from './components/Portrero';
import Rockwood from './components/Rockwood';
import SherwoodCrossing from './components/SherwoodCrossing';
import Townhomes from './components/Townhomes';
import Vicino from './components/Vicino';
import Waterleaf from './components/Waterleaf';
import Waterscape from './components/Waterscape';
import Barbecue from './components/Multifamily-barbecue';
import Exterior from './components/Multifamily-exterior';
import FitnessCenter from './components/Multifamily-fitness-center';
import GameRoom from './components/Multifamily-game-room';
import LeasingOffice from './components/Multifamily-leasing-office';
import ClubRoom from './components/Multifamily-clubroom';
import OutdoorLounge from './components/Multifamily-outdoor-lounge';
import Pool from './components/Multifamily-pool';
import Contact from './components/Contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Route path="/" component={App} />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/residential/backyard" component={Backyard} />
      <Route exact path="/residential/bathroom" component={Bathroom} />
      <Route exact path="/residential/dining-room" component={DiningRoom} />
      <Route exact path="/residential/kitchen" component={Kitchen} />
      <Route exact path="/residential/living-room" component={LivingRoom} />
      <Route exact path="/multi-family/Bayshore" component={Bayshore} />
      <Route exact path="/multi-family/The-Chadwick" component={Chadwick} />
      <Route exact path="/multi-family/Corsica" component={Corsica} />
      <Route exact path="/multi-family/Harborview" component={Harborview} />
      <Route exact path="/multi-family/The-Lexington" component={Lexington} />
      <Route exact path="/multi-family/Parc-5" component={Parc5} />
      <Route exact path="/multi-family/Portrero" component={Portrero} />
      <Route exact path="/multi-family/Rockwood" component={Rockwood} />
      <Route exact path="/multi-family/Sherwood-Crossing" component={SherwoodCrossing} />
      <Route exact path="/multi-family/Townhomes" component={Townhomes} />
      <Route exact path="/multi-family/Vicino" component={Vicino} />
      <Route exact path="/multi-family/Waterleaf" component={Waterleaf} />
      <Route exact path="/multi-family/Waterscape" component={Waterscape} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/multi-family/barbecue" component={Barbecue} />
      <Route exact path="/multi-family/exterior" component={Exterior} />
      <Route exact path="/multi-family/fitness-center" component={FitnessCenter} />
      <Route exact path="/multi-family/game-room" component={GameRoom} />
      <Route exact path="/multi-family/leasing-office" component={LeasingOffice} />
      <Route exact path="/multi-family/club-room" component={ClubRoom} />
      <Route exact path="/multi-family/outdoor-lounge" component={OutdoorLounge} />
      <Route exact path="/multi-family/pool" component={Pool} />
    </React.Fragment>
  </Router>,
document.getElementById('root'));

serviceWorker.unregister();
