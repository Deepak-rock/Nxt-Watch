import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideosLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`
export const HomeVideoItem = styled.li`
  width: 100%;
  padding: 20px 0;
  @media screen and (min-width: 576px) {
    display: flex;
    padding: 30px;
  }
`
export const HomeThumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 60%;
    max-width: 600px;
  }
`
export const TitleContainer = styled.div`
  padding: 10px 10px 0 10px;
  display: flex;
  gap: 10px;
`
export const VideoInfo = styled.div``
export const ChannelProfile = styled.img`
  width: 40px;
  height: 40px;
`
export const Title = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 16px;
  width: 100%;
  max-width: 500px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const VideosDetailsList = styled.div`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  @media screen and (min-width: 576px) {
    padding: 15px 0 0 0;
  }
  @media screen and (min-width: 1024px) {
    padding: 15px 0;
  }
`
export const ChannelName = styled.p`
  width: 100%;
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Views = styled.p`
  color: #475569;
  font-family: 'Roboto';
  margin: 10px 0 0 0;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const Published = styled.p`
  color: #475569;
  list-style: disc;
  margin: 10px 0 0 25px;
  font-family: 'Roboto';
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
