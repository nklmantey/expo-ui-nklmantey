type RootStackParamList = {
  WelcomeScreen: undefined;
  ButtonScreen:
    | undefined
    | {
        data: {
          description: string;
        };
      };
  InputScreen:
    | undefined
    | {
        data: {
          description: string;
        };
      };
  AlertScreen:
    | undefined
    | {
        data: {
          description: string;
        };
      };
  ProgressScreen:
    | undefined
    | {
        data: {
          description: string;
        };
      };
  TabsScreen:
    | undefined
    | {
        data: {
          description: string;
        };
      };
  SelectScreen:
    | undefined
    | {
        data: {
          description: string;
        };
      };
  SkeletonScreen:
    | undefined
    | {
        data: {
          description: string;
        };
      };
};

type UIComponentsListType = {
  id: number;
  name: string;
  description: string;
};

interface SocialLinksType {
  id: number;
  name: string;
  username: string;
  url: string;
  icon: IconProps;
}
