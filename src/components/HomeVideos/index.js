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
      const {videosData, retrySearch} = props
      const onClickRetry = () => {
        retrySearch()
      }
      return (
        <>
          {videosData <= 0 ? (
            <NoSearchResultContainer>
              <NoResultImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoResultHeading darkTheme={isDarkTheme}>
                No Search results found
              </NoResultHeading>
              <NoResultDesc>
                Try different key words or remove search filter
              </NoResultDesc>
              <NoResultRetryBtn type="button" onClick={onClickRetry}>
                Retry
              </NoResultRetryBtn>
            </NoSearchResultContainer>
          ) : (
            <HomeVideosList>
              {videosData.map(videoDetails => (
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
