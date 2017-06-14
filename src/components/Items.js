import React from 'react';
import { formatPrice } from '../helpers'

class Items extends React.Component {
  render() {
    // const details = this.props.details;
    // const index = this.index;
    const { details, index } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add To Cart' : 'Out of Stock!';
    return (
    <li className="item-list">
      <img src={details.image} alt={details.name} />
      <h3 className="item-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span></h3>
        <p>{details.desc}</p>
        <button onClick={() => this.props.addToCart(index)} disabled={!isAvailable}>{buttonText}</button>
    </li>
    )
  }
}

export default Items;
