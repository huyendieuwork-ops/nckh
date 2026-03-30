import { PrismaClient, AcademicSource, ArticleType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "demo@student.edu" },
    create: { email: "demo@student.edu", name: "Demo Student" },
    update: {}
  });

  const p1 = await prisma.paper.upsert({
    where: { doi: "10.1234/learn.2024.001" },
    create: {
      title: "Transformer-Based Learning Analytics for Personalized STEM Tutoring",
      source: AcademicSource.SEMANTIC_SCHOLAR,
      year: 2024,
      doi: "10.1234/learn.2024.001",
      abstract: "Transformer architecture for adaptive tutoring recommendations.",
      openAccess: true,
      articleType: ArticleType.CONFERENCE,
      citationCount: 32,
      credibilityScore: 86,
      authors: { create: [{ name: "Maya Jensen" }, { name: "Rahul Patel" }] },
      analyses: {
        create: {
          summary: "Adaptive tutoring recommendations using transformers.",
          researchProblem: "Low personalization in STEM tutoring.",
          method: "Transformer model over learning activity sequences.",
          dataset: "University LMS interaction logs",
          findings: "Improved recommendation relevance over baseline.",
          limitations: "Single institution dataset.",
          noveltyNote: "Novel sequence modeling for tutoring adaptation.",
          noveltyScore: 78,
          evidenceStrength: 71
        }
      }
    },
    update: {}
  });

  const search = await prisma.topicSearch.create({
    data: {
      userId: user.id,
      topic: "AI in higher education",
      yearFrom: 2021,
      yearTo: 2025,
      openAccessOnly: true
    }
  });

  await prisma.topicSearchPaper.upsert({
    where: { topicSearchId_paperId: { topicSearchId: search.id, paperId: p1.id } },
    create: { topicSearchId: search.id, paperId: p1.id, rank: 1 },
    update: { rank: 1 }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
