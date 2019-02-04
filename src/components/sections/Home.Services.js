import React from 'react';

export default function (props) {
  return (
    <section className="section-services">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <img className="thumbnail" src={ require('@/assets/images/cm-laptop-720x425.png') } alt="" />
          </div>
          <div className="col-xl-6">
            <h2 className="section-title">Lorem ipsum dolor sit amet consectetur</h2>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque efficitur turpis, vitae dictum dolor tristique in. Mauris tristique id urna at cursus.</p>

            <div className="media">
              <figure className="">
                <img className="" src={ require('@/assets/images/icon-service-01.png') } alt="" />
              </figure>
              <div className="media-body">
                <h5 className="mt-0">Efficient</h5>
                Our customisable workflow means faster onboarding and monitoring, and easy collaboration between teams
              </div>
            </div>

            <div className="media">
              <figure className="">
                <img className="" src={ require('@/assets/images/icon-service-01.png') } alt="" />
              </figure>
              <div className="media-body">
                <h5 className="title">Effective</h5>
                Rely on primary source data for continuous monitoring so you know exactly who you are doing business with
              </div>
            </div>

            <div className="media">
              <figure className="">
                <img className="" src={ require('@/assets/images/icon-service-01.png') } alt="" />
              </figure>
              <div className="media-body">
                <h5 className="mt-0">Compliant</h5>
                Smart screening and reports ensure your organisation adopts a risk-based approach to customer due diligence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
