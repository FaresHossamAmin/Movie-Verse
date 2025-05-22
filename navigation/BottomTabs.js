import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CategoryScreen from "../screens/BottomScreens/CategoryScreen";
import GenresScreen from "../screens/BottomScreens/GenresScreen";
import routes from "../utils/routes";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "rgba(76, 175, 80, 1)",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.6)", 
        tabBarStyle: {
          backgroundColor: "rgba(15, 15, 26, 1)",
          borderTopWidth: 0, 
          paddingBottom: 5,
          marginBottom:45,
          paddingTop: 5,
          height: 60,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case routes.pop:
              iconName = "whatshot"; 
              break;
            case routes.top:
              iconName = "star";
              break;
            case routes.now:
              iconName = "play-circle-outline"; 
              break;
            case routes.gen:
              iconName = "category";
              break;
            default:
              iconName = "movie";
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={routes.pop}
        component={CategoryScreen}
        initialParams={{ category: routes.pop }}
        options={{ title: "Popular" }}
      />
      <Tab.Screen
        name={routes.top}
        component={CategoryScreen}
        initialParams={{ category: routes.top }}
        options={{ title: "Top Rated" }}
      />
      <Tab.Screen
        name={routes.now}
        component={CategoryScreen}
        initialParams={{ category: routes.now }}
        options={{ title: "Now Playing" }}
      />
      <Tab.Screen
        name={routes.gen}
        component={GenresScreen}
        options={{ title: "Genres" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
