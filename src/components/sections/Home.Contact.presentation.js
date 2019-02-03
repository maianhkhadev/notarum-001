import React from 'react';

export default function (props) {
  return (
    <section className="section-contact">
      <div className="section-header">
        <h3 className="section-title">Contact Us</h3>
      </div>

      <div className="section-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <h4>We'd love to hear from you.</h4>
              <p>Let us know if you are interested to participate in our beta program. We will then reach out to understand more about your business and requirements.</p>
            </div>
            <form className="col-xl-6">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Ex: Mai Anh Kha" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" className="form-control" placeholder="Ex: Contact" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Message</label>
                <textarea className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
