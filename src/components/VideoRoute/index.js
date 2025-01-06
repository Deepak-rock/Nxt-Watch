import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import NavigationMenu from '../NavigationMenu'

import {
  LoaderContainer,
  VideosDetailsContainer,
  VideoPlayer,
  VideoContent,
  VideoTitle,
  VideosDetailsSpec,
  VideosViews,
  VideosPublished,
  VideosDot,
  VideoButtonsContainer,
  CustomButton,
  ButtonText,
  HrLine,
  ChannelInfo,
  ChannelImg,
  ChannelName,
  ChannelSubscribers,
  Description,
} from './styledComponent'

const apiConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'Failure',
}

class VideoRoute extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiConstant.initial,
    isLike: false,
    isDislike: false,
  }

  componentDidMount = () => {
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
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

  onClickLike = () => {
    this.setState(prevState => ({isLike: !prevState.isLike, isDislike: false}))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDislike: !prevState.isDislike,
      isLike: false,
    }))
  }

  renderVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const {videoDetails, isDislike, isLike} = this.state
        const {
          id,
          videoUrl,
          title,
          viewCount,
          publishedAt,
          profileImageUrl,
          name,
          subsriberCount,
          description,
        } = videoDetails
        const buttonColor = isDarkTheme ? '#64748b' : '#64748b'

        let isSaved
        const index = savedVideos.findIndex(eachItem => eachItem.id === id)
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const savedIconColor = isSaved ? '#2563eb' : buttonColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        console.log(formatDistanceToNow(new Date(publishedAt)))

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
          <VideosDetailsContainer
            darkTheme={isDarkTheme}
            data-testid="videoItemDetails"
          >
            <VideoPlayer>
              <ReactPlayer
                url={videoUrl}
                controls
                config={{
                  youtube: {
                    playerVars: {showinfo: 1},
                  },
                }}
                width="100%"
                height="100%"
              />
            </VideoPlayer>
            <VideoContent>
              <VideoTitle darkTheme={isDarkTheme}>{title}</VideoTitle>
              <VideosDetailsSpec>
                <VideosViews>
                  {viewCount} views <VideosDot>&#8226;</VideosDot>
                </VideosViews>
                <VideosPublished>{years} years ago</VideosPublished>
              </VideosDetailsSpec>
              <VideoButtonsContainer>
                <CustomButton
                  type="button"
                  color={isLike ? '#2563eb' : '#64748b'}
                  onClick={this.onClickLike}
                >
                  <AiOutlineLike size={25} />
                  <ButtonText>Like</ButtonText>
                </CustomButton>
                <CustomButton
                  type="button"
                  color={isDislike ? '#2563eb' : '#64748b'}
                  onClick={this.onClickDislike}
                >
                  <AiOutlineDislike size={25} />
                  <ButtonText>DisLike</ButtonText>
                </CustomButton>
                <CustomButton
                  type="button"
                  color={savedIconColor}
                  onClick={onClickSave}
                >
                  <BiListPlus size={25} />
                  <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                </CustomButton>
              </VideoButtonsContainer>
              <HrLine darkTheme={isDarkTheme} />
              <ChannelInfo>
                <ChannelImg src={profileImageUrl} alt="channel logo" />
                <div>
                  <ChannelName darkTheme={isDarkTheme}>{name}</ChannelName>
                  <ChannelSubscribers darkTheme={isDarkTheme}>
                    {subsriberCount} subscribers
                  </ChannelSubscribers>
                </div>
              </ChannelInfo>
              <Description darkTheme={isDarkTheme}>{description}</Description>
            </VideoContent>
          </VideosDetailsContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderFailureView = () => <h1>Failure</h1>

  renderVideoView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstant.inProgress:
        return this.renderLoader()
      case apiConstant.success:
        return this.renderVideos()
      case apiConstant.failure:
        return this.renderFailureView()
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
        {this.renderVideoView()}
      </>
    )
  }
}
export default VideoRoute
