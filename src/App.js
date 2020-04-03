import React, { Component } from 'react';
import './resources/styles.css';


import Header   from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfO from './components/venueNfO';

class App extends Component {
  render() {
    return(
    <div className='App' 
      style={{height: '1500px', backgroundColor: 'blue'}}>
      <Header/>
      <Featured/>
      <VenueNfO/>
    </div>
    )
  }
}

export default App;
