import React from "react";
import { Routes } from "./src/routes";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Routes />;
}
