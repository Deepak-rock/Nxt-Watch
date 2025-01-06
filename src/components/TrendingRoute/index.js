import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import NavigationMenu from '../NavigationMenu'
import TrendingVideoItem from '../TrendingVideoItem'
import FailureView from '../FailureView'

import {
  TrendingContainer,
  TrendingHeader,
  TrendingImg,
  TrendingHeaderText,
  LoaderContainer,
  TrendingVideosList,
} from './styledComponent'

const apiConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'Failure',
}

class TrendingRoute extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiConstant.initial,
  }

  componentDidMount = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const APIurl = `https://apis.ccbp.in/videos/trending`
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
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        apiStatus: apiConstant.success,
        trendingVideos: updateData,
      })
    } else {
      this.setState({apiStatus: apiConstant.failure})
    }
  }

  retrySearch = () => {
    this.getVideos()
  }

  renderTrendingview = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstant.inProgress:
        return this.renderLoader()
      case apiConstant.success:
        return this.renderTrendingSuccessView()
      case apiConstant.failure:
        return this.renderTrendingFailureView()
      default:
        return null
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingSuccessView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideosList>
        {trendingVideos.map(trendingVideoDetails => (
          <TrendingVideoItem
            key={trendingVideoDetails.id}
            trendingVideoDetails={trendingVideoDetails}
          />
        ))}
      </TrendingVideosList>
    )
  }

  renderTrendingFailureView = () => (
    <FailureView retrySearch={this.retrySearch} />
  )

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
            console.log(isDarkTheme)
            return (
              <TrendingContainer darkTheme={isDarkTheme} data-testid="trending">
                <TrendingHeader darkTheme={isDarkTheme}>
                  <TrendingImg darkTheme={isDarkTheme}>
                    <HiFire size={35} color="#ff0000" />
                  </TrendingImg>
                  <TrendingHeaderText darkTheme={isDarkTheme}>
                    Trending
                  </TrendingHeaderText>
                </TrendingHeader>
                {this.renderTrendingview()}
              </TrendingContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default TrendingRoute
