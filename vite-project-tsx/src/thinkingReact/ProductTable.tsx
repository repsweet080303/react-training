import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

interface Product {
  name: string;
  category: string;
  price: string;
  stocked: boolean;
}

interface Props {
  product: Product[];
}

class ProductTable extends React.Component<Props> {
  render(): React.ReactNode {
    const product = this.props.product;
    const row: JSX.Element[] = [];
    let lastestCategory = '';

    this.props.product.forEach((product) => {
      if (product.category !== lastestCategory) {
        row.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      row.push(<ProductRow product={product} key={product.name} />);
      console.log(row);

      lastestCategory = product.category;
    });

    return (
      <>
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </>
    );
  }
}

export default ProductTable;
