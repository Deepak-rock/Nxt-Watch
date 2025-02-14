import ThemeContext from '../../context/ThemeContext'

import {
  FailureViewContainer,
  FailuretImg,
  FailureHeading,
  FailureDesc,
  FailureRetryBtn,
} from './styledComponent'

const FailureView = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {retrySearch} = props

      const onClickRetry = () => {
        retrySearch()
      }

      const failureImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      return (
        <FailureViewContainer>
          <FailuretImg src={failureImg} alt="failure view" />
          <FailureHeading darkTheme={isDarkTheme}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailureDesc>
            We are having some trouble to complete your request.
            <br />
            Please try again.
          </FailureDesc>
          <FailureRetryBtn onClick={onClickRetry}>Retry</FailureRetryBtn>
        </FailureViewContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default FailureView
