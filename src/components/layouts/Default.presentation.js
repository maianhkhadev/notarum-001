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
          <section className="">
            <div className="row">
              <div className="col-xl-3">
                dasdas
              </div>
              <div className="col-xl-3">
              </div>
              <div className="col-xl-3">
              </div>
              <div className="col-xl-3">
              </div>
            </div>
          </section>

          <section className="">
            <div className="col-xl-3">
            </div>
            <div className="col-xl-3">
            </div>
            <div className="col-xl-3">
            </div>
            <div className="col-xl-3">
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
