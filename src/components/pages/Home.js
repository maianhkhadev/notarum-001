import React from 'react';
import Presentation from './Home.presentation';

class Page extends React.Component {

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

export default Page;
