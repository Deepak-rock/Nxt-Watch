import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`
export const FailuretImg = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 24px;
  line-height: 1.2;
  padding: 30px 0 10px 0;
  font-weight: bold;
`
export const FailureDesc = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  font-weight: 400;
`
export const FailureRetryBtn = styled.button`
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
