import styled from 'styled-components'

export const NavbarStyle = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
`
export const NavbarSmallDevice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavLogo = styled.img`
  width: 100px;
`
export const NavIconsContainer = styled.div`
  display: flex;
  gap: 5px;
`
export const IconButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
export const MenuContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
  width: 100%;
  height: 100vh;
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
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 30px 20px;
`
export const MenuItem = styled.li`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 20px;
  color: #7e858e;
  width: 200px;
`
export const LogoutContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  margin: 20px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
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
  padding: 20px 0 0 0;
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
  color: #475569;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
`
