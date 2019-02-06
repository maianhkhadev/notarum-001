import React from 'react';
import Layout from '@/components/layouts/Default';
//Sections
import SectionServices from '@/components/sections/Home.Services';
import SectionContact from '@/components/sections/Home.Contact';

export default function (props) {
  return (
    <Layout>
      <div className="page page-home">
        <div className="page-header">
        </div>

        <div className="page-content">
          <section className="section-hero">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 align-self-center">
                  <h1 className="section-title">Automating corporate due diligence</h1>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque efficitur turpis, vitae dictum dolor tristique in. Mauris tristique id urna at cursus.</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
                <div className="col-xl-6">
                  <img className="w-100" src={ require('@/assets/images/process.png') } alt=""/>
                </div>
              </div>
            </div>
          </section>

          <section className="section-features">
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className="feature">
                    <img className="feature-icon" src={ require('@/assets/images/login.png') } alt=""/>
                    <div className="feature-content">
                      <h4 className="feature-title">Faster Processing</h4>
                      <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div className="feature">
                    <img className="feature-icon" src={ require('@/assets/images/login.png') } alt=""/>
                    <div className="feature-content">
                      <h4 className="feature-title">Primary Source Verification</h4>
                      <p className="feature-text">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="feature">
                    <img className="feature-icon" src={ require('@/assets/images/login.png') } alt=""/>
                    <div className="feature-content">
                      <h4 className="feature-title">Smart Screening</h4>
                      <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div className="feature">
                    <img className="feature-icon" src={ require('@/assets/images/login.png') } alt=""/>
                    <div className="feature-content">
                      <h4 className="feature-title">Collaborative Workflow</h4>
                      <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 align-self-center">
                  <h3 className="section-title">Lorem ipsum dolor sit amet consectetur</h3>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque efficitur turpis, vitae dictum dolor tristique in. Mauris tristique id urna at cursus.</p>
                </div>
              </div>
            </div>
          </section>

          <SectionServices />

          <section className="section-mission">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 mx-auto text-center">
                  <h4 className="section-title">Our AI platform and workflow tools automate ~90% of the current process reducing cost and risk, a rare win:win</h4>
                  <p className="text">We aim to service a global web of millions of interconnected companies, whose due diligence needs are entirely automated, suspect characters are flagged and removed, and companies’ regulatory risk eliminated.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-tutorial">
            <h2 className="section-title">Easy to get started, Four Step Process</h2>

            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="step">
                    <img className="icon" src={ require('@/assets/images/login.png') } alt=""/>
                    <h4 className="title"><strong>01.</strong> Access Dashboard</h4>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et aliquet neque, id pretium risus.</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="step">
                    <img className="icon" src={ require('@/assets/images/login.png') } alt=""/>
                    <h4 className="title"><strong>02.</strong> Lorem ipsum dolor</h4>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et aliquet neque, id pretium risus.</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="step">
                    <img className="icon" src={ require('@/assets/images/login.png') } alt=""/>
                    <h4 className="title"><strong>03.</strong> Lorem ipsum dolor</h4>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et aliquet neque, id pretium risus.</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="step">
                    <img className="icon" src={ require('@/assets/images/login.png') } alt=""/>
                    <h4 className="title"><strong>04.</strong> Lorem ipsum dolor</h4>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et aliquet neque, id pretium risus.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SectionContact />
        </div>

        <div className="page-footer">
        </div>
      </div>
    </Layout>
  );
}
