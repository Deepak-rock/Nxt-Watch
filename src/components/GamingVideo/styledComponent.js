import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideosLink = styled(Link)`
  text-decoration: none;
  width: 50%;
  @media screen and (min-width: 576px) {
    width: 33.333%;
  }
  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`
export const GamingVideoItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
`
export const GamingThumbnail = styled.img`
  width: 100%;
`
export const TitleContainer = styled.div`
  padding: 20px 0;
  gap: 10px;
`
export const Title = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 18px;
  width: 100%;
  max-width: 600px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const Views = styled.p`
  color: #475569;
  font-family: 'Roboto';
  margin: 10px 0 0 0;
  font-size: 16px;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
