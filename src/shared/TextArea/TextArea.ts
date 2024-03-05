import { styled } from "styled-components";

export const TextArea = styled.textarea`
  max-width: 400px;
  width: 100%;
  border: 1px solid #718bae;
  color: #a6bcda;
  margin-bottom: 26px;
  border-radius: 5px;
  outline: none;
  transition: all 0.1s linear;
  padding-left: 10px;
  font-size: 20px;
  resize: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  &:focus {
    border: 2px solid #0075ff;
    outline: none;
  }
`;
