// React
import React from 'react';

// Component layout
import Header from '@/components/layouts/Header';
import Hero from '@/components/layouts/Hero';
import Banner from '@/components/layouts/Banner';
import Company from '@/components/layouts/Company';
import PopularCourse from '@/components/layouts/PopularCourse';
import WatchPlan from '@/components/layouts/WatchPlan';
import Testimonial from '@/components/layouts/Testimonial';
import Newsletter from '@/components/layouts/Newsletters';
import Footer from '@/components/layouts/Footer';

const HomePage = () => (
  <div className="cover">
    <Header />
    <main>
      <Hero />
      <Banner />
      <Company />
      <PopularCourse />
      <WatchPlan />
      <Testimonial />
      <Newsletter />
    </main>
    <Footer />
  </div>
);

export default HomePage;
