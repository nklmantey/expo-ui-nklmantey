import { View, SafeAreaView } from "react-native";
import { HeadingText, RegularText } from "../../components/global";
import { Button, Input } from "../../components/ui";
import { useState } from "react";
import { handleLogin } from "../../services";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function handleLoginButtonPress() {
    setIsLoading(true);

    try {
      const { user } = await handleLogin(email, password);
      setIsLoading(false);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View>
          <View>
            <HeadingText>Welcome back</HeadingText>
            <RegularText style={{ marginTop: 4, color: "gray" }}>
              Fill in the fields below to get back into the app.
            </RegularText>
          </View>

          <View style={{ marginTop: 20, gap: 8 }}>
            <Input
              value={email}
              placeholder="Enter your email"
              onChangeText={(e) => setEmail(e)}
            />
            <Input
              value={password}
              placeholder="Enter your password"
              onChangeText={(e) => setPassword(e)}
              isPassword
            />
          </View>
        </View>

        <Button title="Login" onPress={handleLoginButtonPress} />
      </View>
    </SafeAreaView>
  );
}
