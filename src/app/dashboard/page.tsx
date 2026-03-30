import { PaperCard } from "@/components/paper-card";
import { mockPapers } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Bảng kết quả tìm kiếm</h1>
        <p className="text-pink-900">Danh sách bài báo mẫu từ các nguồn học thuật uy tín.</p>
      </div>
      <div className="grid gap-4">
        {mockPapers.map((paper) => (
          <PaperCard key={paper.id} paper={paper} />
        ))}
      </div>
    </section>
  );
}
