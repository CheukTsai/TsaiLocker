import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <div className="grid">
                        <div className="start">
                            <a href="/">Home</a>

                        </div>
                        <div className="end">
                            <a href="">Login</a>
                            <a href="">Register</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
            ;
    }
}

export default Header;