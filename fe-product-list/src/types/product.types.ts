export interface IComment {
  id: string;
  productId: string;
  description: string;
  date: string;
}

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  count: number;
  weight: number;
  comments: IComment[];
}

export interface ICreateProduct {
  name: string;
  imageUrl: string;
  count: number;
  weight: number;
}
