// React
import React from 'react';

// Interface
import { IImage } from '@/types/interfaces';

const Image = ({
  img,
  size,
  imageClass,
  alt,
}: IImage) => (
  <div className={`image image__${imageClass} image__${size}`}>
    <img src={img} alt={alt} />
  </div>
);
export default Image;
