import React from 'react';

class CollectionMan extends React.Component {
  render () {
    return (
      <div>
      <h1> Collection Man </h1>
      </div>
    )
  }
}

//expects a router
CollectionMan.contextTypes = {
  router: React.PropTypes.object
}
export default CollectionMan;
