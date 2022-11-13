import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export const logo = { uri: "data:image/png;base64,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" };

export function Login({navigation}) {
  const [email, setEmail] = useState("luiz.pilegi3@alliar.com");
  const [password, setPassword] = useState("12345678");

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>
        <Text style={styles.title}>Bem-Vindo ao{"\n"}Cartão Aliança Saúde</Text>
        <Text style={styles.loginText}>Entrar</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="E-mail"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Senha"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.replace('home')}>
          <Text style={styles.textLogin}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerForgotPassword}>
          <Text style={styles.textForgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: "center",
  },
  form: {
    width: '100%'
  },
  containerScroll: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2F2F2F",
  },
  loginText: {
    fontSize: 21,
    color: "#2F2F2F",
    marginTop: 16,
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    borderColor: "#933C85",
    color: "#2F2F2F",
    marginTop: 16,
  },
  loginBtn: {
    height: 50,
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: "#933C85",
    color: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textLogin: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  textForgotPassword: {
    color: "#933C85",
    textAlign: "center",
  },
  containerForgotPassword: {
    marginTop: 16,
  },
  logo: {
    height: 70,
    width: 70,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 32
  }
});
