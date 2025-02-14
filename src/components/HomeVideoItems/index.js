import ThemeContext from '../../context/ThemeContext'

import {
  VideosLink,
  HomeVideoItem,
  HomeThumbnail,
  TitleContainer,
  ChannelProfile,
  VideoInfo,
  Title,
  VideosDetailsList,
  ChannelName,
  Views,
  Published,
} from './styledComponent'

const HomeVideoItems = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoDetails} = props
      const {
        id,
        thumbnailUrl,
        publishedAt,
        title,
        viewCount,
        name,
        profileImageUrl,
      } = videoDetails
      const date = new Date(publishedAt)
      const NewDate = new Date()
      let years = NewDate.getFullYear() - date.getFullYear()
      if (
        NewDate.getMonth() < date.getMonth() ||
        (NewDate.getMonth() === date.getMonth() &&
          NewDate.getDate() < date.getDate())
      ) {
        years -= 1
      }
      return (
        <VideosLink to={`/videos/${id}`}>
          <HomeVideoItem>
            <HomeThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <TitleContainer>
              <ChannelProfile src={profileImageUrl} alt="channel logo" />
              <VideoInfo>
                <Title darkTheme={isDarkTheme}>{title}</Title>
                <VideosDetailsList>
                  <ChannelName>{name}</ChannelName>
                  <Views>{viewCount} views</Views>
                  <Published>{years} years ago</Published>
                </VideosDetailsList>
              </VideoInfo>
            </TitleContainer>
          </HomeVideoItem>
        </VideosLink>
      )
    }}
  </ThemeContext.Consumer>
)
export default HomeVideoItems
