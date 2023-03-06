import React from 'react';
import Feedback from '@/components/common/Feedback';
import Typo from '@/components/common/Typo';

const Testimonial = () => (
  <section className="testimonial">
    <div className="container--large">
      <div className="testimonial__content">
        <Typo
          statusTypo="typo__primary"
          sizeTypo="xs"
          tagTypo="h5"
          weightTypo="typo__bold"
          classTypo="typo__tag"
        >
          Practice Advice
        </Typo>
        <Typo
          statusTypo="typo__secondary"
          sizeTypo="xl"
          tagTypo="h2"
          weightTypo="typo__bold"
          classTypo="typo__head"
        >
          Approdable Packages
        </Typo>
        <Typo
          statusTypo="typo__paragraph"
          sizeTypo="xs"
          tagTypo="p"
          weightTypo="typo__regular"
          classTypo="typo__desc"
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </Typo>
      </div>
      <div className="testimonial__feedback">
        <Feedback
          name="Regina Miles"
          job="Designer"
          url="src/assets/images/avatar-one.jpg"
        >
          Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year.
        </Feedback>
        <Feedback
          name="Regina Miles"
          job="Designer"
          url="src/assets/images/avatar-two.jpg"
        >
          Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year.
        </Feedback>
        <Feedback
          name="Regina Miles"
          job="Designer"
          url="src/assets/images/avatar-three.png"
        >
          Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year.
        </Feedback>
      </div>
    </div>
  </section>
);
export default Testimonial;
