// React
import React from 'react';

// Icon in fontawesome
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

// Interface
import { IFeedback } from '@/types/interfaces';

// Component
import Icon from '@/components/common/Icon';
import Typo from '@/components/common/Typo';
import User from '@/components/common/User';

const Feedback = ({
  name, job, url, children, alt,
}: IFeedback) => (
  <div className="feedback">
    <div className="feedback__rate">
      <Icon icon={solidStar} additionalClass="icon__rate icon__start" />
      <Icon icon={solidStar} additionalClass="icon__rate icon__start" />
      <Icon icon={solidStar} additionalClass="icon__rate icon__start" />
      <Icon icon={solidStar} additionalClass="icon__rate icon__start" />
      <Icon icon={regularStar} additionalClass="icon__rate icon__start--regular" />
    </div>
    <Typo
      sizeTypo="xs"
      statusTypo="typo__paragraph"
      tagTypo="p"
      weightTypo="typo__regular"
      additionalTypo="typo__comment"
    >
      {children}
    </Typo>
    <User name={name} job={job} url={url} alt={alt} />
  </div>
);
export default Feedback;
