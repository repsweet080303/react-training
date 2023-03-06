import React from 'react';
import Header from '@/components/layouts/Header';
import Hero from '@/components/layouts/Hero';
import Banner from '@/components/layouts/Banner';
import Company from '@/components/layouts/Company';
import PopularCourse from '@/components/layouts/PopularCourse';
import WatchPlan from '@/components/layouts/WatchPlan';
import Feedback from '@/components/common/Feedback';

const HomePage = () => (
  <div className="cover">
    <Header />
    <Hero />
    <Banner />
    <Company />
    <PopularCourse />
    <WatchPlan />
    <Feedback
      name="Regina Miles"
      job="Designer"
      comment="Slate helps you see
      how many more days
      you need to work to
      reach your financial
      goal for the month
      and year."
      url="src/assets/images/avatar-one.jpg"
      alt="user one"
    />
  </div>
);

export default HomePage;
