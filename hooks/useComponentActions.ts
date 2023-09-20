import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function useComponentAction() {
  const { navigate }: NavigationProp<RootStackParamList> = useNavigation();

  const componentActions: {
    [key: string]: (component: UIComponentsListType) => void;
  } = {
    Button: (component) =>
      navigate("ButtonScreen", {
        data: {
          description: component.description,
        },
      }),
    Input: (component) =>
      navigate("InputScreen", {
        data: {
          description: component.description,
        },
      }),
    Alert: (component) =>
      navigate("AlertScreen", {
        data: {
          description: component.description,
        },
      }),
    Progress: (component: UIComponentsListType) =>
      navigate("ProgressScreen", {
        data: {
          description: component.description,
        },
      }),
    Tabs: (component: UIComponentsListType) =>
      navigate("TabsScreen", {
        data: {
          description: component.description,
        },
      }),
    Select: (component: UIComponentsListType) =>
      navigate("SelectScreen", {
        data: {
          description: component.description,
        },
      }),
    Skeleton: (component: UIComponentsListType) =>
      navigate("SkeletonScreen", {
        data: {
          description: component.description,
        },
      }),
    BottomSheet: (component: UIComponentsListType) =>
      navigate("BottomSheetScreen", {
        data: {
          description: component.description,
        },
      }),
  };

  return componentActions;
}
