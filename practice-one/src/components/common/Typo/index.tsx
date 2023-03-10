// React
import React from 'react';

// Interface
import { ITypoProps } from '@/types/interfaces';

const Typo = ({
  children,
  classTypo,
  sizeTypo,
  statusTypo,
  tagTypo = 'h3',
  weightTypo,
  additionalTypo,
}: ITypoProps) => {
  const Typography = tagTypo;
  return (
    <Typography
      className={`${additionalTypo} ${classTypo} ${statusTypo} ${weightTypo} typo__${sizeTypo}`}
    >
      {children}
    </Typography>
  );
};

export default Typo;
