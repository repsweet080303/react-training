// React
import React from 'react';

// Components
import Feedback from '@/components/common/Feedback';
import Typo from '@/components/common/Typo';

// Constant
import { listFeedback } from '@/constants';

const Testimonial = () => (
  <section className="testimonial">
    <div className="container--large">
      <div className="testimonial__content d-flex-content">
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
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </Typo>
      </div>
      <div className="testimonial__feedback">
        {listFeedback.map((feedback) => (
          <Feedback
            key={feedback.id}
            name={feedback.name}
            job={feedback.job}
            url={feedback.url}
            alt={feedback.alt}
          >
            {feedback.comment}
          </Feedback>
        ))}
      </div>
    </div>
  </section>
);
export default Testimonial;
