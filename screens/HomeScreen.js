import React from "react";
import { View, StyleSheet } from "react-native";
import MovieCategoryScreen from "./BottomScreens/MovieCategoryScreen";
import routes from "../utils/routes";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./../navigation/BottomTabs";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MovieCategoryScreen route={{ params: { category: routes.pop } }} />
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
