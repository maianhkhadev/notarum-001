import React from 'react';
import Presentation from './Default.presentation';

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let props = {...this.state, ...this.props};

    return (
      <Presentation {...props} />
    );
  }
}

export default Layout;
