import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

import StatusBar from './StatusBar';
import Appliances from './Appliances';
import ZipCode from './ZipCode';
import Brand from './Brand';
import ContactInfo from './ContactInfo';
import Symptoms from './Symptoms';
import sendMessage from '../../api/sendMessage';

const fields = [
  { name: 'appliance', component: Appliances },
  { name: 'brand', component: Brand },
  { name: 'zip', component: ZipCode },
  { name: 'symptoms', component: Symptoms },
  { name: 'contact', component: ContactInfo },
];

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Array(fields.length).fill(null),
      current: 0,
      missingFields: false,
      done: false,
      loading: false,
    };
    this.ref = createRef();
    this.scrollTo = this.scrollTo.bind(this);
    this.submitRequest = this.submitRequest.bind(this);
  }

  scrollTo(i) {
    this.ref.current.scrollTo({
      left: this.ref.current.clientWidth * i,
      behavior: 'smooth',
    });
  }

  submitRequest() {
    const { progress } = this.state;
    if (progress.includes(null)) {
      console.log('not done');
      this.setState({ missingFields: true });
    } else {
      this.setState({ loading: true });
      const data = {};
      fields.forEach(({ name }, i) => { data[name] = progress[i]; });
      sendMessage(data)
        .then(() => {
          this.setState({ done: true, loading: false });
        });
    }
  }

  render() {
    const { ref, submitRequest } = this;
    const {
      progress,
      current,
      missingFields,
      done,
      loading,
    } = this.state;
    const { toggle, active } = this.props;

    return (
      <div
        className="questionnaire"
        ref={ref}
        onScroll={({ target }) => {
          this.setState({ current: Math.floor(target.scrollLeft / ref.current.clientWidth) });
        }}
      >
        <div className="questionnaire-top">
          <div className="caret-container">
            <button type="button" onClick={toggle} className={active ? 'flipped' : ''}>
              <FontAwesomeIcon className="questionnaire-caret" icon={faCaretUp} />
            </button>
          </div>
          <div className="status-container">
            <StatusBar
              progress={progress}
              current={current}
              setCurrent={(i) => {
                this.scrollTo(i);
              }}
              active={active}
            />
          </div>
        </div>
        <div
          className="form"
          style={{
            width: `${100 * fields.length}vw`,
          }}
        >
          {
            fields.map(({ name, component }, i) => (
              <section key={name} className="field">
                {React.createElement(component, {
                  answer: (input) => {
                    const newProgress = [...progress];
                    this.scrollTo(Math.min(i + 1, fields.length - 1));
                    newProgress[i] = input;
                    this.setState({ progress: newProgress }, () => {
                      if (i === fields.length - 1) {
                        submitRequest();
                      }
                    });
                  },
                  missingFields,
                  loading,
                  done,
                })}
              </section>
            ))
          }
        </div>
      </div>
    );
  }
}


Questionnaire.propTypes = {
  active: PropTypes.bool.isRequired,
  toggle: PropTypes.func,
};

Questionnaire.defaultProps = {
  toggle: () => console.log('toggle questionnaire'),
};

export default Questionnaire;
