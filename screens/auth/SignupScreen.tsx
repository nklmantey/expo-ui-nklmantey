import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { HeadingText, RegularText } from "../../components/global";
import { Button, Input } from "../../components/ui";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { handleLogin } from "../../services";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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
            <HeadingText>Create an account</HeadingText>
            <RegularText style={{ marginTop: 4, color: "gray" }}>
              Fill in the fields below to create an account with us.
            </RegularText>
          </View>

          <View style={{ marginTop: 20, gap: 8 }}>
            <Input
              value={email}
              placeholder="Enter your email"
              onChangeText={(e) => setEmail(e)}
            />
            <Input
              value={username}
              placeholder="Enter a unique username"
              onChangeText={(e) => setUsername(e)}
            />
            <Input
              value={password}
              placeholder="Enter your password"
              onChangeText={(e) => setPassword(e)}
              isPassword
            />
          </View>

          <TouchableOpacity
            style={{
              marginTop: 16,
              width: "100%",
              height: 100,
              borderRadius: 10,
              borderWidth: 1.5,
              borderColor: "#d3d3d3",
              borderStyle: "dashed",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="cloud-upload-outline" size={20} color={"#d3d3d3"} />
          </TouchableOpacity>
        </View>

        <Button title="Create account" onPress={handleLoginButtonPress} />
      </View>
    </SafeAreaView>
  );
}
