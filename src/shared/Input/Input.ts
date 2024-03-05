import styled from "styled-components";

export const Input = styled.input`
  max-width: 400px;
  width: 100%;
  min-height: 40px;
  border: 1px solid #718bae;
  color: #a6bcda;
  margin-bottom: 26px;
  border-radius: 5px;
  outline: none;
  transition: all 0.1s linear;
  padding-left: 10px;
  font-size: 20px;
  &:focus {
    border: 2px solid #0075ff;
    outline: none;
  }
`;
