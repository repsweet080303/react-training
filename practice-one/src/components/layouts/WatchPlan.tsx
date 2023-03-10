// React
import React from 'react';

// Components
import Typo from '@/components/common/Typo';
import CardPlan from '@/components/common/Card/Plan';
import Label from '@/components/common/Label';

// Constant
import { listItemScope } from '@/constants';

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
        <CardPlan
          options="FREE"
          description="Organize across all apps by hand"
          text="Slate helps you see how many more days you need..."
          listScope={listItemScope}
        />
        <Label title="New" size="md" additionalClass="label__circle" />
        <CardPlan
          options="FREE"
          description="Organize across all apps by hand"
          text="Slate helps you see how many more days you need..."
          listScope={listItemScope}
        />
        <CardPlan
          options="FREE"
          description="Organize across all apps by hand"
          text="Slate helps you see how many more days you need..."
          listScope={listItemScope}
        />
      </div>
    </div>
  </section>
);

export default WatchPlan;
