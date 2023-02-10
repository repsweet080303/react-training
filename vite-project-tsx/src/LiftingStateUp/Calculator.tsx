import React from 'react';
import BoilingVerdict from './BoilingVerdict';

interface State {
  temperature: string;
}

interface Props {}

class Caculator extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);
    this.state = { temperature: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ temperature: event.target.value });
  }

  render(): React.ReactNode {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleInputChange}/>
          <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

export default Caculator;
