import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import NavigationMenu from '../NavigationMenu'

import {
  LoaderContainer,
  VideosDetailsContainer,
  VideoPlayerContainer,
} from './styledComponent'

const apiConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'Failure',
}

class VideoRoute extends Component {
  state = {videoDetails: {}, apiStatus: apiConstant.initial}

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstant.inProgress})
    const {match} = this.props
    const jwtToken = Cookies.get('jwt_token')
    const APIurl = `https://apis.ccbp.in/videos/${match.params.id}`
    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(APIurl, option)
    if (response.ok) {
      const data = await response.json()
      const fetchData = data.video_details
      const updateData = {
        id: fetchData.id,
        profileImageUrl: fetchData.channel.profile_image_url,
        name: fetchData.channel.name,
        subsriberCount: fetchData.channel.subscriber_count,
        description: fetchData.description,
        viewCount: fetchData.view_count,
        title: fetchData.title,
        videoUrl: fetchData.video_url,
        publishedAt: fetchData.published_at,
        thumbnailUrl: fetchData.thumbnail_url,
      }
      this.setState({apiStatus: apiConstant.success, videoDetails: updateData})
    } else {
      this.setState({apiStatus: apiConstant.failure})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderHomeview = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstant.inProgress:
        return this.renderLoader()
      case apiConstant.success:
        return this.renderHomeSuccessView()
      case apiConstant.failure:
        return this.renderHomeFailureView()
      default:
        return null
    }
  }

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
            const {videoDetails} = this.state
            const {videoUrl} = videoDetails
            return (
              <VideosDetailsContainer darkTheme={isDarkTheme}>
                <VideoPlayerContainer>
                  <ReactPlayer url={videoUrl} controls width="100%" />
                </VideoPlayerContainer>
              </VideosDetailsContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default VideoRoute
