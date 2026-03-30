export type AcademicSource = "OpenAlex" | "Crossref" | "Semantic Scholar" | "arXiv";

export type ArticleType = "journal" | "conference" | "preprint";

export type Paper = {
  id: string;
  title: string;
  source: AcademicSource;
  year: number;
  doi?: string;
  abstract: string;
  authors: string[];
  citations: number;
  openAccess: boolean;
  articleType: ArticleType;
  credibilityScore: number;
  noveltyScore: number;
};

export type SearchFilters = {
  q: string;
  source?: AcademicSource | "all";
  yearFrom?: number;
  yearTo?: number;
  openAccessOnly?: boolean;
  articleType?: ArticleType | "all";
};
