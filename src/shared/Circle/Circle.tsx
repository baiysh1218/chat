import { styled } from "styled-components";

export const Circle = styled.div`
  min-width: 200px;
  min-height: 200px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border-top: 2px solid blue;
  border-bottom: 2px solid yellow;
  border-left: 2px solid red;
  border-right: 2px solid green;
  position: fixed;
  top: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  animation: loader 0.3s linear infinite;
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
