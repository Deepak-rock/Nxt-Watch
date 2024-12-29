import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
  background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
`
export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 16px;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`
export const LoginLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
export const Form = styled.form`
  width: 100%;
  padding: 40px 0 10px 0;
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
  color: ${props => (props.darkTheme ? '#94a3b8' : '#181818')};
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
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.darkTheme ? '#ffffff' : '#616e7c')};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const LoginCheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
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
  background-color: #3b82f6;
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
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  line-height: 0.5;
  margin: 0;
`
