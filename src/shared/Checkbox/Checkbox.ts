import { InputHTMLAttributes } from "react";

import { styled } from "styled-components";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = styled.input<CheckboxProps>`
  cursor: pointer;
  align-self: flex-start;
`;
