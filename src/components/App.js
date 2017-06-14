import React, { Component } from 'react';
import Hero from './Hero';
import Cart from './Cart';
import Inventory from './Inventory';
import Origin from './Origin';
import CollectionMan from './CollectionMan';

class App extends Component {
  render() {
    return (
      <div className="hero">
        <Hero tagline="then a hero comes along" />
        <Cart />
        <Inventory />
        <Origin />
        <CollectionMan />
      </div>
    );
  }
}

export default App;
