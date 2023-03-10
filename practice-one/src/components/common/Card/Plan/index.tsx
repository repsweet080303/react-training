// React
import React from 'react';

// Icon fontawesome
import { faHeart, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

// Components
import Icon from '@/components/common/Icon';
import Typo from '@/components/common/Typo';
import Price from '@/components/common/Price';
import Label from '@/components/common/Label';
import Button from '@/components/common/Button';
import ItemScope from '@/components/common/ItemScope';

// Interface
import { ICardPlan } from '@/types/interfaces';

const CardPlan = ({
  options, description, text, listScope, isLabel,
}: ICardPlan) => (
  <div className="card-plan">
    {isLabel && <Label title="New" size="md" additionalClass="label__circle" />}
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
      additionalTypo="typo__line-height"
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
