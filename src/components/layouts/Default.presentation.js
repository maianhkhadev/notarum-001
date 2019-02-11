import React from 'react';

export default function (props) {
  return (
    <div className="layout layout-default">
      <header className="layout-header">
        <div className="container">
          <nav className="navbar">
            <a className="navbar-brand" href="index.html">
              <span>N</span>otarum
            </a>
            <form className="form-inline">
              <button className="btn btn-outline-dark">Sign in</button>
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
                  <a className="footer-link" href="index.html">Facebook</a>
                </li>
                <li className="footer-item">
                  <a className="footer-link" href="index.html">Twitter</a>
                </li>
                <li className="footer-item">
                  <a className="footer-link" href="index.html">Linkedin</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-6">
              <h5 className="footer-title">Singapore</h5>
              <div className="address">32 Carpenter Street 059911 Singapore</div>
            </div>
            <div className="col-xl-3 col-6">
              <h5 className="footer-title">Give us a ring</h5>

              <ul className="footer-nav">
                <li className="footer-item">
                  <a className="footer-link" href="tel:+6591132186">+65 9113 2186</a>
                </li>
              </ul>
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
