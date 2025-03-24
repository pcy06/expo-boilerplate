import Text from "../common/Text";
import styled from "styled-components/native";
import Button from "../common/Button";

export default function LoginMethodBottomSheet() {
  return (
    <BottomSheetContainer>
      <Button size='l' onClick={() => {console.log('helllo')}}>
        <Text variation="text-l" color="#fff">Google로 로그인</Text>
      </Button>
    </BottomSheetContainer>
  );
}

const BottomSheetContainer = styled.View`

`;