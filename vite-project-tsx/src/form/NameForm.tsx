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
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(this.state.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert('A name was submitted with ' + this.state.value);
  }

  render(): React.ReactNode {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <label className='form-label'>
          Name
          <input
            className='form-input'
            type='text'
            onChange={this.handleChange}
            value={this.state.value}
          />
        </label>
        <input className='form-submit' type='submit' value='Submit' />
      </form>
    );
  }
}

export default NameForm;
