import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Route path="/" component={App} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/residential" component={Residential} />
      <Route exact path="/commercial" component={Commercial} />
      <Route exact path="/contact" component={Contact} />
    </React.Fragment>
  </Router>
document.getElementById('root'));

serviceWorker.unregister();
