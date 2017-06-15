import React from 'react';
import AddItems from './AddItems';

class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, key) {
    const item = this.props.items[key];
    const updatedItem = {...item, [e.target.name]: e.target.value}
    this.props.updateItem(key, updatedItem);
  }

  renderInventory(key) {
    const item = this.props.items[key];

    return(
      <div className='item-edit' key={key}>
        <input type="text" name="name" value={item.name} placeholder="Item Name" onChange={(e) => this.handleChange(e, key)}/>
        <input type="text" name="price" value={item.price} placeholder="Item Price" onChange={(e) => this.handleChange(e, key)}/>
        <select type="text" name="status" value={item.status} placeholder="Item Status" onChange={(e) => this.handleChange(e, key)}>
          <option value="available">In Stock</option>
          <option value="unavailable">OUt of Stock</option>
        </select>
        <textarea type="text" name="desc" value={item.desc} placeholder="Item Description">onChange={(e) => this.handleChange(e, key)}</textarea>
        <input type="text" name="image" value={item.image} placeholder="Item Image"onChange={(e) => this.handleChange(e, key)}/>
      </div>
    )
  }
  render () {
    return (
      <div>
      <h1> Inventory </h1>
      {Object.keys(this.props.items).map(this.renderInventory)}
      <AddItems addItem={this.props.addItem} />
      </div>

    )
  }
}

export default Inventory;
