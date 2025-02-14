import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeContext from '../../context/ThemeContext'

import {
  NavbarMenu,
  NavigationContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactImage,
  ContactNote,
} from './styledComponent'

class NavigationMenu extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, activeTab, changeTab} = value
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
            <NavbarMenu>
              <NavigationContainer darkTheme={isDarkTheme}>
                <NavOptions>
                  <NavLink to="/">
                    <NavLinkContainer
                      key="home"
                      bgColor={activeTab === 'Home' ? activeTabBg : null}
                      onClick={onClickTabHome}
                    >
                      <AiFillHome
                        size={30}
                        color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                      />
                      <NavText darkTheme={isDarkTheme}>Home</NavText>
                    </NavLinkContainer>
                  </NavLink>

                  <NavLink to="/trending">
                    <NavLinkContainer
                      key="trending"
                      bgColor={activeTab === 'Trending' ? activeTabBg : null}
                      onClick={onClickTabTrending}
                    >
                      <HiFire
                        size={30}
                        color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                      />
                      <NavText darkTheme={isDarkTheme}>Trending</NavText>
                    </NavLinkContainer>
                  </NavLink>

                  <NavLink to="/gaming">
                    <NavLinkContainer
                      key="gaming"
                      bgColor={activeTab === 'Gaming' ? activeTabBg : null}
                      onClick={onClickTabGaming}
                    >
                      <SiYoutubegaming
                        size={30}
                        color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                      />
                      <NavText darkTheme={isDarkTheme}>Gaming</NavText>
                    </NavLinkContainer>
                  </NavLink>

                  <NavLink to="/saved-videos">
                    <NavLinkContainer
                      key="saved"
                      bgColor={activeTab === 'Saved' ? activeTabBg : null}
                      onClick={onClickTabSaved}
                    >
                      <CgPlayListAdd
                        size={30}
                        color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                      />
                      <NavText darkTheme={isDarkTheme}>Saved videos</NavText>
                    </NavLinkContainer>
                  </NavLink>
                </NavOptions>

                <ContactInfo>
                  <ContactHeading darkTheme={isDarkTheme}>
                    CONTACT US
                  </ContactHeading>
                  <ContactIcons>
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                      alt="twitter logo"
                    />
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactIcons>
                  <ContactNote darkTheme={isDarkTheme}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactNote>
                </ContactInfo>
              </NavigationContainer>
            </NavbarMenu>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default NavigationMenu
