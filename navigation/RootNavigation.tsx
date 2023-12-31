import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import ButtonScreen from "../screens/ButtonScreen";
import InputScreen from "../screens/InputScreen";
import AlertScreen from "../screens/AlertScreen";
import ProgressScreen from "../screens/ProgressScreen";
import TabsScreen from "../screens/TabsScreen";
import SelectScreen from "../screens/SelectScreen";
import SkeletonScreen from "../screens/SkeletonScreen";
import BottomSheetScreen from "../screens/BottomSheetScreen";
import SocialCardScreen from "../screens/SocialCardScreen";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          animationEnabled: true,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="ProgressScreen" component={ProgressScreen} />
        <Stack.Screen name="TabsScreen" component={TabsScreen} />
        <Stack.Screen name="SelectScreen" component={SelectScreen} />
        <Stack.Screen name="SkeletonScreen" component={SkeletonScreen} />
        <Stack.Screen name="BottomSheetScreen" component={BottomSheetScreen} />
        <Stack.Screen name="SocialCardScreen" component={SocialCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
