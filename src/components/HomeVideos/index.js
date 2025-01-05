import ThemeContext from '../../context/ThemeContext'
import HomeVideoItems from '../HomeVideoItems'
import {
  HomeVideosList,
  NoSearchResultContainer,
  NoResultImg,
  NoResultHeading,
  NoResultDesc,
  NoResultRetryBtn,
} from './styledComponent'

const HomeVideos = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {VideosData, retrySearch} = props
      const onClickRetry = () => {
        retrySearch()
      }
      return (
        <>
          {VideosData <= 0 ? (
            <NoSearchResultContainer>
              <NoResultImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoResultHeading darkTheme={isDarkTheme}>
                No Search Result found
              </NoResultHeading>
              <NoResultDesc>
                Try different key words or remove search filter
              </NoResultDesc>
              <NoResultRetryBtn onClick={onClickRetry}>Retry</NoResultRetryBtn>
            </NoSearchResultContainer>
          ) : (
            <HomeVideosList>
              {VideosData.map(videoDetails => (
                <HomeVideoItems
                  key={videoDetails.id}
                  videoDetails={videoDetails}
                />
              ))}
            </HomeVideosList>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default HomeVideos
