import React from 'react';
import {
  faCartShopping,
  faEye,
  faStar,
  faDownload,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { ICardProduct } from '@/types/interfaces';
import Label from '@/components/common/Label';
import Icon from '@/components/common/Icon';
import Typo from '@/components/common/Typo';
import Button from '@/components/common/Button';

const CardProduct = ({
  imageHeader,
  alt,
  description,
  downloaded,
  newPrice,
  oldPrice,
  tag,
  title,
  vote,
}: ICardProduct) => (
  <div className="card-product">
    <div className="card-product__head">
      <img className="card-product__img" src={imageHeader} alt={alt} />
      <Label size="sm" title="sale" additionalClass="card-product__label" />
      <div className="card-product__icon-group">
        <div className="icon__block">
          <Icon additionalClass="card-product__icon" icon={faHeart} />
        </div>
        <div className="icon__block">
          <Icon additionalClass="card-product__icon" icon={faCartShopping} />
        </div>
        <div className="icon__block">
          <Icon additionalClass="card-product__icon" icon={faEye} />
        </div>
      </div>
    </div>
    <div className="card-product__body">
      <div className="card-product__tag-wrapper">
        <Typo tagTypo="p" sizeTypo="sm" statusTypo="typo__primary" weightTypo="typo__bold" classTypo="typo__tag">{tag}</Typo>
        <div className="card-product__rate">
          <Icon additionalClass="icon__start" icon={faStar} />
          <p className="card-product__vote">{vote}</p>
        </div>
      </div>
      <Typo tagTypo="h5" sizeTypo="md" statusTypo="typo__secondary" weightTypo="typo__bold" classTypo="typo__title">{title}</Typo>
      <Typo tagTypo="p" sizeTypo="sm" statusTypo="typo__paragraph" weightTypo="typo__regular" classTypo="typo__sub">{description}</Typo>
      <div className="card-product__download-wrapper">
        <Icon additionalClass="card-product__download" icon={faDownload} />
        <p className="card-product__downloads">{`${downloaded} Sales`}</p>
      </div>
      <div className="card-product__price">
        <p className="card-product__old-price">{`$${oldPrice}`}</p>
        <p className="card-product__new-price">{`$${newPrice}`}</p>
      </div>
      <Button type="button" size="sm" variant="quinary">
        Learn More
        <Icon icon={faChevronRight} additionalClass="icon__chevron-right" />
      </Button>
    </div>
  </div>
);

export default CardProduct;
