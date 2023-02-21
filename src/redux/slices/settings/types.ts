export interface SettingsSliceTypes {
  links: LinkProp[];
  isLoaded: 'loading' | 'success' | 'error';
}

export type LinkProp = {
  name: string;
  to: string;
  icon: string;
};
