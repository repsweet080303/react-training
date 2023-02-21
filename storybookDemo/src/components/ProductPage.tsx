import React, { FC, useCallback } from 'react';
import ShippingForm from './ShippingForm';

interface ProductProps {
  productId: number;
  referrer: string;
  theme: string;
}

interface OrderDetails {
  count: number;
  street: string;
  city: string;
  zipCode: string;
}

function post(url: string, data: any) {
  console.log(`POST /${url}`);
  console.log(data);
}

function ProductPage({ productId, referrer, theme }: ProductProps) {
  const handleSubmit = useCallback(
    (orderDetails: OrderDetails) => post(`/product/ + ${productId} + /buy`, {
      referrer,
      orderDetails,
    }),
    [productId, referrer],
  );
  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ProductPage;
