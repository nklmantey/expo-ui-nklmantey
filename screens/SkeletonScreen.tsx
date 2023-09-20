import { View, SafeAreaView } from "react-native";
import { Header, SubHeadingText } from "../components/global";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Skeleton } from "../components/ui";

export default function SkeletonScreen() {
  const { params }: RouteProp<RootStackParamList> = useRoute();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <Header title="Skeleton" description={params?.data.description} />

        <View style={{ marginTop: 40 }}>
          <View>
            <SubHeadingText>
              Skeleton component for user avatar and data
            </SubHeadingText>
            <View
              style={{
                marginTop: 8,
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}
            >
              <Skeleton height={50} width={50} borderRadius={25} />
              <View style={{ gap: 4, width: "100%" }}>
                <Skeleton height={20} width={"80%"} borderRadius={6} />
                <Skeleton height={20} width={"50%"} borderRadius={6} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
