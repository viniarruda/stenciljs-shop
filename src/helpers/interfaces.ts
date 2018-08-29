export interface Product {
  category: Number;
  brandName: String;
  format: String;
  nextPage: String;
  totalPages: Number;
  items: Item[];
}

export interface Item {
  itemId: Number;
  name: string;
  salePrice: Number;
  shortDescription: string;
  longDescription: String;
  brandName: String;
  thumbnailImage: String;
  mediumImage: String;
  largeImage: String;
  size: String;
  color: String;
  shipToStore: Boolean;
  store: String;
  gender: String;
  availableOnline: String;
}
