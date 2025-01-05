import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavbarMenu = styled.div`
  display: flex;
`
export const NavigationContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 92vh;
    position: fixed;
    top: 77px;
    padding: 20px 0;
    background-color: ${props => (props.darkTheme ? '#231f20' : '#f1f5f9')};
  }
  @media screen and (min-width: 1024px) {
    width: 250px;
  }
`
export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0;
`
export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 10px 20px;
`
export const NavText = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#231f20')};
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 15px;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#231f20')};
  font-weight: bold;
  line-height: 1.8;
  @media screen and (min-width: 1024px) {
    font-size: 25px;
  }
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
`
export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
`
export const ContactNote = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#231f20')};
  font-family: 'Roboto';
  font-size: 16px;
  padding: 10px 0;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`
