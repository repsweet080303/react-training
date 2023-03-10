// React
import React from 'react';

// Style
import '../../../styles/main.scss';

// Interface
import { IBrandProps } from '@/types/interfaces';

const Brand = ({ href = '#', title }: IBrandProps) => (
  <h1 className="brand">
    <a className="brand__link" href={href}>
      {title}
    </a>
  </h1>
);

Brand.defaultProps = {
  href: '#',
};

export default Brand;
