import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';

import Header    from './components/header_footer/Header';
import Featured  from './components/featured';
import VenueNfO  from './components/venueNfO';
import HighLight from './components/Highlights';
import Pricing   from './components/Pricing';
import Location  from './components/Location';
import Footer    from './components/header_footer/Footer';

class App extends Component {
  render() {
    return(
    <div className='App' 
      style={{height: '1500px', backgroundColor: 'blue'}}>
      <Header/>
      
      <Element name="featured">
        <Featured/>
      </Element>
      
      <Element name="vuenfo">
        <VenueNfO />
      </Element>

      
      <Element name="highlights">
        <HighLight/>
      </Element>
      
      <Element name="pricing">
        <Pricing/>
      </Element>
      
      <Element name="location">
        <Location/>
      </Element>

      <Footer/>
    </div>
    )
  }
}

export default App;
