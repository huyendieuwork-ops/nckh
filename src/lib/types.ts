export type AcademicSource = "OpenAlex" | "Crossref" | "Semantic Scholar" | "arXiv";

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
  articleType: "journal" | "conference" | "preprint";
  credibilityScore: number;
};
