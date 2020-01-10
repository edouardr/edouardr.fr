export declare interface Author {
  name: string;
}
export declare interface WebsiteConfig {
  siteTitle: string;
  siteTitleAlt: string;
  siteTitleShort: string;
  siteUrl: string;
  siteLanguage: string;
  siteLogo: string;
  siteDescription: string;
  keywords: string[];
  author: Author;
  organization: string;
  twitter: string;
  twitterHandle: string;
  github: string;
  linkedin: string;
  rss: string;
}
declare const config: WebsiteConfig;
export default config;
