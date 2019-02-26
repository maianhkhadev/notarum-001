import React from 'react';

export default function (props) {
  return (
    <section className="section-services">
      <div className="container">
        <div className="section-header">
          <div className="row">
            <div className="col-xl-8 mx-auto text-center">
              <h2 className="section-title">We service <span className="word">all companies</span> across <span className="word">all industries</span></h2>
              <p className="text">From fund management to legal and professional services, our platform empowers your compliance teams to make accurate, compliant decisions.</p>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-xl-6">
              <img className="section-thumbnail" src={ require('@/assets/images/section-services-thumbnail.svg') } alt="" />
            </div>
            <div className="col-xl-6 align-self-center">
              <div className="service">
                <figure className="">
                  <img className="" src={ require('@/assets/images/icon-service-01.png') } alt="" />
                </figure>
                <div className="service-content">
                  <h4 className="service-name">Efficient</h4>
                  <p className="service-text">Our customisable workflow means faster onboarding and monitoring, and easy collaboration between teams</p>
                </div>
              </div>

              <div className="service">
                <figure className="">
                  <img className="" src={ require('@/assets/images/icon-service-02.png') } alt="" />
                </figure>
                <div className="service-content">
                  <h4 className="service-name">Effective</h4>
                  <p className="service-text">Rely on primary source data for continuous monitoring so you know exactly who you are doing business with</p>
                </div>
              </div>

              <div className="service">
                <figure className="">
                  <img className="" src={ require('@/assets/images/icon-service-03.png') } alt="" />
                </figure>
                <div className="service-content">
                  <h4 className="service-name">Compliant</h4>
                  <p className="service-text">Smart screening and reports ensure your organisation adopts a risk-based approach to customer due diligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
