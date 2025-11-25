import { styles } from "@/app/styles";
import { Text, View } from "react-native";

type ToastProps = {
  message: string;
  visible: boolean;
};

export default function Toast({ message, visible }: ToastProps) {
  if (!visible) return null;
  return (
    <View style={styles.toast}>
      <Text style={styles.textWhite}>{message}</Text>
    </View>
  );
}
