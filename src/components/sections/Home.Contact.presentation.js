import React from 'react';

export default function (props) {
  return (
    <section className="section-contact">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <img className="thumbnail" src={ require('@/assets/images/handshake.jpg') } alt=""/>
          </div>
          <form className="col-xl-6">
            <h3 className="section-title">We'd love to hear from you.</h3>
            <p className="text">Let us know if you are interested to participate in our beta program.<br />We will then reach out to understand more about your business and requirements.</p>

            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Ex: Mai Anh Kha" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
