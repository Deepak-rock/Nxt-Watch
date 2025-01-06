import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  margin-top: 77px;
  scroll-behavior: smooth;
  overflow-y: auto;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    margin-left: 200px;
  }
  @media screen and (min-width: 1024px) {
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
export const SearchInputContainer = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`
export const SearchInput = styled.input`
  font-size: 16px;
  width: 85%;
  max-width: 600px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #7e858e;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#64748b')};
`
export const SearchButton = styled.button`
  background: transparent;
  height: 40px;
  width: 15%;
  max-width: 80px;
  border: 1px solid #7e858e;
`
export const LoaderContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
