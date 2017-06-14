import React from 'react';

class AddItems extends React.Component {
  newItem(event) {
    event.preventDefault();
    const item = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
  }
  this.props.addItem(item)
  this.itemForm.reset();
}

  render () {
    return (
      <form ref={(input) => this.itemForm = input} className="add-items" onSubmit={(e) => this.newItem(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Item Name" />
        <input ref={(input) => this.price = input} type="text" placeholder="Item Price" />
        <select ref={(input) => this.status = input}>
          <option value="available">In Stock</option>
          <option value="unavailable">Out of Stock</option>
        </select>
        <textarea ref={(input) => this.desc = input} placeholder="Item Description"></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="Item Image" />
        <button type="submit">Add Item</button>
      </form>

    )
  }
}

export default AddItems;
