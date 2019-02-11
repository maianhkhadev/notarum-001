import React from 'react';

export default function (props) {
  return (
    <section className="section-contact">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <h3 className="section-title">We'd love to hear from you.</h3>
            <p className="text">Let us know if you are interested to participate in our beta program.<br />We will then reach out to understand more about your business and requirements.</p>

            <img className="thumbnail" src={ require('@/assets/images/section-contact-thumbnail.svg') } alt=""/>
          </div>
          <form className="col-xl-6">
            <div className="form-group">
              <label id="label-name" htmlFor="field-name">Name</label>
              <input type="text" id="field-name" className="form-control" placeholder="Ex: James Smith" aria-label="name" aria-labelledby="label-name" />
            </div>
            <div className="form-group">
              <label id="label-email" htmlFor="field-email">Email address</label>
              <input type="email" id="field-email" className="form-control" placeholder="Ex: james.smith@gmail.com" aria-label="email" aria-labelledby="label-email" />
            </div>
            <div className="form-group">
              <label id="label-message" htmlFor="field-message">Message</label>
              <textarea id="field-message" className="form-control" rows="5" aria-label="message" aria-labelledby="label-message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
