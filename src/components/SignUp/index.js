import {Component} from 'react'

import './index.css'

class SignUp extends Component {
  state = {
    name: '',
    mobile: '',
    emailID: '',
    password: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.push('/login')
  }

  submitForm = async event => {
    event.preventDefault()
    const {name, mobile, emailID, password} = this.state
    const userDetails = {name, mobile, emailID, password}
    const url = 'https://logathon-signup.herokuapp.com/web/signup'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeUsername = event => {
    this.setState({name: event.target.value})
  }

  onChangeMobile = event => {
    this.setState({mobile: event.target.value})
  }

  onChangeEmailId = event => {
    this.setState({emailID: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <input
          type="password"
          placeholder="PASSWORD"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderEmailField = () => {
    const {emailID} = this.state
    return (
      <>
        <input
          type="text"
          placeholder="EMAIL"
          className="username-input-filed"
          value={emailID}
          onChange={this.onChangeEmailId}
        />
      </>
    )
  }

  renderMobileField = () => {
    const {mobile} = this.state
    return (
      <>
        <input
          type="number"
          placeholder="Mobile"
          className="username-input-filed"
          value={mobile}
          onChange={this.onChangeMobile}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <input
          type="text"
          placeholder="Full Name"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    return (
      <>
        <div className="head-container">
          <h1 className="form-heading">TEAM NAME</h1>
          <div>
            <button type="button" className="button-outline opacity">
              SIGNIN
            </button>
            <button type="button" className="button-outline">
              SIGN UP
            </button>
          </div>
        </div>
        <div className="login-form-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <h1 className="heading">SIGNUP FORM</h1>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderMobileField()}</div>
            <div className="input-container">{this.renderEmailField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <div>
              <button type="submit" className="login-button">
                SIGNUP
              </button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default SignUp
