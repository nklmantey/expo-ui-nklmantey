import { useEffect } from "react";
import { View } from "react-native";

type ProgressProps = {
  value: number;
};

export default function Progress({ value }: ProgressProps) {
  useEffect(() => {
    console.log("progress:", value);
  }, [value]);

  return (
    <View>
      <View
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#d3d3d3",
          height: 16,
          borderRadius: 99,
        }}
      >
        <View
          style={{
            height: "100%",
            width: `${value}%`,
            backgroundColor: "#000",
            borderRadius: 99,
            borderTopRightRadius: value === 100 ? 99 : 0,
            borderBottomRightRadius: value === 100 ? 99 : 0,
          }}
        />
      </View>
    </View>
  );
}
