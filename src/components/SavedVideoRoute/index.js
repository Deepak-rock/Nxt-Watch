import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {CgPlayListAdd} from 'react-icons/cg'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import NavigationMenu from '../NavigationMenu'
import SavedVideo from '../SavedVideo'

import {
  SavedVideoContainer,
  SavedVideoHeader,
  SavedVideoImg,
  SavedVideoHeaderText,
  SavedVideoList,
  NoSavedVideo,
  NoSavedImg,
  NoSavedHeader,
  NosavedPara,
} from './styledComponent'

const SavedVideoRoute = () => {
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
          const {isDarkTheme, savedVideos} = value

          const renderNoSavedVideo = () => (
            <NoSavedVideo>
              <NoSavedImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <NoSavedHeader darkTheme={isDarkTheme}>
                No saved videos found
              </NoSavedHeader>
              <NosavedPara>
                You can save your videos while watching them
              </NosavedPara>
            </NoSavedVideo>
          )

          return (
            <SavedVideoContainer
              darkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
              {savedVideos.length <= 0 ? (
                renderNoSavedVideo()
              ) : (
                <>
                  <SavedVideoHeader darkTheme={isDarkTheme}>
                    <SavedVideoImg darkTheme={isDarkTheme}>
                      <CgPlayListAdd size={35} color="#ff0000" />
                    </SavedVideoImg>
                    <SavedVideoHeaderText darkTheme={isDarkTheme}>
                      Saved Video
                    </SavedVideoHeaderText>
                  </SavedVideoHeader>
                  <SavedVideoList>
                    {savedVideos.map(VideoDetails => (
                      <SavedVideo
                        key={VideoDetails.id}
                        VideoDetails={VideoDetails}
                      />
                    ))}
                  </SavedVideoList>
                </>
              )}
            </SavedVideoContainer>
          )
        }}
      </ThemeContext.Consumer>
    </>
  )
}
export default SavedVideoRoute
