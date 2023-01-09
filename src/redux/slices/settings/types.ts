export interface SettingsSliceTypes {
  links: LinkProp[];
}

export type LinkProp = {
  name: string;
  to: string;
  icon: string;
};
