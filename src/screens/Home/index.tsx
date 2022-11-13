import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import { ItemMenu } from "../../components/ItemMenu";
import { SubscriptionStatus } from "../../components/SubscriptionStatus";
import { UserCard } from "../../components/UserCard";

export function Home() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          <UserCard />
          <SubscriptionStatus />
          <ItemMenu name="Dados pessoais" iconName="person" />
          <ItemMenu name="Dependentes" iconName="people" />
          <ItemMenu name="Endereço" iconName="home" />
          <ItemMenu name="Alterar senha" iconName="lock" />
          <ItemMenu name="Sair" iconName="sign-out" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fbfbfb",
  },
  containerScroll: {},
});
