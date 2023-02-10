import React from 'react';

interface State {
  value: string;
}

interface Props {
  value: string;
}

class NameForm extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: 'enter your comment' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert('A name was submitted with ' + this.state.value);
  }

  render(): React.ReactNode {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>
        </label>
        <input className='form-submit' type='submit' value='Submit' />
      </form>
    );
  }
}

export default NameForm;
