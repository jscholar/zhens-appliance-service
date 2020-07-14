import React, { Component } from 'react';
import sendMessage from '../api/sendMessage';
import SubmitButton from './UI/SubmitButton';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      loading: false,
      error: false,
      form: {},
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState(({ form }) => ({
      form: {
        ...form,
        [name]: value,
      },
    }));
  }

  submit(e) {
    const { form, done } = this.state;
    if (done) return;
    e.preventDefault();
    this.setState({ loading: true });
    sendMessage(form)
      .then(() => {
        this.setState({ done: true });
      })
      .catch(() => {
        this.setState({ error: true });
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { onChange, submit } = this;
    const { loading, done, error } = this.state;
    let statusMessage = null;
    if (done) {
      statusMessage = <div className="status">Thank you. Please allow up to 24 hours for us to respond</div>;
    } else if (error) {
      statusMessage = <div className="status">Sorry, something went wrong</div>;
    }
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
              <textarea rows={3} onChange={onChange} name="message" required />
            </label>
          </div>
          <SubmitButton
            done={done}
            loading={loading}
            className="primary-button"
          />
          {statusMessage}
        </form>
      </div>
    );
  }
}

export default Email;
