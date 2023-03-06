import React from 'react';
import { faHeart, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { ICardPlan } from '@/types/interfaces';
import Icon from '@/components/common/Icon';
import Typo from '@/components/common/Typo';
import Price from '@/components/common/Price';
import Button from '@/components/common/Button';
import ItemScope from '@/components/common/ItemScope';

const CardPlan = ({
  options, description, text, listScope,
}: ICardPlan) => (
  <div className="card-plan">
    <div className="icon__wrapper">
      <Icon icon={faHeart} additionalClass="icon__heart" />
    </div>
    <Typo
      sizeTypo="md"
      statusTypo="typo__secondary"
      tagTypo="h3"
      weightTypo="typo__bold"
    >
      {options}
    </Typo>
    <Typo
      sizeTypo="xs"
      statusTypo="typo__paragraph"
      tagTypo="h6"
      weightTypo="typo__bold"
      classTypo="typo__text"
    >
      {description}
    </Typo>
    <Price price={19} time="Per Month" />
    <Typo
      sizeTypo="xs"
      statusTypo="typo__paragraph"
      tagTypo="p"
      weightTypo="typo__regular"
      classTypo="typo__text"
    >
      {text}
    </Typo>
    <Button size="xl" variant="primary" type="button">
      Try for free
    </Button>
    <ul className="list__scope">
      {listScope.map((item) => (
        <ItemScope key={item.id} icon={faCircleCheck} typeScope={item.type}>
          {item.text}
        </ItemScope>
      ))}
    </ul>
  </div>
);

export default CardPlan;
