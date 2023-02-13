import React from 'react';

interface Props {
  category: string;
}

class ProductCategoryRow extends React.Component<Props> {
  render(): React.ReactNode {
    const category = this.props.category;
    return (
      <>
        <tr>
          <td colSpan={2}>{category}</td>
        </tr>
      </>
    );
  }
}

export default ProductCategoryRow;