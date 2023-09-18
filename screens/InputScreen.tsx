import { SafeAreaView, View } from "react-native";
import {
  Header,
  HeadingText,
  RegularText,
  SubHeadingText,
} from "../components/global";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Input } from "../components/ui";
import { useEffect, useState } from "react";

export default function InputScreen() {
  const { params }: RouteProp<RootStackParamList> = useRoute();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(82), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <Header title="Input" description={params?.data.description} />

        <View style={{ marginTop: 40, gap: 40 }}>
          <View>
            <SubHeadingText>Input with and without label</SubHeadingText>
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
            <SubHeadingText>Password input</SubHeadingText>
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
