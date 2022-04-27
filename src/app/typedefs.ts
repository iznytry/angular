export enum Category {
  Eye = 'eye',
  Face = 'face',
  Care = 'care',
  Gel = 'gel',
  Clean = 'çlean'
}



export interface Product {
  id: number;
  name: string;
  repeating: {
    count: number;
    times: number;
  };
  category: Category;
}

export interface Articles {
  id: number;
  name: string;
  duration: number;
  categories: Category[];
  image: string;
  articles: Articles[];
}
