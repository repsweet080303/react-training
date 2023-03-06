import React from 'react';
import Header from '@/components/layouts/Header';
import Hero from '@/components/layouts/Hero';
import Banner from '@/components/layouts/Banner';
import Company from '@/components/layouts/Company';
import PopularCourse from '@/components/layouts/PopularCourse';
import WatchPlan from '@/components/layouts/WatchPlan';
import Testimonial from '@/components/layouts/Testimonial';

const HomePage = () => (
  <div className="cover">
    <Header />
    <Hero />
    <Banner />
    <Company />
    <PopularCourse />
    <WatchPlan />
    <Testimonial />
  </div>
);

export default HomePage;
