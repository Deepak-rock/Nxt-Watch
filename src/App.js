import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from './context/ThemeContext'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideoRoute from './components/SavedVideoRoute'
import VideoRoute from './components/VideoRoute'
import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, activeTab: '', savedVideos: []}

  componentDidMount() {
    const {location} = this.props
    this.syncActiveTabWithPath(location.pathname)
  }

  componentDidUpdate(prevProps) {
    const {location} = this.props
    if (prevProps.location.pathname !== location.pathname) {
      this.syncActiveTabWithPath(location.pathname)
    }
  }

  syncActiveTabWithPath = pathname => {
    let activeTab = 'Home'
    if (pathname.includes('/trending')) {
      activeTab = 'Trending'
    } else if (pathname.includes('/gaming')) {
      activeTab = 'Gaming'
    } else if (pathname.includes('/saved-videos')) {
      activeTab = 'Saved'
    }
    this.setState({activeTab})
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addVideo = videoDetail => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(
      eachItem => eachItem.id === videoDetail.id,
    )
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, videoDetail]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updateSavedVideos = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: updateSavedVideos})
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          activeTab,
          changeTab: this.changeTab,
          savedVideos,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideoRoute}
          />
          <ProtectedRoute exact path="/videos/:id" component={VideoRoute} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default withRouter(App)
