import Link from "next/link";
import { notFound } from "next/navigation";
import { getPaperById } from "@/lib/mock-data";

export default function PaperDetailPage({ params }: { params: { id: string } }) {
  const paper = getPaperById(params.id);

  if (!paper) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-pink-700">{paper.source}</p>
        <h1 className="text-3xl font-bold">{paper.title}</h1>
        <p className="text-pink-900">{paper.authors.join(", ")} • {paper.year}</p>
      </div>

      <article className="card space-y-4">
        <h2 className="text-xl font-semibold">Tóm tắt</h2>
        <p className="text-pink-900">{paper.abstract}</p>
        <div className="grid gap-2 text-sm text-pink-800 md:grid-cols-2">
          <p>DOI: {paper.doi ?? "Không có"}</p>
          <p>Lượt trích dẫn: {paper.citations}</p>
          <p>Loại bài: {paper.articleType}</p>
          <p>Truy cập mở: {paper.openAccess ? "Có" : "Không"}</p>
        </div>
      </article>

      <Link href="/compare" className="inline-flex rounded-lg bg-accent px-4 py-2 font-medium text-white">
        So sánh bài báo
      </Link>
    </section>
  );
}
