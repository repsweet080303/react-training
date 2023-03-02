import React from 'react';
import Logo from '@/components/common/Logo';

const Company = () => (
  <section className="company">
    <div className="container">
      <div className="company__wrapper">
        <Logo href="src/assets/images/hooli.jpg" alt="hooli brand" addtionalClass="company__logo" />
        <Logo href="src/assets/images/lya.jpg" alt="lya brand" addtionalClass="company__logo" size="sm" />
        <Logo href="src/assets/images/cawboy.jpg" alt="cawboy brand" addtionalClass="company__logo" />
        <Logo href="src/assets/images/stripe.jpg" alt="stripe brand" addtionalClass="company__logo" />
        <Logo href="src/assets/images/redit.jpg" alt="Redit brand" addtionalClass="company__logo" />
        <Logo href="src/assets/images/aws.jpg" alt="AWS brand" addtionalClass="company__logo" />
      </div>
    </div>
  </section>

);
export default Company;
