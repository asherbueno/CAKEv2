import React from 'react';
import { formatPrice } from '../helpers';
import Items from './Items'

class Cart extends React.Component {
  constructor() {
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }
  renderOrder(key) {
    const items = this.props.items[key];
    const count = this.props.order[key];

    if(!items || items.status === 'unavailable') {
      return <li key={key}>Sorry, {items ? items.name : 'items'} is out of stock!</li>
    }

    return (
      <li key={key}>
        <span>{count}x{items.name}</span>
        <span className="price">{formatPrice(count * items.price)}</span>
      </li>
    )
  }

  render () {
    const itemId = Object.keys(this.props.order);
    const total = itemId.reduce((prevTotal, key) => {
      const items = this.props.items[key];
      const count = this.props.order[key];
      const isAvailable = items && items.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * items.price || 0)
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
