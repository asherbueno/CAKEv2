import React from 'react';
import { formatPrice } from '../helpers'

class Items extends React.Component {
  render() {
    const { details } = this.props;
    return (
    <li className="item-list">
      <img src={details.image} alt={details.name} />
      <h3 className="item-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span></h3>
        <p>{details.desc}</p>
        <button>Add To Cart</button>
    </li>
    )
  }
}

export default Items;
