import React, { Component } from 'react';

class Layout extends Component {

  render() {
    return (
      <div className="layout layout-default">
        <h1 className="hidden">Notarum</h1>

        <header className="layout-header">
        </header>

        <main className="layout-main">
          {this.props.children}
        </main>

        <footer className="layout-footer">
        </footer>
      </div>
    );
  }
}

export default Layout;
