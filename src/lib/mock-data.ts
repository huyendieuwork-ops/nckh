import type { Paper, SearchFilters } from "@/lib/types";

export const mockPapers: Paper[] = [
  {
    id: "paper-1",
    title: "Transformer-Based Learning Analytics for Personalized STEM Tutoring",
    source: "Semantic Scholar",
    year: 2024,
    doi: "10.1234/learn.2024.001",
    abstract:
      "Bài báo đề xuất kiến trúc transformer để cá nhân hóa gợi ý học tập trong các môn STEM từ dữ liệu tương tác trên LMS.",
    authors: ["Maya Jensen", "Rahul Patel"],
    citations: 32,
    openAccess: true,
    articleType: "conference",
    credibilityScore: 86,
    noveltyScore: 80
  },
  {
    id: "paper-2",
    title: "Benchmarking Retrieval-Augmented Study Assistants in Higher Education",
    source: "OpenAlex",
    year: 2023,
    doi: "10.2233/edu.2023.844",
    abstract:
      "Nghiên cứu đánh giá nhiều pipeline retrieval-augmented cho trợ lý học tập và cho thấy cải thiện độ chính xác thông tin.",
    authors: ["Lina Gomez", "Aaron White", "Chen Li"],
    citations: 58,
    openAccess: true,
    articleType: "journal",
    credibilityScore: 90,
    noveltyScore: 72
  },
  {
    id: "paper-3",
    title: "A Survey of LLM Feedback Systems for Undergraduate Writing",
    source: "Crossref",
    year: 2022,
    abstract:
      "Tổng quan các hệ thống LLM hỗ trợ phản hồi bài viết đại học theo tiêu chí rubric và mức độ áp dụng thực tế.",
    authors: ["Nora Kim"],
    citations: 18,
    openAccess: false,
    articleType: "journal",
    credibilityScore: 74,
    noveltyScore: 58
  },
  {
    id: "paper-4",
    title: "Domain-Adaptive Evaluation for Vietnamese Educational Chatbots",
    source: "arXiv",
    year: 2025,
    abstract:
      "Đề xuất bộ đánh giá thích nghi miền cho chatbot giáo dục tiếng Việt, tập trung vào độ hữu ích và độ an toàn phản hồi.",
    authors: ["Phương Anh Trần", "Đức Minh Lê"],
    citations: 7,
    openAccess: true,
    articleType: "preprint",
    credibilityScore: 69,
    noveltyScore: 84
  }
];

export function getPaperById(id: string) {
  return mockPapers.find((paper) => paper.id === id);
}

export function filterMockPapers(filters: SearchFilters) {
  return mockPapers.filter((paper) => {
    const query = filters.q.trim().toLowerCase();
    const matchQuery =
      !query ||
      paper.title.toLowerCase().includes(query) ||
      paper.abstract.toLowerCase().includes(query) ||
      paper.authors.some((author) => author.toLowerCase().includes(query));

    const matchSource = !filters.source || filters.source === "all" || paper.source === filters.source;
    const matchYearFrom = !filters.yearFrom || paper.year >= filters.yearFrom;
    const matchYearTo = !filters.yearTo || paper.year <= filters.yearTo;
    const matchOpenAccess = !filters.openAccessOnly || paper.openAccess;
    const matchArticleType = !filters.articleType || filters.articleType === "all" || paper.articleType === filters.articleType;

    return matchQuery && matchSource && matchYearFrom && matchYearTo && matchOpenAccess && matchArticleType;
  });
}
