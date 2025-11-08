// types.ts
export type Theme = 'light' | 'dark';

export type Attachment = {
  type: string;
  name: string;
  url: string;
  size: string;
};

export type HeadingBlock = {
  type: 'heading';
  level: 2 | 3;
  content: string;
};

export type ParagraphBlock = {
  type: 'paragraph';
  content: string;
};

export type CodeBlock = {
  type: 'code';
  language: 'python' | 'cpp' | 'javascript' | 'pascal' | string;
  content: string;
};

export type ListBlock = {
  type: 'list';
  items: string[];
};

export type ContentBlock = HeadingBlock | ParagraphBlock | CodeBlock | ListBlock;

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  readTime: number;
  categoryId: string;
  tags: string[];
  level: 'Cơ bản' | 'Nâng cao' | 'Chuyên sâu';
  grade: number | null;
  language: 'Python' | 'C++' | null;
  attachments: Attachment[];
  downloads: number;
  content: ContentBlock[];
};

export type SubCategory = {
    id: string;
    name: string;
    tag: string;
    emoji: string;
};

export type Category = {
    id: string;
    slug: string;
    name: string;
    description: string;
    subCategories?: SubCategory[];
    // FIX: Add optional 'isFeatured' property to support featuring categories on the homepage.
    isFeatured?: boolean;
};

export type Tag = {
    id: string;
    name: string;
};