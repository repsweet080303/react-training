import React from 'react';
import { ITypoProps } from '@/types/interfaces';

const Typo = ({
  children,
  classTypo,
  sizeTypo,
  statusTypo,
  tagTypo = 'h3',
  weightTypo,
}: ITypoProps) => {
  const Typography = tagTypo;
  return (
    <Typography
      className={`${classTypo} ${statusTypo} ${weightTypo} typo__${sizeTypo}`}
    >
      {children}
    </Typography>
  );
};

export default Typo;
