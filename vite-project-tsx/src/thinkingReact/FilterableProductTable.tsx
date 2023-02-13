import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

interface Product {
  category: string;
  name: string;
  price: string;
  stocked: boolean;
}

interface Props {
  product: Product[];
}

class FilterableProductTable extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <>
        <SearchBar />
        <ProductTable product={this.props.product} />
      </>
    );
  }
}

export default FilterableProductTable;
