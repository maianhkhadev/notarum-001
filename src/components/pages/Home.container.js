import React from 'react';
import Home from './Home';

class Page extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      test: 'Perfect SaaS Application Template'
    };
  }

  render() {
    let props = {...this.state, ...this.props};

    return (
      <Home {...props} />
    );
  }
}

export default Page;
