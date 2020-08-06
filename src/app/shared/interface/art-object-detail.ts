import { ArtObject } from './art-object';

export interface TilesDetailInfo {
  artObject: ArtObjectDetail;
  artObjectPage: {
    tags: string[];
  };
}

export interface ArtObjectDetail extends ArtObject{
  titles: string;
  description: string;
  objectTypes: string[];
  materials: string[];
  techniques: string[];
  catRefRPK: string[];
  documentation: string[];
  principalMaker: {name: string};
}
