import React, { Component } from 'react';
import Hero from './Hero';
import Cart from './Cart';
import Inventory from './Inventory';
import Origin from './Origin';
import CollectionMan from './CollectionMan';
import Items from './Items';
import base from '../Base';

class App extends Component {
  constructor(){
    super();

    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
    //initialize state
    this.state = {
      items: {},
      order: {}
    };
  }

  // componentWillMount(){
  //   const localStorageRef = localStorage.getItem(`order-${this.props.params.order}`);
  //     if(localStorageRef) {
  //       this.setstate({
  //         order: localStorageRef
  //       });
  //     }
  // }
  //
  // componentWillUnmount(){
  // }
  //
  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem(`order-${this.props.params.order}`, JSON.stringify(nextState.order));
  // }

  addItem(item) {
    const items = {...this.state.items};
    const timestamp = Date.now();
    items[`item-${timestamp}`] = item;
    this.setState({items})
  }

  updateItem(key, updatedItem) {
    const items = {...this.state.items};
    items[key] = updatedItem;
    this.setState({items})
  }
  addToCart(key){
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  render() {
    return (
      <div className="hero">
        <Hero tagline="then a hero comes along" />
        <ul className="list-of-items">
          {
            Object
            .keys(this.state.items)
            .map(key => <Items key={key} index={key} details={this.state.items[key]} addToCart={this.addToCart} />)
          }
        </ul>
        <Cart
          items={this.state.items}
          order={this.state.order}
          params={this.state.params}
        />
        <Inventory
          addItem={this.addItem}
          items={this.state.items}
          updateItem={this.updateItem}
        />
        <Origin />
        <CollectionMan />
      </div>
    );
  }
}

export default App;
