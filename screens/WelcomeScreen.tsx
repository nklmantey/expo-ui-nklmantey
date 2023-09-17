import { SafeAreaView, Text, View } from "react-native";
import { Card, HeadingText, RegularText } from "../components/global";
import { UIComponentsList } from "../constants/data";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const { navigate }: NavigationProp<RootStackParamList> = useNavigation();

  const componentActions: {
    [key: string]: (component: UIComponentsListType) => void;
  } = {
    Button: (component) =>
      navigate("ButtonScreen", {
        data: {
          description: component.description,
        },
      }),
    Input: (component) =>
      navigate("InputScreen", {
        data: {
          description: component.description,
        },
      }),
    Alert: (component) =>
      navigate("AlertScreen", {
        data: {
          description: component.description,
        },
      }),
    Progress: (component: UIComponentsListType) =>
      navigate("ProgressScreen", {
        data: {
          description: component.description,
        },
      }),
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <View style={{ gap: 8 }}>
          <HeadingText style={{ color: "#000" }}>
            Welcome to Expo UI
          </HeadingText>
          <RegularText style={{ color: "#000", lineHeight: 18 }}>
            A repo dump for my reusable UI components across different apps,
            design inspiration from Vercel's design system and shadcn ui 🧑🏽‍💻🤩
          </RegularText>
        </View>

        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          {UIComponentsList.map((component) => (
            <Card
              key={component.id}
              component={component}
              onPress={() => componentActions[component.name](component)}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
