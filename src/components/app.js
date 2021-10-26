import React from 'react';
import Header from './header.js';
import '../css/app.scss';
import '../css/style.scss';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
            </React.Fragment>
        )
            ;
    }
}

export default App;