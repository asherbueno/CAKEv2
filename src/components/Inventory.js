import React from 'react';
import AddItems from './AddItems';

class Inventory extends React.Component {
  render () {
    return (
      <div>
      <h1> Inventory </h1>
      <AddItems addItem={this.props.addItem} />
      </div>

    )
  }
}

export default Inventory;
