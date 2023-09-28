import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BoldText, Card, HeadingText, RegularText } from "../components/global";
import { UIComponentsList, mySocials } from "../constants/data";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { useComponentActions } from "../hooks";
import SocialCard from "../components/ui/SocialCard";

export default function WelcomeScreen() {
  const componentActions = useComponentActions();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: 8 }}>
          <HeadingText style={{ color: "#000" }}>
            Welcome to Expo UI
          </HeadingText>

          <View
            style={{
              backgroundColor: "#000",
              width: "100%",
              padding: 20,
              borderRadius: 4,
              alignItems: "flex-start",
              justifyContent: "flex-start",
              shadowColor: "#000",
              shadowOpacity: 100,
              shadowRadius: 15,
              shadowOffset: { width: 0, height: 5 },
            }}
          >
            <RegularText style={{ color: "#fff", fontSize: 12 }}>
              A repo dump for my reusable UI components across different apps,
              design inspiration from Vercel's design system and shadcn ui 🤩
            </RegularText>
          </View>

          <View
            style={{
              marginVertical: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            {mySocials.map((social) => (
              <SocialCard key={social.id} {...social} />
            ))}
          </View>
        </View>

        <View
          style={{
            marginTop: 16,
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
      </ScrollView>
    </SafeAreaView>
  );
}
