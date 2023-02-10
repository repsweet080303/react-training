import React from 'react';

interface State {
  isGoing: boolean;
  NumberOfGuest: number;
}

interface Props {}

class Reservation extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isGoing: true, NumberOfGuest: 1 };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const value =
    target.type === 'checkbox' ? target.checked : parseInt(target.value);
    const name = target.name;
    console.log(this.state);
    this.setState({ [name]: value } as Pick<State, keyof State>);
    console.log(this.state);
  }

  render(): React.ReactNode {
    return (
      <form>
        <label>
          Is going:
          <input
            type='checkbox'
            name='isGoing'
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <br />
        <label>
          Number of Guest:
          <input
            type='number'
            name='NumberOfGuest'
            value={this.state.NumberOfGuest}
            onChange={this.handleInputChange}
          ></input>
        </label>
      </form>
    );
  }
}

export default Reservation;
