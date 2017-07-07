import React from 'react';
import ReactDOM from 'react-dom';

import EventMessage from './event-message';

import styles from './css/index.css';

class App extends React.Component {
  constructor() {
    super();
        
        
    this.state = {
      isReady: false
    };
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  }

  render() {
    return (
      <div>
        <nav role="navigation" className="light-blue darken-3 white-text">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">React Boilerplate</a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="card white">
              <div className="card-content black-text">
                <span className="card-title">Boilerplate</span>
                <p>React + Webpack + ESLint</p>
              </div>
              <div className="card-action">
                <div className={styles.blink}>
                  <EventMessage isReady={this.state.isReady} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onDeviceReady() {
    this.setState({ isReady: true });
  }
}

ReactDOM.render(<App />, document.getElementById('app'));