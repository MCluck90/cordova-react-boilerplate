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
            <div className={styles.app}>
                <h1>Apache Cordova</h1>
                <div className={styles.blink}>
                    <EventMessage isReady={this.state.isReady} />
                </div>
            </div>
        );
    }

    onDeviceReady() {
        this.setState({ isReady: true });
    }
}

ReactDOM.render(<App />, document.getElementById('app'));