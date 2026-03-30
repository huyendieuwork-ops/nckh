# Student Research Navigator (MVP)

Ứng dụng MVP hỗ trợ sinh viên tìm kiếm và so sánh tài liệu khoa học.

## Công nghệ

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL

## Chức năng hiện có

- Trang chủ (giao diện màu hồng, tiếng Việt)
- Trang tìm chủ đề với bộ lọc
- Bảng kết quả bài báo mẫu
- Trang chi tiết bài báo
- Trang so sánh bài báo
- Prisma schema + seed dữ liệu demo

## Chạy local

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```

Mở tại: <http://localhost:3000>

## Prisma

```bash
npm run prisma:migrate
npm run prisma:seed
```
