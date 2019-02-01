import React from 'react';
import Presentation from './Home.Contact.presentation';

class Section extends React.Component {
  render() {
    let props = {...this.state, ...this.props};

    return (
      <Presentation {...props} />
    );
  }
}

export default Section;
