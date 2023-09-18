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
import { useRef } from "react";
import { Alert } from "../components/ui/Alert";

export default function AlertScreen() {
  const { params }: RouteProp<RootStackParamList> = useRoute();
  const alertRef = useRef<any>(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Alert ref={alertRef} actionOnPress={() => console.log("we talk")} />

      <View style={{ padding: 20 }}>
        <Header title="Alert" description={params?.data.description} />

        <View style={{ marginTop: 40, gap: 40 }}>
          <View>
            <SubHeadingText>Alert message with call to action</SubHeadingText>
            <View style={{ marginTop: 8, gap: 8 }}>
              <Button
                title="Add to calendar"
                onPress={() =>
                  alertRef.current?.showAlert({
                    title: "Success",
                    message: "Your meeting was successfully added to calendar",
                    duration: 20000,
                    action: true,
                    actionTitle: "View",
                  })
                }
                variant="outline"
                icon={<Ionicons name="add-outline" color="#000" size={20} />}
              />
            </View>
          </View>

          <View>
            <SubHeadingText>
              Alert message with no call to action
            </SubHeadingText>
            <View style={{ marginTop: 8, gap: 8 }}>
              <Button
                title="Add to calendar"
                onPress={() =>
                  alertRef.current?.showAlert({
                    title: "Success",
                    message: "Your meeting was successfully added to calendar",
                    duration: 20000,
                  })
                }
                variant="outline"
                icon={<Ionicons name="add-outline" color="#000" size={20} />}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
