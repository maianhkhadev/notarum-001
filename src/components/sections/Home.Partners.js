import React from 'react';

export default function (props) {
  return (
    <section className="section-partners">
      <div className="container">
        <div className="row">
          <div className="col-xl-2">
            <img className="w-100" src={ require('@/assets/images/logo1.png') } alt=""/>
          </div>
          <div className="col-xl-2">
            <img className="w-100" src={ require('@/assets/images/logo2.png') } alt=""/>
          </div>
          <div className="col-xl-2">
            <img className="w-100" src={ require('@/assets/images/logo3.png') } alt=""/>
          </div>
          <div className="col-xl-2">
            <img className="w-100" src={ require('@/assets/images/logo4.png') } alt=""/>
          </div>
          <div className="col-xl-2">
            <img className="w-100" src={ require('@/assets/images/logo5.png') } alt=""/>
          </div>
          <div className="col-xl-2">
            <img className="w-100" src={ require('@/assets/images/logo6.png') } alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}
