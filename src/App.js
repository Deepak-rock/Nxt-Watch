import {Switch, Route, withRouter} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from './context/ThemeContext'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideoRoute from './components/SavedVideoRoute'
import VideoRoute from './components/VideoRoute'

import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, activeTab: ''}

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

  render() {
    const {isDarkTheme, activeTab} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          activeTab,
          changeTab: this.changeTab,
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
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default withRouter(App)
