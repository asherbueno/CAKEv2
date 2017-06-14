import React from 'react';

class AddItems extends React.Component {
  render () {
    return (
      <form className="add-items">
        <input type="text" placeholder="Item Name" />
      </form>

    )
  }
}

export default AddItems;
