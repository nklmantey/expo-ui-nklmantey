export function convertToLogo(social: SocialCardOptions): string | any {
  const lowercaseSocial = social.toString().toLowerCase();
  return `logo-${lowercaseSocial}`;
}
