import { mockPapers } from "@/lib/mock-data";

export default function ComparePage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-fuchsia-950">So sánh bài báo</h1>
        <p className="text-pink-900">So sánh nhanh theo năm, mức uy tín, độ mới lạ và số trích dẫn.</p>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-pink-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-pink-200 text-sm">
          <thead className="bg-pink-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Tiêu đề</th>
              <th className="px-4 py-3 text-left font-semibold">Nguồn</th>
              <th className="px-4 py-3 text-left font-semibold">Năm</th>
              <th className="px-4 py-3 text-left font-semibold">Uy tín</th>
              <th className="px-4 py-3 text-left font-semibold">Mới lạ</th>
              <th className="px-4 py-3 text-left font-semibold">Trích dẫn</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-pink-100">
            {mockPapers.map((paper) => (
              <tr key={paper.id}>
                <td className="px-4 py-3">{paper.title}</td>
                <td className="px-4 py-3">{paper.source}</td>
                <td className="px-4 py-3">{paper.year}</td>
                <td className="px-4 py-3">{paper.credibilityScore}</td>
                <td className="px-4 py-3">{paper.noveltyScore}</td>
                <td className="px-4 py-3">{paper.citations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
