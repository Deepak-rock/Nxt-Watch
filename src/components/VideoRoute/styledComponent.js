import styled from 'styled-components'

export const VideosDetailsContainer = styled.div`
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
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const VideoPlayerContainer = styled.div`
  width: 100%;
`
export const ThumbnailImg = styled.img`
  width: 100%;
`
export const Title = styled.p`
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  font-family: 'Roboto';
  font-size: 16px;
`
export const VideosDetailsList = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 0;
  @media screen and (min-width: 576px) {
    padding: 15px 0;
  }
`
export const ChannelName = styled.li`
  width: 55px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
`
export const Views = styled.li`
  width: 60px;
  color: #475569;
  list-style: disc;
  margin: 0 0 0 25px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
`
export const Published = styled.li`
  width: 100px;
  color: #475569;
  list-style: disc;
  margin: 0 0 0 25px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
`
