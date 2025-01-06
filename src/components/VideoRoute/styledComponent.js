import styled from 'styled-components'

export const VideosDetailsContainer = styled.div`
  min-height: 100vh;
  margin-top: 77px;
  scroll-behavior: smooth;
  overflow-y: auto;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    padding: 30px;
    margin-left: 200px;
  }
  @media screen and (min-width: 1024px) {
    padding: 40px;
    margin-left: 250px;
  }
`
export const LoaderContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const VideoPlayer = styled.div`
  height: 40vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 50vh;
  }
  @media screen and (min-width: 1024px) {
    height: 60vh;
  }
  @media screen and (min-width: 1440px) {
    height: 70vh;
  }
  @media screen and (min-width: 2560px) {
    height: 80vh;
  }
`
export const VideoContent = styled.div`
  width: 100%;
  padding: 30px 20px;
`
export const VideoTitle = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 16px;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`
export const VideosDetailsSpec = styled.div`
  display: flex;
  padding: 10px 0;
`
export const VideosViews = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const VideosPublished = styled.p`
  color: ${props => (props.darkTheme ? '#64748b' : '#475569')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const VideosDot = styled.span`
  width: 25px;
  height: 25px;
  padding: 0 5px 0 5px;
`
export const VideoButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 5px 0;
`
export const CustomButton = styled.button`
  color: ${props => props.color};
  display: flex;
  align-items: center;
  background: transparent;
  padding:0;
  border: none;
  outline; none;
  cursor: pointer;
`
export const ButtonText = styled.p`
  font-size: 16px;
  padding: 0 5px;
`
export const HrLine = styled.hr`
  margin: 20px 0;
  border: 1px solid #909090;
`
export const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`
export const ChannelImg = styled.img`
  width: 50px;
  height: 50px;
`
export const ChannelName = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
  font-family: 'Roboto';
  font-size: 16px;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ChannelSubscribers = styled.p`
  color: ${props => (props.darkTheme ? '#64748b' : '#475569')};
  font-family: 'Roboto';
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Description = styled.p`
  padding: 20px 0;
  color: ${props => (props.darkTheme ? '#e2e8f0' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 14px;
  max-width: 600px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
