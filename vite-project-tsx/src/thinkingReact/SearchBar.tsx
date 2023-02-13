import React from 'react';

class SearchBar extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <form>
          <input type='text' placeholder='Enter search' />
          <p className='description'>
            <input type='checkbox' />
            Only show products in stock
          </p>
        </form>
      </>
    );
  }
}

export default SearchBar;
