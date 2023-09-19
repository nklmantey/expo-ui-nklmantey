import { useEffect, useState } from "react";
import { View, Animated, DimensionValue, Easing } from "react-native";

type SkeletonProps = {
  height: DimensionValue;
  width: DimensionValue;
  borderRadius: number;
};

export default function Skeleton({
  height,
  width,
  borderRadius,
}: SkeletonProps) {
  const [opacityValue, setOpacityValue] = useState(new Animated.Value(1));

  const pulseAnimation = () => {
    Animated.sequence([
      Animated.timing(opacityValue, {
        toValue: 0.3,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      pulseAnimation(); // Restart the pulse animation after it's done
    });
  };

  useEffect(() => {
    pulseAnimation();
  }, []);

  return (
    <Animated.View
      style={{
        height,
        width,
        borderRadius,
        backgroundColor: "#eee",
        opacity: opacityValue,
      }}
    />
  );
}
