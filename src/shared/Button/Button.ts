import styled from "styled-components";

export const Button = styled.button`
  max-width: 296px;
  width: 100%;
  min-height: 40px;
  background-color: #0077ee;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1d1df4;
  }

  &:disabled {
    background-color: #b9b9cf;
    cursor: default;
  }
`;
