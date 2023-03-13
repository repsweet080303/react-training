// React
import React from 'react';

// Components
import Typo from '@/components/common/Typo';
import Button from '@/components/common/Button';
import CardCourse from '@/components/common/Card/Course';

// Constant
import { listCardCourse } from '@/constants';

const Hero = () => (
  <section className="hero">
    <div className="container--small">
      <div className="hero__children" />
      <div className="hero__content d-flex-content">
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
          sizeTypo="xxxl"
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
          classTypo="typo__sub--large"
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
        {listCardCourse.map((course) => (
          <CardCourse
            key={course.id}
            modify={course.modify}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
