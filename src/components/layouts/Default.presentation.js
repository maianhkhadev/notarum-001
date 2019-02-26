import React from 'react';

export default function (props) {
  return (
    <div className="layout layout-default">

      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              We use cookies to make interactions with our websites and services easy and meaningful, to better understand how they are used and to tailor advertising. You can read more and make your cookie choices
            </div>
            <div className="col-xl-2">
              <button className="btn btn-primary" data-dismiss="alert">Got it</button>
            </div>
          </div>
        </div>
      </div>

      <header className="layout-header">
        <div className="container">
          <nav className="navbar">
            <a className="navbar-brand" rel="noopener noreferrer" href="https://notarum.com/" target="_blank">
              <span>N</span>otarum
            </a>

            <form className="form-inline">
              <a className="btn btn-outline-dark" rel="noopener noreferrer" href="https://app.notarum.com/" target="_blank">Sign in</a>
            </form>
          </nav>
        </div>
      </header>

      <main className="layout-main">
        {props.children}
      </main>

      <footer className="layout-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-6">
              <h5 className="footer-title">Quicklinks</h5>

              <ul className="footer-nav">
                <li className="footer-item">
                  <a className="footer-link" href="index.html">Support</a>
                </li>
                <li className="footer-item">
                  <a className="footer-link" href="index.html">Terms</a>
                </li>
                <li className="footer-item">
                  <a className="footer-link" href="index.html">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-6">
              <h5 className="footer-title">Get Social</h5>

              <ul className="footer-nav">
                <li className="footer-item">
                  <a className="footer-link" rel="noopener noreferrer" href="https://twitter.com/notarum" target="_blank">Twitter</a>
                </li>
                <li className="footer-item">
                  <a className="footer-link" rel="noopener noreferrer" href="https://www.linkedin.com" target="_blank">Linkedin</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-6">
              <h5 className="footer-title">Give us a ring</h5>

              <ul className="footer-nav">
                <li className="footer-item">
                  <a className="footer-link" href="tel:+6591132186">+65 9113 2186</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-6">
              <h5 className="footer-title">Singapore</h5>
              <div className="address">32 Carpenter Street 059911 Singapore</div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <span className="mr-2">Copyright 2019 Notarum</span>
          <span>All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}
