import Link from "next/link";

export default function SearchPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Tìm kiếm theo chủ đề</h1>
      <form className="card grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span className="font-medium">Chủ đề</span>
          <input className="w-full rounded-md border border-pink-300 p-2" defaultValue="AI trong giáo dục đại học" />
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium">Nguồn</span>
          <select className="w-full rounded-md border border-pink-300 p-2" defaultValue="all">
            <option value="all">Tất cả nguồn</option>
            <option>OpenAlex</option>
            <option>Crossref</option>
            <option>Semantic Scholar</option>
            <option>arXiv</option>
          </select>
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium">Từ năm</span>
          <input type="number" className="w-full rounded-md border border-pink-300 p-2" defaultValue={2021} />
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium">Đến năm</span>
          <input type="number" className="w-full rounded-md border border-pink-300 p-2" defaultValue={2025} />
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked />
          Chỉ bài truy cập mở
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium">Loại bài</span>
          <select className="w-full rounded-md border border-pink-300 p-2" defaultValue="all">
            <option value="all">Tất cả loại</option>
            <option>journal</option>
            <option>conference</option>
            <option>preprint</option>
          </select>
        </label>
      </form>
      <Link href="/dashboard" className="inline-flex rounded-lg bg-accent px-4 py-2 font-medium text-white">
        Xem kết quả mẫu
      </Link>
    </section>
  );
}
