import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {FaMoon, FaFire} from 'react-icons/fa'
import {CiLight} from 'react-icons/ci'
import {GiHamburgerMenu} from 'react-icons/gi'
import {LuLogOut} from 'react-icons/lu'
import {RiCloseLine, RiPlayListAddFill} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/ThemeContext'

import {
  NavbarStyle,
  NavbarSmallDevice,
  NavLogo,
  NavIconsContainer,
  IconButton,
  MenuContainer,
  CloseLineContainer,
  CloseLineButton,
  MenuList,
  MenuItem,
  LogoutContainer,
  LogoutSentence,
  LogoutButtons,
  ConfirmButton,
  CancelButton,
} from './styledComponent'

import './index.css'

const Navbar = props => {
  const logoLight =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
  const logoDark =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const onClickTheme = () => {
          toggleTheme()
        }
        return (
          <NavbarStyle darkTheme={isDarkTheme}>
            <NavbarSmallDevice>
              <NavLogo src={isDarkTheme ? logoDark : logoLight} alt="logo" />
              <NavIconsContainer>
                <IconButton type="button" onClick={onClickTheme}>
                  {isDarkTheme ? (
                    <CiLight size={32} color="#ffffff" />
                  ) : (
                    <FaMoon size={32} />
                  )}
                </IconButton>

                <Popup
                  modal
                  trigger={
                    <IconButton type="button">
                      <GiHamburgerMenu
                        size={32}
                        color={isDarkTheme ? '#ffffff' : null}
                      />
                    </IconButton>
                  }
                  style={{width: '100%'}}
                >
                  {close => (
                    <MenuContainer darkTheme={isDarkTheme}>
                      <CloseLineContainer>
                        <CloseLineButton
                          type="button"
                          onClick={() => close()}
                          darkTheme={isDarkTheme}
                        >
                          <RiCloseLine size={30} />
                        </CloseLineButton>
                      </CloseLineContainer>
                      <MenuList>
                        <MenuItem darkTheme={isDarkTheme}>
                          <AiFillHome size={30} />
                          <Link
                            to="/"
                            className="link"
                            style={
                              isDarkTheme
                                ? {color: '#f9f9f9'}
                                : {color: '#212121'}
                            }
                          >
                            Home
                          </Link>
                        </MenuItem>
                        <MenuItem darkTheme={isDarkTheme}>
                          <FaFire size={30} />
                          <Link
                            to="/trending"
                            className="link"
                            style={
                              isDarkTheme
                                ? {color: '#f9f9f9'}
                                : {color: '#212121'}
                            }
                          >
                            Trending
                          </Link>
                        </MenuItem>
                        <MenuItem darkTheme={isDarkTheme}>
                          <SiYoutubegaming size={30} />
                          <Link
                            to="/gaming"
                            className="link"
                            style={
                              isDarkTheme
                                ? {color: '#f9f9f9'}
                                : {color: '#212121'}
                            }
                          >
                            Gaming
                          </Link>
                        </MenuItem>
                        <MenuItem darkTheme={isDarkTheme}>
                          <RiPlayListAddFill size={30} />
                          <Link
                            to="/saved-videos"
                            className="link"
                            style={
                              isDarkTheme
                                ? {color: '#f9f9f9'}
                                : {color: '#212121'}
                            }
                          >
                            Saved Video
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </MenuContainer>
                  )}
                </Popup>

                <Popup
                  modal
                  trigger={
                    <IconButton type="button">
                      <LuLogOut
                        size={32}
                        color={isDarkTheme ? '#ffffff' : null}
                      />
                    </IconButton>
                  }
                >
                  {close => (
                    <LogoutContainer darkTheme={isDarkTheme}>
                      <LogoutSentence darkTheme={isDarkTheme}>
                        Are you sure you want to logout?
                      </LogoutSentence>
                      <LogoutButtons>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </LogoutButtons>
                    </LogoutContainer>
                  )}
                </Popup>
              </NavIconsContainer>
            </NavbarSmallDevice>
          </NavbarStyle>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(Navbar)
