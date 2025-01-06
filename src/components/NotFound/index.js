import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import NavigationMenu from '../NavigationMenu'

import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDesc,
} from './styledComponent'

const NotFound = () => (
  <>
    <Navbar />
    <NavigationMenu />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const notFoundImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        return (
          <NotFoundContainer darkTheme={isDarkTheme}>
            <NotFoundImg src={notFoundImg} alt="not found" />
            <NotFoundHeading darkTheme={isDarkTheme}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundDesc>
              We are sorry,the page you requested could
              <br />
              not be found.
            </NotFoundDesc>
          </NotFoundContainer>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default NotFound
