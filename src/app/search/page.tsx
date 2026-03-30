"use client";

import { useMemo, useState } from "react";
import { PaperCard } from "@/components/paper-card";
import type { Paper } from "@/lib/types";

type SearchResponse = {
  ok: boolean;
  error?: string;
  total?: number;
  papers: Paper[];
};

const initialState = {
  q: "AI trong giáo dục đại học",
  source: "all",
  yearFrom: "2021",
  yearTo: "2025",
  articleType: "all",
  openAccessOnly: true
};

export default function SearchPage() {
  const [filters, setFilters] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<Paper[]>([]);
  const hasSearched = useMemo(() => results.length > 0 || error !== null, [results.length, error]);

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const query = new URLSearchParams({
        q: filters.q,
        source: filters.source,
        yearFrom: filters.yearFrom,
        yearTo: filters.yearTo,
        articleType: filters.articleType,
        openAccessOnly: String(filters.openAccessOnly)
      });

      const response = await fetch(`/api/search?${query.toString()}`, {
        method: "GET",
        headers: { Accept: "application/json" }
      });

      const contentType = response.headers.get("content-type") ?? "";
      if (!contentType.includes("application/json")) {
        throw new Error("Máy chủ trả về dữ liệu không hợp lệ. Vui lòng thử lại.");
      }

      const data = (await response.json()) as SearchResponse;
      if (!response.ok || !data.ok) {
        setResults([]);
        setError(data.error ?? "Không thể tìm kiếm lúc này. Vui lòng thử lại sau.");
        return;
      }

      setResults(data.papers);
    } catch {
      setResults([]);
      setError("Có lỗi kết nối khi tìm kiếm. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-fuchsia-950">Tìm kiếm tài liệu theo chủ đề</h1>
        <p className="max-w-3xl text-pink-900">
          Nhập chủ đề bạn đang làm, chọn bộ lọc cần thiết, sau đó bấm tìm kiếm để xem danh sách bài báo phù hợp.
        </p>
      </div>

      <form onSubmit={handleSearch} className="card grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm md:col-span-2">
          <span className="font-medium">Chủ đề / từ khóa</span>
          <input
            className="w-full rounded-md border border-pink-300 bg-white p-3 text-base"
            value={filters.q}
            onChange={(e) => setFilters((prev) => ({ ...prev, q: e.target.value }))}
            placeholder="Ví dụ: học sâu trong giáo dục y khoa"
          />
        </label>

        <label className="space-y-1 text-sm">
          <span className="font-medium">Nguồn</span>
          <select
            className="w-full rounded-md border border-pink-300 bg-white p-2"
            value={filters.source}
            onChange={(e) => setFilters((prev) => ({ ...prev, source: e.target.value }))}
          >
            <option value="all">Tất cả nguồn</option>
            <option value="OpenAlex">OpenAlex</option>
            <option value="Crossref">Crossref</option>
            <option value="Semantic Scholar">Semantic Scholar</option>
            <option value="arXiv">arXiv</option>
          </select>
        </label>

        <label className="space-y-1 text-sm">
          <span className="font-medium">Loại bài</span>
          <select
            className="w-full rounded-md border border-pink-300 bg-white p-2"
            value={filters.articleType}
            onChange={(e) => setFilters((prev) => ({ ...prev, articleType: e.target.value }))}
          >
            <option value="all">Tất cả loại</option>
            <option value="journal">Tạp chí</option>
            <option value="conference">Hội nghị</option>
            <option value="preprint">Tiền in</option>
          </select>
        </label>

        <label className="space-y-1 text-sm">
          <span className="font-medium">Từ năm</span>
          <input
            type="number"
            className="w-full rounded-md border border-pink-300 bg-white p-2"
            value={filters.yearFrom}
            onChange={(e) => setFilters((prev) => ({ ...prev, yearFrom: e.target.value }))}
          />
        </label>

        <label className="space-y-1 text-sm">
          <span className="font-medium">Đến năm</span>
          <input
            type="number"
            className="w-full rounded-md border border-pink-300 bg-white p-2"
            value={filters.yearTo}
            onChange={(e) => setFilters((prev) => ({ ...prev, yearTo: e.target.value }))}
          />
        </label>

        <label className="flex items-center gap-2 text-sm md:col-span-2">
          <input
            type="checkbox"
            checked={filters.openAccessOnly}
            onChange={(e) => setFilters((prev) => ({ ...prev, openAccessOnly: e.target.checked }))}
          />
          Chỉ hiển thị bài truy cập mở
        </label>

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 inline-flex items-center justify-center rounded-lg bg-accent px-4 py-3 font-medium text-white disabled:opacity-70"
        >
          {loading ? "Đang tìm kiếm..." : "Tìm kiếm bài báo"}
        </button>
      </form>

      {error && <div className="rounded-lg border border-rose-300 bg-rose-50 p-3 text-sm text-rose-700">{error}</div>}

      {!loading && hasSearched && !error && results.length === 0 && (
        <div className="rounded-lg border border-pink-200 bg-white p-4 text-pink-800">
          Không có kết quả phù hợp. Hãy thử đổi từ khóa hoặc nới bộ lọc.
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-fuchsia-950">Kết quả ({results.length})</h2>
          <div className="grid gap-4">
            {results.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
