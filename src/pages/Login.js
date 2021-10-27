import React from 'react';

class Login extends React.Component {

  //State
  state = {
    email: '',
    password: ''
  }
  handleSubmit = event => {
    //prevent default action
    event.preventDefault();

    //switch to home page
    this.props.history.push('/')
  }

  handleChange = e => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="login-wrapper">
        <form className="box login-box" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
          </div>
          <div className="control">
            <button className="button is-fullwidth is-primary">Login</button>
          </div>
        </form>
      </div>
    );
    // JSX  Babel  Emmet
  }
}

export default Login;
