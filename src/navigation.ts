import { getPermalink, getAsset } from './utils/permalinks';

const year: string = new Date().getFullYear().toString();

export const headerData = {
  links: [
    // {
    //   text: 'Features',
    //   href: getPermalink('/features'),
    // },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `© ${year} Wraith Industries`,
};
