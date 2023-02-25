import React from 'react';
import '../../../styles/main.scss';

export interface IProps {
  href?: string;
  title: string;
}

function Brand(props: IProps) {
  const { href = '#', title } = props;
  return (
    <h1 className="brand">
      <a className="brand__link" href={href}>{title}</a>
    </h1>
  );
}

Brand.defaultProps = {
  href: '#',
};

export default Brand;
