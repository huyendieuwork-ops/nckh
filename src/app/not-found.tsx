import Link from "next/link";

export default function NotFound() {
  return (
    <div className="card text-center">
      <h2 className="text-2xl font-semibold">Không tìm thấy bài báo</h2>
      <p className="mt-2 text-pink-900">Bài báo bạn chọn chưa có trong dữ liệu mẫu.</p>
      <Link href="/dashboard" className="mt-4 inline-block text-accent underline">
        Quay lại bảng kết quả
      </Link>
    </div>
  );
}
