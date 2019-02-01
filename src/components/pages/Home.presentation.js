import React from 'react';
import Layout from '@/components/layouts/Default';
//Sections
import SectionPartners from '@/components/sections/Home.Partners';
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
              <h2 className="section-title">Automating corporate due diligence</h2>
              <p className="section-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus magna a lacinia tempor.</p>
              <button className="btn btn-outline-white">Learn More</button>
              <button className="btn btn-dark">Purchase Now</button>

              <img className="w-100" src={ require('@/assets/images/web-app.png') } alt=""/>
            </div>
          </section>

          <SectionPartners />

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
                <div className="col-xl-5">
                  <img className="w-100" src={ require('@/assets/images/features2.png') } alt=""/>
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

          <section className="section-explore">
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                </div>
                <div className="col-xl-4">
                </div>
                <div className="col-xl-4">
                </div>
              </div>
            </div>
          </section>

          <section className="section-team">
          </section>

          <SectionContact />
        </div>

        <div className="page-footer">
        </div>
      </div>
    </Layout>
  );
}
