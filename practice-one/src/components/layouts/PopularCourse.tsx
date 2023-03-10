// React
import React from 'react';

// Components
import Typo from '@/components/common/Typo';
import CardProduct from '@/components/common/Card/Product';

const PopularCourse = () => (
  <section className="popular-course">
    <div className="container--large">
      <div className="popular-course__content d-flex-content">
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
          statusTypo="typo__secondary--light"
          sizeTypo="xl"
          tagTypo="h2"
          weightTypo="typo__bold"
          classTypo="typo__head"
        >
          Our Popular Courses
        </Typo>
        <Typo
          statusTypo="typo__paragraph"
          sizeTypo="xs"
          tagTypo="p"
          weightTypo="typo__regular"
          classTypo="typo__sub--light"
        >
          Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics
        </Typo>
      </div>
      <div className="popular-course__card">
        <CardProduct
          imageHeader="src/assets/images/keyboard-cover.png"
          alt="keyboard cover"
          tag="Training Courses"
          title="Video in Live Action"
          description="We focus on ergonomics and meeting
                     you where you work. It's only a
                     keystroke away."
          vote={4.5}
          downloaded={15}
          newPrice={6.48}
          oldPrice={16.48}
        />
        <CardProduct
          imageHeader="src/assets/images/pencil-cover.png"
          alt="pencil cover"
          tag="Books Liberary"
          title="Every Client Matters"
          description="We focus on ergonomics and meeting
                     you where you work. It's only a
                     keystroke away."
          vote={4.5}
          downloaded={15}
          newPrice={6.48}
          oldPrice={16.48}
        />
        <CardProduct
          imageHeader="src/assets/images/color-pencil-cover.png"
          alt="pencil color cover"
          tag="Certified Teacher"
          title="Get Quality Education"
          description="We focus on ergonomics and meeting
                     you where you work. It's only a
                     keystroke away."
          vote={4.5}
          downloaded={15}
          newPrice={6.48}
          oldPrice={16.48}
        />
      </div>
    </div>
  </section>
);

export default PopularCourse;
