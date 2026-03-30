import { mockPapers } from "@/lib/mock-data";

export default function ComparePage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">So sánh bài báo</h1>
        <p className="text-pink-900">Bảng so sánh nhanh các bài báo mẫu theo tiêu chí chính.</p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-pink-200 bg-white">
        <table className="min-w-full divide-y divide-pink-200 text-sm">
          <thead className="bg-pink-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Tiêu đề</th>
              <th className="px-4 py-3 text-left font-semibold">Nguồn</th>
              <th className="px-4 py-3 text-left font-semibold">Năm</th>
              <th className="px-4 py-3 text-left font-semibold">Trích dẫn</th>
              <th className="px-4 py-3 text-left font-semibold">Độ tin cậy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-pink-100">
            {mockPapers.map((paper) => (
              <tr key={paper.id}>
                <td className="px-4 py-3">{paper.title}</td>
                <td className="px-4 py-3">{paper.source}</td>
                <td className="px-4 py-3">{paper.year}</td>
                <td className="px-4 py-3">{paper.citations}</td>
                <td className="px-4 py-3">{paper.credibilityScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
