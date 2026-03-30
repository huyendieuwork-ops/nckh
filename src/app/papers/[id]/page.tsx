import Link from "next/link";
import { notFound } from "next/navigation";
import { getPaperById } from "@/lib/mock-data";

export default function PaperDetailPage({ params }: { params: { id: string } }) {
  const paper = getPaperById(params.id);

  if (!paper) notFound();

  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-pink-700">{paper.source}</p>
        <h1 className="text-3xl font-bold text-fuchsia-950">{paper.title}</h1>
        <p className="text-pink-900">{paper.authors.join(", ")} • {paper.year}</p>
      </div>

      <article className="card space-y-4">
        <h2 className="text-xl font-semibold">Tóm tắt bài báo</h2>
        <p className="leading-7 text-pink-950">{paper.abstract}</p>
        <div className="grid gap-2 text-sm text-pink-800 md:grid-cols-2">
          <p>DOI: {paper.doi ?? "Không có"}</p>
          <p>Lượt trích dẫn: {paper.citations}</p>
          <p>Loại bài: {paper.articleType}</p>
          <p>Truy cập mở: {paper.openAccess ? "Có" : "Không"}</p>
          <p>Độ uy tín: {paper.credibilityScore}/100</p>
          <p>Độ mới lạ: {paper.noveltyScore}/100</p>
        </div>
      </article>

      <Link href="/compare" className="inline-flex rounded-lg bg-accent px-4 py-2 font-medium text-white">
        So sánh với bài khác
      </Link>
    </section>
  );
}
