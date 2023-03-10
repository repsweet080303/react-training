// React
import React from 'react';

// Components
import Typo from '@/components/common/Typo';
import Straight from '@/components/common/Straight';

// Interface
import { ICardCourse } from '@/types/interfaces';

const CardCourse = ({ modify, title, description }: ICardCourse) => (
  <div className="card card-course">
    <div className="card-course__wrapper">
      <div
        className={`card-course__icon card-course__background card-course__background--${modify}`}
      >
        <div className={`card-course__icon--${modify}`} />
      </div>
      <div className="card-course__description">
        <Typo
          sizeTypo="md"
          statusTypo="typo__secondary"
          tagTypo="h3"
          weightTypo="typo__bold"
          classTypo="typo__feature"
        >
          {title}
        </Typo>
        <Straight additionalClass="straight__medium" />
        <Typo
          sizeTypo="xs"
          statusTypo="typo__paragraph"
          tagTypo="p"
          weightTypo="typo__regular"
          classTypo="typo__feature"
        >
          {description}
        </Typo>
      </div>
    </div>
  </div>
);

export default CardCourse;
