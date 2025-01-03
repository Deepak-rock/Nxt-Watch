import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavbarStyle = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.darkTheme ? '#231f20' : '#f1f5f9')};
  width: 100%;
  min-height: 8vh;
  @media screen and (min-width: 768px) {
    padding: 20px 40px;
  }
  @media screen and (min-width: 1200px) {
    padding: 20px 80px;
  }
`
export const NavLogo = styled.img`
  width: 100px;
`
export const NavIconsContainer = styled.div`
  display: flex;
  gap: 5px;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    width: 250px;
  }
`
export const ThemeButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
export const LogoutIconButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileAvatar = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`
export const LogoutButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    background-color: transparent;
    border-radius: 5px;
    border: 1.5px solid ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
    outline: none;
    cursor: pointer;
    padding: 8px 25px;
    color: ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
    font-size: 16px;
    font-family: 'Roboto';
  }
`
export const LogoutContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  margin: 20px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  height: 150px;
  max-width: 300px;
  box-shadow: 10px 10px 20px
    ${props => (props.darkTheme ? '#181818' : '#d7dfe9')};
`
export const LogoutSentence = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#212121')};
`
export const LogoutButtons = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 30px 0 0 0;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 25px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const CancelButton = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 1px solid #94a3b8;
  outline: none;
  cursor: pointer;
  padding: 8px 25px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#475569')};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const IconButtonMenu = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MenuLink = styled(Link)`
  text-decoration: none;
`
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 20px 0;
  background-color: ${props => (props.darkTheme ? '#231f20' : '#f1f5f9')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CloseLineContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const CloseLineButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  font-size: 24px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#212121')};
`
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`
export const MenuItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 10px 20px;
`
export const MenuText = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#231f20')};
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 15px;
`
