export const UIComponentsList: UIComponentsListType[] = [
  {
    id: 1,
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
  },
  {
    id: 2,
    name: "Input",
    description:
      "Displays a form input field or a component that looks like an input field.",
  },
  {
    id: 3,
    name: "Alert",
    description: "A succinct message that is displayed temporarily.",
  },
  {
    id: 4,
    name: "Progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    id: 5,
    name: "Tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    id: 6,
    name: "Select",
    description:
      "Displays a list of options for the user to pick from—triggered by a button.",
  },
  {
    id: 7,
    name: "Skeleton",
    description: "Use to show a placeholder while content is loading.",
  },
  {
    id: 8,
    name: "BottomSheet",
    description:
      "Extends the @gorhom/bottom-sheet package to display  an overlay that is anchored to the bottom of a screen and that displays additional details or actions.",
  },
  {
    id: 9,
    name: "Social Card",
    description: "Displays a card with a social icon and a username.",
  },
];

enum SocialCardOptions {
  DRIBBBLE = "Dribbble",
  FACEBOOK = "Facebook",
  GITHUB = "GitHub",
  INSTAGRAM = "Instagram",
  LINKEDIN = "LinkedIn",
  PINTEREST = "DISCORD",
  PLAYSTATION = "PlayStation",
  REDDIT = "Reddit",
  SNAPCHAT = "Snapchat",
  STACKOVERFLOW = "StackOverflow",
  STEAM = "Steam",
  TWITCH = "Twitch",
  TWITTER = "Twitter",
  WHATSAPP = "WhatsApp",
  XBOX = "Xbox",
  YAHOO = "Yahoo",
  YOUTUBE = "YouTube",
}

export const mySocials = [
  {
    id: 1,
    type: SocialCardOptions.GITHUB,
    username: "@nklmantey",
    url: "https://github.com/nklmantey",
  },
  {
    id: 2,
    type: SocialCardOptions.TWITTER,
    username: "@nklmantey",
    url: "https://twitter.com/nklmantey",
  },
];

export const socialLinks = [
  {
    id: 1,
    type: SocialCardOptions.GITHUB,
    username: "@nklmantey",
    url: "https://github.com/nklmantey",
  },
  {
    id: 2,
    type: SocialCardOptions.TWITTER,
    username: "@nklmantey",
    url: "https://twitter.com/nklmantey",
  },
  {
    id: 3,
    type: SocialCardOptions.LINKEDIN,
    username: "@nklmantey",
    url: "https://linkedin.com/in/nklmantey",
  },
  {
    id: 4,
    type: SocialCardOptions.REDDIT,
    username: "@nklmantey",
  },
  {
    id: 5,
    type: SocialCardOptions.PLAYSTATION,
    username: "@nklmantey",
  },
  {
    id: 6,
    type: SocialCardOptions.SNAPCHAT,
    username: "@nklmantey",
    url: "https://snapchat.com/nklmantey",
  },
];
