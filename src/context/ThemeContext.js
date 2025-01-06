import React from 'react'

const ThemeContext = React.createContext({
  savedVideos: [],
  addVideo: () => {},
  isDarkTheme: false,
  toggleTheme: () => {},
  activeTab: 'Home',
  changeTab: () => {},
})

export default ThemeContext
