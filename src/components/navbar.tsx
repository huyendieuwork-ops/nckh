import Link from "next/link";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/search", label: "Tìm chủ đề" },
  { href: "/dashboard", label: "Bảng kết quả" },
  { href: "/compare", label: "So sánh" }
];

export function Navbar() {
  return (
    <header className="border-b border-pink-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-accent">
          Student Research Navigator
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
