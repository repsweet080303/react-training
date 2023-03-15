// React
import React from 'react';

// Components
import Typo from '@/components/common/Typo';
import CardProduct from '@/components/common/Card/Product';

// Constant
import { listCardProduct } from '@/constants';

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
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </Typo>
      </div>
      <div className="popular-course__card">
        {listCardProduct.map((product) => (
          <CardProduct
            key={product.id}
            imageHeader={product.imageHeader}
            alt={product.alt}
            tag={product.tag}
            title={product.title}
            description={product.description}
            vote={product.vote}
            downloaded={product.downloaded}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
    </div>
  </section>
);

export default PopularCourse;
