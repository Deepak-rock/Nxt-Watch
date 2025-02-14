import ThemeContext from '../../context/ThemeContext'

import {
  VideosLink,
  GamingVideoItem,
  GamingThumbnail,
  TitleContainer,
  Title,
  Views,
} from './styledComponent'

const GamingVideo = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {gamingVideoDetails} = props
      const {id, thumbnailUrl, title, viewCount} = gamingVideoDetails
      return (
        <VideosLink to={`/videos/${id}`}>
          <GamingVideoItem>
            <GamingThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <TitleContainer>
              <Title darkTheme={isDarkTheme}>{title}</Title>
              <Views>
                {viewCount} Watching <br /> Worldwide
              </Views>
            </TitleContainer>
          </GamingVideoItem>
        </VideosLink>
      )
    }}
  </ThemeContext.Consumer>
)
export default GamingVideo
