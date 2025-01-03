import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  FormContainer,
  LoginLogo,
  Form,
  InputContainer,
  LoginInput,
  LoginLabel,
  LoginCheckboxLabel,
  ShowPasswordContainer,
  LoginBtn,
  ErrorMessage,
} from './styledComponent'

/*  
  username: rahul
  password: rahul@2021 
*/

const logoLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const logoDark =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class LoginRoute extends Component {
  state = {username: '', password: '', showPassword: false, errorMessage: ''}

  successfullySubmit = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  renderLoginError = () => {
    const {errorMessage} = this.state
    return (
      <>
        {errorMessage.length > 0 ? (
          <ErrorMessage>*{errorMessage}</ErrorMessage>
        ) : null}
      </>
    )
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userData = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(apiUrl, option)
    const data = await response.json()
    if (response.ok) {
      this.successfullySubmit(data.jwt_token)
    } else {
      this.setState({errorMessage: data.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, showPassword} = this.state
    const passwordShow = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoginContainer darkTheme={isDarkTheme}>
              <FormContainer darkTheme={isDarkTheme}>
                <LoginLogo
                  src={isDarkTheme ? logoDark : logoLight}
                  alt="logo"
                />
                <Form onSubmit={this.onSubmitForm}>
                  <InputContainer>
                    <LoginLabel darkTheme={isDarkTheme} htmlFor="username">
                      USERNAME
                    </LoginLabel>
                    <LoginInput
                      darkTheme={isDarkTheme}
                      type="text"
                      id="username"
                      placeholder="Username"
                      onChange={this.onChangeUsername}
                      value={username}
                    />
                  </InputContainer>
                  <InputContainer>
                    <LoginLabel darkTheme={isDarkTheme} htmlFor="username">
                      PASSWORD
                    </LoginLabel>
                    <LoginInput
                      darkTheme={isDarkTheme}
                      type={passwordShow}
                      id="password"
                      placeholder="Password"
                      onChange={this.onChangePassword}
                      value={password}
                    />
                  </InputContainer>
                  <ShowPasswordContainer>
                    <input
                      type="checkbox"
                      id="checkbox"
                      onClick={this.onClickShowPassword}
                    />
                    <LoginCheckboxLabel
                      darkTheme={isDarkTheme}
                      htmlFor="checkbox"
                    >
                      Show Password
                    </LoginCheckboxLabel>
                  </ShowPasswordContainer>
                  <LoginBtn type="submit">Login</LoginBtn>
                </Form>
                {this.renderLoginError()}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default LoginRoute
