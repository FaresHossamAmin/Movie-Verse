import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from "../../screens/DrawerScreens/FavoritesScreen";
import DetailsScreen from "../../screens/DetailsScreen";
import routes from "../../utils/routes";

const Stack = createNativeStackNavigator();

const FavoriteStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.fav} component={FavoritesScreen} />
        <Stack.Screen name={routes.det} component={DetailsScreen} />
      </Stack.Navigator>
    </>
  );
};

export default FavoriteStack;
