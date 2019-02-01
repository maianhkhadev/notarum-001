import React from 'react';

export default function (props) {
  return (
    <section className="section-services">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 ml-auto">
            <h2 className="section-title">Awesome Design & Great Functionalities</h2>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque efficitur turpis, vitae dictum dolor tristique in. Mauris tristique id urna at cursus.</p>

            <div class="media">
              <img class="mr-3" src={ require('@/assets/images/icon-service-01.png') } alt="" />
              <div class="media-body">
                <h5 class="mt-0">Media heading</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </div>

            <div class="media">
              <img class="mr-3" src={ require('@/assets/images/icon-service-01.png') } alt="" />
              <div class="media-body">
                <h5 class="mt-0">Media heading</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </div>

            <div class="media">
              <img class="mr-3" src={ require('@/assets/images/icon-service-01.png') } alt="" />
              <div class="media-body">
                <h5 class="mt-0">Media heading</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
