import React from 'react';
import { IPrice } from '@/types/interfaces';
import Typo from '@/components/common/Typo';

const Price = ({ price, time }: IPrice) => (
  <div>
    <Typo tagTypo="h2" sizeTypo="xl" statusTypo="typo__primary" weightTypo="typo__bold">{`${price}$`}</Typo>
    <Typo tagTypo="h6" sizeTypo="sm" statusTypo="typo__paragraph" weightTypo="typo__bold" additionalTypo="timer">{time}</Typo>
  </div>
);

export default Price;
