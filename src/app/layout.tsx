import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-ui"
});

export const metadata: Metadata = {
  title: "Trợ Lý Nghiên Cứu",
  description: "Ứng dụng hỗ trợ sinh viên tìm hiểu tài liệu khoa học"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${beVietnam.variable} font-sans`}>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
