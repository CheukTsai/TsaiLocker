import React from 'react';
import '../css/app.scss';

// Login component
class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="login-wrapper">
                    <form action="" className="box" id="login-box">
                        <div class="field">
                            <p class="control">
                                <label id="login-label">Email</label>
                                <input class="input" type="email" placeholder="Email" />
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <label id="login-label">Password</label>
                                <input class="input" type="password" placeholder="Password" />
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-success" id="login-button">
                                    Login
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Login