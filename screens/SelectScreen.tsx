import { View, Text, SafeAreaView } from "react-native";
import { Header, SubHeadingText } from "../components/global";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Button, Select } from "../components/ui";
import { Ionicons } from "@expo/vector-icons";
import Skeleton from "../components/ui/Skeleton";

export default function SelectScreen() {
  const { params }: RouteProp<RootStackParamList> = useRoute();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <Header title="Select" description={params?.data.description} />

        <View style={{ marginTop: 40, gap: 40, width: "100%" }}>
          <View>
            <SubHeadingText>Select with fruits</SubHeadingText>
            <View style={{ marginTop: 8 }}>
              <Select
                buttonTitle="Select a fruit"
                items={["Apple", "Banana", "Orange"]}
              />
            </View>
          </View>

          <View>
            <SubHeadingText>Select with users</SubHeadingText>
            <View style={{ marginTop: 8 }}>
              <Select
                buttonTitle="Assign task to member"
                items={[
                  "Jason",
                  "Michael",
                  "Mantey",
                  "Elsie",
                  "Zanita",
                  "Angela",
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
