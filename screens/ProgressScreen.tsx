import { SafeAreaView, View } from "react-native";
import { HeadingText, RegularText, SubHeadingText } from "../components/global";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Progress } from "../components/ui";
import { useEffect, useState } from "react";

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

  const handleProgressChange = (newValue: number) => {
    if (newValue > progress) {
      setProgress(newValue); // Update the progress
    }
  };

  useEffect(() => {
    incrementProgressContinuously(handleProgressChange);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
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
            <View style={{ marginTop: 8 }}>
              <Progress value={progress} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
