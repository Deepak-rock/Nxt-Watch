import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {RiCloseLine} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import NavigationMenu from '../NavigationMenu'
import HomeVideos from '../HomeVideos'

import {
  HomeContainer,
  BannerBg,
  BannerLogo,
  BannerContent,
  BannerText,
  BannerGetBtn,
  CloseBannerButton,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
} from './styledComponent'

const apiConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'Failure',
}

class HomeRoute extends Component {
  state = {
    VideosData: [],
    display: 'flex',
    apiStatus: apiConstant.initial,
    searchInput: '',
  }

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstant.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const APIurl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      this.setState({apiStatus: apiConstant.success, VideosData: updateData})
    } else {
      this.setState({apiStatus: apiConstant.failure})
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideos()
  }

  closeBanner = () => {
    this.setState({display: 'none'})
  }

  retrySearch = () => {
    this.getVideos()
  }

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

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderHomeSuccessView = () => {
    const {VideosData} = this.state
    return <HomeVideos retrySearch={this.retrySearch} VideosData={VideosData} />
  }

  renderFailureView = () => <h1>Failed</h1>

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
            const {display, searchInput} = this.state
            return (
              <HomeContainer darkTheme={isDarkTheme} data-testid="home">
                <BannerBg data-testid="banner" display={display}>
                  <BannerContent>
                    <BannerLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerText>
                      Buy Nxt watch Premium prepaid plans with UPI
                    </BannerText>
                    <BannerGetBtn type="button">GET IT NOW</BannerGetBtn>
                  </BannerContent>
                  <CloseBannerButton type="button" onClick={this.closeBanner}>
                    <RiCloseLine size={30} />
                  </CloseBannerButton>
                </BannerBg>
                <SearchInputContainer>
                  <SearchInput
                    type="search"
                    value={searchInput}
                    onChange={this.onChangeSearch}
                    placeholder="Search"
                    darkTheme={isDarkTheme}
                  />
                  <SearchButton type="button" onClick={this.onClickSearch}>
                    <AiOutlineSearch size={20} color="#7e858e" />
                  </SearchButton>
                </SearchInputContainer>
                {this.renderHomeview()}
              </HomeContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default HomeRoute
