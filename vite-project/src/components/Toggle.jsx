import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleEvent = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <>
        <button className='toggle' onClick={this.handleEvent}>
          {this.state.isToggleOn ? 'On' : 'Off'}
        </button>
      </>
    );
  }
}

export default Toggle;
