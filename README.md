# Aplikasi Catatan Pribadi

Aplikasi web untuk membuat dan mengelola catatan pribadi, dibangun dengan **React** dan **Vite**. Data catatan dan akun pengguna disimpan melalui [Dicoding Notes API](https://notes-api.dicoding.dev/v1).

## Fitur

- **Autentikasi** — registrasi akun baru, login, dan logout (token disimpan di `localStorage`).
- **Kelola catatan** — tambah, lihat detail, hapus catatan.
- **Arsip** — arsipkan dan batalkan arsip catatan, dengan halaman khusus untuk catatan terarsip.
- **Pencarian** — cari catatan berdasarkan judul; kata kunci tersimpan di URL (`?keyword=...`) sehingga bisa dibagikan.
- **Tema terang/gelap** — pilihan tema tersimpan di `localStorage`.
- **Halaman 404** untuk rute yang tidak ditemukan.

## Teknologi

- [React 18](https://react.dev/)
- [Vite 4](https://vitejs.dev/)
- [React Router 7](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [PropTypes](https://www.npmjs.com/package/prop-types)

## Menjalankan Secara Lokal

Pastikan [Node.js](https://nodejs.org/) sudah terpasang.

```bash
# clone repository
git clone https://github.com/Symphoen1x/personal-notes-app.git
cd personal-notes-app

# install dependencies
npm install

# jalankan development server
npm run dev
```

Buka alamat yang ditampilkan di terminal (default: http://localhost:5173).

## Script yang Tersedia

| Perintah          | Keterangan                                              |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Menjalankan development server dengan hot reload.       |
| `npm run build`   | Membuat build produksi ke folder `dist/`.               |
| `npm run preview` | Menjalankan build produksi secara lokal untuk dicek.    |

## Struktur Proyek

```
src/
├── components/
│   ├── layout/        # TopBar (navigasi, tombol tema, logout)
│   └── notes/         # NoteList, NoteItem, NoteDetail, NoteInput, SearchBar
├── contexts/          # ThemeContext
├── hooks/             # useInput (custom hook untuk input form)
├── pages/
│   ├── auth/          # LoginPage, RegisterPage
│   ├── HomePage.jsx   # daftar catatan aktif
│   ├── ArchivePage.jsx
│   ├── AddNotePage.jsx
│   ├── DetailPage.jsx
│   └── NotFoundPage.jsx
├── styles/            # style.css
├── utils/             # network-data.js (pemanggilan API), helper lain
├── App.jsx            # routing & state autentikasi/tema
└── index.jsx          # entry point
```

## Rute

| Path            | Halaman                          |
| --------------- | -------------------------------- |
| `/`             | Daftar catatan aktif             |
| `/archives`     | Daftar catatan terarsip          |
| `/notes/new`    | Tambah catatan baru              |
| `/notes/:id`    | Detail catatan                   |
| `/register`     | Registrasi (saat belum login)    |

Saat belum login, semua rute lain akan menampilkan halaman login.

## Deployment

Proyek ini siap di-deploy ke [Vercel](https://vercel.com/). Import repository ini di Vercel — framework **Vite** akan terdeteksi otomatis (build command `npm run build`, output `dist`). File [`vercel.json`](vercel.json) sudah mengatur rewrite ke `index.html` agar rute seperti `/notes/:id` tetap berfungsi saat halaman di-refresh.
