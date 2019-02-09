import React from 'react';
import Presentation from './Default.presentation';

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    let header = document.querySelector('.layout-header');

    window.addEventListener('scroll', (e) => {
      if(window.scrollY > 0 && header.classList.contains('scrolled') === false) {
        header.classList.add('scrolled')
      }

      if(window.scrollY === 0 && header.classList.contains('scrolled') === true) {
        header.classList.remove('scrolled')
      }
    });
  }


  render() {
    let props = {...this.state, ...this.props};

    return (
      <Presentation {...props} />
    );
  }
}

export default Layout;
