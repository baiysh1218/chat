import { LabelHTMLAttributes } from "react";

import { styled } from "styled-components";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = styled.label<LabelProps>``;
