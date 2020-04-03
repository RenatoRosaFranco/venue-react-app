import React, { Component } from 'react';
import './resources/styles.css';

import Header    from './components/header_footer/Header';
import Featured  from './components/featured';
import VenueNfO  from './components/venueNfO';
import HighLight from './components/Highlights';
import Pricing   from './components/Pricing';

class App extends Component {
  render() {
    return(
    <div className='App' 
      style={{height: '1500px', backgroundColor: 'blue'}}>
      <Header/>
      <Featured/>
      <VenueNfO/>
      <HighLight/>
      <Pricing/>
    </div>
    )
  }
}

export default App;
