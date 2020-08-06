export interface TilesInfo {
  count: number;
  artObjects: ArtObject[];
}

export interface ArtObject {
  id: string;
  title: string;
  longTitle: string;
  webImage: TileImage;
  headerImage?: TileImage;
  objectNumber: string;
}

export interface TileImage {
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}


