import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import StatusBar from './StatusBar';
import Appliances from './Appliances';
import ZipCode from './ZipCode';
import Brand from './Brand';
import ContactInfo from './ContactInfo';

const fields = [
  { name: 'appliance', component: Appliances },
  { name: 'brand', component: Brand },
  { name: 'zip', component: ZipCode },
  { name: 'contact', component: ContactInfo },
];

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Array(fields.length).fill(null),
      current: 0,
    };
    this.ref = createRef();
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(i) {
    this.ref.current.scroll({
      left: this.ref.current.clientWidth * i,
      behavior: 'smooth',
    });
  }

  render() {
    const { ref } = this;
    const { progress, current } = this.state;
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
            <button type="button" onClick={toggle}>
              <i className="fas fa-caret-up questionnaire-caret" />
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
                    this.scrollTo(i + 1);
                    newProgress[i] = input;
                    this.setState({ progress: newProgress });
                  },
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
