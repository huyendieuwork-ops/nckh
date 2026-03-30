import Link from "next/link";
import type { Paper } from "@/lib/types";

export function PaperCard({ paper }: { paper: Paper }) {
  return (
    <article className="card space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs uppercase tracking-wide text-pink-700">{paper.source}</p>
        <div className="flex gap-2">
          <span className="rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700">Uy tín {paper.credibilityScore}</span>
          <span className="rounded-full bg-fuchsia-100 px-2 py-1 text-xs font-medium text-fuchsia-700">Mới lạ {paper.noveltyScore}</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-fuchsia-950">{paper.title}</h3>
      <p className="text-sm text-pink-900">{paper.abstract}</p>
      <div className="text-sm text-pink-800">
        {paper.year} • {paper.articleType} • {paper.openAccess ? "Truy cập mở" : "Giới hạn"}
      </div>
      <Link href={`/papers/${paper.id}`} className="inline-flex text-sm font-medium text-accent hover:underline">
        Xem chi tiết
      </Link>
    </article>
  );
}
