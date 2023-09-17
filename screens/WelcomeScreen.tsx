import { SafeAreaView, Text, View } from "react-native";
import { Card, HeadingText, RegularText } from "../components/global";
import { UIComponentsList } from "../constants/data";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const { navigate }: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <View style={{ gap: 8 }}>
          <HeadingText style={{ color: "#000" }}>
            Welcome to Expo UI
          </HeadingText>
          <RegularText style={{ color: "#000", lineHeight: 18 }}>
            Here is a boring repo for all the UI components I want to reuse
            across different apps because I'm a lazy dev 👨🏽‍💻
          </RegularText>
          <RegularText style={{ color: "#000", lineHeight: 18 }}>
            Design inspiration is heavily influenced by Vercel's design system
            and shadcn ui 🤩
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
              onPress={() =>
                component.name === "Button"
                  ? navigate("ButtonScreen", {
                      data: {
                        description: component.description,
                      },
                    })
                  : component.name === "Input"
                  ? navigate("InputScreen", {
                      data: {
                        description: component.description,
                      },
                    })
                  : navigate("AlertScreen", {
                      data: {
                        description: component.description,
                      },
                    })
              }
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
