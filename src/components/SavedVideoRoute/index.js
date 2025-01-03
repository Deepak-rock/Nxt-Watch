import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import NavigationMenu from '../NavigationMenu'

import {} from './styledComponent'

class SavedVideoRoute extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Navbar />
        <NavigationMenu />
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            console.log(isDarkTheme)
            return <h1>Saved Videos</h1>
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default SavedVideoRoute
