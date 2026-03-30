import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-pink-200 bg-white p-6 text-center shadow-sm">
      <h2 className="text-2xl font-semibold text-fuchsia-950">Không tìm thấy nội dung</h2>
      <p className="mt-2 text-pink-900">Liên kết bạn mở có thể đã hết hạn hoặc không tồn tại trong dữ liệu hiện tại.</p>
      <Link href="/search" className="mt-4 inline-block text-accent underline">
        Quay lại trang tìm kiếm
      </Link>
    </div>
  );
}
