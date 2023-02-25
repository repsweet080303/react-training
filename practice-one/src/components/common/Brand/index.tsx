import React from 'react';

interface IProps {
  href?: string;
  title: string;
}

function Brand(props: IProps) {
  const { href = '#', title } = props;
  return (
    <h1 className="brand">
      <a href={href}>{title}</a>
    </h1>
  );
}

Brand.defaultProps = {
  href: '#',
};

export default Brand;
