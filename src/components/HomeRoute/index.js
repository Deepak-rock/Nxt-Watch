import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {RiCloseLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import NavigationMenu from '../NavigationMenu'

import {
  HomeContainer,
  BannerBg,
  BannerLogo,
  BannerContent,
  BannerText,
  BannerGetBtn,
  CloseBannerButton,
} from './styledComponent'

class HomeRoute extends Component {
  state = {display: 'flex'}

  closeBanner = () => {
    this.setState({display: 'none'})
  }

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
            const {display} = this.state
            return (
              <HomeContainer darkTheme={isDarkTheme} data-testid="home">
                <BannerBg data-testid="banner" display={display}>
                  <BannerContent>
                    <BannerLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="logo"
                    />
                    <BannerText>
                      Buy Nxt watch Premium prepaid plans with UPI
                    </BannerText>
                    <BannerGetBtn type="button">GET IT NOW</BannerGetBtn>
                  </BannerContent>
                  <CloseBannerButton type="button" onClick={this.closeBanner}>
                    <RiCloseLine size={30} />
                  </CloseBannerButton>
                </BannerBg>
                <h1>Home</h1>
              </HomeContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default HomeRoute
