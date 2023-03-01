import React from 'react';
import Typo from '../common/Typo';
import Button from '@/components/common/Button';
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
        <div className="btn__wrapper">
          <Button type="button" size="lg" variant="primary">
            Get Quote Now
          </Button>
          <Button type="button" size="lg" variant="quaternary">
            Learn More
          </Button>
        </div>
      </div>
      <div className="card-course__group">
        <CardCourse
          modify="expert"
          title="Expert Instruction"
          description="The gradual accumulation of
        information about atomic and
        small-scale behaviour..."
        />
        <CardCourse
          modify="training"
          title="Training Courses"
          description="The gradual accumulation of
        information about atomic and
        small-scale behaviour..."
        />
        <CardCourse
          modify="life"
          title="Lifetime access"
          description="The gradual accumulation of
        information about atomic and
        small-scale behaviour..."
        />
      </div>
    </div>
  </main>
);

export default Hero;
