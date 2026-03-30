import Link from "next/link";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/search", label: "Tìm kiếm" },
  { href: "/dashboard", label: "Bảng mẫu" },
  { href: "/compare", label: "So sánh" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-pink-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-accent">
          Trợ Lý Nghiên Cứu
        </Link>
        <nav className="flex gap-4 text-sm text-pink-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
