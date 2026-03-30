import type { Paper } from "@/lib/types";

export const mockPapers: Paper[] = [
  {
    id: "paper-1",
    title: "Transformer-Based Learning Analytics for Personalized STEM Tutoring",
    source: "Semantic Scholar",
    year: 2024,
    doi: "10.1234/learn.2024.001",
    abstract:
      "This paper presents a transformer architecture for adaptive tutoring recommendations using course interaction traces.",
    authors: ["Maya Jensen", "Rahul Patel"],
    citations: 32,
    openAccess: true,
    articleType: "conference",
    credibilityScore: 86
  },
  {
    id: "paper-2",
    title: "Benchmarking Retrieval-Augmented Study Assistants in Higher Education",
    source: "OpenAlex",
    year: 2023,
    doi: "10.2233/edu.2023.844",
    abstract:
      "The study compares retrieval pipelines and shows gains in factuality for student-facing assistants.",
    authors: ["Lina Gomez", "Aaron White", "Chen Li"],
    citations: 58,
    openAccess: true,
    articleType: "journal",
    credibilityScore: 90
  },
  {
    id: "paper-3",
    title: "A Survey of LLM Feedback Systems for Undergraduate Writing",
    source: "Crossref",
    year: 2022,
    abstract:
      "We survey deployed LLM systems that generate rubric-aligned feedback for undergraduate writing support.",
    authors: ["Nora Kim"],
    citations: 18,
    openAccess: false,
    articleType: "journal",
    credibilityScore: 74
  }
];

export function getPaperById(id: string) {
  return mockPapers.find((paper) => paper.id === id);
}
