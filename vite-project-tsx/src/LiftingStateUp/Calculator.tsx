import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { tryConvert, toCelsius, toFahrenheit } from './modules';

interface State {
  temperature: string;
  scale: string;
}

interface Props {}

class Caculator extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);
    this.state = { temperature: '', scale: 'f' };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature: string) {
    this.setState({ temperature, scale: 'c' });
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({ temperature, scale: 'f' });
  }

  render(): React.ReactNode {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
    const fahrenheit =
      scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);
    return (
      <>
        <TemperatureInput
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </>
    );
  }
}

export default Caculator;
