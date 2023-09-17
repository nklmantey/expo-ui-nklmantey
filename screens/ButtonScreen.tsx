import { SafeAreaView, View } from "react-native";
import { HeadingText, RegularText, SubHeadingText } from "../components/global";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Button } from "../components/ui";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonScreen() {
  const { params }: RouteProp<RootStackParamList> = useRoute();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <View style={{ gap: 8 }}>
          <HeadingText style={{ color: "#000" }}>Button</HeadingText>
          <RegularText style={{ color: "#000" }}>
            {params?.data.description}
          </RegularText>
        </View>

        <View style={{ marginTop: 40, gap: 32 }}>
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
