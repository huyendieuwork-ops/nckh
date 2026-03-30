import { PaperCard } from "@/components/paper-card";
import { mockPapers } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-fuchsia-950">Bảng kết quả mẫu</h1>
        <p className="text-pink-900">Danh sách bài báo minh họa để bạn trải nghiệm giao diện và luồng đọc tài liệu.</p>
      </div>
      <div className="grid gap-4">
        {mockPapers.map((paper) => (
          <PaperCard key={paper.id} paper={paper} />
        ))}
      </div>
    </section>
  );
}
