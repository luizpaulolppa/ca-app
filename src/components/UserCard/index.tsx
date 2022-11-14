import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { backgroundCard } from "./backgroundCard";
import { logoCard } from "./logoCard";

export function UserCard() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.containerBackground}
        source={backgroundCard}
        resizeMode="stretch"
      >
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={logoCard} />
        </View>
        <View>
          <Text style={styles.text}>Luiz Paulo Pilegi de Almeida</Text>
          <Text style={styles.text}>132.465.768-09</Text>
          <Text style={{ ...styles.text, marginTop: 8 }}>
            ALLIAR MÉDICOS A FRENTE
          </Text>
        </View>
        <View style={styles.containerInfo}>
          <View>
            <Text style={styles.text}>Validade</Text>
            <Text style={styles.text}>18/03/2021</Text>
          </View>
          <View>
            <Text style={styles.text}>Plano</Text>
            <Text style={styles.text}>Semestral</Text>
          </View>
          <View>
            <Text style={styles.text}>Número do cartão</Text>
            <Text style={styles.text}>132465768-09</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 212,
    width: "100%",
    borderRadius: 7,
  },
  containerBackground: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 16,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
  },
  containerLogo: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  logo: {
    flexDirection: "column",
    width: 100,
    height: 60,
    resizeMode: "contain",
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
