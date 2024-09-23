export type Article = {
  id: number;
  created_at: number;
  title: string;
  cover: string | File;
  url: string;
  type: ArticleType;
  content: string;
  status: ArticleStatus;
  clicks: number;
  impressions: number;
  ctr: number;
};

export type ArticleType =
  | "informational"
  | "transactional"
  | "review"
  | "other";

export type ArticleStatus = "published" | "draft" | "archived";
