import { SafeAreaView, View } from "react-native";
import { Header } from "../components/global";
import { RouteProp, useRoute } from "@react-navigation/native";
import { socialLinks } from "../constants/data";
import SocialCard from "../components/ui/SocialCard";

export default function ProgressScreen() {
  const { params }: RouteProp<RootStackParamList> = useRoute();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <Header title="Social Card" description={params?.data.description} />

        <View
          style={{
            marginTop: 16,
            width: "100%",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          {socialLinks.map((social) => (
            <SocialCard key={social.id} {...social} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
