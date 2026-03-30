import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">MVP học thuật cho sinh viên</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-fuchsia-950">
          Tìm và so sánh bài báo khoa học uy tín thật nhanh.
        </h1>
        <p className="max-w-2xl text-pink-900">
          Student Research Navigator giúp sinh viên khám phá, đọc hiểu và đối chiếu tài liệu từ các nguồn học thuật
          đáng tin cậy với giao diện đơn giản, dễ sử dụng.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href="/search" className="rounded-lg bg-accent px-4 py-2 font-medium text-white">
          Bắt đầu tìm chủ đề
        </Link>
        <Link href="/dashboard" className="rounded-lg border border-pink-300 px-4 py-2 font-medium text-pink-800">
          Xem dữ liệu mẫu
        </Link>
      </div>
    </section>
  );
}
