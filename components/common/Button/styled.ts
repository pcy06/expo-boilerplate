import styled from "styled-components/native";
import { ButtonSizeValue } from "./types";

export const ButtonContainer = styled.View<{ size: ButtonSizeValue, expandWidth: boolean }>`
  height: ${({ size }) => size.height}px;
  width: ${({ expandWidth }) => expandWidth ? '100%' : 'auto'};
`;

export const ButtonChildrenWrapper = styled.View<{ size: ButtonSizeValue, disabled: boolean }>`
  width: 100%;
  height: 100%;
  padding: ${({ size }) => `0px ${size.paddingHorizontal}px`};
  background-color: ${({ disabled }) => disabled ? '#d1d1d1' : '#007bff'};
  border-radius: ${({ size }) => size.borderRadius}px;
  justify-content: center;
  align-items: center;
`;