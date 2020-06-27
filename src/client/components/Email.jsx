import React, { Component } from 'react';
import sendMessage from '../api/sendMessage';
import SubmitButton from './UI/SubmitButton';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.done = false;
    this.loading = false;
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  submit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    sendMessage(this.state)
      .then(() => {
        this.setState({ done: true });
      });
  }

  render() {
    const { onChange, submit } = this;
    const { loading, done } = this.state;
    return (
      <div className="email">
        <p>Leave a message</p>
        <form onSubmit={submit}>
          <div className="field">
            <label htmlFor="firstName">
              Name
              <br />
              <input onChange={onChange} className="firstname" name="firstName" type="text" placeholder="First Name" required />
              <input onChange={onChange} className="lastname" name="lastName" type="text" placeholder="Last Name" required />
            </label>
          </div>
          <div className="field">
            <label htmlFor="email">
              Email
              <br />
              <input onChange={onChange} name="email" type="email" required />
            </label>
          </div>
          <div className="field field-message">
            <label htmlFor="message">
              Message
              <br />
              <textarea onChange={onChange} name="message" required />
            </label>
          </div>
          <SubmitButton
            done={done}
            loading={loading}
            className="primary-button"
          />
        </form>
      </div>
    );
  }
}

export default Email;
