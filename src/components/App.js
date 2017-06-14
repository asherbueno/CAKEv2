import React, { Component } from 'react';
import Hero from './Hero';
import Cart from './Cart';
import Inventory from './Inventory';
import Origin from './Origin';
import CollectionMan from './CollectionMan';
import Items from './Items';

class App extends Component {
  constructor(){
    super();

    this.addItem = this.addItem.bind(this);
    //initialize state
    this.state = {
      items: {},
      order: {}
    };
  }

  addItem(item) {
    const items = {...this.state.items};
    const timestamp = Date.now();
    items[`item-${timestamp}`] = item;
    this.setState({items})
  }

  render() {
    return (
      <div className="hero">
        <Hero tagline="then a hero comes along" />
        <ul className="list-of-items">
          {
            Object
            .keys(this.state.items)
            .map(key => <Items key={key} details={this.state.items[key]} />)
          }
        </ul>
        <Cart />
        <Inventory addItem={this.addItem} />
        <Origin />
        <CollectionMan />
      </div>
    );
  }
}

export default App;
