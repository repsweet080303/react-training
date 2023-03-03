import React from 'react';
import Header from '@/components/layouts/Header';
import Hero from '@/components/layouts/Hero';
import Banner from '@/components/layouts/Banner';
import Company from '@/components/layouts/Company';
import PopularCourse from '@/components/layouts/PopularCourse';
import Price from '@/components/common/Price';

const HomePage = () => (
  <div className="cover">
    <Header />
    <Hero />
    <Banner />
    <Company />
    <PopularCourse />
    <Price price={19} time="Per Month" />
  </div>
);

export default HomePage;
