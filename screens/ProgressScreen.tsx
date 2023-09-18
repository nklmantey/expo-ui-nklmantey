import { SafeAreaView, View } from "react-native";
import {
  Header,
  HeadingText,
  RegularText,
  SubHeadingText,
} from "../components/global";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Progress } from "../components/ui";
import { useEffect, useRef, useState } from "react";
import { Alert } from "../components/ui/Alert";

function incrementProgressContinuously(callback: any) {
  let uploadProgress = 0;
  const incrementAmount = 10; // You can adjust the increment amount as needed
  const interval = 1000; // Interval in milliseconds between increments

  const timer = setInterval(() => {
    uploadProgress += incrementAmount;
    if (uploadProgress >= 100) {
      clearInterval(timer); // Stop the timer when progress reaches 100
      uploadProgress = 100;
    }
    callback(uploadProgress);
    if (uploadProgress === 100) {
      clearInterval(timer); // Stop the timer when progress reaches 100
    }
  }, interval);
}

export default function ProgressScreen() {
  const { params }: RouteProp<RootStackParamList> = useRoute();
  const [progress, setProgress] = useState(0);
  const alertRef = useRef<any>(null);

  const handleProgressChange = (newValue: number) => {
    if (newValue > progress) {
      setProgress(newValue); // Update the progress
    }

    if (newValue === 40) {
      alertRef.current?.showAlert({
        title: "Upload almost complete",
        message: "Your photo upload is halfway complete 😀",
        duration: 5000,
      });
    }

    if (newValue === 100) {
      alertRef.current?.showAlert({
        title: "Upload complete",
        message: "Your photo was successfully uploaded to the cloud",
        duration: 5000,
      });
    }
  };

  useEffect(() => {
    incrementProgressContinuously(handleProgressChange);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Alert ref={alertRef} />

      <View style={{ padding: 20 }}>
        <Header title="Progress" description={params?.data.description} />

        <View style={{ marginTop: 40, gap: 40, width: "100%" }}>
          <View>
            <SubHeadingText>Progress bar without progress label</SubHeadingText>
            <View style={{ marginTop: 8, flexDirection: "row" }}>
              <Progress value={progress} />
            </View>
          </View>

          <View>
            <SubHeadingText>
              Progress bar with progress percentage indicator
            </SubHeadingText>
            <View style={{ marginTop: 16 }}>
              <Progress value={progress} showProgressIndicator />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
