import React from 'react';
import { ICardCourse } from '@/types/interfaces';
import Typo from '../../Typo';

const CardCourse = ({ modify, title, description }: ICardCourse) => (
  <div className='card card-course'>
    <div className='card-course__wrapper'>
      <div
        className={`card-course__icon card-course__background card-course__background--${modify}`}
      >
        <div className={`card-course__icon--${modify}`} />
      </div>
      <div className='card-course__description'>
        <Typo
          sizeTypo='md'
          statusTypo='typo__secondary'
          tagTypo='h3'
          weightTypo='typo__bold'
          classTypo='typo__feature'
        >
          {title}
        </Typo>
        <div className='card-course__straight' />
        <Typo
          sizeTypo='xs'
          statusTypo='typo__paragraph'
          tagTypo='p'
          weightTypo='typo__regular'
          classTypo='typo__feature'
        >
          {description}
        </Typo>
      </div>
    </div>
  </div>
);

export default CardCourse;
