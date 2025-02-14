import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {FiLogOut} from 'react-icons/fi'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiCloseLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import {
  NavbarStyle,
  NavLogo,
  NavIconsContainer,
  ThemeButton,
  ProfileAvatar,
  LogoutIconButton,
  LogoutButton,
  LogoutContainer,
  LogoutSentence,
  LogoutButtons,
  ConfirmButton,
  CancelButton,
  IconButtonMenu,
  MenuContainer,
  CloseLineContainer,
  CloseLineButton,
  MenuList,
  MenuLink,
  MenuItem,
  MenuText,
} from './styledComponent'

import './index.css'

const Navbar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme, activeTab, changeTab} = value
      const onClickTheme = () => {
        toggleTheme()
      }
      const logoLight =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const logoDark =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'
      const onClickTabHome = () => {
        changeTab('Home')
      }
      const onClickTabTrending = () => {
        changeTab('Trending')
      }
      const onClickTabGaming = () => {
        changeTab('Gaming')
      }
      const onClickTabSaved = () => {
        changeTab('Saved')
      }
      return (
        <NavbarStyle darkTheme={isDarkTheme}>
          <Link to="/">
            <NavLogo
              src={isDarkTheme ? logoDark : logoLight}
              alt="website logo"
            />
          </Link>
          <NavIconsContainer>
            <ThemeButton
              type="button"
              onClick={onClickTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <BsBrightnessHigh size={32} color="#ffffff" />
              ) : (
                <BsMoon size={32} />
              )}
            </ThemeButton>

            <ProfileAvatar
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <IconButtonMenu type="button">
                  <GiHamburgerMenu
                    size={32}
                    color={isDarkTheme ? '#ffffff' : null}
                  />
                </IconButtonMenu>
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
                    <MenuLink to="/">
                      <MenuItem
                        key="home"
                        bgColor={activeTab === 'Home' ? activeTabBg : null}
                        onClick={onClickTabHome}
                      >
                        <AiFillHome
                          size={30}
                          color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                        />
                        <MenuText darkTheme={isDarkTheme}>Home</MenuText>
                      </MenuItem>
                    </MenuLink>

                    <MenuLink to="/trending">
                      <MenuItem
                        key="trending"
                        bgColor={activeTab === 'Trending' ? activeTabBg : null}
                        onClick={onClickTabTrending}
                      >
                        <HiFire
                          size={30}
                          color={
                            activeTab === 'Trending' ? '#ff0b37' : '#909090'
                          }
                        />
                        <MenuText darkTheme={isDarkTheme}>Trending</MenuText>
                      </MenuItem>
                    </MenuLink>

                    <MenuLink to="/gaming">
                      <MenuItem
                        key="gaming"
                        bgColor={activeTab === 'Gaming' ? activeTabBg : null}
                        onClick={onClickTabGaming}
                      >
                        <SiYoutubegaming
                          size={30}
                          color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                        />
                        <MenuText darkTheme={isDarkTheme}>Gaming</MenuText>
                      </MenuItem>
                    </MenuLink>

                    <MenuLink to="/saved-videos">
                      <MenuItem
                        key="saved"
                        bgColor={activeTab === 'Saved' ? activeTabBg : null}
                        onClick={onClickTabSaved}
                      >
                        <CgPlayListAdd
                          size={30}
                          color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                        />
                        <MenuText darkTheme={isDarkTheme}>
                          Saved Videos
                        </MenuText>
                      </MenuItem>
                    </MenuLink>
                  </MenuList>
                </MenuContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogoutIconButton type="button">
                  <FiLogOut size={32} color={isDarkTheme ? '#ffffff' : null} />
                </LogoutIconButton>
              }
              className="popup-content"
            >
              {close => (
                <LogoutContainer darkTheme={isDarkTheme}>
                  <LogoutSentence darkTheme={isDarkTheme}>
                    Are you sure, you want to logout?
                  </LogoutSentence>
                  <LogoutButtons>
                    <CancelButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </LogoutButtons>
                </LogoutContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogoutButton darkTheme={isDarkTheme} type="button">
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <LogoutContainer darkTheme={isDarkTheme}>
                  <LogoutSentence darkTheme={isDarkTheme}>
                    Are you sure, you want to logout?
                  </LogoutSentence>
                  <LogoutButtons>
                    <CancelButton
                      darkTheme={isDarkTheme}
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
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
        </NavbarStyle>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(Navbar)
