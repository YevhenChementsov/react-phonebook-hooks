import styled from 'styled-components';

export const InputName = styled.h3`
  margin-top: 10px;

  font-family: 'Caveat', cursive;
  font-size: 24px;
`;

export const Input = styled.input`
  width: 260px;
  height: 38px;
  margin-top: 10px;
  padding: 4px 15px;

  font-family: 'Caveat', cursive;
  font-size: 24px;
  color: ${props => props.theme.colors.black};

  background-color: ${props => props.theme.colors.inputBgColor};
  border-radius: 15px;
  border: ${props => `2px solid ${props.theme.colors.borderColor}`};

  &:focus {
    border: none;
    outline: none;
  }
`;

export const ErrorText = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: ${props => props.theme.colors.red};
`;

export const SubmitFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 35px;
  margin: 20px auto;

  font-size: 14px;
  font-weight: 500;
  line-height: 2.14;
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  background-color: ${props => props.theme.colors.blue};
  border: ${props => `1px solid ${props.theme.colors.blue}`};
  border-radius: 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.blue};

    background-color: ${props => props.theme.colors.white};
    border: ${props => props.theme.colors.blue};
    box-shadow: ${props => `0px 0px 10px 2px ${props.theme.colors.blue}`};
  }
`;
