import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from './context/ThemeContext'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'

import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.toggleTheme}}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
