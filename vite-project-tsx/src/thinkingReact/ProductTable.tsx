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
  filterText: string;
  inStockOnly: boolean;
}

class ProductTable extends React.Component<Props> {
  render(): React.ReactNode {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const product = this.props.product;
    const row: JSX.Element[] = [];
    let lastestCategory = '';

    product.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastestCategory) {
        row.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      row.push(<ProductRow product={product} key={product.name} />);

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
