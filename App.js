import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import MovieProvider from "./context/MovieProvider";

export default function App() {
  return (
    <MovieProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </MovieProvider>
  );
}
