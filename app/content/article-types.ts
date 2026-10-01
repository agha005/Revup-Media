export type BlogSection = {
  heading: string;
  body: string;
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
  source?: { title: string; url: string; note: string };
};
export type BlogArticle = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  label: string;
  readTime?: string;
  intro: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  imageAlt?: string;
  takeaway?: string;
  sections: BlogSection[];
  faqs?: { question: string; answer: string }[];
  related?: string[];
  service?: { title: string; href: string };
};
