import styled from 'styled-components'

export const HomeVideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
  }
`
export const NoSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`
export const NoResultImg = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoResultHeading = styled.p`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 1.2;
  padding: 30px 0 10px 0;
  font-weight: 500;
`
export const NoResultDesc = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  font-weight: 400;
`
export const NoResultRetryBtn = styled.button`
  margin: 20px 0;
  text-align: center;
  padding: 8px 30px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  border-radius: 5px;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
