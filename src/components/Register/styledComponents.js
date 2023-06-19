import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 85vh;
`
export const RegisterImg = styled.img`
  height: 400px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Heading = styled.h1`
  color: #334155;
  font-size: 45px;
  line-height: 1.5;
  font-family: 'Roboto';
  font-weight: 600;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Label = styled.label`
  color: #7b8794;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 5px;
`
export const Input = styled.input`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 8px;
`
export const Select = styled.select`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 8px;
  cursor: pointer;
`
export const Option = styled.option`
  cursor: pointer;
  font-family: 'Roboto';
  padding: 8px 12px;
`
export const RegistrationButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  outline: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
`
export const ErrMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 13px;
`
