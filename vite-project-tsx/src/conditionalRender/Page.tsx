import React from 'react';

interface Props {
  warn: boolean;
}

interface State {
  showWarning: boolean;
}

function WarningBanner(props: Props) {
  if (!props.warn) {
    return null;
  }
  return <div className='warning'> Warning !</div>;
}

class Page extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleWarning = this.handleToggleWarning.bind(this);
  }

  handleToggleWarning() {
    this.setState((state) => {
      return {
        ...state,
        showWarning: !state.showWarning,
      };
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleWarning}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </>
    );
  }
}

export default Page;
