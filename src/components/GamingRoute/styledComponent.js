import styled from 'styled-components'

export const GamingContainer = styled.div`
  min-height: 100vh;
  margin-top: 77px;
  scroll-behavior: smooth;
  overflow-y: auto;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    margin-left: 200px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 250px;
  }
`
export const GamingHeader = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f1f1f1')};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
`
export const GamingImg = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f1f5f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
export const GamingHeaderText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#212121')};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const LoaderContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const GamingVideosList = styled.ul`
  list-style-type: none;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
`
