import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./navigation/RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources } from "./hooks";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <RootNavigation />
    </SafeAreaProvider>
  );
}
