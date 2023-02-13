import React from 'react';

interface Product {
  name: string;
  price: string;
  stocked: boolean;
}

interface Props {
  product: Product;
}

class ProductRow extends React.Component<Props> {
  render(): React.ReactNode {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );
    return (
      <>
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      </>
    );
  }
}

export default ProductRow;
