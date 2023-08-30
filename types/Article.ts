import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';

interface Article extends MarkdownParsedContent {
  title: string;
  description: string;
  img: string;
  alt: string;
  tags: string[];
  readingTime: number;
  createdAt: string;
}

export default Article;
