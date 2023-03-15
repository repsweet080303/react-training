// React
import React from 'react';

// Components
import Typo from '@/components/common/Typo';
import Form from '@/components/common/Form';

const Newsletter = () => (
  <section className="newsletter">
    <div className="container--large">
      <div className="newsletter__content d-flex-content">
        <Typo
          additionalTypo="newsletter__text"
          statusTypo="typo__primary"
          sizeTypo="xs"
          tagTypo="h5"
          weightTypo="typo__bold"
          classTypo="typo__tag"
        >
          Newsletter
        </Typo>
        <Typo
          additionalTypo="newsletter__text"
          statusTypo="typo__secondary"
          sizeTypo="lg"
          tagTypo="h3"
          weightTypo="typo__bold"
          classTypo="typo__head"
        >
          Most Popular Courses
        </Typo>
        <div className="newsletter__desc">
          <Typo
            additionalTypo="newsletter__text"
            statusTypo="typo__paragraph"
            sizeTypo="xs"
            tagTypo="p"
            weightTypo="typo__regular"
            classTypo="typo__desc"
          >
            Problems trying to resolve the conflict between
          </Typo>
          <Typo
            additionalTypo="newsletter__text"
            statusTypo="typo__paragraph"
            sizeTypo="xs"
            tagTypo="p"
            weightTypo="typo__regular"
            classTypo="typo__desc"
          >
            the two major realms of Classical physics: Newtonian mechanics
          </Typo>
        </div>
      </div>
      <div className="newsletter__form">
        <Form placeholder="Your Email" type="email">
          Subscribe
        </Form>
      </div>
    </div>
  </section>
);
export default Newsletter;
