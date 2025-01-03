import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  margin-top: 8vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`
export const BannerBg = styled.div`
  padding: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: left center;
  display: ${props => props.display};
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    height: 250px;
    padding: 20px 30px;
  }
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
`
export const BannerLogo = styled.img`
  width: 150px;
  @media screen and (min-width: 768px) {
    width: 200px;
    margin: 8px 0;
  }
`
export const BannerText = styled.p`
  margin: 20px 0;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    max-width: 400px;
    margin: 25px 0;
  }
`
export const BannerGetBtn = styled.button`
  text-align: center;
  padding: 8px 30px;
  border: 1px solid #000000;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #000000;
  font-family: 'Roboto';
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const CloseBannerButton = styled.button`
  align-self: flex-start;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  font-size: 24px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#212121')};
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`
export const LoginInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #94a3b8;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.darkTheme ? '#94a3b8' : '#475569')};
  font-family: Roboto;
  font-size: 14px;
  &::placeholder {
    color: #64748b;
    font-family: Roboto;
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    &::placeholder {
      font-size: 16px;
    }
  }
`
export const LoginLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: ${props => (props.darkTheme ? '#ffffff' : '#475569')};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const LoginCheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`
export const LoginBtn = styled.button`
  text-align: center;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`
export const ErrorMessage = styled.p`
  align-self: flex-start;
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  line-height: 0.5;
  margin: 0;
`
