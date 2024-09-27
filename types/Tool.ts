import type { ParsedContent } from "@nuxt/content";

export interface Tool extends ParsedContent {
  title: string;
  tags: string[];
  website?: string;
  features: string[];
  pricing?: string;
  rating: number;
  slug: string;
}
