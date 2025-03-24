import { styled } from "styled-components/native"
import { TextStyleVariation } from "./types"
import { TextStyleBinding } from "./constants";

interface TextProps {
  variation: TextStyleVariation;
  color: string;
}

export const Text = styled.Text<TextProps>`
  font-family: SUIT Variable;
  color: ${({ color }) => color};
  font-size: ${({ variation }) => TextStyleBinding[variation].size}px;
  font-weight: ${({ variation }) => TextStyleBinding[variation].weight};
  line-height: ${({ variation }) => TextStyleBinding[variation].lineHeight}px;
`;

export default Text;