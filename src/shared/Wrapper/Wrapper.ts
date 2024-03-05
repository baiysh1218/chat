import styled from "styled-components";

export const Wrapper = styled.div<{ $nav?: boolean; $inputs?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  box-shadow: ${props => props.$nav && "4px 4px 8px 0px rgba(34, 60, 80, 0.2)"};
  position: ${props => props.$inputs && "relative"};
  ${props =>
    props.$inputs &&
    `svg{
      position: absolute;
      right: 0;
      top:-5px;
    }`}
`;
