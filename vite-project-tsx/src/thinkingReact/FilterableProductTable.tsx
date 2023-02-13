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
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText: string) {
    this.setState({ filterText: filterText });
  }

  handleInStockChange(inStockOnly: boolean) {
    this.setState({ inStockOnly: inStockOnly });
  }
  render(): React.ReactNode {
    return (
      <>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
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
