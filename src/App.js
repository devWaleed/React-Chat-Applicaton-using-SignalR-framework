import React from 'react';
import './App.css';
import BSCSS from 'bootstrap/dist/css/bootstrap.min.css'
import LoginScreen from './LoginScreen';
import ChatScreen from './ChatScreen';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'Waleed',
            messages: [],
            users: []
        };
    }

    render() {

        if (this.state.username.length === 0) {
            return (<LoginScreen></LoginScreen>);
        } else {
            return (<ChatScreen></ChatScreen>);
        }
    }

}

export default App;
