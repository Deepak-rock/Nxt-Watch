import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  margin-top: 77px;
  scroll-behavior: smooth;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    margin-left: 200px;
    padding: 50px 30px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 250px;
  }
`
export const NotFoundImg = styled.img`
  width: 100%;
  max-width: 450px;
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 24px;
  line-height: 1.2;
  padding: 30px 0 10px 0;
  font-weight: bold;
`
export const NotFoundDesc = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  font-weight: 400;
`
