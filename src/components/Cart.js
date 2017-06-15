import React from 'react';
import { formatPrice } from '../helpers';

class Cart extends React.Component {
  constructor() {
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }
  renderOrder(key) {
    const item = this.props.item[key];
    const count = this.props.order[key];

    if(!item || item.status === 'unavailable') {
      return <li key={key}>Sorry, {item ? item.name : 'item'} is out of stock!</li>
    }

    return (
      <li key={key}>
        <span>{count}QTY{item.name}</span>
        <span className="price">{formatPrice(count * item.price)}</span>
      </li>
    )
  }

  render () {
    const itemId = Object.keys(this.props.order);
    const total = itemId.reduce((prevTotal, key) => {
      const item = this.props.item[key];
      const count = this.props.order[key];
      const isAvailable = item && item.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * item.price || 0)
      }
      return prevTotal;
    },0);
    return (
      <div className="order-wrap">
        <h2>Shopping Cart</h2>
        <ul className="order">
        {itemId.map(this.renderOrder)}
        <li className="total">
        <strong>Total:</strong>
        {formatPrice(total)}
        </li>
        </ul>
      </div>
    )
  }
}

export default Cart;
