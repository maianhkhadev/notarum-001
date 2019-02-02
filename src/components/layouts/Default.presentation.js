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
                    <a className="footer-link" href="#">Lorem Ipsum</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="#">Lorem Ipsum</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="#">Lorem Ipsum</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3">
                <h5 className="footer-title">Resources</h5>

                <ul className="footer-nav">
                  <li className="footer-item">
                    <a className="footer-link" href="#">Docs</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="#">Guides</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="#">Release Notes</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="#">Blogs</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3">
                <h5 className="footer-title">Company</h5>

                <ul className="footer-nav">
                  <li className="footer-item">
                    <a className="footer-link" href="#">About Us</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="#">Contact Us</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="#">Career</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="#">Customers</a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3">
                <h5 className="footer-title">Quicklinks</h5>

                <ul className="footer-nav">
                  <li className="footer-item">
                    <a className="footer-link" href="#">Support</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="#">Terms</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="#">Privacy Policy</a>
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
                    <a className="footer-link" href="#">Facebook</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="#">Twitter</a>
                  </li>
                  <li className="footer-item">
                    <a className="footer-link" href="#">Linkedin</a>
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
