import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

class HomeRoute extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Navbar />
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            console.log(isDarkTheme)
            return (
              <div className="home-container">
                <div className="home-content-container">
                  <h1>Home</h1>
                </div>
              </div>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default HomeRoute
