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

interface State {
  filterText: string;
  inStockOnly: boolean;
}

class FilterableProductTable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { filterText: 'k', inStockOnly: true };
  }
  render(): React.ReactNode {
    return (
      <>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          product={this.props.product}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </>
    );
  }
}

export default FilterableProductTable;
