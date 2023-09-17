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
};

type UIComponentsListType = {
  id: number;
  name: string;
  description: string;
};
