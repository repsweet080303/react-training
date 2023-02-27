import React from 'react';
import '../../../styles/main.scss';
import { IBrandProps } from '@/types/interfaces';

function Brand(props: IBrandProps) {
  const { href = '#', title } = props;
  return (
    <h1 className="brand">
      <a className="brand__link" href={href}>
        {title}
      </a>
    </h1>
  );
}

Brand.defaultProps = {
  href: '#',
};

export default Brand;
