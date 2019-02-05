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
                <div className="col-xl-6">
                  <h2 className="section-title">Automating corporate due diligence</h2>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus magna a lacinia tempor.</p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </section>

          <section className="section-feature-01">
            <div className="container">
              <div className="row">
                <div className="col-xl-7">
                  <h3 className="section-title">Connecting the Things As a Most Advanced Solution</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque efficitur turpis, vitae dictum dolor tristique in. Mauris tristique id urna at cursus. Aliquam maximus, ligula nec commodo maximus, felis metus sagittis ligula, lobortis consequat ante risus ut elit.</p>

                  <div className="row">
                    <div className="col-xl-6">
                      <ul>
                        <li>Ut lacinia ligula tristique tempus.</li>
                        <li>In ornare nisl vitae pulvinar posuere.</li>
                      </ul>
                    </div>
                    <div className="col-xl-6">
                      <ul>
                        <li>In et orci sit amet leo consequat.</li>
                        <li>Nullam pellentesque arcu vitae congue.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <img className="w-100" src={ require('@/assets/images/features1.png') } alt=""/>
                </div>
              </div>
            </div>
          </section>

          <section className="section-feature-02">
            <div className="container">
              <div className="row">
                <div className="col-xl-5">
                  <img className="w-100" src={ require('@/assets/images/features2.png') } alt=""/>
                </div>
                <div className="col-xl-7">
                  <h3 className="section-title">Exploring the Possibilities in Mobility Networks</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque efficitur turpis, vitae dictum dolor tristique in. Mauris tristique id urna at cursus. Aliquam maximus, ligula nec commodo maximus, felis metus sagittis ligula, lobortis consequat ante risus ut elit.</p>

                  <div className="row">
                    <div className="col-xl-6">
                      <ul>
                        <li>Ut lacinia ligula tristique tempus.</li>
                        <li>In ornare nisl vitae pulvinar posuere.</li>
                      </ul>
                    </div>
                    <div className="col-xl-6">
                      <ul>
                        <li>In et orci sit amet leo consequat.</li>
                        <li>Nullam pellentesque arcu vitae congue.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-feature-03">
            <div className="container">
              <div className="row">
                <div className="col-xl-7">
                  <h3 className="section-title">Best Customer Support and Always Best Solutions in Hand</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque efficitur turpis, vitae dictum dolor tristique in. Mauris tristique id urna at cursus. Aliquam maximus, ligula nec commodo maximus, felis metus sagittis ligula, lobortis consequat ante risus ut elit.</p>

                  <div className="row">
                    <div className="col-xl-6">
                      <ul>
                        <li>Ut lacinia ligula tristique tempus.</li>
                        <li>In ornare nisl vitae pulvinar posuere.</li>
                      </ul>
                    </div>
                    <div className="col-xl-6">
                      <ul>
                        <li>In et orci sit amet leo consequat.</li>
                        <li>Nullam pellentesque arcu vitae congue.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <img className="w-100" src={ require('@/assets/images/features3.png') } alt=""/>
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
            <h3 className="section-title">Easy to get started, Four Step Process</h3>

            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="step">
                    <img className="icon" src={ require('@/assets/images/login.png') } alt=""/>
                    <h4 className="title"><strong>01.</strong> Access Your Dashboard</h4>
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
