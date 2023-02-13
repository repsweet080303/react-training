import React from 'react';

interface Props {
  filterText: string;
  inStockOnly: boolean;
}

class SearchBar extends React.Component<Props> {
  render(): React.ReactNode {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    return (
      <>
        <form>
          <input type='text' placeholder='Enter search' value={filterText} />
          <p className='description'>
            <input type='checkbox' checked={inStockOnly} />
            Only show products in stock
          </p>
        </form>
      </>
    );
  }
}

export default SearchBar;
