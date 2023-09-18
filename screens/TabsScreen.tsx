import { SafeAreaView, View } from "react-native";
import {
  Header,
  HeadingText,
  RegularText,
  SubHeadingText,
} from "../components/global";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Tabs } from "../components/ui";

export default function ProgressScreen() {
  const { params }: RouteProp<RootStackParamList> = useRoute();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <Header title="Tabs" description={params?.data.description} />

        <View style={{ marginTop: 40, gap: 40 }}>
          <View>
            <SubHeadingText>Two tabs</SubHeadingText>
            <View style={{ marginTop: 8, gap: 4 }}>
              <Tabs tabTitles={["Home", "Profile"]} />
            </View>
          </View>

          <View>
            <SubHeadingText>Three tabs</SubHeadingText>
            <View style={{ marginTop: 8, gap: 4 }}>
              <Tabs tabTitles={["Account", "Dashboard", "Security"]} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
