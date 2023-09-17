import { SafeAreaView, View } from "react-native";
import { HeadingText, RegularText, SubHeadingText } from "../components/global";
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
        <View style={{ gap: 8 }}>
          <HeadingText style={{ color: "#000" }}>Progress</HeadingText>
          <RegularText style={{ color: "#000" }}>
            {params?.data.description}
          </RegularText>
        </View>

        <View style={{ marginTop: 40, gap: 32 }}>
          <View>
            <SubHeadingText>
              Basic progress bar without percentage label
            </SubHeadingText>
            <View style={{ marginTop: 8, gap: 4 }}>
              <Progress value={progress} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
