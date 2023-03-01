import React from 'react';
import Typo from '../common/Typo';
import CardCourse from '@/components/common/CardCourse';

const Hero = () => (
  <main className="hero">
    <div className="container">
      <div className="hero__children" />
      <div className="hero__content">
        <Typo
          statusTypo="typo__primary"
          sizeTypo="sm"
          tagTypo="h5"
          weightTypo="typo__bold"
          classTypo="typo__tag"
        >
          For Better Future
        </Typo>
        <Typo
          statusTypo="typo__secondary"
          sizeTypo="xxl"
          tagTypo="h1"
          weightTypo="typo__bold"
          classTypo="typo__head"
        >
          HIGH QUALITY COURSES
        </Typo>
        <Typo
          statusTypo="typo__paragraph"
          sizeTypo="md"
          tagTypo="h4"
          weightTypo="typo__regular"
          classTypo="typo__sub"
        >
          Every day brings with it a fresh set of learning possibilities.
        </Typo>
      </div>
    </div>
  </main>
);

export default Hero;
