import React from 'react';
import NavBar from './components/NavBar'
import EBLogo from './images/EBLogo.jpg';


function App() {
  return (
    <div className="App">
      <img className="EB-logo" src={EBLogo} alt="Erin Boyle Design Logo"/>
      <header className="Header">
        Erin Boyle Design
        <hr className="Header-rule"/>
        <header className="Header-city">Los Angeles</header>
      </header>
      <NavBar />
    </div>
  );
}

export default App;
