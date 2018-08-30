export interface Product {
  category: Number;
  brandName: String;
  format: String;
  nextPage: String;
  totalPages: Number;
  items: Item[];

  itemId: number;
  name: string;
  salePrice: number;
  thumbnailImage: string;
  shortDescription: string;
  longDescription: string;
  largeImage: string;
  color: string;
  offerType: string;
  stock: string;
  modelNumber: string;
  availableOnline: Boolean;
  imageEntities: Gallery[];
}

export interface Item {
  itemId: number;
  name: string;
  salePrice: number;
  shortDescription: string;
  longDescription: string;
  brandName: string;
  thumbnailImage: string;
  mediumImage: string;
  largeImage: string;
  size: string;
  color: string;
  shipToStore: Boolean;
  store: string;
  gender: string;
  availableOnline: string;
}

export class Gallery {
  thumbnailImage: string;
  largeImage: string;
}
