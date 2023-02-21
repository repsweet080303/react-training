import React,
{
  FC, FormEvent, memo, useState,
} from 'react';

interface ShippingFormProps {
  onSubmit: (arg:any) => void;
}

interface OrderDetails {
  count: number;
  street: string;
  city: string;
  zipCode: string;
}

// eslint-disable-next-line prefer-arrow-callback, react/prop-types
const ShippingForm: FC<ShippingFormProps> = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState<number>(1);

  console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
  const startTime = performance.now();

  while (performance.now() - startTime < 500) {
    console.log('object');
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const orderDetails: OrderDetails = {
      count,
      street: '',
      city: '',
      zipCode: '',
    };

    onSubmit(orderDetails);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Note:
          <code>ShippingForm</code>
          is artificially slowed down!
        </b>
      </p>
      <p>
        Number of item
        <button type="button" onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      </p>
      <p>
        Street:
        <input name="street" />
      </p>
      <p>
        City:
        <input name="city" />
      </p>
      <p>
        Postal code:
        <input name="zipCode" />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
});

export default ShippingForm;
