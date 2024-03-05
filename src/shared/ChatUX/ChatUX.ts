import { styled } from "styled-components";

export const ChatUX = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 70%;
  textarea {
    margin: 0;
    width: 100%;
    min-width: 90%;
    align-self: flex-start;
  }
  button {
    min-height: 70px;
  }
`;
