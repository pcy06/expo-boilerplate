import { ActivityIndicator } from "react-native";
import ScaledPresable from "../ScaledPresable";
import { ButtonSizeVariation } from "./types";
import { ButtonSizeBinding } from "./constants";
import * as S from "./styled"

interface ButtonProps {
  children?: React.ReactNode
  size: ButtonSizeVariation;
  loading?: boolean;
  disabled?: boolean;
  expandWidth?: boolean;
  onClick: () => void;
}

export default function Button({ children, size, loading, disabled, expandWidth, onClick } : ButtonProps) {
  const sizeBinding = ButtonSizeBinding[size];
  const isDisabled = Boolean(loading || disabled);

  return (
    <S.ButtonContainer size={sizeBinding} expandWidth={expandWidth ?? false}>
      <ScaledPresable
        onPress={onClick}
        disabled={isDisabled} 
      >
        <S.ButtonChildrenWrapper size={sizeBinding} disabled={isDisabled}>
          {!loading ? children : <ActivityIndicator/>}
        </S.ButtonChildrenWrapper>
      </ScaledPresable>
    </S.ButtonContainer>
  )
}