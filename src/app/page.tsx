import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Trợ Lý Nghiên Cứu</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-fuchsia-950">
          Tìm bài báo khoa học nhanh hơn, rõ ràng hơn.
        </h1>
        <p className="max-w-2xl text-pink-900">
          Công cụ dành cho sinh viên để tra cứu tài liệu, lọc theo nguồn uy tín và xem thông tin cốt lõi trước khi đọc sâu.
        </p>
      </div>

      <div className="grid gap-4 rounded-2xl border border-pink-200 bg-white p-6 shadow-sm md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-pink-700">1) Tìm nhanh theo chủ đề</p>
          <p className="mt-1 text-sm text-pink-900">Nhập từ khóa và lọc theo năm, nguồn, truy cập mở.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-pink-700">2) Đọc tóm tắt ngắn</p>
          <p className="mt-1 text-sm text-pink-900">Xem nhanh độ uy tín, độ mới lạ và nội dung chính của từng bài.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-pink-700">3) So sánh dễ hiểu</p>
          <p className="mt-1 text-sm text-pink-900">Đặt các bài báo cạnh nhau để chọn tài liệu phù hợp đề tài.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/search" className="rounded-lg bg-accent px-5 py-3 font-medium text-white">
          Bắt đầu tìm kiếm
        </Link>
        <Link href="/compare" className="rounded-lg border border-pink-300 px-5 py-3 font-medium text-pink-800">
          Xem trang so sánh
        </Link>
      </div>
    </section>
  );
}
