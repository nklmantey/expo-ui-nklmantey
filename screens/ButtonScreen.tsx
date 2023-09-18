import { SafeAreaView, View } from "react-native";
import {
  Header,
  HeadingText,
  RegularText,
  SubHeadingText,
} from "../components/global";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Button } from "../components/ui";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonScreen() {
  const { params }: RouteProp<RootStackParamList> = useRoute();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <Header title="Button" description={params?.data.description} />

        <View style={{ marginTop: 40, gap: 40 }}>
          <View>
            <SubHeadingText>Button with different variants</SubHeadingText>
            <View style={{ marginTop: 8, gap: 8 }}>
              <Button title="Button" onPress={() => {}} />
              <Button title="Button" onPress={() => {}} variant="destructive" />
            </View>
          </View>

          <View>
            <SubHeadingText>Button with different sizes</SubHeadingText>
            <View style={{ marginTop: 8, gap: 8 }}>
              <Button title="Button" onPress={() => {}} size="sm" />
              <Button title="Button" onPress={() => {}} size="default" />
              <Button title="Button" onPress={() => {}} size="lg" />
            </View>
          </View>

          <View>
            <SubHeadingText>Button with icon</SubHeadingText>
            <View style={{ marginTop: 8, gap: 8 }}>
              <Button
                title="Login with email"
                onPress={() => {}}
                icon={<Ionicons name="mail-outline" color={"#fff"} size={20} />}
              />
            </View>
          </View>

          <View>
            <SubHeadingText>
              Button with spinner / loading indicator
            </SubHeadingText>
            <View style={{ marginTop: 8, gap: 8 }}>
              <Button
                title="Login with email"
                onPress={() => {}}
                isLoading={true}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
