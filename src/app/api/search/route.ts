import { NextRequest, NextResponse } from "next/server";
import { filterMockPapers } from "@/lib/mock-data";
import type { SearchFilters } from "@/lib/types";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  const filters: SearchFilters = {
    q: params.get("q") ?? "",
    source: (params.get("source") as SearchFilters["source"]) ?? "all",
    articleType: (params.get("articleType") as SearchFilters["articleType"]) ?? "all",
    openAccessOnly: params.get("openAccessOnly") === "true",
    yearFrom: params.get("yearFrom") ? Number(params.get("yearFrom")) : undefined,
    yearTo: params.get("yearTo") ? Number(params.get("yearTo")) : undefined
  };

  if (!filters.q.trim()) {
    return NextResponse.json(
      {
        ok: false,
        error: "Vui lòng nhập chủ đề hoặc từ khóa để tìm kiếm.",
        papers: []
      },
      { status: 400 }
    );
  }

  const papers = filterMockPapers(filters);

  return NextResponse.json({
    ok: true,
    total: papers.length,
    papers
  });
}
