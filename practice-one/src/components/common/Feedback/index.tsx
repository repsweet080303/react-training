import React from 'react';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { IFeedback } from '@/types/interfaces';
import Icon from '@/components/common/Icon';
import Typo from '@/components/common/Typo';
import User from '@/components/common/User';

const Feedback = ({
  name, job, url, comment, alt,
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
      {comment}
    </Typo>
    <User name={name} job={job} url={url} alt={alt} />
  </div>
);
export default Feedback;
