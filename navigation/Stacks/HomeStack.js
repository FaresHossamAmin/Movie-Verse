import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../../screens/DetailsScreen";
import routes from "../../utils/routes";
import BottomTabs from "./../BottomTabs";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Bottom tabs on Home */}
      <Stack.Screen name={routes.hom} component={BottomTabs} />

      {/* Details screen without bottom tabs */}
      <Stack.Screen name={routes.det} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
