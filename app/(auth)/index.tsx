import LoginMethodBottomSheet from "@/components/auth/LoginMethodBottomSheet";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView>
      <LoginMethodBottomSheet/>
    </SafeAreaView>
  );
}
