import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import NavigationMenu from '../NavigationMenu'
import GamingVideo from '../GamingVideo'
import FailureView from '../FailureView'

import {
  GamingContainer,
  GamingHeader,
  GamingImg,
  GamingHeaderText,
  LoaderContainer,
  GamingVideosList,
} from './styledComponent'

const apiConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'Failure',
}

class GamingRoute extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiConstant.initial,
  }

  componentDidMount = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const APIurl = `https://apis.ccbp.in/videos/gaming`
    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(APIurl, option)
    if (response.ok) {
      const data = await response.json()
      const updateData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({apiStatus: apiConstant.success, gamingVideos: updateData})
    } else {
      this.setState({apiStatus: apiConstant.failure})
    }
  }

  retrySearch = () => {
    this.getVideos()
  }

  renderGamingview = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstant.inProgress:
        return this.renderLoader()
      case apiConstant.success:
        return this.renderGamingSuccessView()
      case apiConstant.failure:
        return this.renderGamingFailureView()
      default:
        return null
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingSuccessView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosList>
        {gamingVideos.map(gamingVideoDetails => (
          <GamingVideo
            key={gamingVideoDetails.id}
            gamingVideoDetails={gamingVideoDetails}
          />
        ))}
      </GamingVideosList>
    )
  }

  renderGamingFailureView = () => <FailureView retrySearch={this.retrySearch} />

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
            return (
              <GamingContainer darkTheme={isDarkTheme} data-testid="gaming">
                <GamingHeader darkTheme={isDarkTheme}>
                  <GamingImg darkTheme={isDarkTheme}>
                    <SiYoutubegaming size={35} color="#ff0000" />
                  </GamingImg>
                  <GamingHeaderText darkTheme={isDarkTheme}>
                    Gaming
                  </GamingHeaderText>
                </GamingHeader>
                {this.renderGamingview()}
              </GamingContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default GamingRoute
