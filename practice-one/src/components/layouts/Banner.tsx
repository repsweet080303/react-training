// React
import React from 'react';

// Icon solid fontawesome
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Components
import Typo from '@/components/common/Typo';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import Straight from '@/components/common/Straight';

const Banner = () => (
  <section className="banner">
    <div className="container">
      <div className="banner__wrapper d-flex-content">
        <div className="banner__girl-children" />
        <div className="banner__content d-flex-content">
          <Straight additionalClass="straight__long" />
          <Typo
            statusTypo="typo__secondary"
            sizeTypo="xl"
            tagTypo="h2"
            weightTypo="typo__bold"
            classTypo="typo__title"
          >
            Get Quality Education
          </Typo>
          <Typo
            statusTypo="typo__paragraph"
            sizeTypo="xs"
            tagTypo="p"
            weightTypo="typo__regular"
            classTypo="typo__sub--large"
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </Typo>
          <Button type="button" size="sm" variant="tertiary">
            Learn More
            <Icon icon={faChevronRight} additionalClass="icon__chevron-right" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
