import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import { ItemMenu } from "../../components/ItemMenu";
import { SubscriptionStatus } from "../../components/SubscriptionStatus";
import { UserCard } from "../../components/UserCard";
import Icon from 'react-native-vector-icons/Octicons';

export function Home({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          <View style={styles.containerUser}>
            <View style={styles.circle}>
              <Icon name="person" size={32} color="#933C85" />
            </View>
            <Text style={styles.welcome}>Olá Luiz!</Text>
          </View>
          <UserCard />
          <SubscriptionStatus />
          <ItemMenu name="Dados pessoais" iconName="person" />
          <ItemMenu name="Dependentes" iconName="people" />
          <ItemMenu name="Endereço" iconName="home" />
          <ItemMenu name="Alterar senha" iconName="lock" />
          <ItemMenu
            name="Sair"
            iconName="sign-out"
            onPress={() => navigation.replace("login")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  containerScroll: {},
  welcome: {
    fontSize: 22,
    marginLeft: 8,
  },
  containerUser: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 16,
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    width: 48,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
});
