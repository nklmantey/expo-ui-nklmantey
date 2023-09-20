import { View, SafeAreaView } from "react-native";
import { Header, RegularText, SubHeadingText } from "../components/global";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Button, Input } from "../components/ui";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SkeletonScreen() {
  const { params }: RouteProp<RootStackParamList> = useRoute();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["5%", "50%"], []);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.6}
        enableTouchThrough={false}
        disappearsOnIndex={-1}
        pressBehavior="close"
      />
    ),
    []
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        <Header title="Bottom Sheet" description={params?.data.description} />

        <View style={{ marginTop: 40 }}>
          <View>
            <SubHeadingText>
              Bottom sheet with a form to edit user details
            </SubHeadingText>
            <View style={{ marginTop: 8, gap: 8 }}>
              <Button
                title="Edit your account"
                onPress={() => bottomSheetRef.current?.snapToIndex(1)}
                variant="default"
              />
            </View>
          </View>
        </View>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={{ paddingVertical: 8, paddingHorizontal: 16 }}
        >
          <SubHeadingText>Fill in the following details</SubHeadingText>
          <RegularText style={{ marginTop: 4, color: "gray" }}>
            Make changes to your profile here. Click save when you're done.
          </RegularText>

          <View style={{ gap: 8, marginTop: 32, marginBottom: 16 }}>
            <Input
              placeholder="Enter your name"
              onChangeText={(e) => setName(e)}
              value={name}
            />
            <Input
              placeholder="Enter your username"
              onChangeText={(e) => setUsername(e)}
              value={username}
            />
          </View>

          <Button
            title="Save"
            onPress={() => {
              bottomSheetRef.current?.close();
              setName("");
              setUsername("");
            }}
            variant="default"
          />
        </KeyboardAwareScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
}
