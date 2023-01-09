export interface PlayerSliceProp {
  songs: any[];
  genresFilter: FilterProp;
}

export type FilterProp = {
  title: string;
  value: string;
};
