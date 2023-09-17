import { SafeAreaView, View } from "react-native";
import { HeadingText, RegularText, SubHeadingText } from "../components/global";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Input } from "../components/ui";
import { useState } from "react";

export default function InputScreen() {
  const { params }: RouteProp<RootStackParamList> = useRoute();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <View style={{ gap: 8 }}>
          <HeadingText style={{ color: "#000" }}>Input</HeadingText>
          <RegularText style={{ color: "#000" }}>
            {params?.data.description}
          </RegularText>
        </View>

        <View style={{ marginTop: 40, gap: 32 }}>
          <View>
            <SubHeadingText>Basic input with and without label</SubHeadingText>
            <View style={{ marginTop: 8, gap: 8 }}>
              <Input
                value={email}
                placeholder="Email"
                label="Enter your email"
                onChangeText={(e) => setEmail(e)}
              />
              <Input
                value={email}
                placeholder="Email"
                onChangeText={(e) => setEmail(e)}
              />
            </View>
          </View>

          <View>
            <SubHeadingText>Basic password input</SubHeadingText>
            <View style={{ marginTop: 8, gap: 8 }}>
              <Input
                value={password}
                placeholder="Password"
                onChangeText={(e) => setPassword(e)}
                isPassword
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
