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
                  <p className="text">Notarum is a modern due diligence workflow tool designed to reduce busywork—so you can focus on the bigger picture.</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
                <div className="col-xl-6">
                  <img className="w-100" src={ require('@/assets/images/section-hero-thumbnail.svg') } alt=""/>
                </div>
              </div>
            </div>
          </section>

          <section className="section-features">
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className="feature">
                    <img className="feature-icon" src={ require('@/assets/images/icon-feature-01.png') } alt=""/>
                    <div className="feature-content">
                      <h4 className="feature-title">Faster Processing</h4>
                      <p className="feature-text">Supercharge your processes with goal-centric planning</p>
                    </div>
                  </div>
                  <div className="feature">
                    <img className="feature-icon" src={ require('@/assets/images/icon-feature-02.png') } alt=""/>
                    <div className="feature-content">
                      <h4 className="feature-title">Primary Source Verification</h4>
                      <p className="feature-text">Use data with verifiable provenance in your decisioning</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="feature">
                    <img className="feature-icon" src={ require('@/assets/images/icon-feature-03.png') } alt=""/>
                    <div className="feature-content">
                      <h4 className="feature-title">Smart Screening</h4>
                      <p className="feature-text">Cut through the noise and reduce false positives</p>
                    </div>
                  </div>
                  <div className="feature">
                    <img className="feature-icon" src={ require('@/assets/images/icon-feature-04.png') } alt=""/>
                    <div className="feature-content">
                      <h4 className="feature-title">Collaborative Workflow</h4>
                      <p className="feature-text">Keep everyone on the same page with new ways to easily share work and collect feedback</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 align-self-center">
                  <h3 className="section-title">Where your due diligence work thrives</h3>
                  <p className="text">Notarum makes performing due diligence analysis and sharing work with team mates easier than ever.</p>
                </div>
              </div>
            </div>
          </section>

          <SectionServices />

          <section className="section-mission">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 mx-auto text-center">
                  <h4 className="section-title">Our AI platform and workflow collaboration tool automates ~90% of the current process, reducing cost and risk—a rare win-win</h4>
                  <p className="text">We aim to service a global web of millions of interconnected companies whose due diligence needs are entirely automated—flagging and removing suspect characters and eliminating companies’ regulatory risk.</p>
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
