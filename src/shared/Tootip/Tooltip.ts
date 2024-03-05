import { styled } from "styled-components";

export const Tooltip = styled.div<{ $show: boolean }>`
  position: relative;
  display: inline-block;

  span {
    visibility: hidden;
    width: 200px;
    background-color: black;
    text-align: center;
    padding: 5px 0;
    border-radius: 10px;
    height: auto;

    position: absolute;
    z-index: 1;
    top: 100%;
    left: -50%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

    ${props => props.$show && `visibility: visible;`}
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      width: 100%;
      height: 100%;
      border-radius: 6px;
      padding: 10px;
      color: white;
      p {
        font-size: 12px;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      button {
        width: 100%;
        background-color: transparent;
        border: none;
        padding: 10px;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        transition: all 0.3s ease-in-out;
        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
      }

      &::before {
        content: "";
        position: absolute;
        top: -10px;
        left: 20%;
        max-width: 20px;
        max-height: 20px;
        width: 100%;
        height: 100%;
        background-color: black;
        transform: rotate(45deg);
      }
    }
  }
`;
