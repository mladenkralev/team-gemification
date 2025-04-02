export interface KudosModel {
  name: string;
  kudos: {
    [category: string]: number;
  };
}
