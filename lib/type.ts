import { ORDER_TYPE_ENUM } from "@/constants/constants";

export interface Article {
  content: string;
  createdAt: string;
  id: number;
  image: string;
  likeCount: number;
  title: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export interface PostProps {
  article: Article;
  [key: string]: any;
}

type Comment = {
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
};

export interface Comments {
  nextCursor: number;
  list: Comment[];
}

export type Order = keyof typeof ORDER_TYPE_ENUM; // 'recent' | 'like'
