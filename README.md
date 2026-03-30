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

## Chạy tự động trên GitHub

Repository đã có sẵn GitHub Actions:

- `CI` (`.github/workflows/ci.yml`): tự chạy `npm ci`, `prisma generate`, `typecheck`, `build` cho push/PR.
- `Deploy to Vercel` (`.github/workflows/deploy-vercel.yml`): tự deploy production khi push lên `main/master` hoặc chạy thủ công.

### Thiết lập deploy Vercel từ GitHub

1. Kết nối repo với Vercel (import project).
2. Thêm GitHub Secrets trong repo:
   - `VERCEL_TOKEN`
3. Push lên `main` để workflow `Deploy to Vercel` chạy.

Sau deploy, app sẽ chạy trên domain Vercel của bạn (ví dụ: `https://<project>.vercel.app`).
