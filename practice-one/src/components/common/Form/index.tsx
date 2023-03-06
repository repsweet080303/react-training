import React from 'react';
import { IInput } from '@/types/interfaces';
import Button from '@/components/common/Button';

const Form = ({ placeholder, type, children }: IInput) => (
  <form action="" className="form-group">
    <input type={type} className="form-email" placeholder={placeholder} />
    <Button size="md" variant="primary" type="button" additionalClass="btn__subscribe">{children}</Button>
  </form>
);

export default Form;
