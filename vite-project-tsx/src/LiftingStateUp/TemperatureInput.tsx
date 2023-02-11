import React from 'react';

const scaleNames: { [key: string]: string } = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

interface State {
  temperature: string;
}

interface Props {
  scale: 'c' | 'f';
  temperature: string;
  onTemperatureChange: (temperature: string) => void;
}

class TemperatureInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { temperature: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // this.setState({ temperature: event.target.value });
    this.props.onTemperatureChange(event.target.value)
  }

  render(): React.ReactNode {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
