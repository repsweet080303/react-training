// React
import React from 'react';

// Components
import Typo from '@/components/common/Typo';
import CardPlan from '@/components/common/Card/Plan';

// Constant
import { listItemScope, listCardPlan } from '@/constants';

const WatchPlan = () => (
  <section className="watch-plan">
    <div className="container--large">
      <div className="watch-plan__content d-flex-content">
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
          sizeTypo="lg"
          tagTypo="h3"
          weightTypo="typo__bold"
          classTypo="typo__head"
        >
          Watch our Courses
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
      <div className="watch-plan__card">
        {listCardPlan.map((plan) => (
          <CardPlan
            key={plan.id}
            isLabel={plan.isLabel}
            options={plan.options}
            description={plan.description}
            text={plan.text}
            listScope={listItemScope}
          />
        ))}
      </div>
    </div>
  </section>
);

export default WatchPlan;
