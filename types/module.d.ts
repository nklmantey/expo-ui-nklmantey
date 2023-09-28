type UIComponentsListType = {
  id: number;
  name: string;
  description: string;
};

enum SocialCardOptions {
  DRIBBBLE,
  FACEBOOK,
  GITHUB,
  INSTAGRAM,
  LINKEDIN,
  PINTEREST,
  PLAYSTATION,
  REDDIT,
  SNAPCHAT,
  STACKOVERFLOW,
  STEAM,
  TWITCH,
  TWITTER,
  WHATSAPP,
  XBOX,
  YAHOO,
  YOUTUBE,
}

type SocialCardType = {
  id: number;
  type: SocialCardOptions;
  username: string;
  url?: string;
};
