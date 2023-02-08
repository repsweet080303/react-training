import React from 'react';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className='watch'>
        <h2>Hi, world</h2>
        <h3>It's {this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Watch;
