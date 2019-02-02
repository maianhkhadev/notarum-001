import React from 'react';

export default function (props) {
  return (
    <div className="layout layout-default">
      <h1 className="hidden">Notarum</h1>

      <header className="layout-header">
      </header>

      <main className="layout-main">
        {props.children}
      </main>

      <footer className="layout-footer">
        <div className="container">
          <section className="section-01">
            <div className="row">
              <div className="col-xl-3">
                <h5 className="footer-title">Products</h5>

                <ul className="footer-nav">
                  <li className="footer-item">
                    <a className="footer-link" href="index.html">Lorem Ipsum</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="index.html">Lorem Ipsum</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="index.html">Lorem Ipsum</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3">
                <h5 className="footer-title">Resources</h5>

                <ul className="footer-nav">
                  <li className="footer-item">
                    <a className="footer-link" href="index.html">Docs</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="index.html">Guides</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="index.html">Release Notes</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="index.html">Blogs</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3">
                <h5 className="footer-title">Company</h5>

                <ul className="footer-nav">
                  <li className="footer-item">
                    <a className="footer-link" href="index.html">About Us</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="index.html">Contact Us</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="index.html">Career</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="index.html">Customers</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3">
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
            </div>
          </section>

          <section className="section-02">
            <div className="row">
              <div className="col-xl-3">
                <h5 className="footer-title">Get Socials</h5>

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
              <div className="col-xl-3">
                <h5 className="footer-title">Singapore</h5>
                <div className="address">32 Carpenter Street 059911 Singapore</div>
              </div>
              <div className="col-xl-3">
                <h5 className="footer-title">Vietnam</h5>
                <div className="address">32 Carpenter Street 059911 Singapore</div>
              </div>
              <div className="col-xl-3">
              </div>
            </div>
          </section>
        </div>

        <div className="copyright">
          <span>Copyright 2018 Notarum</span>
          <span>All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}
