import React from 'react';
import { IImage } from '@/types/interfaces';

const Image = ({
  img,
  size,
  additionalClass,
  alt,
}: IImage) => (
  <div className={`image image__${additionalClass} image__${size}`}>
    <img src={img} alt={alt} />
  </div>
);
export default Image;
