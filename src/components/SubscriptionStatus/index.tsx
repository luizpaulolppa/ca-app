import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export function SubscriptionStatus() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Assinatura:</Text>
      <Ionicons name="ios-checkmark-circle-outline" size={18} color="#1DA816" />
      <Text style={styles.textSuccess}>Ativa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    fontSize: 18,
    marginRight: 16,
  },
  textSuccess: {
    color: "#1DA816",
    fontSize: 18,
  },
});
