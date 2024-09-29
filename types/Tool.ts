import type { ParsedContent } from "@nuxt/content";

export interface Tool extends ParsedContent {
  title: string;
  description: string;
  website: string;
  github?: string;
  category: string;
  tags: string[];
  rating: number;
  slug: string;
  compatibility: string[];
  pricing?: string;
  lastUpdated: string;
  createdAt: string;
  features: string[];
}
