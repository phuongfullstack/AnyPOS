# AnyPOS — Offline-First POS Hybrid Ecosystem

Hệ thống POS Offline-first, đồng bộ WooCommerce và tích hợp HĐĐT Sinvoice (NĐ 123/2020/NĐ-CP).

## Kiến Trúc Hệ Thống

| Thành phần | Công nghệ |
|---|---|
| **POS App (Desktop)** | Electron.js + Next.js (React) |
| **Local Database** | SQLite (better-sqlite3 / Prisma) |
| **Middleware (Server)** | ASP.NET Core (.NET 8) |
| **Central Database** | PostgreSQL |
| **Communication** | RESTful API + SignalR |

```
AnyPOS/
├── src/
│   ├── middleware/          # ASP.NET Core .NET 8
│   │   ├── AnyPOS.Core/     # Domain models & services
│   │   ├── AnyPOS.Api/      # Web API + SignalR hub
│   │   └── AnyPOS.Tests/    # xUnit tests (30 tests)
│   └── pos-app/             # Electron + Next.js
│       ├── electron/        # Main process + preload
│       ├── renderer/        # Next.js POS UI
│       ├── lib/             # Tax calc, sync worker, offline invoice code
│       └── __tests__/       # Jest tests (24 tests)
└── README.md
```

## Tính Năng Chính

### Offline-First
- Tất cả giao dịch được ghi vào SQLite cục bộ trước khi đồng bộ.
- `SyncWorker` quét hàng chờ và đẩy dữ liệu khi có mạng theo cơ chế **Exponential Backoff** (5s → 3600s).
- Sinh mã hóa đơn tạm thời offline: `{PREFIX}-{YYYYMMDD}-{SEQUENCE}`.

### Tích Hợp WooCommerce
- Nhận Webhook từ WooCommerce khi sản phẩm thay đổi.
- POS kéo (pull) dữ liệu sản phẩm từ Middleware.
- Ánh xạ `Product_ID` giữa local và WooCommerce.

### Tích Hợp Sinvoice (Viettel)
- Tính thuế tại Middleware theo chuẩn kế toán (làm tròn half-away-from-zero).
- Phân loại lỗi Sinvoice:
  - **Lỗi Logic** (sai MST, sai thuế): Trả về POS để nhân viên sửa.
  - **Lỗi Hệ thống** (timeout, maintenance): Tự động đưa vào hàng chờ retry.

### Cơ Sở Dữ Liệu
Mọi bảng liên quan đến hóa đơn đều có các trường bắt buộc:
- `PosOrderId` — ID duy nhất từ máy POS
- `WcOrderId` — ID đơn hàng WooCommerce
- `InvoiceNo` — Số hóa đơn điện tử
- `SyncStatus` — 0: Local, 1: Syncing, 2: Done, 3: Error
- `TaxCode` — Mã cơ quan thuế

## Khởi Chạy

### Middleware

```bash
cd src/middleware
dotnet restore
dotnet run --project AnyPOS.Api
```

### POS App (Development)

```bash
cd src/pos-app
npm install
npm test             # chạy unit tests
# Để khởi chạy UI:
# npm run dev        # Next.js dev server
# npm run electron   # Electron (sau khi Next.js đã chạy)
```

## Chạy Tests

```bash
# Middleware (30 xUnit tests)
cd src/middleware && dotnet test

# POS App (24 Jest tests)
cd src/pos-app && npm test
```

## Cấu Hình

Sao chép và chỉnh sửa `src/middleware/AnyPOS.Api/appsettings.json`:

```json
{
  "WooCommerce": {
    "BaseUrl": "https://your-store.com/wp-json/wc/v3/",
    "ConsumerKey": "ck_...",
    "ConsumerSecret": "cs_..."
  },
  "Sinvoice": {
    "BaseUrl": "https://sinvoice.viettel.vn/api/",
    "Username": "...",
    "Password": "..."
  },
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Database=anypos;Username=postgres;Password=..."
  }
}
```

> ⚠️ **Bảo mật:** Không commit thông tin xác thực vào source code. Sử dụng biến môi trường hoặc secrets manager trong production.