import React from 'react';
import Header from '@/components/layouts/Header';
import Hero from '@/components/layouts/Hero';
import Banner from '@/components/layouts/Banner';
import Company from '@/components/layouts/Company';
import CardProduct from '@/components/common/Card/Product';

const HomePage = () => (
  <div className="cover">
    <Header />
    <Hero />
    <Banner />
    <Company />
    <CardProduct
      imageHeader="src/assets/images/keyboard-cover.png"
      alt="keyboard cover"
      tag="training Courses"
      title="Video in Live Action"
      description="We focus on ergonomics and meeting
                   you where you work. It's only a
                   keystroke away."
      vote={4.5}
      downloaded={15}
      newPrice={6.48}
      oldPrice={16.48}
    />
  </div>
);

export default HomePage;
