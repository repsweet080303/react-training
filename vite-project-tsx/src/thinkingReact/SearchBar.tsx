import React from 'react';

interface Props {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (value: string) => any;
  onInStockChange: (value: boolean) => any;
}

class SearchBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  handleFilterTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onFilterTextChange(event.target.value);
  }

  handleInStockChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onInStockChange(event.target.checked);
  }

  render(): React.ReactNode {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    return (
      <>
        <form>
          <input
            type='text'
            placeholder='Enter search'
            value={filterText}
            onChange={this.handleFilterTextChange}
          />
          <p className='description'>
            <input
              type='checkbox'
              checked={inStockOnly}
              onChange={this.handleInStockChange}
            />
            Only show products in stock
          </p>
        </form>
      </>
    );
  }
}

export default SearchBar;
