import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeStack from "./Stacks/HomeStack";
import FavoriteStack from "./Stacks/FavoriteStack";
import routes from "../utils/routes";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerActiveTintColor: "rgba(76, 175, 80, 1)", 
      drawerInactiveTintColor: "rgba(255, 255, 255, 0.6)", 
      drawerStyle: {
        backgroundColor: "rgba(15, 15, 26, 1)",
      },
      drawerLabelStyle: {

        fontSize: 25,
      },
    }}
  >
    <Drawer.Screen
      name={routes.hom}
      component={HomeStack}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialIcons style={{marginRight:10}} name="home" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name={routes.fav}
      component={FavoriteStack}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialIcons style={{marginRight:10}} name="favorite" size={size} color={color} />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
