/* Data transaksi di-embed sebagai array JSON agar halaman tetap berjalan via file:// tanpa CORS. */
const SALES_DATA = [
  {
    "Tanggal_Transaksi": "2026-10-01 10:11",
    "Order_ID": "ORD-1000",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 60000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-01 10:32",
    "Order_ID": "ORD-1001",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Ceplok",
    "Harga_Satuan": 4000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 4000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "GrabFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-01 15:01",
    "Order_ID": "ORD-1002",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 56000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-01 16:11",
    "Order_ID": "ORD-1003",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 20000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-01 17:41",
    "Order_ID": "ORD-1004",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Dadar",
    "Harga_Satuan": 4000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 8000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-01 21:03",
    "Order_ID": "ORD-1005",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Dadar",
    "Harga_Satuan": 4000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 4000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-01 22:13",
    "Order_ID": "ORD-1006",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 3,
    "Diskon": 2250,
    "Total_Pendapatan": 42750,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-01 22:20",
    "Order_ID": "ORD-1007",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Lemon Tea",
    "Harga_Satuan": 7000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 28000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-01 23:01",
    "Order_ID": "ORD-1008",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 2,
    "Diskon": 4500,
    "Total_Pendapatan": 25500,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-02 01:07",
    "Order_ID": "ORD-1009",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 3,
    "Diskon": 2700,
    "Total_Pendapatan": 51300,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-02 03:36",
    "Order_ID": "ORD-1010",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 64000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-02 08:47",
    "Order_ID": "ORD-1011",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Ceplok",
    "Harga_Satuan": 4000,
    "Kuantitas": 3,
    "Diskon": 600,
    "Total_Pendapatan": 11400,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-02 10:31",
    "Order_ID": "ORD-1012",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 4,
    "Diskon": 3000,
    "Total_Pendapatan": 57000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-02 10:43",
    "Order_ID": "ORD-1013",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 15000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-02 14:05",
    "Order_ID": "ORD-1014",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 4,
    "Diskon": 12000,
    "Total_Pendapatan": 68000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-02 15:37",
    "Order_ID": "ORD-1015",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 80000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-02 17:57",
    "Order_ID": "ORD-1016",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 18000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-02 18:44",
    "Order_ID": "ORD-1017",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sosis Goreng",
    "Harga_Satuan": 5000,
    "Kuantitas": 2,
    "Diskon": 1500,
    "Total_Pendapatan": 8500,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-03 05:28",
    "Order_ID": "ORD-1018",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 45000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-03 07:12",
    "Order_ID": "ORD-1019",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sosis Goreng",
    "Harga_Satuan": 5000,
    "Kuantitas": 5,
    "Diskon": 0,
    "Total_Pendapatan": 25000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-03 10:44",
    "Order_ID": "ORD-1020",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 60000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-03 11:42",
    "Order_ID": "ORD-1021",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Lemon Tea",
    "Harga_Satuan": 7000,
    "Kuantitas": 4,
    "Diskon": 2800,
    "Total_Pendapatan": 25200,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-03 15:32",
    "Order_ID": "ORD-1022",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Kerupuk",
    "Harga_Satuan": 2000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 2000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GrabFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-03 18:39",
    "Order_ID": "ORD-1023",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 2,
    "Diskon": 4000,
    "Total_Pendapatan": 36000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-03 19:34",
    "Order_ID": "ORD-1024",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Kopi Hitam",
    "Harga_Satuan": 6000,
    "Kuantitas": 4,
    "Diskon": 3600,
    "Total_Pendapatan": 20400,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-04 03:20",
    "Order_ID": "ORD-1025",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 3,
    "Diskon": 2700,
    "Total_Pendapatan": 51300,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-04 06:57",
    "Order_ID": "ORD-1026",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 14000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-04 07:35",
    "Order_ID": "ORD-1027",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 2,
    "Diskon": 3000,
    "Total_Pendapatan": 27000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-04 09:21",
    "Order_ID": "ORD-1028",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 40000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-04 12:21",
    "Order_ID": "ORD-1029",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Kerupuk",
    "Harga_Satuan": 2000,
    "Kuantitas": 5,
    "Diskon": 500,
    "Total_Pendapatan": 9500,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-04 22:56",
    "Order_ID": "ORD-1030",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Air Mineral",
    "Harga_Satuan": 3000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 3000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-04 23:34",
    "Order_ID": "ORD-1031",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Air Mineral",
    "Harga_Satuan": 3000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 3000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-05 05:39",
    "Order_ID": "ORD-1032",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 2,
    "Diskon": 2000,
    "Total_Pendapatan": 38000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GrabFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-05 13:38",
    "Order_ID": "ORD-1033",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 2,
    "Diskon": 2000,
    "Total_Pendapatan": 38000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-05 19:56",
    "Order_ID": "ORD-1034",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 4,
    "Diskon": 8400,
    "Total_Pendapatan": 47600,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-05 23:53",
    "Order_ID": "ORD-1035",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 16000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-06 06:15",
    "Order_ID": "ORD-1036",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 3,
    "Diskon": 1200,
    "Total_Pendapatan": 10800,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-06 20:04",
    "Order_ID": "ORD-1037",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 32000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-06 20:32",
    "Order_ID": "ORD-1038",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 2,
    "Diskon": 1500,
    "Total_Pendapatan": 28500,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-06 22:42",
    "Order_ID": "ORD-1039",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sate Usus",
    "Harga_Satuan": 3000,
    "Kuantitas": 5,
    "Diskon": 2250,
    "Total_Pendapatan": 12750,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-07 06:29",
    "Order_ID": "ORD-1040",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sate Usus",
    "Harga_Satuan": 3000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 3000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-07 06:48",
    "Order_ID": "ORD-1041",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 72000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-07 10:44",
    "Order_ID": "ORD-1042",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Air Mineral",
    "Harga_Satuan": 3000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 3000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-07 16:56",
    "Order_ID": "ORD-1043",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 1,
    "Diskon": 1500,
    "Total_Pendapatan": 13500,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-07 21:09",
    "Order_ID": "ORD-1044",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 3,
    "Diskon": 7200,
    "Total_Pendapatan": 40800,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-07 22:54",
    "Order_ID": "ORD-1045",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 18000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-08 03:57",
    "Order_ID": "ORD-1046",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 4000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-08 16:07",
    "Order_ID": "ORD-1047",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 3,
    "Diskon": 4800,
    "Total_Pendapatan": 43200,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-08 17:58",
    "Order_ID": "ORD-1048",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 4,
    "Diskon": 1600,
    "Total_Pendapatan": 14400,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-09 01:26",
    "Order_ID": "ORD-1049",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 3,
    "Diskon": 2700,
    "Total_Pendapatan": 51300,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-09 15:28",
    "Order_ID": "ORD-1050",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 1,
    "Diskon": 1400,
    "Total_Pendapatan": 12600,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-10 00:40",
    "Order_ID": "ORD-1051",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 72000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-10 01:51",
    "Order_ID": "ORD-1052",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Air Mineral",
    "Harga_Satuan": 3000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 9000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-10 02:10",
    "Order_ID": "ORD-1053",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sosis Goreng",
    "Harga_Satuan": 5000,
    "Kuantitas": 5,
    "Diskon": 2500,
    "Total_Pendapatan": 22500,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-10 06:45",
    "Order_ID": "ORD-1054",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 80000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-10 08:00",
    "Order_ID": "ORD-1055",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 60000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-10 11:18",
    "Order_ID": "ORD-1056",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 16000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-10 11:56",
    "Order_ID": "ORD-1057",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Dadar",
    "Harga_Satuan": 4000,
    "Kuantitas": 1,
    "Diskon": 200,
    "Total_Pendapatan": 3800,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-10 13:58",
    "Order_ID": "ORD-1058",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 56000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-10 20:40",
    "Order_ID": "ORD-1059",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 60000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-11 06:58",
    "Order_ID": "ORD-1060",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Jeruk",
    "Harga_Satuan": 5000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 20000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-11 13:14",
    "Order_ID": "ORD-1061",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Ceplok",
    "Harga_Satuan": 4000,
    "Kuantitas": 5,
    "Diskon": 0,
    "Total_Pendapatan": 20000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-11 13:22",
    "Order_ID": "ORD-1062",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Kerupuk",
    "Harga_Satuan": 2000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 4000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-11 18:49",
    "Order_ID": "ORD-1063",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 2,
    "Diskon": 2800,
    "Total_Pendapatan": 25200,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-12 04:53",
    "Order_ID": "ORD-1064",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 2,
    "Diskon": 3200,
    "Total_Pendapatan": 28800,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-12 10:31",
    "Order_ID": "ORD-1065",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 14000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-12 11:57",
    "Order_ID": "ORD-1066",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Jeruk",
    "Harga_Satuan": 5000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 5000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-12 13:30",
    "Order_ID": "ORD-1067",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 14000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-12 14:55",
    "Order_ID": "ORD-1068",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sate Usus",
    "Harga_Satuan": 3000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 6000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-12 16:46",
    "Order_ID": "ORD-1069",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Jeruk",
    "Harga_Satuan": 5000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 15000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-12 17:39",
    "Order_ID": "ORD-1070",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Air Mineral",
    "Harga_Satuan": 3000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 3000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-12 19:53",
    "Order_ID": "ORD-1071",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Ceplok",
    "Harga_Satuan": 4000,
    "Kuantitas": 4,
    "Diskon": 2400,
    "Total_Pendapatan": 13600,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-12 21:34",
    "Order_ID": "ORD-1072",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 36000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-13 06:51",
    "Order_ID": "ORD-1073",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Dadar",
    "Harga_Satuan": 4000,
    "Kuantitas": 1,
    "Diskon": 600,
    "Total_Pendapatan": 3400,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-13 14:06",
    "Order_ID": "ORD-1074",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 72000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-13 15:50",
    "Order_ID": "ORD-1075",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Dadar",
    "Harga_Satuan": 4000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 12000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-13 21:15",
    "Order_ID": "ORD-1076",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Dadar",
    "Harga_Satuan": 4000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 16000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-14 02:55",
    "Order_ID": "ORD-1077",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 32000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-14 07:39",
    "Order_ID": "ORD-1078",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 32000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-14 12:46",
    "Order_ID": "ORD-1079",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sate Usus",
    "Harga_Satuan": 3000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 9000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-14 16:27",
    "Order_ID": "ORD-1080",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Lemon Tea",
    "Harga_Satuan": 7000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 21000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-15 01:49",
    "Order_ID": "ORD-1081",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Dadar",
    "Harga_Satuan": 4000,
    "Kuantitas": 2,
    "Diskon": 400,
    "Total_Pendapatan": 7600,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-15 03:20",
    "Order_ID": "ORD-1082",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 3,
    "Diskon": 2100,
    "Total_Pendapatan": 39900,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-15 05:09",
    "Order_ID": "ORD-1083",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 30000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-15 07:05",
    "Order_ID": "ORD-1084",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 60000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-15 12:30",
    "Order_ID": "ORD-1085",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 16000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-15 18:51",
    "Order_ID": "ORD-1086",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sate Usus",
    "Harga_Satuan": 3000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 6000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-15 21:20",
    "Order_ID": "ORD-1087",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 4,
    "Diskon": 3200,
    "Total_Pendapatan": 60800,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-16 00:40",
    "Order_ID": "ORD-1088",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sate Usus",
    "Harga_Satuan": 3000,
    "Kuantitas": 5,
    "Diskon": 0,
    "Total_Pendapatan": 15000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-16 01:04",
    "Order_ID": "ORD-1089",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 2,
    "Diskon": 3000,
    "Total_Pendapatan": 27000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-16 06:42",
    "Order_ID": "ORD-1090",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 1,
    "Diskon": 3000,
    "Total_Pendapatan": 17000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-16 06:51",
    "Order_ID": "ORD-1091",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Lemon Tea",
    "Harga_Satuan": 7000,
    "Kuantitas": 2,
    "Diskon": 2100,
    "Total_Pendapatan": 11900,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GrabFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-16 07:14",
    "Order_ID": "ORD-1092",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sate Usus",
    "Harga_Satuan": 3000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 6000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-16 08:27",
    "Order_ID": "ORD-1093",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 1,
    "Diskon": 1000,
    "Total_Pendapatan": 19000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-16 11:13",
    "Order_ID": "ORD-1094",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 32000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-16 11:33",
    "Order_ID": "ORD-1095",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 32000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-16 22:53",
    "Order_ID": "ORD-1096",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 3,
    "Diskon": 2400,
    "Total_Pendapatan": 45600,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-17 00:46",
    "Order_ID": "ORD-1097",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 40000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-17 04:36",
    "Order_ID": "ORD-1098",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Air Mineral",
    "Harga_Satuan": 3000,
    "Kuantitas": 3,
    "Diskon": 1350,
    "Total_Pendapatan": 7650,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-17 07:52",
    "Order_ID": "ORD-1099",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Dadar",
    "Harga_Satuan": 4000,
    "Kuantitas": 5,
    "Diskon": 0,
    "Total_Pendapatan": 20000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-17 09:11",
    "Order_ID": "ORD-1100",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 20000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-17 09:33",
    "Order_ID": "ORD-1101",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sosis Goreng",
    "Harga_Satuan": 5000,
    "Kuantitas": 3,
    "Diskon": 750,
    "Total_Pendapatan": 14250,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-17 14:30",
    "Order_ID": "ORD-1102",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 54000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-17 16:03",
    "Order_ID": "ORD-1103",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 28000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-18 01:37",
    "Order_ID": "ORD-1104",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Lemon Tea",
    "Harga_Satuan": 7000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 7000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-18 03:13",
    "Order_ID": "ORD-1105",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 1,
    "Diskon": 800,
    "Total_Pendapatan": 15200,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-18 04:33",
    "Order_ID": "ORD-1106",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 36000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GrabFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-18 07:18",
    "Order_ID": "ORD-1107",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 64000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-18 11:41",
    "Order_ID": "ORD-1108",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Air Mineral",
    "Harga_Satuan": 3000,
    "Kuantitas": 3,
    "Diskon": 450,
    "Total_Pendapatan": 8550,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-18 13:00",
    "Order_ID": "ORD-1109",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 3,
    "Diskon": 9000,
    "Total_Pendapatan": 51000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-18 13:37",
    "Order_ID": "ORD-1110",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 60000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-18 13:58",
    "Order_ID": "ORD-1111",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 72000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-18 15:04",
    "Order_ID": "ORD-1112",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 48000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-18 18:36",
    "Order_ID": "ORD-1113",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Ceplok",
    "Harga_Satuan": 4000,
    "Kuantitas": 1,
    "Diskon": 600,
    "Total_Pendapatan": 3400,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-18 21:26",
    "Order_ID": "ORD-1114",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 2,
    "Diskon": 800,
    "Total_Pendapatan": 7200,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-19 02:17",
    "Order_ID": "ORD-1115",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Ceplok",
    "Harga_Satuan": 4000,
    "Kuantitas": 1,
    "Diskon": 200,
    "Total_Pendapatan": 3800,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-19 05:54",
    "Order_ID": "ORD-1116",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 80000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-19 08:11",
    "Order_ID": "ORD-1117",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Dadar",
    "Harga_Satuan": 4000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 12000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-19 09:44",
    "Order_ID": "ORD-1118",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 1,
    "Diskon": 2400,
    "Total_Pendapatan": 13600,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-19 12:11",
    "Order_ID": "ORD-1119",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 18000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-19 19:33",
    "Order_ID": "ORD-1120",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 3,
    "Diskon": 1800,
    "Total_Pendapatan": 10200,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-20 00:16",
    "Order_ID": "ORD-1121",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Kerupuk",
    "Harga_Satuan": 2000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 6000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-20 18:17",
    "Order_ID": "ORD-1122",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Kopi Hitam",
    "Harga_Satuan": 6000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 18000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-20 18:46",
    "Order_ID": "ORD-1123",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 36000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-20 20:39",
    "Order_ID": "ORD-1124",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 48000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-21 06:36",
    "Order_ID": "ORD-1125",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 4,
    "Diskon": 7200,
    "Total_Pendapatan": 64800,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-21 10:47",
    "Order_ID": "ORD-1126",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 3,
    "Diskon": 2100,
    "Total_Pendapatan": 39900,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-21 14:53",
    "Order_ID": "ORD-1127",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 18000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-21 15:05",
    "Order_ID": "ORD-1128",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Ceplok",
    "Harga_Satuan": 4000,
    "Kuantitas": 3,
    "Diskon": 1800,
    "Total_Pendapatan": 10200,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-21 16:42",
    "Order_ID": "ORD-1129",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 30000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-21 23:45",
    "Order_ID": "ORD-1130",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 4,
    "Diskon": 3600,
    "Total_Pendapatan": 68400,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-22 07:11",
    "Order_ID": "ORD-1131",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 42000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-22 07:12",
    "Order_ID": "ORD-1132",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 28000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-22 10:51",
    "Order_ID": "ORD-1133",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 1,
    "Diskon": 400,
    "Total_Pendapatan": 3600,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-22 12:08",
    "Order_ID": "ORD-1134",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 42000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-22 19:35",
    "Order_ID": "ORD-1135",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 2,
    "Diskon": 3200,
    "Total_Pendapatan": 28800,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-22 19:47",
    "Order_ID": "ORD-1136",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 3,
    "Diskon": 6000,
    "Total_Pendapatan": 54000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-22 23:58",
    "Order_ID": "ORD-1137",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 1,
    "Diskon": 800,
    "Total_Pendapatan": 15200,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-23 00:02",
    "Order_ID": "ORD-1138",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 15000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-23 09:16",
    "Order_ID": "ORD-1139",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 2,
    "Diskon": 4200,
    "Total_Pendapatan": 23800,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-23 11:45",
    "Order_ID": "ORD-1140",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 4,
    "Diskon": 10800,
    "Total_Pendapatan": 61200,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-23 17:16",
    "Order_ID": "ORD-1141",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 60000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-23 18:53",
    "Order_ID": "ORD-1142",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sosis Goreng",
    "Harga_Satuan": 5000,
    "Kuantitas": 5,
    "Diskon": 0,
    "Total_Pendapatan": 25000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-23 18:57",
    "Order_ID": "ORD-1143",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 4000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-24 00:08",
    "Order_ID": "ORD-1144",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 14000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-24 08:33",
    "Order_ID": "ORD-1145",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 3,
    "Diskon": 5400,
    "Total_Pendapatan": 48600,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-24 10:08",
    "Order_ID": "ORD-1146",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sosis Goreng",
    "Harga_Satuan": 5000,
    "Kuantitas": 5,
    "Diskon": 0,
    "Total_Pendapatan": 25000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-24 12:17",
    "Order_ID": "ORD-1147",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 60000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-24 13:43",
    "Order_ID": "ORD-1148",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Jeruk",
    "Harga_Satuan": 5000,
    "Kuantitas": 1,
    "Diskon": 250,
    "Total_Pendapatan": 4750,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-24 16:59",
    "Order_ID": "ORD-1149",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 28000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-24 21:44",
    "Order_ID": "ORD-1150",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Jeruk",
    "Harga_Satuan": 5000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 10000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-24 23:04",
    "Order_ID": "ORD-1151",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 72000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-25 00:36",
    "Order_ID": "ORD-1152",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 54000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-25 06:29",
    "Order_ID": "ORD-1153",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 60000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-25 10:10",
    "Order_ID": "ORD-1154",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 54000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-25 14:08",
    "Order_ID": "ORD-1155",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sate Usus",
    "Harga_Satuan": 3000,
    "Kuantitas": 5,
    "Diskon": 750,
    "Total_Pendapatan": 14250,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GrabFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-25 14:30",
    "Order_ID": "ORD-1156",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 48000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-25 17:26",
    "Order_ID": "ORD-1157",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 1,
    "Diskon": 750,
    "Total_Pendapatan": 14250,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-25 17:50",
    "Order_ID": "ORD-1158",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 12000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-25 22:02",
    "Order_ID": "ORD-1159",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sate Usus",
    "Harga_Satuan": 3000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 9000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-26 04:25",
    "Order_ID": "ORD-1160",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sate Usus",
    "Harga_Satuan": 3000,
    "Kuantitas": 1,
    "Diskon": 450,
    "Total_Pendapatan": 2550,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-26 16:13",
    "Order_ID": "ORD-1161",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 3,
    "Diskon": 9000,
    "Total_Pendapatan": 51000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-26 19:31",
    "Order_ID": "ORD-1162",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 2,
    "Diskon": 400,
    "Total_Pendapatan": 7600,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-26 20:30",
    "Order_ID": "ORD-1163",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 4,
    "Diskon": 12000,
    "Total_Pendapatan": 68000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-26 21:32",
    "Order_ID": "ORD-1164",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 36000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GrabFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-26 23:16",
    "Order_ID": "ORD-1165",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 2,
    "Diskon": 1200,
    "Total_Pendapatan": 6800,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-26 23:47",
    "Order_ID": "ORD-1166",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 30000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GrabFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-27 00:01",
    "Order_ID": "ORD-1167",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 16000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-27 00:46",
    "Order_ID": "ORD-1168",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 15000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-27 00:55",
    "Order_ID": "ORD-1169",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Lemon Tea",
    "Harga_Satuan": 7000,
    "Kuantitas": 2,
    "Diskon": 1400,
    "Total_Pendapatan": 12600,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-27 06:09",
    "Order_ID": "ORD-1170",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 60000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-27 08:41",
    "Order_ID": "ORD-1171",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Jeruk",
    "Harga_Satuan": 5000,
    "Kuantitas": 4,
    "Diskon": 1000,
    "Total_Pendapatan": 19000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-27 11:17",
    "Order_ID": "ORD-1172",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 1,
    "Diskon": 2400,
    "Total_Pendapatan": 13600,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-27 13:57",
    "Order_ID": "ORD-1173",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Lemon Tea",
    "Harga_Satuan": 7000,
    "Kuantitas": 1,
    "Diskon": 700,
    "Total_Pendapatan": 6300,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "GrabFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-27 16:15",
    "Order_ID": "ORD-1174",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Jeruk",
    "Harga_Satuan": 5000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 5000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-27 18:38",
    "Order_ID": "ORD-1175",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sate Usus",
    "Harga_Satuan": 3000,
    "Kuantitas": 5,
    "Diskon": 1500,
    "Total_Pendapatan": 13500,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GrabFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-27 18:49",
    "Order_ID": "ORD-1176",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 54000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-27 20:28",
    "Order_ID": "ORD-1177",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Lemon Tea",
    "Harga_Satuan": 7000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 28000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "ShopeeFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-27 23:27",
    "Order_ID": "ORD-1178",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Kerupuk",
    "Harga_Satuan": 2000,
    "Kuantitas": 2,
    "Diskon": 200,
    "Total_Pendapatan": 3800,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-28 09:04",
    "Order_ID": "ORD-1179",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Jeruk",
    "Harga_Satuan": 5000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 10000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-28 10:37",
    "Order_ID": "ORD-1180",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Lemon Tea",
    "Harga_Satuan": 7000,
    "Kuantitas": 2,
    "Diskon": 2100,
    "Total_Pendapatan": 11900,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-28 12:09",
    "Order_ID": "ORD-1181",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Dadar",
    "Harga_Satuan": 4000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 4000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-28 14:36",
    "Order_ID": "ORD-1182",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Air Mineral",
    "Harga_Satuan": 3000,
    "Kuantitas": 4,
    "Diskon": 600,
    "Total_Pendapatan": 11400,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-28 22:46",
    "Order_ID": "ORD-1183",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 16000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-29 02:54",
    "Order_ID": "ORD-1184",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Sate Usus",
    "Harga_Satuan": 3000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 6000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-29 03:14",
    "Order_ID": "ORD-1185",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Kwetiau Goreng",
    "Harga_Satuan": 16000,
    "Kuantitas": 3,
    "Diskon": 4800,
    "Total_Pendapatan": 43200,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-29 06:38",
    "Order_ID": "ORD-1186",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 54000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-29 11:42",
    "Order_ID": "ORD-1187",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Kopi Hitam",
    "Harga_Satuan": 6000,
    "Kuantitas": 4,
    "Diskon": 2400,
    "Total_Pendapatan": 21600,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-29 22:12",
    "Order_ID": "ORD-1188",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 2,
    "Diskon": 3000,
    "Total_Pendapatan": 27000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-30 04:13",
    "Order_ID": "ORD-1189",
    "Kategori_Menu": "Side Dish",
    "Nama_Menu": "Telur Dadar",
    "Harga_Satuan": 4000,
    "Kuantitas": 2,
    "Diskon": 800,
    "Total_Pendapatan": 7200,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-30 06:02",
    "Order_ID": "ORD-1190",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Jeruk",
    "Harga_Satuan": 5000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 5000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-30 10:42",
    "Order_ID": "ORD-1191",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Teh Manis",
    "Harga_Satuan": 4000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 16000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-30 13:29",
    "Order_ID": "ORD-1192",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Mie Goreng Jawa",
    "Harga_Satuan": 14000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 28000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-30 15:58",
    "Order_ID": "ORD-1193",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 4,
    "Diskon": 0,
    "Total_Pendapatan": 60000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-30 18:30",
    "Order_ID": "ORD-1194",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 1,
    "Diskon": 0,
    "Total_Pendapatan": 18000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-30 22:05",
    "Order_ID": "ORD-1195",
    "Kategori_Menu": "Minuman",
    "Nama_Menu": "Es Lemon Tea",
    "Harga_Satuan": 7000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 14000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "e-Wallet",
    "Saluran_Penjualan": "GoFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-31 00:10",
    "Order_ID": "ORD-1196",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 2,
    "Diskon": 2000,
    "Total_Pendapatan": 38000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "Takeaway"
  },
  {
    "Tanggal_Transaksi": "2026-10-31 01:41",
    "Order_ID": "ORD-1197",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Gila",
    "Harga_Satuan": 18000,
    "Kuantitas": 2,
    "Diskon": 1800,
    "Total_Pendapatan": 34200,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "Dine-in"
  },
  {
    "Tanggal_Transaksi": "2026-10-31 02:09",
    "Order_ID": "ORD-1198",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Spesial",
    "Harga_Satuan": 20000,
    "Kuantitas": 2,
    "Diskon": 0,
    "Total_Pendapatan": 40000,
    "Tipe_Pelanggan": "Pekerja",
    "Metode_Pembayaran": "QRIS",
    "Saluran_Penjualan": "GrabFood"
  },
  {
    "Tanggal_Transaksi": "2026-10-31 02:35",
    "Order_ID": "ORD-1199",
    "Kategori_Menu": "Main Course",
    "Nama_Menu": "Nasi Goreng Wok-hei",
    "Harga_Satuan": 15000,
    "Kuantitas": 3,
    "Diskon": 0,
    "Total_Pendapatan": 45000,
    "Tipe_Pelanggan": "Mahasiswa",
    "Metode_Pembayaran": "Tunai",
    "Saluran_Penjualan": "GrabFood"
  }
];

/* ==================== DATA DEFAULT CRM TUUMIS (KATALOG, UGC, TOWS) ==================== */
const DEFAULT_MENUS = [
  {
    "id": "MNU-001",
    "name": "Nasi Goreng Kampung",
    "category": "Main Course",
    "price": 20000,
    "desc": "Menu lezat khas TUUMIS kategori Menu Nasi Goreng Signature dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a30df990-5988-4d3b-a7bf-81919e91b0b9_Go-Biz_20261014_200957.jpeg",
    "gofoodSection": "Menu Nasi Goreng Signature",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-002",
    "name": "Nasi Goreng Kecombrang",
    "category": "Main Course",
    "price": 32000,
    "desc": "Menu lezat khas TUUMIS kategori Menu Nasi Goreng Signature dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/262ab98e-b422-4f3f-916c-ff8e6168921f_Go-Biz_20261014_201035.jpeg",
    "gofoodSection": "Menu Nasi Goreng Signature",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-003",
    "name": "Nasi Goreng Gulai Sapi",
    "category": "Main Course",
    "price": 54000,
    "desc": "Menu lezat khas TUUMIS kategori Aneka Nasi Goreng Sapi dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/fbae50df-e1ea-4bb8-8bc0-ac55ccbab8ea_Go-Biz_20261014_204330.jpeg",
    "gofoodSection": "Aneka Nasi Goreng Sapi",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-004",
    "name": "Nasi Goreng Rawon Sapi",
    "category": "Main Course",
    "price": 54000,
    "desc": "Menu lezat khas TUUMIS kategori Aneka Nasi Goreng Sapi dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/05d9bedd-9973-4a9d-bfb1-bd4adda11331_Go-Biz_20261014_204402.jpeg",
    "gofoodSection": "Aneka Nasi Goreng Sapi",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-005",
    "name": "Nasi Goreng Ayam Asam Manis",
    "category": "Main Course",
    "price": 46000,
    "desc": "Menu lezat khas TUUMIS kategori Aneka Nasi Goreng Ayam dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/b3b89223-b1ca-406d-bd46-28f66bd9a438_Go-Biz_20261014_202453.jpeg",
    "gofoodSection": "Aneka Nasi Goreng Ayam",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-006",
    "name": "Nasi Goreng Ayam Blackpapper",
    "category": "Main Course",
    "price": 46000,
    "desc": "Menu lezat khas TUUMIS kategori Aneka Nasi Goreng Ayam dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/4e138233-29f5-4aab-aa0b-9b155ddd575e_Go-Biz_20261014_202601.jpeg",
    "gofoodSection": "Aneka Nasi Goreng Ayam",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-007",
    "name": "Nasi Goreng Seafood Asam Manis",
    "category": "Main Course",
    "price": 50000,
    "desc": "Menu lezat khas TUUMIS kategori Aneka Nasi Goreng Seafood dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/2302b517-2c82-43f1-a394-92844382c4ac_Go-Biz_20261014_203049.jpeg",
    "gofoodSection": "Aneka Nasi Goreng Seafood",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-008",
    "name": "Nasi Goreng Seafood Blackpapper",
    "category": "Main Course",
    "price": 50000,
    "desc": "Menu lezat khas TUUMIS kategori Aneka Nasi Goreng Seafood dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c7fda6ef-8b5f-402d-b597-eb9a7503dd4a_Go-Biz_20261014_203134.jpeg",
    "gofoodSection": "Aneka Nasi Goreng Seafood",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-009",
    "name": "Mie Goreng Ayam",
    "category": "Noodles",
    "price": 40000,
    "desc": "Menu lezat khas TUUMIS kategori Mie Goreng dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/77110256-8cf1-4d3a-aaa8-862b6ad7417b_Go-Biz_20261014_212542.jpeg",
    "gofoodSection": "Mie Goreng",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-010",
    "name": "Mie Goreng Oriental",
    "category": "Noodles",
    "price": 52000,
    "desc": "Menu lezat khas TUUMIS kategori Mie Goreng dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/bbc8616f-75ab-4bd1-8d24-90664b70731d_Go-Food-Merchant_20261014_234501.jpeg",
    "gofoodSection": "Mie Goreng",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-011",
    "name": "Kwetiau Goreng Ayam",
    "category": "Noodles",
    "price": 40000,
    "desc": "Menu lezat khas TUUMIS kategori Kwetiau Goreng dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/12e2887b-be70-4468-a64a-99dcae5fe736_Go-Biz_20261014_212740.jpeg",
    "gofoodSection": "Kwetiau Goreng",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-012",
    "name": "Kwetiau Goreng Oriental",
    "category": "Noodles",
    "price": 48000,
    "desc": "Menu lezat khas TUUMIS kategori Kwetiau Goreng dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/e5d589e1-59b3-445f-84e6-2e14b52c8c0b_Go-Biz_20261014_213006.jpeg",
    "gofoodSection": "Kwetiau Goreng",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-013",
    "name": "Kwetiau Siram Ayam",
    "category": "Noodles",
    "price": 42000,
    "desc": "Menu lezat khas TUUMIS kategori Kwetiau Siram dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c747899a-33ad-400e-b754-6bc6c62429fd_Go-Biz_20261014_213102.jpeg",
    "gofoodSection": "Kwetiau Siram",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-014",
    "name": "Kwetiau Siram Sapi",
    "category": "Noodles",
    "price": 48000,
    "desc": "Kwetiau Siram Daging Sapi",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/aea2183e-6665-4954-b0d4-1c3b67653fd3_Go-Biz_20261014_213155.jpeg",
    "gofoodSection": "Kwetiau Siram",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-015",
    "name": "Ayam Asam Manis",
    "category": "Main Course",
    "price": 52000,
    "desc": "Menu lezat khas TUUMIS kategori Tumis Ayam dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/1b437cb8-c9de-4825-9f51-37edd3876fc4_Go-Biz_20261014_210247.jpeg",
    "gofoodSection": "Tumis Ayam",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-016",
    "name": "Ayam Bawang Putih",
    "category": "Main Course",
    "price": 46000,
    "desc": "Menu lezat khas TUUMIS kategori Tumis Ayam dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/9a54104c-71fc-4e84-a1c6-842e9bf9ce63_Go-Biz_20261014_210322.jpeg",
    "gofoodSection": "Tumis Ayam",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-017",
    "name": "Cumi Asam Manis",
    "category": "Main Course",
    "price": 60000,
    "desc": "Menu lezat khas TUUMIS kategori Tumis Seafood dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/64b8931d-8f21-4f11-a3fc-b8aba44a34f3_Go-Biz_20261014_211426.jpeg",
    "gofoodSection": "Tumis Seafood",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-018",
    "name": "Cumi Bawang Putih",
    "category": "Main Course",
    "price": 54000,
    "desc": "Menu lezat khas TUUMIS kategori Tumis Seafood dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/0f368f55-c647-4872-8555-ee6f2e175a56_Go-Biz_20261014_211039.jpeg",
    "gofoodSection": "Tumis Seafood",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-019",
    "name": "Cah Kangkung",
    "category": "Main Course",
    "price": 22000,
    "desc": "Menu lezat khas TUUMIS kategori Tumis Sayur dengan bumbu gurih beraroma wok-hei.",
    "status": "Tidak Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c71bf653-9693-4ad8-a7d9-7185a805a2e2_Go-Biz_20261014_205649.jpeg",
    "gofoodSection": "Tumis Sayur",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-020",
    "name": "Cah Tauge",
    "category": "Main Course",
    "price": 22000,
    "desc": "Menu lezat khas TUUMIS kategori Tumis Sayur dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/65926d94-01b6-4f2f-aa48-bb055d177f0c_Go-Biz_20261014_205614.jpeg",
    "gofoodSection": "Tumis Sayur",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-021",
    "name": "Bakpau Ayam Panggang",
    "category": "Snacks",
    "price": 32000,
    "desc": "Menu lezat khas TUUMIS kategori Snack dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/b2659a57-12fa-4a7b-aeef-8d6579e4b168_Go-Biz_20261014_214015.jpeg",
    "gofoodSection": "Snack",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-022",
    "name": "Bakpau Telur Asin",
    "category": "Snacks",
    "price": 32000,
    "desc": "Menu lezat khas TUUMIS kategori Snack dengan bumbu gurih beraroma wok-hei.",
    "status": "Tidak Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/8a067190-5597-4a9f-8185-373d48aed5b9_Go-Biz_20261014_214028.jpeg",
    "gofoodSection": "Snack",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-023",
    "name": "Air Mineral 600ml",
    "category": "Beverages",
    "price": 9000,
    "desc": "Menu lezat khas TUUMIS kategori Minuman dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/5b33037f-84d1-4299-9aaf-3db30c199012_Go-Biz_20261014_214100.jpeg",
    "gofoodSection": "Minuman",
    "isGoFoodReal": true
  },
  {
    "id": "MNU-024",
    "name": "Coklat",
    "category": "Beverages",
    "price": 17000,
    "desc": "Menu lezat khas TUUMIS kategori Minuman dengan bumbu gurih beraroma wok-hei.",
    "status": "Tersedia",
    "img": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a5e1964e-1b34-4de2-8b33-aafbed6e5ea0_Go-Biz_20261014_214244.jpeg",
    "gofoodSection": "Minuman",
    "isGoFoodReal": true
  }
];

const DEFAULT_PREORDERS = [
  {
    id: 'PO-101',
    customer: 'Nadia Putri Maharani',
    menu: 'Nasi Goreng Wok-hei Nusantara',
    quantity: 3,
    schedule: 'Hari Ini, 12:30 WIB',
    notes: 'Pedas sedang, sambal dipisah, takeaway',
    status: 'Dikonfirmasi',
    createdAt: '2026-11-20 10:15'
  },
  {
    id: 'PO-102',
    customer: 'Dimas Arya Pratama',
    menu: 'Rice Bowl Ayam Sambal Matah Bali',
    quantity: 2,
    schedule: 'Hari Ini, 13:00 WIB',
    notes: 'Tanpa timun, extra bawang goreng',
    status: 'Menunggu Konfirmasi',
    createdAt: '2026-11-20 11:00'
  },
  {
    id: 'PO-103',
    customer: 'Salsabila Khairunnisa',
    menu: 'Mie Goreng Jawa Bumbu Medok',
    quantity: 4,
    schedule: 'Kemarin, 17:30 WIB',
    notes: 'Paket makan malam kantor, porsi jumbo',
    status: 'Selesai',
    createdAt: '2026-11-19 15:40'
  }
];

const DEFAULT_CAMPAIGN = {
  title: 'Tuumis Kuliner Experience Challenge',
  desc: 'Mendorong mahasiswa dan pelanggan membuat ulasan di Instagram/TikTok serta membagikan pengalaman menikmati aroma wok-hei TUUMIS dengan reward voucher promo diskon.',
  hashtag: '#TuumisExperience',
  period: '1 Nov – 30 Des 2026',
  instructions: '1. Foto/video hidangan TUUMIS > 2. Upload IG Story/Reels > 3. Tag @tuumis.id & gunakan #TuumisExperience > 4. Tunjukkan bukti ke kasir untuk klaim reward voucher diskon!',
  active: true
};

const DEFAULT_UGC = [
  {
    id: 'UGC-01',
    creator: '@nadia_kulineran',
    platform: 'Instagram',
    url: 'https://instagram.com/p/DB81920xyz',
    caption: 'Sensasi aroma wok-hei di Nasi Goreng TUUMIS beneran nagih! Pas banget buat makan siang sehabis kelas praktikum #TuumisExperience',
    date: '2026-11-18',
    status: 'Disetujui',
    verifiedBy: 'Admin Sosmed'
  },
  {
    id: 'UGC-02',
    creator: '@dimas_foodvlog',
    platform: 'TikTok',
    url: 'https://tiktok.com/@dimas_foodvlog/video/7192837492',
    caption: 'Rice Bowl Sambal Matah TUUMIS pedesnya seger nampol, ayamnya renyah gurih pol! Wajib cobain gaes #TuumisExperience #KulinerJogja',
    date: '2026-11-19',
    status: 'Disetujui',
    verifiedBy: 'Admin Sosmed'
  },
  {
    id: 'UGC-03',
    creator: '@salsabila_k',
    platform: 'Instagram',
    url: 'https://instagram.com/stories/salsabila_k/109283',
    caption: 'Makan siang bareng temen sekelas di TUUMIS. Porsinya bikin kenyang dan harganya ramah dompet mahasiswa #TuumisExperience',
    date: '2026-11-20',
    status: 'Menunggu',
    verifiedBy: '-'
  },
  {
    id: 'UGC-04',
    creator: '@foodie_yogyakarta',
    platform: 'Instagram',
    url: 'https://instagram.com/p/DB_9921abc',
    caption: 'Menu Kwetiau Seafood mantap banget buat makan malam! @tuumis.id #TuumisExperience',
    date: '2026-11-20',
    status: 'Menunggu',
    verifiedBy: '-'
  }
];

const TOWS_STRATEGIES = [
  {
    code: 'SO1',
    type: 'SO',
    typeName: 'Strengths – Opportunities (SO)',
    substance: 'Mendorong mahasiswa membuat ulasan di Instagram melalui kampanye UGC dan menyediakan link pendaftaran member pada bio Instagram.',
    feature: 'Data Pelanggan / Pendaftaran Member & Kampanye UGC',
    pageName: 'Data Pelanggan / Kampanye UGC & Bio Link',
    targetView: 'ugc-campaign',
    phase: 'P11 / P12',
    defaultStatus: 'Selesai'
  },
  {
    code: 'WO1',
    type: 'WO',
    typeName: 'Weaknesses – Opportunities (WO)',
    substance: 'Menciptakan layanan komplain yang terstruktur dan gratis menggunakan Google Sheets untuk mencatat keluhan pelanggan.',
    feature: 'Sistem Ticketing Keluhan & Monitoring SLA',
    pageName: 'Ticketing Keluhan & Dashboard SLA',
    targetView: 'tickets',
    phase: 'P11',
    defaultStatus: 'Selesai'
  },
  {
    code: 'ST1',
    type: 'ST',
    typeName: 'Strengths – Threats (ST)',
    substance: 'Membuat menu paket promosi dan program diskon atau loyalitas sederhana untuk menyaingi interaksi kompetitor.',
    feature: 'Program Diskon / Kupon Member',
    pageName: 'Kupon Member',
    targetView: 'coupons',
    phase: 'P12',
    defaultStatus: 'Selesai'
  },
  {
    code: 'WT1',
    type: 'WT',
    typeName: 'Weaknesses – Threats (WT)',
    substance: 'Menangani keluhan keterlambatan pesanan dengan cepat sebelum berkembang menjadi ulasan negatif di platform online.',
    feature: 'Ticketing Keluhan & Dashboard SLA',
    pageName: 'Dashboard CRM / Monitoring SLA / Ticketing',
    targetView: 'crm-dashboard',
    phase: 'P11',
    defaultStatus: 'Selesai'
  },
  {
    code: 'ST12',
    type: 'ST',
    typeName: 'Strengths – Threats (ST)',
    substance: 'Memanfaatkan katalog visual untuk pre-order agar pelanggan tidak berpindah ke pesaing karena antrean panjang.',
    feature: 'Katalog Pre-Order & Template WhatsApp',
    pageName: 'Katalog Menu & Pre-Order / Template WhatsApp',
    targetView: 'menu-catalog',
    phase: 'P11',
    defaultStatus: 'Selesai'
  }
];

const TOWS_MAPPINGS = [
  {
    code: 'SO1',
    feature: 'Data Pelanggan / Pendaftaran Member',
    page: 'Data Pelanggan',
    targetView: 'customers',
    phase: 'P11',
    status: 'Selesai'
  },
  {
    code: 'SO1',
    feature: 'Kampanye UGC & Integrasi Bio Link',
    page: 'Kampanye UGC & Bio Link',
    targetView: 'ugc-campaign',
    phase: 'P12',
    status: 'Selesai'
  },
  {
    code: 'WO1, WT1',
    feature: 'Sistem Ticketing Keluhan',
    page: 'Ticketing Keluhan',
    targetView: 'tickets',
    phase: 'P11',
    status: 'Selesai'
  },
  {
    code: 'WO1, WT1',
    feature: 'Dashboard SLA Keluhan',
    page: 'Dashboard CRM / Monitoring SLA',
    targetView: 'crm-dashboard',
    phase: 'P11',
    status: 'Selesai'
  },
  {
    code: 'WO1, ST12, WT1',
    feature: 'Katalog Pre-Order & Template WhatsApp',
    page: 'Katalog Menu & Pre-Order / Template WhatsApp',
    targetView: 'menu-catalog',
    phase: 'P11',
    status: 'Selesai'
  },
  {
    code: 'ST1',
    feature: 'Program Diskon / Kupon Member',
    page: 'Kupon Member',
    targetView: 'coupons',
    phase: 'P12',
    status: 'Selesai'
  }
];

/* ==================== DATA DEFAULT CRM TUUMIS ==================== */
const DEFAULT_CUSTOMERS = [
  { id: 'CUST-001', name: 'Nadia Putri Maharani', wa: '6281234567801', email: 'nadia.putri@mhs.ac.id', joined: '2026-09-12', segment: 'Mahasiswa', status: 'Member Loyal', orders: 14, lastOrder: '2026-11-19' },
  { id: 'CUST-002', name: 'Dimas Arya Pratama', wa: '6281234567802', email: 'dimas.arya@gmail.com', joined: '2026-09-18', segment: 'Pekerja', status: 'Member Loyal', orders: 11, lastOrder: '2026-11-18' },
  { id: 'CUST-003', name: 'Salsabila Khairunnisa', wa: '6281234567803', email: 'salsa.kh@mhs.ac.id', joined: '2026-09-25', segment: 'Mahasiswa', status: 'Reguler', orders: 5, lastOrder: '2026-11-19' },
  { id: 'CUST-004', name: 'Bagas Kurniawan', wa: '6281234567804', email: 'bagas.k@gmail.com', joined: '2026-08-20', segment: 'Pekerja', status: 'Tidak Aktif', orders: 7, lastOrder: '2026-10-08' },
  { id: 'CUST-005', name: 'Aulia Rahmawati', wa: '6281234567805', email: 'aulia.rahma@mhs.ac.id', joined: '2026-10-02', segment: 'Mahasiswa', status: 'Member Loyal', orders: 9, lastOrder: '2026-11-18' },
  { id: 'CUST-006', name: 'Reza Firmansyah', wa: '6281234567806', email: 'reza.f@mhs.ac.id', joined: '2026-09-05', segment: 'Mahasiswa', status: 'Tidak Aktif', orders: 4, lastOrder: '2026-10-05' },
  { id: 'CUST-007', name: 'Fitri Handayani', wa: '6281234567807', email: 'fitri.h@gmail.com', joined: '2026-10-10', segment: 'Pekerja', status: 'Reguler', orders: 3, lastOrder: '2026-11-17' },
  { id: 'CUST-008', name: 'Raka Aditya Nugroho', wa: '6281234567808', email: 'raka.aditya@mhs.ac.id', joined: '2026-10-14', segment: 'Mahasiswa', status: 'Reguler', orders: 6, lastOrder: '2026-11-15' },
  { id: 'CUST-009', name: 'Devita Anggraini', wa: '6281234567809', email: 'devita.angg@gmail.com', joined: '2026-10-16', segment: 'Pekerja', status: 'Member Loyal', orders: 10, lastOrder: '2026-11-19' },
  { id: 'CUST-010', name: 'Yusuf Maulana Ibrahim', wa: '6281234567810', email: 'yusuf.mib@mhs.ac.id', joined: '2026-10-18', segment: 'Mahasiswa', status: 'Reguler', orders: 4, lastOrder: '2026-11-16' },
  { id: 'CUST-011', name: 'Gita Permata Sari', wa: '6281234567811', email: 'gita.permata@gmail.com', joined: '2026-10-21', segment: 'Pekerja', status: 'Reguler', orders: 5, lastOrder: '2026-11-14' },
  { id: 'CUST-012', name: 'Hendra Wijaya Kusuma', wa: '6281234567812', email: 'hendra.wk@gmail.com', joined: '2026-10-23', segment: 'Pekerja', status: 'Tidak Aktif', orders: 8, lastOrder: '2026-10-20' },
  { id: 'CUST-013', name: 'Laras Ayu Wulandari', wa: '6281234567813', email: 'laras.ayu@mhs.ac.id', joined: '2026-10-25', segment: 'Mahasiswa', status: 'Reguler', orders: 2, lastOrder: '2026-11-12' },
  { id: 'CUST-014', name: 'Farhan Abdillah', wa: '6281234567814', email: 'farhan.abd@mhs.ac.id', joined: '2026-10-27', segment: 'Mahasiswa', status: 'Tidak Aktif', orders: 3, lastOrder: '2026-10-15' },
  { id: 'CUST-015', name: 'Nayla Putri Andini', wa: '6281234567815', email: 'nayla.putri@gmail.com', joined: '2026-10-29', segment: 'Pekerja', status: 'Member Loyal', orders: 12, lastOrder: '2026-11-20' },
  { id: 'CUST-016', name: 'Bayu Segara Pratama', wa: '6281234567816', email: 'bayu.segara@gmail.com', joined: '2026-11-02', segment: 'Pekerja', status: 'Reguler', orders: 6, lastOrder: '2026-11-17' },
  { id: 'CUST-017', name: 'Kirana Melati Sukma', wa: '6281234567817', email: 'kirana.melati@mhs.ac.id', joined: '2026-11-05', segment: 'Mahasiswa', status: 'Reguler', orders: 3, lastOrder: '2026-11-18' },
  { id: 'CUST-018', name: 'Adnan Hakim Rivai', wa: '6281234567818', email: 'adnan.hakim@gmail.com', joined: '2026-11-08', segment: 'Pekerja', status: 'Tidak Aktif', orders: 5, lastOrder: '2026-10-25' },
  { id: 'CUST-019', name: 'Sekar Kinasih Dewi', wa: '6281234567819', email: 'sekar.kinasih@mhs.ac.id', joined: '2026-11-14', segment: 'Mahasiswa', status: 'Reguler', orders: 2, lastOrder: '2026-11-20' },
  { id: 'CUST-020', name: 'Ibrahim Al Ghifari', wa: '6281234567820', email: 'ibrahim.ghif@gmail.com', joined: '2026-11-18', segment: 'Pekerja', status: 'Reguler', orders: 1, lastOrder: '2026-11-20' }
];

const DEFAULT_TICKETS = [
  {
    id: 'TKT-201',
    customerId: 'CUST-001',
    customer: 'Nadia Putri Maharani',
    category: 'Add-on Terlewat / Tertukar',
    priority: 'Tinggi',
    pic: 'Admin WA CS',
    desc: 'Pesan Nasi Goreng Wok-hei + Telur Ceplok via GoFood, namun telur ceplok tertinggal.',
    createdAt: '2026-11-19 12:35',
    targetResponseMin: 30,
    targetResolutionMin: 120,
    responseTimeMin: 38,
    resolutionTimeMin: null,
    resolvedAt: null,
    elapsed: '38 mnt (Batas 30 mnt)',
    slaState: 'Melewati SLA',
    status: 'Diproses',
    followup: 'Admin WA sudah meminta maaf & menyiapkan pengiriman voucher kompensasi Rp5.000.'
  },
  {
    id: 'TKT-202',
    customerId: 'CUST-002',
    customer: 'Dimas Arya Pratama',
    category: 'Antrean Rush Hour',
    priority: 'Tinggi',
    pic: 'Admin Dapur Sentral',
    desc: 'Menunggu pesanan takeaway lebih dari 25 menit saat jam makan siang.',
    createdAt: '2026-11-19 12:50',
    targetResponseMin: 30,
    targetResolutionMin: 120,
    responseTimeMin: null,
    resolutionTimeMin: null,
    resolvedAt: null,
    elapsed: '24 mnt (Batas 30 mnt)',
    slaState: 'Mendekati Batas',
    status: 'Baru',
    followup: 'Prioritaskan antrean dapur nomor #14 & kirim update estimasi siap dalam 3 menit.'
  },
  {
    id: 'TKT-203',
    customerId: 'CUST-003',
    customer: 'Salsabila Khairunnisa',
    category: 'Respons Chat Lambat',
    priority: 'Sedang',
    pic: 'Admin WA CS',
    desc: 'Menanyakan ketersediaan paket katering Jumat melalui WhatsApp Business.',
    createdAt: '2026-11-19 10:15',
    targetResponseMin: 30,
    targetResolutionMin: 120,
    responseTimeMin: 11,
    resolutionTimeMin: null,
    resolvedAt: null,
    elapsed: '11 mnt (Batas 30 mnt)',
    slaState: 'Aman',
    status: 'Diproses',
    followup: 'Katalog harga katering & form pre-order sudah dikirimkan via WA.'
  },
  {
    id: 'TKT-204',
    customerId: 'CUST-005',
    customer: 'Aulia Rahmawati',
    category: 'Suhu / Kualitas Makanan',
    priority: 'Sedang',
    pic: 'Supervisor Layanan',
    desc: 'Kemasan paper bowl sedikit penyok saat diterima kurir.',
    createdAt: '2026-11-18 17:20',
    targetResponseMin: 30,
    targetResolutionMin: 120,
    responseTimeMin: 8,
    resolutionTimeMin: 18,
    resolvedAt: '2026-11-18 17:38',
    elapsed: 'Selesai dalam 18 mnt',
    slaState: 'Selesai',
    status: 'Selesai',
    followup: 'Evaluasi seal kemasan dapur & pelanggan telah menerima kode kupon PEMULIHAN10.'
  },
  {
    id: 'TKT-205',
    customerId: 'CUST-004',
    customer: 'Bagas Kurniawan',
    category: 'Antrean Rush Hour',
    priority: 'Sedang',
    pic: 'Kasir Dine-in',
    desc: 'Pesanan Dine-in meja #6 terlewat dari display antrean dapur saat malam minggu.',
    createdAt: '2026-11-17 19:10',
    targetResponseMin: 30,
    targetResolutionMin: 120,
    responseTimeMin: 14,
    resolutionTimeMin: 45,
    resolvedAt: '2026-11-17 19:55',
    elapsed: 'Selesai dalam 45 mnt',
    slaState: 'Selesai',
    status: 'Selesai',
    followup: 'Kasir memberikan complimentary es teh manis dan diskon langsung di meja.'
  },
  {
    id: 'TKT-206',
    customerId: 'CUST-007',
    customer: 'Fitri Handayani',
    category: 'Suhu / Kualitas Makanan',
    priority: 'Tinggi',
    pic: 'Admin Dapur Sentral',
    desc: 'Kwetiau goreng kuah agak dingin saat tiba via pengiriman instan ojol.',
    createdAt: '2026-11-15 19:40',
    targetResponseMin: 30,
    targetResolutionMin: 120,
    responseTimeMin: 12,
    resolutionTimeMin: 65,
    resolvedAt: '2026-11-15 20:45',
    elapsed: 'Selesai dalam 65 mnt',
    slaState: 'Selesai',
    status: 'Selesai',
    followup: 'Penggantian wadah thermal bag untuk pengantaran ojol dan kupon pemulihan.'
  },
  {
    id: 'TKT-207',
    customerId: 'CUST-006',
    customer: 'Reza Firmansyah',
    category: 'Respons Chat Lambat',
    priority: 'Rendah',
    pic: 'Admin WA CS',
    desc: 'Chat menanyakan promo mahasiswa akhir bulan baru dibalas setelah 22 menit.',
    createdAt: '2026-11-12 11:30',
    targetResponseMin: 30,
    targetResolutionMin: 120,
    responseTimeMin: 22,
    resolutionTimeMin: 75,
    resolvedAt: '2026-11-12 12:45',
    elapsed: 'Selesai dalam 75 mnt',
    slaState: 'Selesai',
    status: 'Selesai',
    followup: 'Template respons cepat WhatsApp disiapkan dan voucher AKHIRBULAN9K dikirimkan.'
  },
  {
    id: 'TKT-208',
    customerId: 'CUST-001',
    customer: 'Nadia Putri Maharani',
    category: 'Add-on Terlewat / Tertukar',
    priority: 'Tinggi',
    pic: 'Admin Dapur Sentral',
    desc: 'Nasi Gila level pedas ekstra tidak sesuai pesanan, terkirim level sedang.',
    createdAt: '2026-11-08 14:15',
    targetResponseMin: 30,
    targetResolutionMin: 120,
    responseTimeMin: 10,
    resolutionTimeMin: 50,
    resolvedAt: '2026-11-08 15:05',
    elapsed: 'Selesai dalam 50 mnt',
    slaState: 'Selesai',
    status: 'Selesai',
    followup: 'Dapur mengirim ulang porsi baru gratis dan konfirmasi langsung via telepon.'
  },
  {
    id: 'TKT-209',
    customerId: 'CUST-002',
    customer: 'Dimas Arya Pratama',
    category: 'Antrean Rush Hour',
    priority: 'Sedang',
    pic: 'Kasir Dine-in',
    desc: 'Waktu tunggu takeaway mencapai 40 menit saat hujan lebat dan antrean ojol menumpuk.',
    createdAt: '2026-11-04 18:25',
    targetResponseMin: 30,
    targetResolutionMin: 120,
    responseTimeMin: 36,
    resolutionTimeMin: 145,
    resolvedAt: '2026-11-04 20:50',
    elapsed: 'Selesai 145 mnt (Melewati SLA)',
    slaState: 'Melewati SLA',
    status: 'Selesai',
    followup: 'Eskalasi ke Supervisor. Pelanggan menerima voucher kompensasi Rp10.000 (PEMULIHAN10).'
  },
  {
    id: 'TKT-210',
    customerId: 'CUST-003',
    customer: 'Salsabila Khairunnisa',
    category: 'Pelayanan Kasir',
    priority: 'Rendah',
    pic: 'Supervisor Layanan',
    desc: 'Salah input nama member di struk kasir saat menggunakan metode pembayaran QRIS.',
    createdAt: '2026-10-29 16:50',
    targetResponseMin: 30,
    targetResolutionMin: 120,
    responseTimeMin: 15,
    resolutionTimeMin: 40,
    resolvedAt: '2026-10-29 17:30',
    elapsed: 'Selesai dalam 40 mnt',
    slaState: 'Selesai',
    status: 'Selesai',
    followup: 'Kasir mengoreksi poin member di sistem POS manual dan meminta maaf kepada pelanggan.'
  }
];

const DEFAULT_ACTIVITIES = [
  {
    id: 'ACT-001',
    type: 'ticket_created',
    icon: 'add_alert',
    color: 'amber',
    title: 'Tiket Baru Dibuat',
    desc: 'Tiket TKT-202 antrean rush hour diajukan untuk Dimas Arya Pratama.',
    time: '25 mnt lalu',
    timestamp: '2026-11-19 12:50'
  },
  {
    id: 'ACT-002',
    type: 'status_changed',
    icon: 'sync',
    color: 'blue',
    title: 'Status Tiket Diperbarui',
    desc: 'Tiket TKT-201 dialihkan ke status "Diproses" oleh Admin WA CS.',
    time: '45 mnt lalu',
    timestamp: '2026-11-19 12:35'
  },
  {
    id: 'ACT-003',
    type: 'pic_assigned',
    icon: 'assignment_ind',
    color: 'forest',
    title: 'Penugasan PIC Layanan',
    desc: 'TKT-203 ditugaskan kepada Admin WA CS untuk klarifikasi paket katering.',
    time: '2 jam lalu',
    timestamp: '2026-11-19 10:15'
  },
  {
    id: 'ACT-004',
    type: 'ticket_resolved',
    icon: 'task_alt',
    color: 'emerald',
    title: 'Tiket Keluhan Selesai',
    desc: 'TKT-204 ditandai selesai. Pelanggan Aulia menerima voucher pemulihan.',
    time: 'Kemarin, 17:38',
    timestamp: '2026-11-18 17:38'
  },
  {
    id: 'ACT-005',
    type: 'ticket_resolved',
    icon: 'task_alt',
    color: 'emerald',
    title: 'Tiket Keluhan Selesai',
    desc: 'TKT-205 diselesaikan oleh Kasir Dine-in dengan complimentary es teh.',
    time: '17 Nov 2026',
    timestamp: '2026-11-17 19:55'
  },
  {
    id: 'ACT-006',
    type: 'customer_registered',
    icon: 'person_add',
    color: 'forest',
    title: 'Pelanggan Baru Terdaftar',
    desc: 'Fitri Handayani terdaftar sebagai pelanggan baru segmen Pekerja.',
    time: '10 Nov 2026',
    timestamp: '2026-11-10 10:10'
  }
];

const WA_TEMPLATES = [
  {
    id: 'wa-preorder',
    tag: 'Pre-Order & Anti Antre',
    title: 'Konfirmasi Pre-Order WhatsApp',
    desc: 'Mengurangi waktu tunggu rush hour dengan konfirmasi pesanan tertulis.',
    text: 'Halo {NAMA}! Terima kasih sudah pre-order di *TUUMIS Nusantara*.\n\nPesanan Anda sudah kami catat dan masuk antrean dapur sesuai jadwal pengambilan agar tetap hangat *wok-hei*-nya.\n\nEstimasi siap: *15 menit*.\nSilakan tunjukkan pesan ini di kasir saat pengambilan ya!'
  },
  {
    id: 'wa-rush',
    tag: 'Transparansi SLA',
    title: 'Pemberitahuan Antrean Jam Sibuk (Rush Hour)',
    desc: 'Menjaga ekspektasi pelanggan saat pesanan dapur sedang padat.',
    text: 'Halo {NAMA}, terima kasih telah menghubungi *TUUMIS Nusantara*.\n\nSaat ini dapur kami sedang memasuki jam ramai (*rush hour*), sehingga estimasi masak *made-to-order* sekitar *20–25 menit*. Apakah berkenan menunggu atau ingin kami jadwalkan jam pengambilan tertentu?'
  },
  {
    id: 'wa-recovery',
    tag: 'Pemulihan Keluhan',
    title: 'Permintaan Maaf & Voucher Kompensasi',
    desc: 'Menangani keluhan add-on terlewat atau keterlambatan secara empatik.',
    text: 'Halo {NAMA}, kami dari tim layanan pelanggan *TUUMIS Nusantara* memohon maaf atas ketidaknyamanan pada pesanan terakhir Anda.\n\nSebagai bentuk tanggung jawab kami, silakan gunakan kode voucher khusus *PEMULIHAN10* (potongan Rp10.000 tanpa minimum transaksi) pada pesanan berikutnya. Terima kasih atas masukannya!'
  },
  {
    id: 'wa-winback',
    tag: 'Retensi Pelanggan',
    title: 'Sapaan Pelanggan Tidak Aktif (Win-Back)',
    desc: 'Mengajak kembali pelanggan yang belum memesan selama >21 hari (terdeteksi otomatis).',
    text: 'Halo {NAMA}, sudah lama nih belum mampir ke *TUUMIS Nusantara*! \n\nKangen aroma *wok-hei* Nasi Goreng Spesial kami? Khusus untuk Anda minggu ini, gunakan kode *MEMBER15* untuk potongan 15% semua menu utama. Ditunggu kehadirannya ya!'
  },
  {
    id: 'wa-feedback',
    tag: 'Post-Sale & UGC',
    title: 'Tanya Kepuasan & Ajakan Review IG',
    desc: 'Mengumpulkan umpan balik pasca makan sekaligus mendorong UGC.',
    text: 'Halo {NAMA}, semoga hidangan *TUUMIS Nusantara* tadi memuaskan dan bikin kenyang ya! \n\nBoleh bantu nilai pengalaman hari ini (1–5)? Jika berkenan, bagikan foto menu favoritmu di Instagram Story & tag *@tuumis.id* untuk klaim gratis Es Teh Manis di kunjungan berikutnya!'
  }
];

const DEFAULT_COUPONS = [
  {
    code: 'MEMBER15',
    title: 'Diskon Loyalitas Member TUUMIS',
    discount: 'Potongan 15% (Maks. Rp6.000)',
    minOrder: 25000,
    period: '1 Okt – 30 Nov 2026',
    segment: 'Khusus Member Loyal',
    terms: 'Minimal pembelian Rp25.000 untuk kategori Main Course. Berlaku 1x transaksi per hari dan tidak dapat digabung promo ojol.',
    guide: 'Sebutkan nomor WA terdaftar di kasir (Dine-in/Takeaway) atau ketik kode MEMBER15 saat konfirmasi Pre-Order WhatsApp.',
    issued: 120,
    active: true,
    redemptions: [
      { date: '2026-11-15', name: 'Nadia Putri Maharani', amount: 48000 },
      { date: '2026-11-17', name: 'Devita Anggraini', amount: 52000 },
      { date: '2026-11-19', name: 'Nayla Putri Andini', amount: 45000 }
    ],
    redeemedBase: 35
  },
  {
    code: 'AKHIRBULAN9K',
    title: 'Promo Hemat Mahasiswa Akhir Bulan',
    discount: 'Potongan Rp4.000 Menu Pilihan',
    minOrder: 15000,
    period: 'Tanggal 25 – 31 Setiap Bulan',
    segment: 'Segmen Mahasiswa',
    terms: 'Minimal belanja Rp15.000 dengan menunjukkan Kartu Tanda Mahasiswa (KTM) aktif pada pukul 14.00–17.00 WIB.',
    guide: 'Tunjukkan KTM dan kode kupon AKHIRBULAN9K sebelum melakukan pembayaran QRIS/Tunai di kasir.',
    issued: 150,
    active: true,
    redemptions: [
      { date: '2026-10-30', name: 'Raka Aditya Nugroho', amount: 18000 },
      { date: '2026-10-31', name: 'Yusuf Maulana Ibrahim', amount: 22000 }
    ],
    redeemedBase: 50
  },
  {
    code: 'PEMULIHAN10',
    title: 'Voucher Garansi Layanan & SLA',
    discount: 'Potongan Langsung Rp10.000',
    minOrder: 10000,
    period: 'Berlaku 14 Hari Sejak Diterbitkan',
    segment: 'Pelanggan Terdampak Keluhan',
    terms: 'Diberikan khusus bagi pelanggan yang mengalami keterlambatan SLA atau kesalahan add-on. Minimal transaksi Rp10.000.',
    guide: 'Tunjukkan pesan WhatsApp resmi dari admin TUUMIS yang memuat kode PEMULIHAN10 saat memesan kembali.',
    issued: 40,
    active: true,
    redemptions: [
      { date: '2026-11-04', name: 'Dimas Arya Pratama', amount: 25000 },
      { date: '2026-11-18', name: 'Aulia Rahmawati', amount: 30000 }
    ],
    redeemedBase: 10
  }
];

/* ==================== STATE & HELPER ==================== */
const CATEGORIES = ['Main Course', 'Side Dish', 'Minuman'];
const CHANNELS = ['Dine-in', 'Takeaway', 'GoFood', 'GrabFood', 'ShopeeFood'];
const CUSTOMER_TYPES = ['Mahasiswa', 'Pekerja'];
const PAYMENT_METHODS = ['QRIS', 'Tunai', 'e-Wallet'];
const PALETTE = ['#257149', '#D5A43C', '#95AB98', '#B87557', '#6D4E3B'];
const CURRENCY = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
const INTEGER = new Intl.NumberFormat('id-ID');
const charts = {};
let visibleRows = SALES_DATA;

const STORAGE_KEYS = {
  customers: 'tuumis_crm_customers_v2',
  tickets: 'tuumis_crm_tickets_v2',
  coupons: 'tuumis_crm_coupons_v2',
  activities: 'tuumis_crm_activities_v2',
  menus: 'tuumis_crm_menus_v2',
  preorders: 'tuumis_crm_preorders_v2',
  ugc: 'tuumis_crm_ugc_v2',
  campaign: 'tuumis_crm_campaign_v2',
  towsStatus: 'tuumis_crm_tows_status_v2'
};

/* ==================== WAKTU NYATA & SLA OTOMATIS ==================== */
// Standar SLA per prioritas (Tabel 4.3 laporan UTS): Tinggi 15/120, Sedang 30/240, Rendah 60/1440 (menit)
const SLA_POLICY = {
  'Tinggi': { resp: 15, resol: 120 },
  'Sedang': { resp: 30, resol: 240 },
  'Rendah': { resp: 60, resol: 1440 }
};
// Ambang pelanggan pasif untuk kampanye win-back otomatis (WS1 B.2)
const PASSIVE_AFTER_DAYS = 21;

function fmtStamp(date = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())} ${p(date.getHours())}:${p(date.getMinutes())}`;
}
function todayStr() {
  const p = (n) => String(n).padStart(2, '0');
  const now = new Date();
  return `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}`;
}
function minutesSince(ts) {
  return Math.max(0, Math.round((Date.now() - Number(ts || 0)) / 60000));
}
function slaStateForElapsed(elapsedMin, targetRespMin) {
  if (elapsedMin <= targetRespMin * 0.6) return 'Aman';
  if (elapsedMin <= targetRespMin) return 'Mendekati Batas';
  return 'Melewati SLA';
}
// Hitung ulang kondisi SLA tiket yang dibuat pada sesi berjalan (jam nyata)
function refreshLiveTicket(t) {
  if (!t.live || t.status === 'Selesai' || !t.createdAtTs) return false;
  const elapsedMin = minutesSince(t.createdAtTs);
  const before = `${t.elapsed}|${t.slaState}`;
  t.elapsed = `${elapsedMin} mnt (Batas ${t.targetResponseMin} mnt)`;
  t.slaState = slaStateForElapsed(elapsedMin, t.targetResponseMin);
  return before !== `${t.elapsed}|${t.slaState}`;
}
function tickLiveTickets() {
  let changed = false;
  crmTickets.forEach((t) => { if (refreshLiveTicket(t)) changed = true; });
  if (changed) saveState(STORAGE_KEYS.tickets, crmTickets);
  return changed;
}
function daysSinceDate(dateStr) {
  if (!dateStr) return null;
  const [y, m, d] = String(dateStr).slice(0, 10).split('-').map(Number);
  if (!y || !m || !d) return null;
  const then = new Date(y, m - 1, d);
  return Math.floor((Date.now() - then.getTime()) / 86400000);
}
function passiveCustomers() {
  return crmCustomers
    .map((c) => ({ ...c, inactiveDays: daysSinceDate(c.lastOrder) }))
    .filter((c) => c.inactiveDays !== null && c.inactiveDays > PASSIVE_AFTER_DAYS)
    .sort((a, b) => b.inactiveDays - a.inactiveDays);
}
function couponRedeemedTotal(c) {
  return Number(c.redeemedBase || 0) + (Array.isArray(c.redemptions) ? c.redemptions.length : 0);
}

// Penanda layanan (FCR & kepuasan) untuk tiket simulasi awal — diisi hasil verifikasi WhatsApp admin
const SEED_SERVICE_FLAGS = {
  'TKT-204': { firstContact: 'Ya', satisfaction: 'Puas' },
  'TKT-205': { firstContact: 'Ya', satisfaction: 'Puas' },
  'TKT-206': { firstContact: 'Ya', satisfaction: 'Belum Puas' },
  'TKT-207': { firstContact: 'Ya', satisfaction: 'Puas' },
  'TKT-208': { firstContact: 'Ya', satisfaction: 'Puas' },
  'TKT-209': { firstContact: 'Tidak', satisfaction: 'Puas' },
  'TKT-210': { firstContact: 'Ya', satisfaction: 'Puas' }
};

function normalizeTicket(t, index) {
  const respMinutes = typeof t.responseTimeMin === 'number'
    ? t.responseTimeMin
    : (t.slaState === 'Aman' ? 12 : t.slaState === 'Mendekati Batas' ? 24 : t.slaState === 'Melewati SLA' ? 38 : null);
  const resolMinutes = typeof t.resolutionTimeMin === 'number'
    ? t.resolutionTimeMin
    : (t.status === 'Selesai' ? (t.slaState === 'Melewati SLA' ? 145 : 45) : null);
  const seedFlag = SEED_SERVICE_FLAGS[t.id] || {};

  return {
    id: t.id || `TKT-${201 + index}`,
    customerId: t.customerId || null,
    customer: t.customer || 'Pelanggan TUUMIS',
    category: t.category || 'Antrean Rush Hour',
    priority: t.priority || 'Sedang',
    pic: t.pic || 'Admin WA CS',
    desc: t.desc || '',
    createdAt: t.createdAt || '2026-11-19 12:00',
    createdAtTs: t.createdAtTs || null,
    live: !!t.live,
    targetResponseMin: Number(t.targetResponseMin || (SLA_POLICY[t.priority] || SLA_POLICY.Sedang).resp),
    targetResolutionMin: Number(t.targetResolutionMin || (SLA_POLICY[t.priority] || SLA_POLICY.Sedang).resol),
    responseTimeMin: respMinutes,
    resolutionTimeMin: resolMinutes,
    resolvedAt: t.resolvedAt || (t.status === 'Selesai' ? '2026-11-19 12:45' : null),
    elapsed: t.elapsed || 'Baru masuk',
    slaState: t.slaState || (t.status === 'Selesai' ? 'Selesai' : 'Aman'),
    status: t.status || 'Baru',
    followup: t.followup || '-',
    firstContact: t.firstContact || seedFlag.firstContact || null,
    satisfaction: t.satisfaction || seedFlag.satisfaction || null,
    notes: Array.isArray(t.notes) ? t.notes : []
  };
}

let crmCustomers = loadState(STORAGE_KEYS.customers, DEFAULT_CUSTOMERS);
let crmTickets = loadState(STORAGE_KEYS.tickets, DEFAULT_TICKETS).map((t, idx) => normalizeTicket(t, idx));
let crmCoupons = loadState(STORAGE_KEYS.coupons, DEFAULT_COUPONS);
let crmActivities = loadState(STORAGE_KEYS.activities, DEFAULT_ACTIVITIES);
let crmMenus = loadState(STORAGE_KEYS.menus, DEFAULT_MENUS);
let crmPreorders = loadState(STORAGE_KEYS.preorders, DEFAULT_PREORDERS);
let crmUgc = loadState(STORAGE_KEYS.ugc, DEFAULT_UGC);
let crmCampaign = loadState(STORAGE_KEYS.campaign, DEFAULT_CAMPAIGN);
let crmTowsStatus = loadState(STORAGE_KEYS.towsStatus, {
  'SO1_P11': 'Selesai',
  'SO1_P12': 'Selesai',
  'WO1_WT1_Ticket': 'Selesai',
  'WO1_WT1_SLA': 'Selesai',
  'WO1_ST12_WT1_Catalog': 'Selesai',
  'ST1_Coupon': 'Selesai'
});
let selectedWaTemplate = WA_TEMPLATES[0];

function logActivity(type, title, desc, icon = 'info', color = 'forest') {
  const newAct = {
    id: `ACT-${Date.now().toString().slice(-4)}`,
    type,
    icon,
    color,
    title,
    desc,
    time: 'Baru saja',
    timestamp: fmtStamp()
  };
  crmActivities.unshift(newAct);
  if (crmActivities.length > 40) crmActivities.pop();
  saveState(STORAGE_KEYS.activities, crmActivities);
  if (typeof renderCrmActivities === 'function') {
    renderCrmActivities();
  }
}

function maskPhone(phone) {
  if (!phone) return '-';
  const str = String(phone).replace(/\D/g, '');
  if (str.length < 8) return str;
  return str.slice(0, 4) + '****' + str.slice(-4);
}

const byId = (id) => document.getElementById(id);
const money = (value) => CURRENCY.format(Number(value || 0)).replace(/\u00a0/g, ' ');
const sumBy = (rows, key) => rows.reduce((total, row) => total + Number(row[key] || 0), 0);
const dateKey = (row) => row.Tanggal_Transaksi.slice(0, 10);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function saveState(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch { /* Abaikan jika mode private browsing */ }
}

let toastTimer;
function showToast(message) {
  const toast = byId('toast');
  byId('toast-message').textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-4');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
  }, 2600);
}

/* ==================== NAVIGASI MULTI-MODUL ==================== */
const VIEW_TITLES = {
  analytics: 'Laporan & Analitik',
  'crm-dashboard': 'Dashboard CRM & Monitoring SLA',
  customers: 'Data & Profil Pelanggan',
  tickets: 'Ticketing Keluhan & Monitoring SLA',
  whatsapp: 'Template WhatsApp Business',
  coupons: 'Program Diskon & Kupon Member',
  'menu-catalog': 'Katalog Menu & Pre-Order (ST12)',
  'ugc-campaign': 'Kampanye UGC & Bio Link (SO1)',
  'tows-strategy': 'Peta Strategi TOWS CRM'
};

function switchView(viewName, clickedEl) {
  document.querySelectorAll('.view-section').forEach((sec) => {
    sec.classList.toggle('hidden', sec.id !== `view-${viewName}`);
  });

  // Tampilkan kotak pencarian transaksi hanya di halaman analitik
  const isAnalytics = viewName === 'analytics';
  byId('global-search-wrapper').classList.toggle('md:block', isAnalytics);
  byId('global-search-wrapper').classList.toggle('hidden', !isAnalytics);
  byId('mobile-search-wrapper').classList.toggle('hidden', !isAnalytics);

  // Perbarui breadcrumb header
  byId('header-breadcrumb').textContent = VIEW_TITLES[viewName] || 'TUUMIS CRM';

  // Perbarui status aktif di sidebar
  document.querySelectorAll('.nav-item').forEach((item) => {
    const isTarget = clickedEl ? item === clickedEl : item.dataset.navView === viewName;
    if (item.tagName === 'A' && item.getAttribute('aria-label')) return; // Lewati logo
    if (isTarget) {
      item.classList.add('bg-forest', 'font-semibold', 'text-white', 'shadow-sm');
      item.classList.remove('text-white/75', 'text-white/80');
    } else {
      item.classList.remove('bg-forest', 'font-semibold', 'text-white', 'shadow-sm');
      item.classList.add('text-white/80');
    }
  });

  if (viewName === 'crm-dashboard') {
    renderCrmDashboard();
  }

  if (!isAnalytics) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ==================== MODUL 1: ANALITIK PENJUALAN ==================== */
function formatDate(value, options = { day: '2-digit', month: 'short' }) {
  const [datePart] = value.split(' ');
  const [year, month, day] = datePart.split('-').map(Number);
  return new Intl.DateTimeFormat('id-ID', options).format(new Date(year, month - 1, day));
}

function getChartDefaults() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 350 },
    plugins: {
      legend: { labels: { usePointStyle: true, pointStyle: 'circle', boxWidth: 8, boxHeight: 8, color: '#6f6a62', font: { family: 'Inter', size: 10 }, padding: 16 } },
      tooltip: { backgroundColor: '#1e5839', titleFont: { family: 'Inter', weight: '600' }, bodyFont: { family: 'Inter', size: 11 }, padding: 10, cornerRadius: 10, displayColors: true }
    }
  };
}

function axisBase() {
  return { grid: { color: '#efe9df', drawBorder: false }, border: { display: false }, ticks: { color: '#8a8278', font: { family: 'Inter', size: 10 }, maxRotation: 0 } };
}

function initializeCharts() {
  if (!window.Chart) {
    document.querySelectorAll('#reports article').forEach((card) => {
      const note = document.createElement('p');
      note.className = 'mt-4 rounded-lg bg-amber-50 p-3 text-xs text-amber-800';
      note.textContent = 'Chart.js tidak dapat dimuat. Periksa koneksi internet lalu muat ulang halaman.';
      card.appendChild(note);
    });
    return;
  }

  Chart.defaults.font.family = 'Inter, sans-serif';
  Chart.defaults.color = '#81796f';
  const base = getChartDefaults();
  const revenueTick = (value) => {
    const number = Number(value);
    if (number >= 1_000_000) return `Rp${(number / 1_000_000).toFixed(1).replace('.', ',')} jt`;
    if (number >= 1_000) return `Rp${Math.round(number / 1_000)} rb`;
    return `Rp${INTEGER.format(number)}`;
  };

  charts.trend = new Chart(byId('sales-trend-chart'), {
    type: 'line', data: { labels: [], datasets: [{ label: 'Revenue', data: [], borderColor: PALETTE[0], backgroundColor: 'rgba(37,113,73,.10)', fill: true, tension: .32, borderWidth: 2.5, pointRadius: 2, pointHoverRadius: 5 }] },
    options: { ...base, interaction: { mode: 'index', intersect: false }, plugins: { ...base.plugins, legend: { display: false }, tooltip: { ...base.plugins.tooltip, callbacks: { label: (item) => ` ${money(item.raw)}` } } }, scales: { x: { ...axisBase(), grid: { display: false }, ticks: { ...axisBase().ticks, maxTicksLimit: 12 } }, y: { ...axisBase(), beginAtZero: true, ticks: { ...axisBase().ticks, callback: revenueTick } } } }
  });

  charts.channel = new Chart(byId('channel-chart'), {
    type: 'bar', data: { labels: CHANNELS, datasets: [{ label: 'Revenue', data: [], backgroundColor: PALETTE[0], borderRadius: 6, maxBarThickness: 28 }] },
    options: { ...base, plugins: { ...base.plugins, legend: { display: false }, tooltip: { ...base.plugins.tooltip, callbacks: { label: (item) => ` ${money(item.raw)}` } } }, scales: { x: { ...axisBase(), grid: { display: false }, ticks: { ...axisBase().ticks, maxRotation: 35 } }, y: { ...axisBase(), beginAtZero: true, ticks: { ...axisBase().ticks, callback: revenueTick } } } }
  });

  charts.categoryRevenue = new Chart(byId('category-revenue-chart'), {
    type: 'doughnut', data: { labels: CATEGORIES, datasets: [{ data: [], backgroundColor: PALETTE.slice(0, 3), borderColor: '#fff', borderWidth: 3, hoverOffset: 5 }] },
    options: { ...base, cutout: '66%', plugins: { ...base.plugins, legend: { position: 'bottom', labels: base.plugins.legend.labels }, tooltip: { ...base.plugins.tooltip, callbacks: { label: (item) => ` ${item.label}: ${money(item.raw)}` } } } }
  });

  charts.customer = new Chart(byId('customer-chart'), {
    type: 'pie', data: { labels: CUSTOMER_TYPES, datasets: [{ data: [], backgroundColor: [PALETTE[0], PALETTE[1]], borderColor: '#fff', borderWidth: 3, hoverOffset: 5 }] },
    options: { ...base, plugins: { ...base.plugins, legend: { position: 'bottom', labels: base.plugins.legend.labels }, tooltip: { ...base.plugins.tooltip, callbacks: { label: (item) => ` ${item.label}: ${INTEGER.format(item.raw)} transaksi` } } } }
  });

  charts.payment = new Chart(byId('payment-chart'), {
    type: 'bar', data: { labels: PAYMENT_METHODS, datasets: [{ label: 'Transaksi', data: [], backgroundColor: PALETTE.slice(0, 3), borderRadius: 6, maxBarThickness: 38 }] },
    options: { ...base, plugins: { ...base.plugins, legend: { display: false } }, scales: { x: { ...axisBase(), grid: { display: false } }, y: { ...axisBase(), beginAtZero: true, ticks: { ...axisBase().ticks, precision: 0, stepSize: 1 } } } }
  });

  charts.topMenu = new Chart(byId('top-menu-chart'), {
    type: 'bar', data: { labels: [], datasets: [{ label: 'Revenue', data: [], backgroundColor: PALETTE[0], borderRadius: 5, barThickness: 15 }] },
    options: { ...base, indexAxis: 'y', plugins: { ...base.plugins, legend: { display: false }, tooltip: { ...base.plugins.tooltip, callbacks: { label: (item) => ` ${money(item.raw)}` } } }, scales: { x: { ...axisBase(), beginAtZero: true, ticks: { ...axisBase().ticks, callback: revenueTick } }, y: { ...axisBase(), grid: { display: false }, ticks: { ...axisBase().ticks, autoSkip: false } } } }
  });

  charts.quantity = new Chart(byId('quantity-chart'), {
    type: 'bar', data: { labels: CATEGORIES, datasets: [{ label: 'Porsi', data: [], backgroundColor: PALETTE.slice(0, 3), borderRadius: 6, maxBarThickness: 48 }] },
    options: { ...base, plugins: { ...base.plugins, legend: { display: false } }, scales: { x: { ...axisBase(), grid: { display: false } }, y: { ...axisBase(), beginAtZero: true, ticks: { ...axisBase().ticks, precision: 0 } } } }
  });

  charts.discount = new Chart(byId('discount-chart'), {
    type: 'scatter', data: { datasets: CATEGORIES.map((category, index) => ({ label: category, data: [], backgroundColor: PALETTE[index], borderColor: PALETTE[index], pointRadius: 4, pointHoverRadius: 6 })) },
    options: { ...base, plugins: { ...base.plugins, tooltip: { ...base.plugins.tooltip, callbacks: { title: (items) => items[0]?.raw?.orderId || 'Transaksi', label: (item) => ` Diskon ${money(item.raw.x)} · Revenue ${money(item.raw.y)}` } } }, scales: { x: { ...axisBase(), beginAtZero: true, title: { display: true, text: 'Diskon (Rp)', color: '#81796f', font: { family: 'Inter', size: 10 } }, ticks: { ...axisBase().ticks, callback: revenueTick } }, y: { ...axisBase(), beginAtZero: true, title: { display: true, text: 'Revenue bersih (Rp)', color: '#81796f', font: { family: 'Inter', size: 10 } }, ticks: { ...axisBase().ticks, callback: revenueTick } } } }
  });
}

function getFilteredRows() {
  const category = byId('filter-category').value;
  const customer = byId('filter-customer').value;
  const channel = byId('filter-channel').value;
  const query = (byId('search-input').value || byId('search-input-mobile').value || '').trim().toLocaleLowerCase('id-ID');

  return SALES_DATA.filter((row) => {
    const matchesCategory = category === 'all' || row.Kategori_Menu === category;
    const matchesCustomer = customer === 'all' || row.Tipe_Pelanggan === customer;
    const matchesChannel = channel === 'all' || row.Saluran_Penjualan === channel;
    const searchable = `${row.Order_ID} ${row.Nama_Menu} ${row.Kategori_Menu} ${row.Tipe_Pelanggan} ${row.Saluran_Penjualan} ${row.Metode_Pembayaran}`.toLocaleLowerCase('id-ID');
    return matchesCategory && matchesCustomer && matchesChannel && (!query || searchable.includes(query));
  });
}

function aggregate(rows, key, measure) {
  const values = new Map();
  rows.forEach((row) => values.set(row[key], (values.get(row[key]) || 0) + Number(row[measure] || 0)));
  return values;
}

function updateCharts(rows) {
  if (!window.Chart || !charts.trend) return;
  const daily = new Map();
  rows.forEach((row) => {
    const day = dateKey(row);
    daily.set(day, (daily.get(day) || 0) + Number(row.Total_Pendapatan));
  });
  const dailyLabels = [...daily.keys()].sort();
  charts.trend.data.labels = dailyLabels.map((key) => key.slice(8, 10));
  charts.trend.data.datasets[0].data = dailyLabels.map((key) => daily.get(key));

  const channelRevenue = aggregate(rows, 'Saluran_Penjualan', 'Total_Pendapatan');
  charts.channel.data.datasets[0].data = CHANNELS.map((channel) => channelRevenue.get(channel) || 0);

  const categoryRevenue = aggregate(rows, 'Kategori_Menu', 'Total_Pendapatan');
  charts.categoryRevenue.data.datasets[0].data = CATEGORIES.map((category) => categoryRevenue.get(category) || 0);

  charts.customer.data.datasets[0].data = CUSTOMER_TYPES.map((type) => rows.filter((row) => row.Tipe_Pelanggan === type).length);
  charts.payment.data.datasets[0].data = PAYMENT_METHODS.map((method) => rows.filter((row) => row.Metode_Pembayaran === method).length);

  const menuRevenue = aggregate(rows, 'Nama_Menu', 'Total_Pendapatan');
  const topMenus = [...menuRevenue.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);
  charts.topMenu.data.labels = topMenus.map(([name]) => name);
  charts.topMenu.data.datasets[0].data = topMenus.map(([, revenue]) => revenue);

  const categoryQuantity = aggregate(rows, 'Kategori_Menu', 'Kuantitas');
  charts.quantity.data.datasets[0].data = CATEGORIES.map((category) => categoryQuantity.get(category) || 0);

  charts.discount.data.datasets.forEach((dataset) => {
    dataset.data = rows.filter((row) => row.Kategori_Menu === dataset.label).map((row) => ({ x: Number(row.Diskon), y: Number(row.Total_Pendapatan), orderId: row.Order_ID }));
  });
  byId('scatter-count').textContent = `${INTEGER.format(rows.length)} transaksi`;

  Object.values(charts).forEach((chart) => chart.update('none'));
}

function renderOrders(rows) {
  const ordered = [...rows].sort((a, b) => b.Tanggal_Transaksi.localeCompare(a.Tanggal_Transaksi));
  const shown = ordered.slice(0, 8);
  byId('order-rows').innerHTML = shown.map((row) => `<tr class="transition hover:bg-cream/60"><td class="whitespace-nowrap px-4 py-3.5 font-semibold text-forest-dark sm:px-5">${escapeHTML(row.Order_ID)}</td><td class="whitespace-nowrap px-4 py-3.5 text-muted">${escapeHTML(formatDate(row.Tanggal_Transaksi, { day: '2-digit', month: 'short', year: 'numeric' }))}</td><td class="min-w-[170px] px-4 py-3.5"><span class="block font-semibold">${escapeHTML(row.Nama_Menu)}</span><span class="mt-0.5 block text-[10px] text-muted">${escapeHTML(row.Kategori_Menu)}</span></td><td class="whitespace-nowrap px-4 py-3.5">${escapeHTML(row.Tipe_Pelanggan)}</td><td class="whitespace-nowrap px-4 py-3.5"><span class="rounded-full bg-sage px-2 py-1 text-[10px] font-semibold text-forest-dark">${escapeHTML(row.Saluran_Penjualan)}</span></td><td class="px-4 py-3.5 text-right tabular-nums">${INTEGER.format(Number(row.Kuantitas))}</td><td class="whitespace-nowrap px-4 py-3.5 text-right font-semibold tabular-nums sm:px-5">${money(row.Total_Pendapatan)}</td></tr>`).join('');
  byId('table-count').textContent = `${INTEGER.format(rows.length)} pesanan`;
  byId('empty-state').classList.toggle('hidden', rows.length > 0);
  byId('order-rows').classList.toggle('hidden', rows.length === 0);
}

function renderKpis(rows) {
  const revenue = sumBy(rows, 'Total_Pendapatan');
  const orders = new Set(rows.map((row) => row.Order_ID)).size;
  const quantity = sumBy(rows, 'Kuantitas');
  const avgDiscount = rows.length ? sumBy(rows, 'Diskon') / rows.length : 0;
  byId('kpi-revenue').textContent = money(revenue);
  byId('kpi-orders').textContent = INTEGER.format(orders);
  byId('kpi-orders-note').textContent = `${INTEGER.format(rows.length)} baris transaksi · ${INTEGER.format(orders)} order unik`;
  byId('kpi-quantity').textContent = INTEGER.format(quantity);
  byId('kpi-discount').textContent = money(Math.round(avgDiscount));

  const selected = [byId('filter-category').value, byId('filter-customer').value, byId('filter-channel').value].some((value) => value !== 'all');
  const searching = Boolean((byId('search-input').value || byId('search-input-mobile').value).trim());
  byId('result-count').innerHTML = `<span class="material-symbols-outlined text-[18px]">filter_alt</span>${INTEGER.format(rows.length)} dari ${INTEGER.format(SALES_DATA.length)} transaksi${selected || searching ? ' sesuai filter' : ' · seluruh data'}`;
}

function updateDashboard() {
  visibleRows = getFilteredRows();
  renderKpis(visibleRows);
  updateCharts(visibleRows);
  renderOrders(visibleRows);
}

/* ==================== MODUL 2: DATA PELANGGAN ==================== */
function renderCustomers() {
  const q = (byId('cust-search').value || '').trim().toLocaleLowerCase('id-ID');
  const filterStatus = byId('cust-filter-status').value;

  const filtered = crmCustomers.filter((c) => {
    const matchStatus = filterStatus === 'all' || c.status === filterStatus;
    const matchText = !q || `${c.id} ${c.name} ${c.wa} ${c.email} ${c.segment}`.toLocaleLowerCase('id-ID').includes(q);
    return matchStatus && matchText;
  });

  const pasifList = passiveCustomers();
  byId('kpi-cust-total').textContent = INTEGER.format(crmCustomers.length);
  byId('kpi-cust-member').textContent = INTEGER.format(crmCustomers.filter((c) => c.status === 'Member Loyal').length);
  byId('kpi-cust-inactive').textContent = INTEGER.format(pasifList.length);
  byId('badge-customers').textContent = crmCustomers.length;
  byId('cust-table-count').textContent = `${filtered.length} pelanggan`;

  const statusBadge = (status) => {
    if (status === 'Member Loyal') return 'bg-amber-100 text-amber-800 border-amber-200';
    if (status === 'Tidak Aktif') return 'bg-rose-100 text-rose-800 border-rose-200';
    return 'bg-sage text-forest-dark border-emerald-200';
  };

  byId('customer-rows').innerHTML = filtered.map((c) => {
    const inactiveDays = daysSinceDate(c.lastOrder);
    const isPasif = inactiveDays !== null && inactiveDays > PASSIVE_AFTER_DAYS;
    return `
    <tr class="transition hover:bg-cream/60">
      <td class="whitespace-nowrap px-5 py-3.5 font-bold text-forest-dark">${escapeHTML(c.id)}</td>
      <td class="px-4 py-3.5">
        <span class="block font-semibold text-ink">${escapeHTML(c.name)}</span>
        <span class="block text-[10px] text-muted">${escapeHTML(c.email || '-')}</span>
      </td>
      <td class="whitespace-nowrap px-4 py-3.5 font-mono text-[11px]">${escapeHTML(c.wa)}</td>
      <td class="whitespace-nowrap px-4 py-3.5">${escapeHTML(c.segment)}</td>
      <td class="whitespace-nowrap px-4 py-3.5">
        <span class="inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${statusBadge(c.status)}">${escapeHTML(c.status)}</span>
        ${isPasif ? `<span class="mt-1 inline-flex rounded-full border border-rose-300 bg-rose-50 px-2 py-0.5 text-[9px] font-bold text-rose-700">Pasif ${inactiveDays} hari</span>` : ''}
      </td>
      <td class="px-4 py-3.5 text-center font-semibold">${INTEGER.format(c.orders)}x</td>
      <td class="whitespace-nowrap px-4 py-3.5 text-muted">${escapeHTML(c.lastOrder)}</td>
      <td class="whitespace-nowrap px-5 py-3.5 text-right">
        <div class="flex items-center justify-end gap-1.5">
          <button type="button" data-cust-detail="${escapeHTML(c.id)}" title="Detail pelanggan (Single Customer View)" class="btn-cust-detail inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white text-forest-dark transition hover:bg-sage">
            <span class="material-symbols-outlined text-[15px]">contact_page</span>
          </button>
          <button type="button" data-cust-edit="${escapeHTML(c.id)}" title="Edit data pelanggan" class="btn-cust-edit inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white text-forest-dark transition hover:bg-sage">
            <span class="material-symbols-outlined text-[15px]">edit</span>
          </button>
          <button type="button" data-cust-delete="${escapeHTML(c.id)}" title="Hapus pelanggan" class="btn-cust-delete inline-flex h-8 w-8 items-center justify-center rounded-lg border border-rose-200 bg-rose-50 text-rose-700 transition hover:bg-rose-600 hover:text-white">
            <span class="material-symbols-outlined text-[15px]">delete</span>
          </button>
          <button type="button" data-wa-name="${escapeHTML(c.name)}" data-wa-phone="${escapeHTML(c.wa)}" title="Sapa via WhatsApp" class="btn-quick-wa inline-flex h-8 items-center gap-1 rounded-lg bg-sage px-2.5 text-[11px] font-semibold text-forest-dark transition hover:bg-forest hover:text-white">
            <span class="material-symbols-outlined text-[15px]">chat</span>Sapa WA
          </button>
        </div>
      </td>
    </tr>
  `;}).join('');

  bindCustomerRowEvents();
  // Jaga agar dropdown pelanggan pada form tiket selalu sinkron dengan database
  populateTicketCustomerSelect();
}

function bindCustomerRowEvents() {
  document.querySelectorAll('.btn-quick-wa').forEach((btn) => {
    btn.addEventListener('click', () => {
      byId('wa-target-name').value = `Kak ${btn.dataset.waName.split(' ')[0]}`;
      byId('wa-target-phone').value = btn.dataset.waPhone;
      updateWaPreview();
      switchView('whatsapp');
      showToast(`Kontak ${btn.dataset.waName} dimuat ke Template WA`);
    });
  });

  document.querySelectorAll('.btn-cust-detail').forEach((btn) => {
    btn.addEventListener('click', () => openCustomerDetail(btn.dataset.custDetail));
  });

  document.querySelectorAll('.btn-cust-edit').forEach((btn) => {
    btn.addEventListener('click', () => openCustomerEdit(btn.dataset.custEdit));
  });

  document.querySelectorAll('.btn-cust-delete').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = crmCustomers.find((c) => c.id === btn.dataset.custDelete);
      if (!target) return;
      const linked = crmTickets.filter((t) => t.customerId === target.id || t.customer === target.name).length;
      const warn = linked > 0 ? ` Terdapat ${linked} tiket keluhan yang terhubung (riwayat tiket tetap tersimpan).` : '';
      if (confirm(`Hapus pelanggan "${target.name}" (${target.id}) dari database CRM?${warn}`)) {
        crmCustomers = crmCustomers.filter((c) => c.id !== target.id);
        saveState(STORAGE_KEYS.customers, crmCustomers);
        logActivity('customer_deleted', 'Pelanggan Dihapus', `${target.name} (${target.id}) dihapus dari database CRM.`, 'delete', 'rose');
        renderCustomers();
        populateTicketCustomerSelect();
        if (typeof renderCrmDashboard === 'function') renderCrmDashboard();
        showToast(`Pelanggan ${target.name} dihapus dari database`);
      }
    });
  });
}

function openCustomerEdit(customerId) {
  const c = crmCustomers.find((item) => item.id === customerId);
  if (!c) return;
  byId('cust-edit-id').value = c.id;
  byId('cust-name').value = c.name;
  byId('cust-wa').value = c.wa;
  byId('cust-email').value = c.email || '';
  byId('cust-segment').value = c.segment || 'Mahasiswa';
  byId('cust-status').value = c.status || 'Reguler';
  byId('cust-form-title').textContent = `Edit Data Pelanggan — ${c.id}`;
  byId('cust-form-submit').innerHTML = '<span class="material-symbols-outlined text-[17px]">save</span>Perbarui Data Pelanggan';
  byId('form-add-customer').classList.remove('hidden');
  byId('cust-name').focus();
}

function resetCustomerFormMode() {
  byId('cust-edit-id').value = '';
  byId('cust-form-title').textContent = 'Registrasi Pelanggan Baru';
  byId('cust-form-submit').innerHTML = '<span class="material-symbols-outlined text-[17px]">save</span>Simpan ke Database';
}

function openCustomerDetail(customerId) {
  const c = crmCustomers.find((item) => item.id === customerId);
  if (!c) return;
  const inactiveDays = daysSinceDate(c.lastOrder);
  const isPasif = inactiveDays !== null && inactiveDays > PASSIVE_AFTER_DAYS;

  byId('cust-detail-id').textContent = c.id;
  byId('cust-detail-name').textContent = c.name;
  byId('cust-detail-wa').textContent = c.wa;
  byId('cust-detail-email').textContent = c.email || '-';
  byId('cust-detail-segment').textContent = `${c.segment} · ${c.status}`;
  byId('cust-detail-joined').textContent = c.joined || '-';
  byId('cust-detail-orders').textContent = `${INTEGER.format(c.orders)}x`;
  byId('cust-detail-last').textContent = c.lastOrder || '-';
  byId('cust-detail-inactive').textContent = inactiveDays === null ? '-' : `${inactiveDays} hari`;
  byId('cust-detail-inactive').className = inactiveDays !== null && inactiveDays > PASSIVE_AFTER_DAYS
    ? 'font-bold text-rose-700'
    : 'font-bold text-emerald-700';

  // Riwayat layanan: tiket keluhan terhubung via ID pelanggan atau kecocokan nama
  const linkedTickets = crmTickets.filter((t) => t.customerId === c.id || t.customer === c.name);
  byId('cust-detail-ticket-count').textContent = `${linkedTickets.length} tiket`;
  const rowsEl = byId('cust-detail-ticket-rows');
  if (!linkedTickets.length) {
    rowsEl.innerHTML = '<tr><td colspan="4" class="px-3 py-4 text-center text-muted">Belum ada keluhan tercatat untuk pelanggan ini.</td></tr>';
  } else {
    rowsEl.innerHTML = linkedTickets.map((t) => {
      const slaLabel = t.status === 'Selesai' ? (t.slaState === 'Melewati SLA' ? 'Terlambat SLA' : 'Memenuhi SLA') : t.slaState;
      const slaClass = t.status === 'Selesai'
        ? (t.slaState === 'Melewati SLA' ? 'bg-rose-50 text-rose-700 border-rose-300' : 'bg-emerald-50 text-emerald-700 border-emerald-300')
        : (t.slaState === 'Melewati SLA' ? 'bg-rose-100 text-rose-800 border-rose-300' : t.slaState === 'Mendekati Batas' ? 'bg-amber-100 text-amber-800 border-amber-300' : 'bg-teal-50 text-teal-700 border-teal-300');
      return `
        <tr>
          <td class="px-3 py-2 font-bold text-forest-dark">${escapeHTML(t.id)}</td>
          <td class="px-3 py-2 text-muted">${escapeHTML((t.createdAt || '').slice(0, 10))}</td>
          <td class="px-3 py-2 text-ink">${escapeHTML(t.category)}</td>
          <td class="px-3 py-2"><span class="inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold ${slaClass}">${escapeHTML(slaLabel)}</span></td>
        </tr>`;
    }).join('');
  }

  byId('btn-cust-detail-wa').onclick = () => {
    byId('wa-target-name').value = `Kak ${c.name.split(' ')[0]}`;
    byId('wa-target-phone').value = c.wa;
    updateWaPreview();
    closeCustomerDetail();
    switchView('whatsapp');
    showToast(`Kontak ${c.name} dimuat ke Template WA`);
  };

  const modal = byId('modal-customer-detail');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeCustomerDetail() {
  const modal = byId('modal-customer-detail');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

/* ==================== MODUL 3: TICKETING KELUHAN & MONITORING SLA ==================== */
// Isi dropdown tiket dengan pelanggan terdaftar (Single Customer View)
function populateTicketCustomerSelect() {
  const sel = byId('tkt-customer-id');
  if (!sel) return;
  const prev = sel.value;
  sel.innerHTML = '<option value="">— Pilih pelanggan terdaftar —</option>' +
    crmCustomers.map((c) => `<option value="${escapeHTML(c.id)}">${escapeHTML(c.id)} · ${escapeHTML(c.name)} (${escapeHTML(c.segment)})</option>`).join('') +
    '<option value="UMUM">Pelanggan umum (belum terdaftar)</option>';
  if (prev && [...sel.options].some((o) => o.value === prev)) sel.value = prev;
}

// Panel target SLA otomatis di form tiket (mengikuti prioritas — Tabel 4.3 UTS)
function updateTicketSlaInfo() {
  const info = byId('tkt-sla-info');
  if (!info) return;
  const priority = byId('tkt-priority')?.value || 'Sedang';
  const policy = SLA_POLICY[priority] || SLA_POLICY.Sedang;
  info.innerHTML = `Target dihitung otomatis dari prioritas <strong class="text-forest-dark">${escapeHTML(priority)}</strong>: respons ≤ <strong class="text-forest-dark">${policy.resp} mnt</strong> &amp; penyelesaian ≤ <strong class="text-forest-dark">${policy.resol} mnt</strong>. Waktu masuk memakai jam nyata &amp; kondisi SLA (hijau/kuning/merah) diperbarui otomatis.`;
}

function renderTickets() {
  const filterSla = byId('tkt-filter-sla').value;

  const breached = crmTickets.filter((t) => t.slaState === 'Melewati SLA' && t.status !== 'Selesai').length;
  const warning = crmTickets.filter((t) => t.slaState === 'Mendekati Batas' && t.status !== 'Selesai').length;
  const safe = crmTickets.filter((t) => t.slaState === 'Aman' && t.status !== 'Selesai').length;
  const resolved = crmTickets.filter((t) => t.status === 'Selesai').length;

  byId('sla-breached-count').textContent = breached;
  byId('sla-warning-count').textContent = warning;
  byId('sla-safe-count').textContent = safe;
  byId('sla-resolved-count').textContent = resolved;
  byId('badge-tickets').textContent = breached + warning + safe;

  const filtered = crmTickets.filter((t) => filterSla === 'all' || t.slaState === filterSla);

  const slaBadge = (state) => {
    if (state === 'Melewati SLA') {
      return `<span class="inline-flex items-center gap-1.5 rounded-full border border-rose-300 bg-rose-100 px-2.5 py-1 text-[10px] font-bold text-rose-800"><span class="h-2 w-2 rounded-full bg-rose-600"></span>MERAH · MELEWATI SLA</span>`;
    }
    if (state === 'Mendekati Batas') {
      return `<span class="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-800"><span class="h-2 w-2 rounded-full bg-amber-500"></span>KUNING · MENDEKATI BATAS</span>`;
    }
    if (state === 'Aman') {
      return `<span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-800"><span class="h-2 w-2 rounded-full bg-emerald-600"></span>HIJAU · DALAM BATAS SLA</span>`;
    }
    return `<span class="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-stone-100 px-2.5 py-1 text-[10px] font-bold text-stone-700"><span class="material-symbols-outlined text-[13px] text-forest">check_circle</span>SELESAI</span>`;
  };

  const rowHighlight = (state) => {
    if (state === 'Melewati SLA') return 'bg-rose-50/40';
    if (state === 'Mendekati Batas') return 'bg-amber-50/35';
    return '';
  };

  byId('ticket-rows').innerHTML = filtered.map((t) => `
    <tr class="transition hover:bg-cream/60 ${rowHighlight(t.slaState)}">
      <td class="whitespace-nowrap px-5 py-3.5 font-bold text-forest-dark">${escapeHTML(t.id)}</td>
      <td class="max-w-xs px-4 py-3.5">
        <span class="block font-semibold text-ink">${escapeHTML(t.customer)} · <span class="text-forest">${escapeHTML(t.category)}</span></span>
        <span class="mt-0.5 block text-[11px] leading-4 text-muted">${escapeHTML(t.desc)}</span>
      </td>
      <td class="whitespace-nowrap px-4 py-3.5">
        ${slaBadge(t.slaState)}
        <span class="mt-1 block text-[10px] font-medium text-muted">${escapeHTML(t.elapsed)}</span>
      </td>
      <td class="whitespace-nowrap px-4 py-3.5">
        <span class="rounded-lg bg-white px-2.5 py-1 text-[11px] font-bold text-ink shadow-sm border border-line">${escapeHTML(t.status)}</span>
      </td>
      <td class="max-w-xs px-4 py-3.5 text-[11px] leading-4 text-ink">${escapeHTML(t.followup)}</td>
      <td class="whitespace-nowrap px-5 py-3.5 text-right">
        <div class="flex items-center justify-end gap-1.5">
          <button type="button" data-open-detail="${escapeHTML(t.id)}" class="btn-open-detail inline-flex items-center gap-1 rounded-lg border border-line bg-white px-2.5 py-1.5 text-[11px] font-semibold text-forest-dark transition hover:bg-sage">
            <span class="material-symbols-outlined text-[14px]">visibility</span>Detail
          </button>
          ${t.status !== 'Selesai'
            ? `<button type="button" data-resolve-id="${escapeHTML(t.id)}" class="btn-resolve-tkt inline-flex items-center gap-1 rounded-lg bg-forest px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-forest-dark"><span class="material-symbols-outlined text-[15px]">check</span>Tandai Selesai</button>`
            : `<span class="text-[11px] font-semibold text-forest">Tuntas</span>`
          }
        </div>
      </td>
    </tr>
  `).join('');

  document.querySelectorAll('.btn-open-detail').forEach((btn) => {
    btn.addEventListener('click', () => openTicketDetail(btn.dataset.openDetail));
  });

  document.querySelectorAll('.btn-resolve-tkt').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = crmTickets.find((item) => item.id === btn.dataset.resolveId);
      if (target) {
        target.status = 'Selesai';
        target.resolvedAt = fmtStamp();
        if (target.live && target.createdAtTs) {
          target.resolutionTimeMin = minutesSince(target.createdAtTs);
        } else {
          target.resolutionTimeMin = target.resolutionTimeMin || (target.slaState === 'Melewati SLA' ? 145 : 35);
        }
        target.slaState = (target.resolutionTimeMin <= target.targetResolutionMin && target.slaState !== 'Melewati SLA') ? 'Selesai' : 'Melewati SLA';
        target.elapsed = `Selesai (${target.resolutionTimeMin} mnt)`;
        if (!target.firstContact) target.firstContact = 'Ya';
        saveState(STORAGE_KEYS.tickets, crmTickets);
        logActivity('ticket_resolved', 'Tiket Keluhan Selesai', `Tiket ${target.id} (${target.customer}) ditandai Selesai.`, 'task_alt', 'emerald');
        renderTickets();
        if (typeof renderCrmDashboard === 'function') {
          renderCrmDashboard();
        }
        showToast(`Tiket ${target.id} ditandai Selesai`);
      }
    });
  });
}

/* ==================== MODUL 4: TEMPLATE WHATSAPP ==================== */
function renderWaTemplates() {
  byId('wa-template-list').innerHTML = WA_TEMPLATES.map((tpl) => {
    const active = tpl.id === selectedWaTemplate.id;
    return `
      <article data-tpl-id="${tpl.id}" class="wa-tpl-card cursor-pointer rounded-2xl border p-4 shadow-card transition ${active ? 'border-forest bg-sage/50 ring-2 ring-forest/15' : 'border-line bg-white hover:border-forest/40'}">
        <div class="flex items-center justify-between gap-2">
          <span class="rounded-full bg-forest/10 px-2.5 py-0.5 text-[10px] font-bold text-forest">${escapeHTML(tpl.tag)}</span>
          ${active ? '<span class="text-[10px] font-bold text-forest-dark">● Sedang Dipilih</span>' : ''}
        </div>
        <h3 class="mt-2 font-display text-base font-semibold text-forest-dark">${escapeHTML(tpl.title)}</h3>
        <p class="mt-1 text-xs text-muted">${escapeHTML(tpl.desc)}</p>
      </article>
    `;
  }).join('');

  document.querySelectorAll('.wa-tpl-card').forEach((card) => {
    card.addEventListener('click', () => {
      const found = WA_TEMPLATES.find((t) => t.id === card.dataset.tplId);
      if (found) {
        selectedWaTemplate = found;
        renderWaTemplates();
        updateWaPreview();
      }
    });
  });
}

function updateWaPreview() {
  const name = (byId('wa-target-name').value || 'Kak').trim();
  const phone = (byId('wa-target-phone').value || '').replace(/\D/g, '');
  const composed = selectedWaTemplate.text.replace(/\{NAMA\}/g, name);
  byId('wa-preview-box').value = composed;
  byId('btn-open-wa').href = `https://wa.me/${phone}?text=${encodeURIComponent(composed)}`;
}

/* ==================== MODUL 5: PROGRAM KUPON MEMBER ==================== */
function renderCoupons() {
  byId('coupon-grid').innerHTML = crmCoupons.map((c) => {
    const redeemed = couponRedeemedTotal(c);
    const issued = Number(c.issued || 0);
    const rate = issued > 0 ? Math.round((redeemed / issued) * 100) : 0;
    const isActive = c.active !== false;
    return `
    <article class="flex flex-col justify-between rounded-2xl border border-line bg-white p-5 shadow-card ${isActive ? '' : 'opacity-75'}">
      <div>
        <div class="flex items-center justify-between gap-2">
          <span class="rounded-lg border border-dashed border-forest bg-sage px-3 py-1 font-mono text-xs font-bold tracking-wider text-forest-dark">${escapeHTML(c.code)}</span>
          <span class="rounded-full ${isActive ? 'bg-emerald-50 text-emerald-700 border border-emerald-300' : 'bg-rose-50 text-rose-700 border border-rose-300'} px-2.5 py-0.5 text-[10px] font-bold">${isActive ? 'AKTIF' : 'NONAKTIF'}</span>
        </div>
        <h3 class="mt-3 font-display text-lg font-semibold text-forest-dark">${escapeHTML(c.title)}</h3>
        <p class="mt-1 text-sm font-bold text-forest">${escapeHTML(c.discount)}</p>

        <div class="mt-4 space-y-2 rounded-xl bg-cream/80 p-3 text-xs">
          <div><strong class="text-ink">Minimal Transaksi:</strong> <span class="text-muted">${money(c.minOrder)}</span></div>
          <div><strong class="text-ink">Segmen Sasaran:</strong> <span class="text-muted">${escapeHTML(c.segment)}</span></div>
          <div><strong class="text-ink">Periode Promo:</strong> <span class="text-muted">${escapeHTML(c.period)}</span></div>
          <div><strong class="text-ink">Syarat Penggunaan:</strong> <span class="text-muted">${escapeHTML(c.terms)}</span></div>
          <div><strong class="text-ink">Petunjuk Pemakaian:</strong> <span class="text-muted">${escapeHTML(c.guide)}</span></div>
          <div><strong class="text-ink">Penukaran:</strong> <span class="text-muted">${INTEGER.format(redeemed)} dari ${INTEGER.format(issued)} voucher (${rate}%)${Array.isArray(c.redemptions) && c.redemptions.length ? ` · terakhir: ${escapeHTML(c.redemptions[0].name)} (${escapeHTML(c.redemptions[0].date)})` : ''}</span></div>
        </div>
      </div>

      <div class="mt-4 space-y-2">
        <div class="flex gap-2">
          <button type="button" data-copy-code="${escapeHTML(c.code)}" class="btn-copy-coupon inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl border border-line bg-white text-xs font-semibold text-forest-dark transition hover:bg-sage">
            <span class="material-symbols-outlined text-[16px]">content_copy</span>Salin Kode
          </button>
          <button type="button" data-redeem-code="${escapeHTML(c.code)}" class="btn-redeem-coupon inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl bg-forest text-xs font-semibold text-white transition hover:bg-forest-dark">
            <span class="material-symbols-outlined text-[16px]">verified</span>Catat Penukaran
          </button>
        </div>
        <div class="flex gap-2">
          <button type="button" data-cpn-edit="${escapeHTML(c.code)}" class="btn-cpn-edit inline-flex h-8 flex-1 items-center justify-center gap-1 rounded-xl border border-line bg-white text-[11px] font-semibold text-forest-dark transition hover:bg-sage">
            <span class="material-symbols-outlined text-[14px]">edit</span>Edit
          </button>
          <button type="button" data-cpn-toggle="${escapeHTML(c.code)}" class="btn-cpn-toggle inline-flex h-8 flex-1 items-center justify-center gap-1 rounded-xl border border-line bg-white text-[11px] font-semibold text-forest-dark transition hover:bg-sage">
            <span class="material-symbols-outlined text-[14px]">${isActive ? 'pause_circle' : 'play_circle'}</span>${isActive ? 'Nonaktifkan' : 'Aktifkan'}
          </button>
          <button type="button" data-cpn-delete="${escapeHTML(c.code)}" class="btn-cpn-delete inline-flex h-8 flex-1 items-center justify-center gap-1 rounded-xl border border-rose-200 bg-rose-50 text-[11px] font-semibold text-rose-700 transition hover:bg-rose-600 hover:text-white">
            <span class="material-symbols-outlined text-[14px]">delete</span>Hapus
          </button>
        </div>
      </div>
    </article>
  `;}).join('');

  bindCouponEvents();
}

function bindCouponEvents() {
  document.querySelectorAll('.btn-copy-coupon').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigator.clipboard?.writeText(btn.dataset.copyCode);
      byId('sim-coupon-code').value = btn.dataset.copyCode;
      showToast(`Kode kupon ${btn.dataset.copyCode} disalin`);
    });
  });

  document.querySelectorAll('.btn-redeem-coupon').forEach((btn) => {
    btn.addEventListener('click', () => openRedemptionModal(btn.dataset.redeemCode));
  });

  document.querySelectorAll('.btn-cpn-edit').forEach((btn) => {
    btn.addEventListener('click', () => openCouponEdit(btn.dataset.cpnEdit));
  });

  document.querySelectorAll('.btn-cpn-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = crmCoupons.find((c) => c.code === btn.dataset.cpnToggle);
      if (!target) return;
      target.active = target.active === false;
      saveState(STORAGE_KEYS.coupons, crmCoupons);
      logActivity('coupon_toggled', target.active ? 'Kupon Diaktifkan' : 'Kupon Dinonaktifkan', `Kupon ${target.code} kini ${target.active ? 'aktif' : 'nonaktif'}.`, 'loyalty', target.active ? 'emerald' : 'amber');
      renderCoupons();
      showToast(`Kupon ${target.code} ${target.active ? 'diaktifkan' : 'dinonaktifkan'}`);
    });
  });

  document.querySelectorAll('.btn-cpn-delete').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = crmCoupons.find((c) => c.code === btn.dataset.cpnDelete);
      if (!target) return;
      if (confirm(`Hapus program kupon "${target.code}" dari daftar promo?`)) {
        crmCoupons = crmCoupons.filter((c) => c.code !== target.code);
        saveState(STORAGE_KEYS.coupons, crmCoupons);
        logActivity('coupon_deleted', 'Kupon Dihapus', `Program kupon ${target.code} dihapus dari daftar promo.`, 'delete', 'rose');
        renderCoupons();
        if (typeof renderCrmDashboard === 'function') renderCrmDashboard();
        showToast(`Kupon ${target.code} dihapus`);
      }
    });
  });
}

function openCouponEdit(code) {
  const c = crmCoupons.find((item) => item.code === code);
  if (!c) return;
  byId('cpn-edit-id').value = c.code;
  byId('cpn-code').value = c.code;
  byId('cpn-title').value = c.title;
  byId('cpn-discount').value = c.discount;
  byId('cpn-minorder').value = c.minOrder || 0;
  byId('cpn-segment').value = c.segment || 'Semua Member';
  byId('cpn-period').value = c.period;
  byId('cpn-terms').value = c.terms;
  byId('cpn-guide').value = c.guide;
  byId('cpn-status').value = c.active === false ? 'Nonaktif' : 'Aktif';
  byId('cpn-form-title').textContent = `Edit Program Kupon — ${c.code}`;
  byId('cpn-form-submit').innerHTML = '<span class="material-symbols-outlined text-[17px]">loyalty</span>Simpan Perubahan';
  byId('form-add-coupon').classList.remove('hidden');
}

function resetCouponFormMode() {
  byId('cpn-edit-id').value = '';
  byId('cpn-form-title').textContent = 'Tambah Program Kupon Baru';
  byId('cpn-form-submit').innerHTML = '<span class="material-symbols-outlined text-[17px]">loyalty</span>Terbitkan Kupon';
}

function openRedemptionModal(code) {
  const c = crmCoupons.find((item) => item.code === code);
  if (!c) return;
  if (c.active === false) {
    showToast(`Kupon ${c.code} sedang nonaktif — aktifkan dulu sebelum mencatat penukaran`);
    return;
  }
  byId('red-coupon-code').value = c.code;
  byId('red-coupon-info').textContent = `${c.discount} · Minimal ${money(c.minOrder)}`;
  byId('red-customer-name').value = '';
  byId('red-amount').value = c.minOrder || 0;
  byId('red-form-error').classList.add('hidden');
  const dataList = byId('red-customer-list');
  if (dataList) {
    dataList.innerHTML = crmCustomers.map((cust) => `<option value="${escapeHTML(cust.name)}">${escapeHTML(cust.id)} · ${escapeHTML(cust.wa)}</option>`).join('');
  }
  const modal = byId('modal-coupon-redemption');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeRedemptionModal() {
  const modal = byId('modal-coupon-redemption');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function validateCouponSimulation() {
  const inputCode = (byId('sim-coupon-code').value || '').trim().toUpperCase();
  const amount = Number(byId('sim-order-amount').value || 0);
  const resBox = byId('sim-coupon-result');
  resBox.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'bg-rose-50', 'text-rose-800');

  const found = crmCoupons.find((c) => c.code.toUpperCase() === inputCode);
  if (!found) {
    resBox.classList.add('bg-rose-50', 'text-rose-800');
    resBox.textContent = `Kode kupon "${inputCode || '-'}" tidak ditemukan. Periksa kembali penulisan kode promo.`;
    return;
  }
  if (found.active === false) {
    resBox.classList.add('bg-rose-50', 'text-rose-800');
    resBox.textContent = `Kupon ${found.code} sedang NONAKTIF / kedaluwarsa sehingga tidak dapat digunakan. Aktifkan kembali di panel Program Kupon bila periode promo diperpanjang.`;
    return;
  }
  if (amount < Number(found.minOrder || 0)) {
    resBox.classList.add('bg-rose-50', 'text-rose-800');
    resBox.textContent = `Belum memenuhi syarat: Total belanja ${money(amount)} masih di bawah minimal transaksi ${money(found.minOrder)} untuk kupon ${found.code}.`;
    return;
  }
  resBox.classList.add('bg-emerald-50', 'text-emerald-800');
  resBox.textContent = `VALID! Kupon ${found.code} (${found.discount}) berhasil diterapkan pada transaksi senilai ${money(amount)}. Catat penukaran via tombol "Catat Penukaran" agar terhitung di KPI voucher redemption.`;
}

/* ==================== MODUL DASHBOARD CRM & MONITORING SLA ==================== */
function calculateSlaMetrics(tickets = crmTickets || []) {
  const safeTickets = Array.isArray(tickets) ? tickets : [];
  const total = safeTickets.length;
  const newCount = safeTickets.filter(t => t.status === 'Baru').length;
  const inProgressCount = safeTickets.filter(t => t.status === 'Diproses').length;
  const unresolvedCount = newCount + inProgressCount;
  const resolvedCount = safeTickets.filter(t => t.status === 'Selesai').length;

  // Tiket yang dapat dievaluasi SLA: tiket yang sudah Selesai ATAU tiket aktif yang sudah Melewati SLA
  const evaluatedTickets = safeTickets.filter(t => t.status === 'Selesai' || t.slaState === 'Melewati SLA');
  const metTickets = evaluatedTickets.filter(t => t.status === 'Selesai' && t.slaState !== 'Melewati SLA');
  const breachedTickets = evaluatedTickets.filter(t => t.slaState === 'Melewati SLA');

  const evaluatedCount = evaluatedTickets.length;
  const metCount = metTickets.length;
  const breachedCount = breachedTickets.length;
  const slaRate = evaluatedCount > 0 ? Math.round((metCount / evaluatedCount) * 100) : 100;

  // Rata-rata waktu respons (dari tiket yang tercatat responseTimeMin)
  const responded = safeTickets.filter(t => typeof t.responseTimeMin === 'number' && !isNaN(t.responseTimeMin));
  const avgResponse = responded.length > 0
    ? (responded.reduce((acc, t) => acc + t.responseTimeMin, 0) / responded.length).toFixed(1)
    : null;

  // Rata-rata waktu penyelesaian (dari tiket selesai yang tercatat resolutionTimeMin)
  const resolved = safeTickets.filter(t => t.status === 'Selesai' && typeof t.resolutionTimeMin === 'number' && !isNaN(t.resolutionTimeMin));
  const avgResolution = resolved.length > 0
    ? (resolved.reduce((acc, t) => acc + t.resolutionTimeMin, 0) / resolved.length).toFixed(1)
    : null;

  // FCR (First Contact Resolution): keluhan tuntas tanpa eskalasi pada penanganan pertama
  const fcrEvaluated = safeTickets.filter(t => t.status === 'Selesai' && (t.firstContact === 'Ya' || t.firstContact === 'Tidak'));
  const fcrRate = fcrEvaluated.length > 0
    ? Math.round((fcrEvaluated.filter(t => t.firstContact === 'Ya').length / fcrEvaluated.length) * 100)
    : null;

  // CSat: kepuasan pelanggan terkonfirmasi pasca penyelesaian keluhan
  const satEvaluated = safeTickets.filter(t => t.status === 'Selesai' && (t.satisfaction === 'Puas' || t.satisfaction === 'Belum Puas'));
  const csatRate = satEvaluated.length > 0
    ? Math.round((satEvaluated.filter(t => t.satisfaction === 'Puas').length / satEvaluated.length) * 100)
    : null;

  return {
    total,
    newCount,
    inProgressCount,
    unresolvedCount,
    resolvedCount,
    evaluatedCount,
    metCount,
    breachedCount,
    slaRate,
    avgResponse,
    avgResolution,
    fcrEvaluated: fcrEvaluated.length,
    fcrRate,
    csatEvaluated: satEvaluated.length,
    csatRate
  };
}

function filterCrmTicketsByPeriod(period = 'thisMonth') {
  const today = todayStr();
  const monthPrefix = today.slice(0, 7);
  const weekAgo = new Date(Date.now() - 7 * 86400000);
  const weekAgoStr = `${weekAgo.getFullYear()}-${String(weekAgo.getMonth() + 1).padStart(2, '0')}-${String(weekAgo.getDate()).padStart(2, '0')}`;
  if (period === 'today') {
    return crmTickets.filter(t => t.createdAt && t.createdAt.slice(0, 10) === today);
  }
  if (period === '7days') {
    return crmTickets.filter(t => t.createdAt && t.createdAt.slice(0, 10) >= weekAgoStr && t.createdAt.slice(0, 10) <= today);
  }
  if (period === 'thisMonth') {
    return crmTickets.filter(t => t.createdAt && t.createdAt.slice(0, 7) === monthPrefix);
  }
  return [...crmTickets];
}

function initializeCrmCharts() {
  if (!window.Chart || !byId('crm-complaint-trend-chart')) return;
  const base = getChartDefaults();

  // 1. Tren Keluhan Pelanggan
  charts.crmTrend = new Chart(byId('crm-complaint-trend-chart'), {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Tiket Keluhan',
        data: [],
        borderColor: '#257149',
        backgroundColor: 'rgba(37, 113, 73, 0.12)',
        fill: true,
        tension: 0.35,
        borderWidth: 2.5,
        pointBackgroundColor: '#257149',
        pointRadius: 3,
        pointHoverRadius: 6
      }]
    },
    options: {
      ...base,
      plugins: {
        ...base.plugins,
        legend: { display: false },
        tooltip: {
          ...base.plugins.tooltip,
          callbacks: { label: (item) => ` ${item.raw} keluhan masuk` }
        }
      },
      scales: {
        x: { ...axisBase(), grid: { display: false } },
        y: { ...axisBase(), beginAtZero: true, ticks: { ...axisBase().ticks, stepSize: 1, precision: 0 } }
      }
    }
  });

  // 2. Distribusi Status Tiket
  charts.crmStatus = new Chart(byId('crm-status-chart'), {
    type: 'doughnut',
    data: {
      labels: ['Baru', 'Diproses', 'Selesai'],
      datasets: [{
        data: [0, 0, 0],
        backgroundColor: ['#D5A43C', '#3B82F6', '#257149'],
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverOffset: 6
      }]
    },
    options: {
      ...base,
      cutout: '65%',
      plugins: {
        ...base.plugins,
        legend: { display: false },
        tooltip: {
          ...base.plugins.tooltip,
          callbacks: { label: (item) => ` ${item.label}: ${item.raw} tiket` }
        }
      }
    }
  });

  // 3. Kategori Keluhan
  charts.crmCategory = new Chart(byId('crm-category-chart'), {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Jumlah Kasus',
        data: [],
        backgroundColor: '#257149',
        borderRadius: 6,
        maxBarThickness: 32
      }]
    },
    options: {
      ...base,
      indexAxis: 'y',
      plugins: {
        ...base.plugins,
        legend: { display: false },
        tooltip: {
          ...base.plugins.tooltip,
          callbacks: { label: (item) => ` ${item.raw} keluhan` }
        }
      },
      scales: {
        x: { ...axisBase(), beginAtZero: true, ticks: { ...axisBase().ticks, stepSize: 1, precision: 0 } },
        y: { ...axisBase(), grid: { display: false } }
      }
    }
  });

  // 4. Ringkasan SLA
  charts.crmSla = new Chart(byId('crm-sla-chart'), {
    type: 'bar',
    data: {
      labels: ['Waktu Respons (Mnt)', 'Waktu Resolusi (Mnt)'],
      datasets: [
        {
          label: 'Realisasi Rata-rata',
          data: [0, 0],
          backgroundColor: '#257149',
          borderRadius: 6,
          barThickness: 26
        },
        {
          label: 'Target Maksimal SLA',
          data: [30, 120],
          backgroundColor: '#D5A43C',
          borderRadius: 6,
          barThickness: 26
        }
      ]
    },
    options: {
      ...base,
      plugins: {
        ...base.plugins,
        legend: { position: 'bottom', labels: base.plugins.legend.labels },
        tooltip: {
          ...base.plugins.tooltip,
          callbacks: { label: (item) => ` ${item.dataset.label}: ${item.raw} mnt` }
        }
      },
      scales: {
        x: { ...axisBase(), grid: { display: false } },
        y: {
          ...axisBase(),
          beginAtZero: true,
          ticks: { ...axisBase().ticks, callback: (v) => `${v} mnt` }
        }
      }
    }
  });
}

function updateCrmCharts(tickets) {
  if (!charts.crmTrend) return;

  // A. Tren Keluhan
  const dailyCounts = new Map();
  tickets.forEach(t => {
    const d = t.createdAt ? t.createdAt.slice(0, 10) : '2026-11-19';
    dailyCounts.set(d, (dailyCounts.get(d) || 0) + 1);
  });
  const sortedDays = [...dailyCounts.keys()].sort();
  charts.crmTrend.data.labels = sortedDays.map(d => {
    const parts = d.split('-');
    return `${parts[2]}/${parts[1]}`;
  });
  charts.crmTrend.data.datasets[0].data = sortedDays.map(d => dailyCounts.get(d));
  charts.crmTrend.update('none');

  // B. Distribusi Status Tiket
  const baru = tickets.filter(t => t.status === 'Baru').length;
  const diproses = tickets.filter(t => t.status === 'Diproses').length;
  const selesai = tickets.filter(t => t.status === 'Selesai').length;
  charts.crmStatus.data.datasets[0].data = [baru, diproses, selesai];
  charts.crmStatus.update('none');

  // C. Kategori Keluhan
  const catMap = new Map();
  tickets.forEach(t => {
    const cat = t.category || 'Lainnya';
    catMap.set(cat, (catMap.get(cat) || 0) + 1);
  });
  const sortedCats = [...catMap.entries()].sort((a, b) => b[1] - a[1]);
  charts.crmCategory.data.labels = sortedCats.map(c => c[0]);
  charts.crmCategory.data.datasets[0].data = sortedCats.map(c => c[1]);
  charts.crmCategory.update('none');

  // D. Ringkasan SLA
  const metrics = calculateSlaMetrics(tickets);
  const avgRespNum = metrics.avgResponse ? parseFloat(metrics.avgResponse) : 0;
  const avgResolNum = metrics.avgResolution ? parseFloat(metrics.avgResolution) : 0;
  charts.crmSla.data.datasets[0].data = [avgRespNum, avgResolNum];
  charts.crmSla.update('none');
}

let crmCurrentPage = 1;
const CRM_PAGE_SIZE = 5;

function renderCrmTicketsTable(periodTickets) {
  const query = (byId('crm-ticket-search')?.value || '').trim().toLowerCase();
  const filterStatus = byId('crm-filter-status')?.value || 'all';
  const filterPriority = byId('crm-filter-priority')?.value || 'all';
  const filterSlaBadge = byId('crm-filter-sla-badge')?.value || 'all';

  let list = periodTickets.filter(t => {
    const matchStatus = filterStatus === 'all' || t.status === filterStatus;
    const matchPriority = filterPriority === 'all' || t.priority === filterPriority;
    const matchSla = filterSlaBadge === 'all'
      || (filterSlaBadge === 'Memenuhi SLA' && (t.status === 'Selesai' && t.slaState !== 'Melewati SLA'))
      || (filterSlaBadge === 'Mendekati Batas' && t.slaState === 'Mendekati Batas')
      || (filterSlaBadge === 'Melewati SLA' && t.slaState === 'Melewati SLA');
    const matchSearch = !query || `${t.id} ${t.customer} ${t.category} ${t.pic || ''}`.toLowerCase().includes(query);
    return matchStatus && matchPriority && matchSla && matchSearch;
  });

  const totalFiltered = list.length;
  byId('crm-table-badge').textContent = `${totalFiltered} tiket`;

  const totalPages = Math.max(1, Math.ceil(totalFiltered / CRM_PAGE_SIZE));
  if (crmCurrentPage > totalPages) crmCurrentPage = totalPages;
  if (crmCurrentPage < 1) crmCurrentPage = 1;

  const startIdx = (crmCurrentPage - 1) * CRM_PAGE_SIZE;
  const pageItems = list.slice(startIdx, startIdx + CRM_PAGE_SIZE);

  byId('crm-pagination-info').textContent = totalFiltered > 0
    ? `Menampilkan ${startIdx + 1}–${Math.min(startIdx + CRM_PAGE_SIZE, totalFiltered)} dari ${totalFiltered} tiket`
    : `Menampilkan 0 tiket`;
  byId('crm-page-number').textContent = `${crmCurrentPage} / ${totalPages}`;
  byId('crm-prev-page').disabled = crmCurrentPage <= 1;
  byId('crm-next-page').disabled = crmCurrentPage >= totalPages;

  const emptyEl = byId('crm-ticket-empty');
  const tbodyEl = byId('crm-ticket-rows');

  if (pageItems.length === 0) {
    emptyEl.classList.remove('hidden');
    tbodyEl.classList.add('hidden');
    tbodyEl.innerHTML = '';
    return;
  }

  emptyEl.classList.add('hidden');
  tbodyEl.classList.remove('hidden');

  const priorityBadge = (p) => {
    if (p === 'Tinggi') return 'bg-rose-100 text-rose-800 border-rose-200';
    if (p === 'Sedang') return 'bg-amber-100 text-amber-800 border-amber-200';
    return 'bg-slate-100 text-slate-700 border-slate-200';
  };

  const statusBadge = (s) => {
    if (s === 'Baru') return 'bg-blue-100 text-blue-800 border-blue-200';
    if (s === 'Diproses') return 'bg-amber-100 text-amber-800 border-amber-200';
    return 'bg-emerald-100 text-emerald-800 border-emerald-200';
  };

  const slaBadge = (t) => {
    if (t.status === 'Selesai') {
      if (t.slaState === 'Melewati SLA' || (t.resolutionTimeMin && t.resolutionTimeMin > t.targetResolutionMin)) {
        return `<span class="inline-flex items-center gap-1 rounded-full border border-rose-300 bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-700"><span class="h-1.5 w-1.5 rounded-full bg-rose-600"></span>Terlambat SLA</span>`;
      }
      return `<span class="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700"><span class="material-symbols-outlined text-[13px]">check_circle</span>Memenuhi SLA</span>`;
    }
    if (t.slaState === 'Melewati SLA') {
      return `<span class="inline-flex items-center gap-1 rounded-full border border-rose-300 bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-800"><span class="h-1.5 w-1.5 rounded-full bg-rose-600 animate-pulse"></span>Melewati SLA</span>`;
    }
    if (t.slaState === 'Mendekati Batas') {
      return `<span class="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800"><span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>Mendekati Batas</span>`;
    }
    return `<span class="inline-flex items-center gap-1 rounded-full border border-teal-300 bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-teal-700"><span class="h-1.5 w-1.5 rounded-full bg-teal-600"></span>Dalam Batas</span>`;
  };

  tbodyEl.innerHTML = pageItems.map(t => {
    const cust = crmCustomers.find(c => c.name === t.customer || c.id === t.customerId);
    const maskedWa = cust ? maskPhone(cust.wa) : '0812****';
    const respText = typeof t.responseTimeMin === 'number' ? `${t.responseTimeMin} mnt` : '<span class="text-stone-400">Belum</span>';
    const dateFormatted = t.createdAt ? t.createdAt.slice(5) : '-';

    return `
      <tr class="transition hover:bg-cream/50">
        <td class="whitespace-nowrap px-4 py-3.5 font-bold text-forest-dark">${escapeHTML(t.id)}</td>
        <td class="whitespace-nowrap px-3 py-3.5 text-muted">${escapeHTML(dateFormatted)}</td>
        <td class="px-4 py-3.5">
          <span class="block font-semibold text-ink">${escapeHTML(t.customer)}</span>
          <span class="block text-[10px] font-mono text-muted">${escapeHTML(maskedWa)}</span>
        </td>
        <td class="whitespace-nowrap px-3 py-3.5 text-ink">${escapeHTML(t.category)}</td>
        <td class="whitespace-nowrap px-3 py-3.5 text-center">
          <span class="inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold ${priorityBadge(t.priority)}">${escapeHTML(t.priority || 'Sedang')}</span>
        </td>
        <td class="whitespace-nowrap px-3 py-3.5 font-medium text-forest-dark">${escapeHTML(t.pic || 'Admin WA')}</td>
        <td class="whitespace-nowrap px-3 py-3.5">
          <span class="inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusBadge(t.status)}">${escapeHTML(t.status)}</span>
        </td>
        <td class="whitespace-nowrap px-3 py-3.5 text-xs">${respText}</td>
        <td class="whitespace-nowrap px-4 py-3.5">${slaBadge(t)}</td>
        <td class="whitespace-nowrap px-4 py-3.5 text-right">
          <div class="flex items-center justify-end gap-1.5">
            <button type="button" data-modal-id="${escapeHTML(t.id)}" class="btn-tkt-detail inline-flex items-center gap-1 rounded-lg border border-line bg-white px-2 py-1 text-[11px] font-semibold text-forest-dark hover:bg-sage">
              <span class="material-symbols-outlined text-[14px]">visibility</span>Detail
            </button>
            <button type="button" data-goto-id="${escapeHTML(t.id)}" class="btn-tkt-goto inline-flex items-center gap-1 rounded-lg bg-forest px-2 py-1 text-[11px] font-semibold text-white hover:bg-forest-dark">
              <span class="material-symbols-outlined text-[14px]">edit_note</span>Kelola
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  document.querySelectorAll('.btn-tkt-detail').forEach(btn => {
    btn.addEventListener('click', () => openTicketDetail(btn.dataset.modalId));
  });

  document.querySelectorAll('.btn-tkt-goto').forEach(btn => {
    btn.addEventListener('click', () => {
      switchView('tickets');
      byId('tkt-filter-sla').value = 'all';
      renderTickets();
      showToast(`Membuka keluhan ${btn.dataset.gotoId} di modul Ticketing`);
    });
  });
}

function renderCrmActivities() {
  const container = byId('crm-activity-list');
  if (!container) return;

  if (crmActivities.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center text-xs text-muted">
        <span class="material-symbols-outlined text-3xl text-stone-300">history_toggle_off</span>
        <p class="mt-2 font-medium">Belum ada aktivitas CRM yang tercatat</p>
      </div>
    `;
    return;
  }

  const colorClasses = {
    forest: 'bg-sage text-forest',
    amber: 'bg-amber-100 text-amber-800',
    blue: 'bg-blue-100 text-blue-800',
    emerald: 'bg-emerald-100 text-emerald-800',
    rose: 'bg-rose-100 text-rose-800'
  };

  container.innerHTML = crmActivities.slice(0, 7).map(act => `
    <div class="flex items-start gap-3 p-3 transition hover:bg-cream/40 rounded-xl">
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-[16px] font-bold ${colorClasses[act.color] || colorClasses.forest}">
        <span class="material-symbols-outlined text-[17px]">${escapeHTML(act.icon || 'info')}</span>
      </span>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs font-bold text-ink truncate">${escapeHTML(act.title)}</p>
          <span class="whitespace-nowrap text-[10px] text-muted">${escapeHTML(act.time || act.timestamp || '')}</span>
        </div>
        <p class="mt-0.5 text-[11px] leading-snug text-muted">${escapeHTML(act.desc)}</p>
      </div>
    </div>
  `).join('');
}

let currentDetailTicketId = null;

function openTicketDetail(ticketId) {
  const t = crmTickets.find(item => item.id === ticketId);
  if (!t) return;
  refreshLiveTicket(t);
  currentDetailTicketId = ticketId;

  byId('modal-tkt-id').textContent = t.id;
  byId('modal-tkt-category').textContent = t.category;

  const statusEl = byId('modal-tkt-status');
  statusEl.textContent = t.status;
  statusEl.className = 'mt-0.5 inline-flex rounded-full px-2.5 py-0.5 font-bold ' +
    (t.status === 'Baru' ? 'bg-blue-100 text-blue-800' : t.status === 'Diproses' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800');

  const priorityEl = byId('modal-tkt-priority');
  priorityEl.textContent = t.priority || 'Sedang';
  priorityEl.className = 'mt-0.5 inline-flex rounded-full px-2.5 py-0.5 font-bold ' +
    (t.priority === 'Tinggi' ? 'bg-rose-100 text-rose-800' : t.priority === 'Sedang' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700');

  const slaEl = byId('modal-tkt-sla');
  if (t.status === 'Selesai') {
    const late = t.slaState === 'Melewati SLA' || (t.resolutionTimeMin && t.resolutionTimeMin > t.targetResolutionMin);
    slaEl.className = `mt-0.5 inline-flex items-center gap-1 font-bold ${late ? 'text-rose-700' : 'text-emerald-700'}`;
    slaEl.innerHTML = late
      ? '<span class="material-symbols-outlined text-[15px]">error</span>Terlambat SLA'
      : '<span class="material-symbols-outlined text-[15px]">check_circle</span>Memenuhi SLA';
  } else if (t.slaState === 'Melewati SLA') {
    slaEl.className = 'mt-0.5 inline-flex items-center gap-1 font-bold text-rose-700';
    slaEl.innerHTML = '<span class="material-symbols-outlined text-[15px]">error</span>Melewati SLA';
  } else if (t.slaState === 'Mendekati Batas') {
    slaEl.className = 'mt-0.5 inline-flex items-center gap-1 font-bold text-amber-700';
    slaEl.innerHTML = '<span class="material-symbols-outlined text-[15px]">warning</span>Mendekati Batas';
  } else {
    slaEl.className = 'mt-0.5 inline-flex items-center gap-1 font-bold text-forest';
    slaEl.innerHTML = '<span class="material-symbols-outlined text-[15px]">schedule</span>Dalam Batas';
  }

  byId('modal-tkt-pic').textContent = t.pic || 'Admin WA CS';
  byId('modal-tkt-customer').textContent = t.customer;

  const cust = crmCustomers.find(c => c.name === t.customer || c.id === t.customerId);
  byId('modal-tkt-wa').textContent = cust ? maskPhone(cust.wa) : '0812****';
  byId('modal-tkt-custlink').textContent = cust ? `Terhubung ke database: ${cust.id} (${cust.segment} · ${cust.status})` : 'Pelanggan umum / belum terdaftar di CRM';

  byId('modal-tkt-desc').textContent = t.desc || '-';
  byId('modal-tkt-created').textContent = t.createdAt || '-';
  byId('modal-tkt-target').textContent = `Prioritas ${t.priority || 'Sedang'} → Target respons ≤ ${t.targetResponseMin} mnt · penyelesaian ≤ ${t.targetResolutionMin} mnt`;

  byId('modal-tkt-response').textContent = typeof t.responseTimeMin === 'number'
    ? `${t.responseTimeMin} mnt (Target ≤ ${t.targetResponseMin} mnt)`
    : 'Belum direspons';

  byId('modal-tkt-resolution').textContent = typeof t.resolutionTimeMin === 'number'
    ? `${t.resolutionTimeMin} mnt (Target ≤ ${t.targetResolutionMin} mnt)`
    : (t.status === 'Selesai' ? 'Selesai diverifikasi' : 'Dalam proses berjalan');

  byId('modal-tkt-followup').textContent = t.followup || '-';

  // Panel kelola tiket: PIC & prioritas dapat dikoreksi setelah tiket dibuat
  const picSel = byId('modal-tkt-pic-edit');
  picSel.value = t.pic || 'Admin WA CS';
  const priSel = byId('modal-tkt-priority-edit');
  priSel.value = t.priority || 'Sedang';
  byId('modal-tkt-edit-card').classList.toggle('hidden', t.status === 'Selesai');

  // Catatan penanganan bertahap (log kronologis)
  const notesEl = byId('modal-tkt-notes-list');
  if (!Array.isArray(t.notes) || !t.notes.length) {
    notesEl.innerHTML = '<li class="text-muted">Belum ada catatan penanganan.</li>';
  } else {
    notesEl.innerHTML = t.notes.map((n) => `
      <li class="flex gap-2 rounded-lg bg-cream/50 border border-line/60 p-2">
        <span class="shrink-0 font-mono text-[10px] text-muted">${escapeHTML((n.ts || '').slice(5, 16))}</span>
        <span class="text-ink">${escapeHTML(n.text || '-')}</span>
      </li>`).join('');
  }
  byId('modal-tkt-note-input').value = '';

  // Konfirmasi layanan (FCR & kepuasan) — ditampilkan untuk tiket yang sudah selesai
  const svcCard = byId('modal-tkt-service-card');
  svcCard.classList.toggle('hidden', t.status !== 'Selesai');
  if (t.status === 'Selesai') {
    byId('modal-tkt-fcr').value = t.firstContact || '';
    byId('modal-tkt-satisfaction').value = t.satisfaction || '';
  }

  byId('modal-btn-process').classList.toggle('hidden', t.status !== 'Baru');
  byId('modal-btn-resolve').classList.toggle('hidden', t.status === 'Selesai');
  byId('modal-btn-delete-ticket').classList.toggle('hidden', false);

  byId('crm-ticket-modal').classList.remove('hidden');
  byId('crm-ticket-modal').classList.add('flex');
}

function closeTicketDetail() {
  byId('crm-ticket-modal').classList.add('hidden');
  byId('crm-ticket-modal').classList.remove('flex');
  currentDetailTicketId = null;
}

function renderCrmDashboard() {
  const period = byId('crm-filter-period')?.value || 'thisMonth';
  const periodTickets = filterCrmTicketsByPeriod(period);
  const metrics = calculateSlaMetrics(periodTickets);

  // 1. Kartu KPI Utama
  const totalCust = crmCustomers.length;
  byId('crm-kpi-total-cust').textContent = INTEGER.format(totalCust);
  const loyalCount = crmCustomers.filter(c => c.status === 'Member Loyal').length;
  const monthPrefix = todayStr().slice(0, 7);
  const newThisMonth = crmCustomers.filter(c => (c.joined || '').slice(0, 7) === monthPrefix).length;
  byId('crm-kpi-cust-trend').textContent = newThisMonth > 0
    ? `+${newThisMonth} pelanggan baru bulan ini (${loyalCount} member loyal)`
    : `${loyalCount} member loyal · belum ada pendaftar baru bulan ini`;

  // Total Tiket Keluhan
  byId('crm-kpi-total-tickets').textContent = INTEGER.format(metrics.total);
  byId('crm-kpi-new-tickets-note').textContent = `${metrics.newCount} tiket baru belum ditangani`;

  // Tiket Belum Selesai
  byId('crm-kpi-unresolved-tickets').textContent = INTEGER.format(metrics.unresolvedCount);
  byId('crm-kpi-unresolved-breakdown').textContent = `${metrics.newCount} Baru · ${metrics.inProgressCount} Diproses`;

  // Pencapaian SLA
  byId('crm-kpi-sla-rate').textContent = `${metrics.slaRate}%`;
  byId('crm-kpi-sla-eval-note').textContent = `${metrics.metCount} dari ${metrics.evaluatedCount} tiket dievaluasi`;

  // Badge SLA Sidebar
  const sidebarBadge = byId('badge-crm-sla');
  if (sidebarBadge) {
    sidebarBadge.textContent = `${metrics.slaRate}%`;
    sidebarBadge.className = `rounded-full px-2 py-0.5 text-[10px] font-bold text-white ${metrics.slaRate >= 80 ? 'bg-emerald-500/90' : 'bg-rose-500/90'}`;
  }

  // Micro KPI Box SLA
  byId('crm-avg-response').textContent = metrics.avgResponse ? `${metrics.avgResponse} mnt` : 'Belum tersedia';
  byId('crm-avg-resolution').textContent = metrics.avgResolution ? `${metrics.avgResolution} mnt` : 'Belum tersedia';
  byId('crm-sla-met-count').textContent = `${metrics.metCount} Tiket`;
  byId('crm-sla-breached-count').textContent = `${metrics.breachedCount} Tiket`;

  byId('crm-trend-badge').textContent = `${metrics.total} keluhan tercatat`;

  // 2. KPI strategis layanan (6 KPI UTS) & sasaran win-back otomatis
  renderServiceKpis(metrics);
  renderWinBack();

  // 3. Grafik
  updateCrmCharts(periodTickets);

  // 4. Tabel Tiket
  renderCrmTicketsTable(periodTickets);

  // 5. Panel Aktivitas
  renderCrmActivities();
}

/* ==================== 6 KPI STRATEGIS LAYANAN (LAPORAN UTS) ==================== */
function renderServiceKpis(metrics = null) {
  const m = metrics || calculateSlaMetrics(crmTickets);
  const uniqueOrders = new Set(SALES_DATA.map((row) => row.Order_ID)).size;
  // Proksi terukur dari data simulasi yang tersedia (dilabeli jelas, tanpa angka fiktif)
  const rushTickets = crmTickets.filter(t => t.category === 'Antrean Rush Hour' && typeof t.responseTimeMin === 'number');
  const rushAvg = rushTickets.length
    ? rushTickets.reduce((acc, t) => acc + t.responseTimeMin, 0) / rushTickets.length
    : null;
  const orderErrorCats = ['Add-on Terlewat / Tertukar', 'Suhu / Kualitas Makanan', 'Pelayanan Kasir'];
  const orderErrorCount = crmTickets.filter(t => orderErrorCats.includes(t.category)).length;
  const accuracy = uniqueOrders > 0 ? Math.max(0, Math.round((1 - orderErrorCount / uniqueOrders) * 1000) / 10) : null;
  const totalIssued = crmCoupons.reduce((acc, c) => acc + Number(c.issued || 0), 0);
  const totalRedeemed = crmCoupons.reduce((acc, c) => acc + couponRedeemedTotal(c), 0);
  const redemptionRate = totalIssued > 0 ? Math.round((totalRedeemed / totalIssued) * 100) : null;

  const setKpi = (id, value, target, met, note) => {
    const valueEl = byId(`kpi6-${id}`);
    const chipEl = byId(`kpi6-${id}-chip`);
    if (!valueEl) return;
    valueEl.textContent = value;
    if (chipEl) {
      if (met === null) {
        chipEl.textContent = 'Data Belum Tersedia';
        chipEl.className = 'inline-flex rounded-full border border-stone-300 bg-stone-100 px-2 py-0.5 text-[10px] font-bold text-stone-600';
      } else if (met) {
        chipEl.textContent = 'Tercapai';
        chipEl.className = 'inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700';
      } else {
        chipEl.textContent = 'Belum Tercapai';
        chipEl.className = 'inline-flex rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-800';
      }
    }
    const noteEl = byId(`kpi6-${id}-note`);
    if (noteEl) noteEl.textContent = note;
  };

  setKpi('wait', rushAvg !== null ? `${rushAvg.toFixed(1)} mnt` : 'Belum tersedia', '≤ 15 mnt',
    rushAvg === null ? null : rushAvg <= 15,
    `Proksi: rata-rata waktu respons ${rushTickets.length} tiket antrean rush hour`);
  setKpi('accuracy', accuracy !== null ? `${accuracy}%` : 'Belum tersedia', '≥ 95%',
    accuracy === null ? null : accuracy >= 95,
    `Proksi: 1 − (tiket kesalahan pesanan / ${INTEGER.format(uniqueOrders)} pesanan unik)`);
  setKpi('response', m.avgResponse ? `${m.avgResponse} mnt` : 'Belum tersedia', '≤ 30 mnt',
    m.avgResponse === null ? null : Number(m.avgResponse) <= 30,
    'Rata-rata waktu respons awal seluruh tiket');
  setKpi('fcr', m.fcrRate !== null ? `${m.fcrRate}%` : 'Belum tersedia', '≥ 70%',
    m.fcrRate === null ? null : m.fcrRate >= 70,
    `${m.fcrEvaluated} tiket selesai sudah diverifikasi FCR`);
  setKpi('redemption', redemptionRate !== null ? `${redemptionRate}%` : 'Belum tersedia', '≥ 25%',
    redemptionRate === null ? null : redemptionRate >= 25,
    `${INTEGER.format(totalRedeemed)} dari ${INTEGER.format(totalIssued)} voucher terbit ditukarkan`);
  setKpi('csat', m.csatRate !== null ? `${m.csatRate}%` : 'Belum tersedia', '≥ 80%',
    m.csatRate === null ? null : m.csatRate >= 80,
    `${m.csatEvaluated} tiket selesai sudah dikonfirmasi pelanggan`);
}

/* ==================== WIN-BACK OTOMATIS (PASIF > 21 HARI) ==================== */
function renderWinBack() {
  const pasifList = passiveCustomers();
  byId('wb-count').textContent = `${pasifList.length} pelanggan`;
  const wbBadge = byId('wb-badge');
  if (wbBadge) wbBadge.textContent = pasifList.length;

  const rowsEl = byId('wb-rows');
  if (!rowsEl) return;
  if (!pasifList.length) {
    rowsEl.innerHTML = '<tr><td colspan="5" class="px-4 py-6 text-center text-muted">Tidak ada pelanggan pasif &gt; 21 hari. Retensi sedang sehat 🎉</td></tr>';
    return;
  }
  rowsEl.innerHTML = pasifList.slice(0, 8).map((c) => `
    <tr class="transition hover:bg-cream/50">
      <td class="whitespace-nowrap px-4 py-2.5 font-bold text-forest-dark">${escapeHTML(c.id)}</td>
      <td class="px-4 py-2.5">
        <span class="block font-semibold text-ink">${escapeHTML(c.name)}</span>
        <span class="block text-[10px] font-mono text-muted">${escapeHTML(maskPhone(c.wa))}</span>
      </td>
      <td class="whitespace-nowrap px-4 py-2.5">
        <span class="inline-flex rounded-full border border-rose-300 bg-rose-50 px-2.5 py-0.5 text-[10px] font-bold text-rose-700">Pasif ${c.inactiveDays} hari</span>
      </td>
      <td class="whitespace-nowrap px-4 py-2.5 text-muted">${escapeHTML(c.segment)} · ${escapeHTML(c.status)}</td>
      <td class="whitespace-nowrap px-4 py-2.5 text-right">
        <button type="button" data-wb-name="${escapeHTML(c.name)}" data-wb-phone="${escapeHTML(c.wa)}" data-wb-days="${c.inactiveDays}" class="btn-winback-wa inline-flex items-center gap-1 rounded-lg bg-forest px-2.5 py-1.5 text-[11px] font-semibold text-white transition hover:bg-forest-dark">
          <span class="material-symbols-outlined text-[14px]">campaign</span>Sapa Win-Back
        </button>
      </td>
    </tr>`).join('');

  document.querySelectorAll('.btn-winback-wa').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedWaTemplate = WA_TEMPLATES.find((t) => t.id === 'wa-winback') || selectedWaTemplate;
      renderWaTemplates();
      byId('wa-target-name').value = `Kak ${btn.dataset.wbName.split(' ')[0]}`;
      byId('wa-target-phone').value = btn.dataset.wbPhone;
      updateWaPreview();
      switchView('whatsapp');
      showToast(`Template Win-Back dimuat untuk ${btn.dataset.wbName} (pasif ${btn.dataset.wbDays} hari)`);
    });
  });
}

/* ==================== LABEL PERIODE DINAMIS ==================== */
function updateCrmPeriodLabels() {
  const sel = byId('crm-filter-period');
  if (!sel) return;
  const now = new Date();
  const dayLabel = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short' }).format(now);
  const monthLabel = new Intl.DateTimeFormat('id-ID', { month: 'short', year: 'numeric' }).format(now);
  const todayOpt = sel.querySelector('option[value="today"]');
  const monthOpt = sel.querySelector('option[value="thisMonth"]');
  if (todayOpt) todayOpt.textContent = `Hari Ini (${dayLabel})`;
  if (monthOpt) monthOpt.textContent = `Bulan Ini (${monthLabel})`;
}

function setupCrmDashboardEvents() {
  byId('crm-filter-period')?.addEventListener('change', () => {
    crmCurrentPage = 1;
    renderCrmDashboard();
    showToast(`Periode disaring: ${byId('crm-filter-period').selectedOptions[0].text}`);
  });

  byId('crm-btn-reset-filters')?.addEventListener('click', () => {
    byId('crm-filter-period').value = 'thisMonth';
    if (byId('crm-ticket-search')) byId('crm-ticket-search').value = '';
    if (byId('crm-filter-status')) byId('crm-filter-status').value = 'all';
    if (byId('crm-filter-priority')) byId('crm-filter-priority').value = 'all';
    if (byId('crm-filter-sla-badge')) byId('crm-filter-sla-badge').value = 'all';
    crmCurrentPage = 1;
    renderCrmDashboard();
    showToast('Filter Dashboard CRM diatur ulang');
  });

  byId('crm-btn-quick-ticket')?.addEventListener('click', () => {
    switchView('tickets');
    populateTicketCustomerSelect();
    updateTicketSlaInfo();
    byId('form-add-ticket').classList.remove('hidden');
    byId('tkt-customer-id').focus();
  });

  byId('crm-btn-goto-tickets')?.addEventListener('click', () => {
    switchView('tickets');
  });

  const updateTableOnly = () => {
    crmCurrentPage = 1;
    const period = byId('crm-filter-period')?.value || 'thisMonth';
    renderCrmTicketsTable(filterCrmTicketsByPeriod(period));
  };

  byId('crm-ticket-search')?.addEventListener('input', updateTableOnly);
  byId('crm-filter-status')?.addEventListener('change', updateTableOnly);
  byId('crm-filter-priority')?.addEventListener('change', updateTableOnly);
  byId('crm-filter-sla-badge')?.addEventListener('change', updateTableOnly);

  byId('crm-ticket-reset')?.addEventListener('click', () => {
    byId('crm-ticket-search').value = '';
    byId('crm-filter-status').value = 'all';
    byId('crm-filter-priority').value = 'all';
    byId('crm-filter-sla-badge').value = 'all';
    crmCurrentPage = 1;
    const period = byId('crm-filter-period')?.value || 'thisMonth';
    renderCrmTicketsTable(filterCrmTicketsByPeriod(period));
  });

  byId('crm-prev-page')?.addEventListener('click', () => {
    if (crmCurrentPage > 1) {
      crmCurrentPage--;
      const period = byId('crm-filter-period')?.value || 'thisMonth';
      renderCrmTicketsTable(filterCrmTicketsByPeriod(period));
    }
  });

  byId('crm-next-page')?.addEventListener('click', () => {
    crmCurrentPage++;
    const period = byId('crm-filter-period')?.value || 'thisMonth';
    renderCrmTicketsTable(filterCrmTicketsByPeriod(period));
  });

  byId('modal-btn-close')?.addEventListener('click', closeTicketDetail);
  byId('modal-btn-close-action')?.addEventListener('click', closeTicketDetail);
  byId('crm-ticket-modal')?.addEventListener('click', (e) => {
    if (e.target === byId('crm-ticket-modal')) closeTicketDetail();
  });

  byId('modal-btn-process')?.addEventListener('click', () => {
    if (!currentDetailTicketId) return;
    const t = crmTickets.find(item => item.id === currentDetailTicketId);
    if (t) {
      t.status = 'Diproses';
      if (t.live && t.createdAtTs) {
        const elapsedMin = minutesSince(t.createdAtTs);
        t.responseTimeMin = elapsedMin;
        t.slaState = slaStateForElapsed(elapsedMin, t.targetResponseMin);
      } else {
        t.slaState = t.slaState === 'Melewati SLA' ? 'Melewati SLA' : 'Aman';
        t.responseTimeMin = t.responseTimeMin || 10;
      }
      if (!Array.isArray(t.notes)) t.notes = [];
      t.notes.push({ ts: fmtStamp(), text: `Direspons & diproses oleh ${t.pic || 'PIC'} (waktu respons ${t.responseTimeMin} mnt).` });
      saveState(STORAGE_KEYS.tickets, crmTickets);
      logActivity('status_changed', 'Status Tiket Diperbarui', `Tiket ${t.id} dialihkan ke status Diproses oleh PIC.`, 'sync', 'blue');
      renderTickets();
      renderCrmDashboard();
      openTicketDetail(t.id);
      showToast(`Tiket ${t.id} berstatus Diproses`);
    }
  });

  byId('modal-btn-resolve')?.addEventListener('click', () => {
    if (!currentDetailTicketId) return;
    const t = crmTickets.find(item => item.id === currentDetailTicketId);
    if (t) {
      t.status = 'Selesai';
      t.resolvedAt = fmtStamp();
      if (t.live && t.createdAtTs) {
        t.resolutionTimeMin = minutesSince(t.createdAtTs);
      } else {
        t.resolutionTimeMin = t.resolutionTimeMin || (t.slaState === 'Melewati SLA' ? 145 : 35);
      }
      t.slaState = (t.resolutionTimeMin <= t.targetResolutionMin && t.slaState !== 'Melewati SLA') ? 'Selesai' : 'Melewati SLA';
      t.elapsed = `Selesai (${t.resolutionTimeMin} mnt)`;
      if (!t.firstContact) t.firstContact = 'Ya';
      if (!Array.isArray(t.notes)) t.notes = [];
      t.notes.push({ ts: fmtStamp(), text: `Tiket dituntaskan (durasi penyelesaian ${t.resolutionTimeMin} mnt). Menunggu konfirmasi kepuasan pelanggan.` });
      saveState(STORAGE_KEYS.tickets, crmTickets);
      logActivity('ticket_resolved', 'Tiket Keluhan Selesai', `Tiket ${t.id} (${t.customer}) tuntas diselesaikan dalam ${t.resolutionTimeMin} mnt.`, 'task_alt', 'emerald');
      renderTickets();
      renderCrmDashboard();
      openTicketDetail(t.id);
      showToast(`Tiket ${t.id} ditandai Selesai — lengkapi konfirmasi FCR & kepuasan pelanggan`);
    }
  });

  // Koreksi PIC & prioritas tiket langsung dari modal (prioritas mengubah target SLA otomatis)
  byId('modal-tkt-pic-edit')?.addEventListener('change', () => {
    const t = crmTickets.find(item => item.id === currentDetailTicketId);
    if (!t) return;
    t.pic = byId('modal-tkt-pic-edit').value;
    saveState(STORAGE_KEYS.tickets, crmTickets);
    logActivity('pic_assigned', 'Penugasan PIC Diperbarui', `${t.id} kini ditangani oleh ${t.pic}.`, 'assignment_ind', 'forest');
    renderTickets();
    openTicketDetail(t.id);
    showToast(`PIC ${t.id} diperbarui ke ${t.pic}`);
  });

  byId('modal-tkt-priority-edit')?.addEventListener('change', () => {
    const t = crmTickets.find(item => item.id === currentDetailTicketId);
    if (!t) return;
    t.priority = byId('modal-tkt-priority-edit').value;
    const policy = SLA_POLICY[t.priority] || SLA_POLICY.Sedang;
    t.targetResponseMin = policy.resp;
    t.targetResolutionMin = policy.resol;
    if (t.live && t.createdAtTs && t.status !== 'Selesai') refreshLiveTicket(t);
    saveState(STORAGE_KEYS.tickets, crmTickets);
    logActivity('priority_changed', 'Prioritas Tiket Diubah', `${t.id} menjadi prioritas ${t.priority} (SLA ${policy.resp}/${policy.resol} mnt).`, 'low_priority', 'amber');
    renderTickets();
    renderCrmDashboard();
    openTicketDetail(t.id);
    showToast(`Prioritas ${t.id} → ${t.priority} (target SLA otomatis ${policy.resp}/${policy.resol} mnt)`);
  });

  // Catatan penanganan bertahap
  byId('modal-btn-add-note')?.addEventListener('click', () => {
    const t = crmTickets.find(item => item.id === currentDetailTicketId);
    const input = byId('modal-tkt-note-input');
    if (!t) return;
    const text = input.value.trim();
    if (!text) {
      showToast('Catatan penanganan tidak boleh kosong');
      return;
    }
    if (!Array.isArray(t.notes)) t.notes = [];
    t.notes.push({ ts: fmtStamp(), text });
    saveState(STORAGE_KEYS.tickets, crmTickets);
    input.value = '';
    openTicketDetail(t.id);
    showToast(`Catatan ditambahkan ke ${t.id}`);
  });

  // Konfirmasi FCR & kepuasan pelanggan (KPI-04 & KPI-06)
  byId('modal-tkt-fcr')?.addEventListener('change', () => {
    const t = crmTickets.find(item => item.id === currentDetailTicketId);
    if (!t) return;
    t.firstContact = byId('modal-tkt-fcr').value || null;
    saveState(STORAGE_KEYS.tickets, crmTickets);
    renderCrmDashboard();
    showToast(`FCR ${t.id} diset: ${t.firstContact || 'belum ditentukan'}`);
  });

  byId('modal-tkt-satisfaction')?.addEventListener('change', () => {
    const t = crmTickets.find(item => item.id === currentDetailTicketId);
    if (!t) return;
    t.satisfaction = byId('modal-tkt-satisfaction').value || null;
    saveState(STORAGE_KEYS.tickets, crmTickets);
    renderCrmDashboard();
    showToast(`Kepuasan pelanggan ${t.id} diset: ${t.satisfaction || 'belum dikonfirmasi'}`);
  });

  // Hapus tiket keluhan
  byId('modal-btn-delete-ticket')?.addEventListener('click', () => {
    const t = crmTickets.find(item => item.id === currentDetailTicketId);
    if (!t) return;
    if (confirm(`Hapus tiket ${t.id} (${t.customer})? Tindakan ini tidak dapat dibatalkan.`)) {
      crmTickets = crmTickets.filter(item => item.id !== t.id);
      saveState(STORAGE_KEYS.tickets, crmTickets);
      logActivity('ticket_deleted', 'Tiket Dihapus', `Tiket ${t.id} (${t.customer}) dihapus dari ticketing.`, 'delete', 'rose');
      closeTicketDetail();
      renderTickets();
      renderCrmDashboard();
      showToast(`Tiket ${t.id} dihapus`);
    }
  });

  byId('modal-btn-sapa-wa')?.addEventListener('click', () => {
    if (!currentDetailTicketId) return;
    const t = crmTickets.find(item => item.id === currentDetailTicketId);
    if (t) {
      const cust = crmCustomers.find(c => c.name === t.customer || c.id === t.customerId);
      const phone = cust ? cust.wa : '6288228692190';
      byId('wa-target-name').value = `Kak ${t.customer.split(' ')[0]}`;
      byId('wa-target-phone').value = phone;
      updateWaPreview();
      closeTicketDetail();
      switchView('whatsapp');
      showToast(`Membuka Template WA untuk ${t.customer}`);
    }
  });
}

/* ==================== EKSPOR & INISIALISASI ==================== */
function exportFile(content, fileName, mimeType) {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportCsv() {
  const keys = ['Tanggal_Transaksi', 'Order_ID', 'Kategori_Menu', 'Nama_Menu', 'Harga_Satuan', 'Kuantitas', 'Diskon', 'Total_Pendapatan', 'Tipe_Pelanggan', 'Metode_Pembayaran', 'Saluran_Penjualan'];
  const quote = (value) => `"${String(value).replace(/"/g, '""')}"`;
  const csv = [keys.map(quote).join(','), ...visibleRows.map((row) => keys.map((key) => quote(row[key])).join(','))].join('\r\n');
  exportFile(`\ufeff${csv}`, 'tuumis-penjualan-filter.csv', 'text/csv');
}

function syncSearch(source) {
  const target = source.id === 'search-input' ? byId('search-input-mobile') : byId('search-input');
  if (target.value !== source.value) target.value = source.value;
  updateDashboard();
}

function setupNavigation() {
  const sidebar = byId('sidebar');
  const overlay = byId('sidebar-overlay');
  const close = () => { sidebar.classList.add('-translate-x-full'); overlay.classList.remove('is-visible'); overlay.setAttribute('aria-hidden', 'true'); };
  const open = () => { sidebar.classList.remove('-translate-x-full'); overlay.classList.add('is-visible'); overlay.setAttribute('aria-hidden', 'false'); };

  byId('menu-toggle').addEventListener('click', open);
  byId('close-sidebar').addEventListener('click', close);
  overlay.addEventListener('click', close);

  document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', () => {
      const targetView = item.dataset.navView || 'analytics';
      switchView(targetView, item);
      close();
    });
  });
}

function setupCrmForms() {
  // Pelanggan (tambah / edit)
  byId('toggle-customer-form').addEventListener('click', () => {
    resetCustomerFormMode();
    byId('form-add-customer').classList.toggle('hidden');
  });
  byId('cancel-customer-form').addEventListener('click', () => {
    resetCustomerFormMode();
    byId('form-add-customer').classList.add('hidden');
  });
  byId('form-add-customer').addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = byId('cust-edit-id').value;
    const custName = byId('cust-name').value.trim();
    const custWa = byId('cust-wa').value.trim();
    const custSegment = byId('cust-segment').value;
    const custStatus = byId('cust-status').value;

    // Cegah nomor WhatsApp ganda di database pelanggan
    const dup = crmCustomers.find((c) => c.wa === custWa && c.id !== editId);
    if (dup) {
      showToast(`Nomor WA sudah terdaftar atas nama ${dup.name} (${dup.id})`);
      return;
    }

    if (editId) {
      const target = crmCustomers.find((c) => c.id === editId);
      if (target) {
        target.name = custName;
        target.wa = custWa;
        target.email = byId('cust-email').value.trim();
        target.segment = custSegment;
        target.status = custStatus;
        saveState(STORAGE_KEYS.customers, crmCustomers);
        logActivity('customer_updated', 'Data Pelanggan Diperbarui', `Profil ${custName} (${target.id}) diperbarui oleh admin.`, 'edit', 'blue');
        renderCustomers();
        populateTicketCustomerSelect();
        if (typeof renderCrmDashboard === 'function') renderCrmDashboard();
        showToast(`Data pelanggan ${custName} berhasil diperbarui`);
      }
    } else {
      const nextNum = String(crmCustomers.reduce((max, c) => Math.max(max, Number((c.id || '').replace('CUST-', '')) || 0), 0) + 1).padStart(3, '0');
      const today = todayStr();
      crmCustomers.unshift({
        id: `CUST-${nextNum}`,
        name: custName,
        wa: custWa,
        email: byId('cust-email').value.trim(),
        joined: today,
        segment: custSegment,
        status: custStatus,
        orders: 1,
        lastOrder: today
      });
      saveState(STORAGE_KEYS.customers, crmCustomers);
      logActivity('customer_registered', 'Pelanggan Baru Terdaftar', `${custName} (${custSegment}) berhasil ditambahkan ke database CRM.`, 'person_add', 'forest');
      renderCustomers();
      populateTicketCustomerSelect();
      if (typeof renderCrmDashboard === 'function') renderCrmDashboard();
      showToast('Pelanggan baru berhasil ditambahkan ke database');
    }
    e.target.reset();
    resetCustomerFormMode();
    byId('form-add-customer').classList.add('hidden');
  });
  byId('cust-search').addEventListener('input', renderCustomers);
  byId('cust-filter-status').addEventListener('change', renderCustomers);

  // Ticketing & SLA
  byId('toggle-ticket-form').addEventListener('click', () => {
    populateTicketCustomerSelect();
    updateTicketSlaInfo();
    byId('form-add-ticket').classList.toggle('hidden');
  });
  byId('cancel-ticket-form').addEventListener('click', () => byId('form-add-ticket').classList.add('hidden'));
  byId('tkt-customer-id')?.addEventListener('change', () => {
    const isUmum = byId('tkt-customer-id').value === 'UMUM';
    byId('tkt-customer-name-wrap').classList.toggle('hidden', !isUmum);
  });
  byId('tkt-priority')?.addEventListener('change', updateTicketSlaInfo);
  byId('form-add-ticket').addEventListener('submit', (e) => {
    e.preventDefault();
    const priority = byId('tkt-priority')?.value || 'Sedang';
    const pic = byId('tkt-pic')?.value || 'Admin WA CS';
    const category = byId('tkt-category').value;
    const desc = byId('tkt-desc').value.trim();
    const followup = byId('tkt-followup').value.trim();

    // Pelanggan terhubung ke database CRM (dropdown) atau pelanggan umum
    const custSel = byId('tkt-customer-id')?.value;
    let customerId = null;
    let customer = 'Pelanggan Umum';
    if (custSel && custSel !== 'UMUM') {
      const found = crmCustomers.find((c) => c.id === custSel);
      customerId = custSel;
      customer = found ? found.name : 'Pelanggan TUUMIS';
    } else {
      customer = byId('tkt-customer-name')?.value.trim() || 'Pelanggan Umum';
    }

    // SLA otomatis mengikuti prioritas (Tabel 4.3 UTS) & waktu masuk jam nyata
    const policy = SLA_POLICY[priority] || SLA_POLICY.Sedang;
    const nowTs = Date.now();
    const nextNum = crmTickets.reduce((max, t) => Math.max(max, Number((t.id || '').replace('TKT-', '')) || 0), 200) + 1;
    const nextId = `TKT-${nextNum}`;
    const newTicket = {
      id: nextId,
      customerId,
      customer,
      category,
      priority,
      pic,
      desc,
      createdAt: fmtStamp(new Date(nowTs)),
      createdAtTs: nowTs,
      live: true,
      targetResponseMin: policy.resp,
      targetResolutionMin: policy.resol,
      responseTimeMin: null,
      resolutionTimeMin: null,
      resolvedAt: null,
      elapsed: `0 mnt (Batas ${policy.resp} mnt)`,
      slaState: 'Aman',
      status: 'Baru',
      followup,
      firstContact: null,
      satisfaction: null,
      notes: [{ ts: fmtStamp(new Date(nowTs)), text: 'Tiket dibuat & masuk antrean penanganan.' }]
    };
    crmTickets.unshift(newTicket);
    saveState(STORAGE_KEYS.tickets, crmTickets);
    logActivity('ticket_created', 'Tiket Baru Dibuat', `Tiket ${nextId} (${category}, prioritas ${priority}, SLA ${policy.resp}/${policy.resol} mnt) diajukan untuk ${customer}.`, 'add_alert', 'amber');
    renderTickets();
    if (typeof renderCrmDashboard === 'function') renderCrmDashboard();
    e.target.reset();
    byId('tkt-customer-name-wrap')?.classList.add('hidden');
    byId('form-add-ticket').classList.add('hidden');
    showToast(`Tiket keluhan ${nextId} berhasil dibuat (SLA respons ≤ ${policy.resp} mnt)`);
  });
  byId('tkt-filter-sla').addEventListener('change', renderTickets);

  // Template WA
  byId('wa-target-name').addEventListener('input', updateWaPreview);
  byId('wa-target-phone').addEventListener('input', updateWaPreview);
  byId('btn-copy-wa').addEventListener('click', () => {
    navigator.clipboard?.writeText(byId('wa-preview-box').value);
    showToast('Template pesan WhatsApp berhasil disalin');
  });

  // Kupon Member (tambah / edit)
  byId('toggle-coupon-form').addEventListener('click', () => {
    resetCouponFormMode();
    byId('form-add-coupon').classList.toggle('hidden');
  });
  byId('cancel-coupon-form').addEventListener('click', () => {
    resetCouponFormMode();
    byId('form-add-coupon').classList.add('hidden');
  });
  byId('form-add-coupon').addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = byId('cpn-edit-id').value;
    const payload = {
      code: byId('cpn-code').value.trim().toUpperCase(),
      title: byId('cpn-title').value.trim(),
      discount: byId('cpn-discount').value.trim(),
      minOrder: Number(byId('cpn-minorder').value || 0),
      period: byId('cpn-period').value.trim(),
      segment: byId('cpn-segment').value,
      terms: byId('cpn-terms').value.trim(),
      guide: byId('cpn-guide').value.trim(),
      active: byId('cpn-status').value === 'Aktif'
    };
    const dup = crmCoupons.find((c) => c.code === payload.code && c.code !== editId);
    if (dup) {
      showToast(`Kode kupon ${payload.code} sudah dipakai program lain`);
      return;
    }
    if (editId) {
      const target = crmCoupons.find((c) => c.code === editId);
      if (target) {
        Object.assign(target, payload);
        saveState(STORAGE_KEYS.coupons, crmCoupons);
        logActivity('coupon_updated', 'Program Kupon Diperbarui', `Kupon ${target.code} diperbarui (minimal ${money(target.minOrder)}, segmen ${target.segment}).`, 'edit', 'blue');
        renderCoupons();
        if (typeof renderCrmDashboard === 'function') renderCrmDashboard();
        showToast(`Program kupon ${target.code} berhasil diperbarui`);
      }
    } else {
      crmCoupons.unshift({
        ...payload,
        issued: 100,
        redemptions: []
      });
      saveState(STORAGE_KEYS.coupons, crmCoupons);
      logActivity('coupon_created', 'Program Kupon Diterbitkan', `Kupon ${payload.code} diterbitkan (minimal ${money(payload.minOrder)}, segmen ${payload.segment}).`, 'loyalty', 'emerald');
      renderCoupons();
      if (typeof renderCrmDashboard === 'function') renderCrmDashboard();
      showToast('Program kupon baru berhasil diterbitkan');
    }
    e.target.reset();
    resetCouponFormMode();
    byId('form-add-coupon').classList.add('hidden');
  });
  byId('btn-validate-coupon').addEventListener('click', validateCouponSimulation);

  // Modal detail pelanggan & penukaran kupon
  byId('btn-cust-detail-close')?.addEventListener('click', closeCustomerDetail);
  byId('btn-cust-detail-close-action')?.addEventListener('click', closeCustomerDetail);
  byId('modal-customer-detail')?.addEventListener('click', (e) => {
    if (e.target === byId('modal-customer-detail')) closeCustomerDetail();
  });
  byId('btn-red-close')?.addEventListener('click', closeRedemptionModal);
  byId('btn-red-cancel')?.addEventListener('click', closeRedemptionModal);
  byId('modal-coupon-redemption')?.addEventListener('click', (e) => {
    if (e.target === byId('modal-coupon-redemption')) closeRedemptionModal();
  });
  byId('form-coupon-redemption')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = byId('red-coupon-code').value;
    const target = crmCoupons.find((c) => c.code === code);
    const errBox = byId('red-form-error');
    errBox.classList.add('hidden');
    if (!target) return;
    const name = byId('red-customer-name').value.trim();
    const amount = Number(byId('red-amount').value || 0);
    if (!name) {
      errBox.textContent = 'Nama pelanggan yang menukar kupon wajib diisi.';
      errBox.classList.remove('hidden');
      return;
    }
    if (target.active === false) {
      errBox.textContent = `Kupon ${target.code} sedang nonaktif dan tidak dapat ditukarkan.`;
      errBox.classList.remove('hidden');
      return;
    }
    if (amount < Number(target.minOrder || 0)) {
      errBox.textContent = `Nilai transaksi ${money(amount)} di bawah minimal ${money(target.minOrder)} — penukaran tidak sah.`;
      errBox.classList.remove('hidden');
      return;
    }
    if (!Array.isArray(target.redemptions)) target.redemptions = [];
    target.redemptions.unshift({ date: todayStr(), name, amount });
    saveState(STORAGE_KEYS.coupons, crmCoupons);
    logActivity('coupon_redeemed', 'Voucher Ditukarkan', `${name} menukarkan kupon ${target.code} pada transaksi ${money(amount)}.`, 'verified', 'emerald');
    renderCoupons();
    if (typeof renderCrmDashboard === 'function') renderCrmDashboard();
    closeRedemptionModal();
    showToast(`Penukaran kupon ${target.code} oleh ${name} tercatat`);
  });

  // Reset simulasi CRM
  byId('reset-crm-demo').addEventListener('click', () => {
    crmCustomers = structuredClone(DEFAULT_CUSTOMERS);
    crmTickets = structuredClone(DEFAULT_TICKETS).map((t, idx) => normalizeTicket(t, idx));
    crmCoupons = structuredClone(DEFAULT_COUPONS);
    crmActivities = structuredClone(DEFAULT_ACTIVITIES);
    crmMenus = structuredClone(DEFAULT_MENUS);
    crmPreorders = structuredClone(DEFAULT_PREORDERS);
    crmUgc = structuredClone(DEFAULT_UGC);
    crmCampaign = structuredClone(DEFAULT_CAMPAIGN);
    crmTowsStatus = {
      'SO1_P11': 'Selesai',
      'SO1_P12': 'Selesai',
      'WO1_WT1_Ticket': 'Selesai',
      'WO1_WT1_SLA': 'Selesai',
      'WO1_ST12_WT1_Catalog': 'Selesai',
      'ST1_Coupon': 'Selesai'
    };
    saveState(STORAGE_KEYS.customers, crmCustomers);
    saveState(STORAGE_KEYS.tickets, crmTickets);
    saveState(STORAGE_KEYS.coupons, crmCoupons);
    saveState(STORAGE_KEYS.activities, crmActivities);
    saveState(STORAGE_KEYS.menus, crmMenus);
    saveState(STORAGE_KEYS.preorders, crmPreorders);
    saveState(STORAGE_KEYS.ugc, crmUgc);
    saveState(STORAGE_KEYS.campaign, crmCampaign);
    saveState(STORAGE_KEYS.towsStatus, crmTowsStatus);
    renderCustomers();
    renderTickets();
    renderCoupons();
    renderCatalogMenu();
    renderPreorders();
    renderUgcCampaign();
    renderTowsStrategy();
    if (typeof renderCrmDashboard === 'function') renderCrmDashboard();
    showToast('Seluruh data simulasi CRM TUUMIS dikembalikan ke awal');
  });
}

function initializeDashboard() {
  const dates = SALES_DATA.map(dateKey).sort();
  if (dates.length) {
    byId('period-label').innerHTML = `<span class="material-symbols-outlined text-[18px] text-forest">calendar_month</span>${formatDate(dates[0], { day: 'numeric', month: 'short', year: 'numeric' })} – ${formatDate(dates[dates.length - 1], { day: 'numeric', month: 'short', year: 'numeric' })}`;
  }
  initializeCharts();
  updateDashboard();
  setupNavigation();
  setupCrmForms();

  // Inisialisasi Modul CRM Dashboard & SLA
  initializeCrmCharts();
  setupCrmDashboardEvents();
  renderCrmDashboard();

  // Render awal modul CRM lainnya
  renderCustomers();
  renderTickets();
  renderWaTemplates();
  updateWaPreview();
  renderCoupons();

  // Label periode filter dinamis mengikuti tanggal berjalan
  updateCrmPeriodLabels();

  // Jam nyata: kondisi SLA tiket berjalan diperbarui otomatis tiap 60 detik
  setInterval(() => {
    const changed = tickLiveTickets();
    if (!changed) return;
    if (!byId('view-tickets').classList.contains('hidden')) renderTickets();
    if (!byId('view-crm-dashboard').classList.contains('hidden')) renderCrmDashboard();
  }, 60000);

  // Inisialisasi 3 Halaman Baru
  setupMenuCatalogEvents();
  renderCatalogMenu();
  renderPreorders();

  setupUgcEvents();
  renderUgcCampaign();

  setupTowsEvents();
  renderTowsStrategy();

  ['filter-category', 'filter-customer', 'filter-channel'].forEach((id) => byId(id).addEventListener('change', updateDashboard));
  byId('search-input').addEventListener('input', (event) => syncSearch(event.currentTarget));
  byId('search-input-mobile').addEventListener('input', (event) => syncSearch(event.currentTarget));
  byId('reset-filters').addEventListener('click', () => {
    ['filter-category', 'filter-customer', 'filter-channel'].forEach((id) => { byId(id).value = 'all'; });
    byId('search-input').value = '';
    byId('search-input-mobile').value = '';
    updateDashboard();
  });
  byId('export-csv').addEventListener('click', exportCsv);
  byId('export-json').addEventListener('click', () => exportFile(JSON.stringify(visibleRows, null, 2), 'tuumis-penjualan-filter.json', 'application/json'));

  // Dukungan buka langsung via URL hash (cth: index.html#crm-dashboard)
  const initialHash = window.location.hash.replace('#', '');
  if (['crm-dashboard', 'customers', 'tickets', 'whatsapp', 'coupons', 'menu-catalog', 'ugc-campaign', 'tows-strategy'].includes(initialHash)) {
    switchView(initialHash);
  } else if (initialHash === 'bio-link') {
    switchView('ugc-campaign');
    setTimeout(() => openBioMemberModal(), 200);
  }
}

document.addEventListener('DOMContentLoaded', initializeDashboard);

/* ==================== MODUL 6: KATALOG MENU & PRE-ORDER (ST12) ==================== */
function getMenuPlaceholder(category) {
  const map = {
    'Main Course': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80',
    'Rice Bowl': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80',
    'Noodles': 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80',
    'Snacks': 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80',
    'Beverages': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80'
  };
  return map[category] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';
}

function renderCatalogMenu() {
  const search = (byId('catalog-search')?.value || '').toLowerCase().trim();
  const cat = byId('catalog-filter-category')?.value || 'all';
  const status = byId('catalog-filter-status')?.value || 'all';

  // 1. Hitung Statistik Dinamis
  const total = crmMenus.length;
  const available = crmMenus.filter(m => m.status === 'Tersedia').length;
  const unavailable = total - available;
  const categoriesCount = new Set(crmMenus.map(m => m.category)).size;

  if (byId('catalog-stat-total')) byId('catalog-stat-total').textContent = INTEGER.format(total);
  if (byId('catalog-stat-available')) byId('catalog-stat-available').textContent = INTEGER.format(available);
  if (byId('catalog-stat-unavailable')) byId('catalog-stat-unavailable').textContent = INTEGER.format(unavailable);
  if (byId('catalog-stat-categories')) byId('catalog-stat-categories').textContent = INTEGER.format(categoriesCount);

  // 2. Filter Menu
  const filtered = crmMenus.filter(m => {
    const matchSearch = !search || m.name.toLowerCase().includes(search) || (m.desc && m.desc.toLowerCase().includes(search));
    const matchCat = cat === 'all' || m.category === cat;
    const matchStatus = status === 'all' || m.status === status;
    return matchSearch && matchCat && matchStatus;
  });

  const grid = byId('catalog-menu-grid');
  const empty = byId('catalog-empty-state');
  const badge = byId('catalog-count-badge');

  if (badge) badge.textContent = `${filtered.length} menu ditampilkan`;

  if (filtered.length === 0) {
    if (grid) grid.innerHTML = '';
    if (empty) empty.classList.remove('hidden');
    return;
  }

  if (empty) empty.classList.add('hidden');

  if (grid) {
    grid.innerHTML = filtered.map(m => {
      const isReady = m.status === 'Tersedia';
      const imgSrc = m.img || getMenuPlaceholder(m.category);

      return `
        <article class="flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div class="relative aspect-video w-full overflow-hidden bg-stone-100">
            <img src="${escapeHTML(imgSrc)}" alt="${escapeHTML(m.name)}" loading="lazy" class="h-full w-full object-cover transition-transform duration-300 hover:scale-105" onerror="this.src='${getMenuPlaceholder(m.category)}'" />
            <div class="absolute left-3 top-3 flex items-center gap-1.5">
              <span class="rounded-full bg-forest-dark/85 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur">${escapeHTML(m.category)}</span>
              <span class="rounded-full bg-gold/90 px-2 py-0.5 text-[9px] font-bold text-forest-dark shadow-sm">Simulasi</span>
            </div>
            <div class="absolute right-3 top-3">
              <span class="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold shadow-sm ${isReady ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}">
                <span class="h-1.5 w-1.5 rounded-full bg-white"></span>${escapeHTML(m.status)}
              </span>
            </div>
          </div>

          <div class="flex flex-1 flex-col justify-between p-4 sm:p-5">
            <div>
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-display text-base font-bold text-forest-dark leading-snug">${escapeHTML(m.name)}</h3>
              </div>
              <p class="mt-1 line-clamp-2 text-xs text-muted leading-relaxed">${escapeHTML(m.desc || 'Sajian kuliner khas TUUMIS.')}</p>
            </div>

            <div class="mt-4 pt-3 border-t border-line/70">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs text-muted">Harga Menu</span>
                <span class="font-display text-lg font-bold text-forest-dark">${money(m.price)}</span>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-1.5">
                <button type="button" data-action="toggle-status" data-id="${escapeHTML(m.id)}" class="btn-menu-action inline-flex items-center gap-1 rounded-xl border border-line bg-cream/50 px-2.5 py-1.5 text-[11px] font-semibold text-ink transition hover:bg-forest hover:text-white">
                  <span class="material-symbols-outlined text-[14px]">${isReady ? 'toggle_on' : 'toggle_off'}</span>
                  <span>${isReady ? 'Habiskan' : 'Sediakan'}</span>
                </button>
                <div class="flex items-center gap-1">
                  <button type="button" data-action="edit" data-id="${escapeHTML(m.id)}" class="btn-menu-action inline-flex items-center justify-center h-8 w-8 rounded-xl border border-line bg-white text-muted transition hover:bg-forest hover:text-white" title="Edit Menu">
                    <span class="material-symbols-outlined text-[16px]">edit</span>
                  </button>
                  <button type="button" data-action="delete" data-id="${escapeHTML(m.id)}" class="btn-menu-action inline-flex items-center justify-center h-8 w-8 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 transition hover:bg-rose-600 hover:text-white" title="Hapus Menu">
                    <span class="material-symbols-outlined text-[16px]">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Action Listeners
    grid.querySelectorAll('.btn-menu-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = btn.dataset.action;
        const id = btn.dataset.id;
        const targetMenu = crmMenus.find(m => m.id === id);
        if (!targetMenu) return;

        if (action === 'toggle-status') {
          targetMenu.status = targetMenu.status === 'Tersedia' ? 'Tidak Tersedia' : 'Tersedia';
          saveState(STORAGE_KEYS.menus, crmMenus);
          logActivity('menu_status_changed', 'Status Menu Berubah', `${targetMenu.name} diubah menjadi ${targetMenu.status}.`, 'restaurant_menu', 'forest');
          renderCatalogMenu();
          populatePreorderMenuSelect();
          showToast(`Menu ${targetMenu.name} berstatus ${targetMenu.status}`);
        } else if (action === 'edit') {
          openMenuModal('edit', targetMenu);
        } else if (action === 'delete') {
          if (confirm(`Apakah Anda yakin ingin menghapus menu "${targetMenu.name}" dari katalog?`)) {
            crmMenus = crmMenus.filter(m => m.id !== id);
            saveState(STORAGE_KEYS.menus, crmMenus);
            logActivity('menu_deleted', 'Menu Dihapus', `${targetMenu.name} dihapus dari katalog TUUMIS.`, 'delete', 'rose');
            renderCatalogMenu();
            populatePreorderMenuSelect();
            showToast(`Menu "${targetMenu.name}" berhasil dihapus`);
          }
        }
      });
    });
  }

  populatePreorderMenuSelect();
}

function populatePreorderMenuSelect() {
  const sel = byId('po-menu-name');
  if (!sel) return;
  const activeMenus = crmMenus.filter(m => m.status === 'Tersedia');
  if (activeMenus.length === 0) {
    sel.innerHTML = '<option value="">(Tidak ada menu yang tersedia)</option>';
    return;
  }
  sel.innerHTML = activeMenus.map(m => `
    <option value="${escapeHTML(m.name)}">${escapeHTML(m.name)} (${money(m.price)})</option>
  `).join('');
}

function openMenuModal(mode = 'add', menuData = null) {
  const modal = byId('modal-menu-form');
  const title = byId('modal-menu-title');
  const err = byId('menu-form-error');
  err.classList.add('hidden');
  err.textContent = '';

  byId('menu-form-mode').value = mode;
  byId('menu-form-id').value = menuData ? menuData.id : '';

  if (mode === 'edit' && menuData) {
    title.textContent = 'Edit Menu Kuliner';
    byId('input-menu-name').value = menuData.name;
    byId('input-menu-category').value = menuData.category;
    byId('input-menu-price').value = menuData.price;
    byId('input-menu-desc').value = menuData.desc || '';
    byId('input-menu-img').value = menuData.img || '';
    byId('input-menu-status').value = menuData.status;
  } else {
    title.textContent = 'Tambah Menu Kuliner Baru';
    byId('form-catalog-menu').reset();
    byId('input-menu-status').value = 'Tersedia';
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeMenuModal() {
  const modal = byId('modal-menu-form');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function setupMenuCatalogEvents() {
  // Search & Filter
  byId('catalog-search')?.addEventListener('input', renderCatalogMenu);
  byId('catalog-filter-category')?.addEventListener('change', renderCatalogMenu);
  byId('catalog-filter-status')?.addEventListener('change', renderCatalogMenu);
  byId('catalog-btn-reset-filters')?.addEventListener('click', () => {
    if (byId('catalog-search')) byId('catalog-search').value = '';
    if (byId('catalog-filter-category')) byId('catalog-filter-category').value = 'all';
    if (byId('catalog-filter-status')) byId('catalog-filter-status').value = 'all';
    renderCatalogMenu();
  });

  // Modal open/close
  byId('btn-toggle-menu-form')?.addEventListener('click', () => openMenuModal('add'));
  byId('btn-close-modal-menu')?.addEventListener('click', closeMenuModal);
  byId('btn-cancel-modal-menu')?.addEventListener('click', closeMenuModal);

  // Form Submit Add/Edit Menu
  byId('form-catalog-menu')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const mode = byId('menu-form-mode').value;
    const menuId = byId('menu-form-id').value;
    const name = byId('input-menu-name').value.trim();
    const category = byId('input-menu-category').value;
    const priceRaw = byId('input-menu-price').value;
    const price = Number(priceRaw);
    const desc = byId('input-menu-desc').value.trim();
    const img = byId('input-menu-img').value.trim();
    const status = byId('input-menu-status').value;

    const err = byId('menu-form-error');

    if (!name) {
      err.textContent = 'Nama menu wajib diisi.';
      err.classList.remove('hidden');
      return;
    }

    if (isNaN(price) || price < 0) {
      err.textContent = 'Harga harus berupa angka dan tidak boleh bernilai negatif.';
      err.classList.remove('hidden');
      return;
    }

    if (mode === 'edit' && menuId) {
      const target = crmMenus.find(m => m.id === menuId);
      if (target) {
        target.name = name;
        target.category = category;
        target.price = price;
        target.desc = desc;
        target.img = img || getMenuPlaceholder(category);
        target.status = status;
        saveState(STORAGE_KEYS.menus, crmMenus);
        logActivity('menu_updated', 'Menu Diperbarui', `${name} berhasil diperbarui di katalog.`, 'edit_note', 'forest');
        showToast(`Menu "${name}" berhasil diperbarui`);
      }
    } else {
      const nextNum = String(crmMenus.length + 1).padStart(3, '0');
      const newMenu = {
        id: `MNU-${nextNum}`,
        name,
        category,
        price,
        desc,
        img: img || getMenuPlaceholder(category),
        status,
        isSimulation: true
      };
      crmMenus.unshift(newMenu);
      saveState(STORAGE_KEYS.menus, crmMenus);
      logActivity('menu_added', 'Menu Baru Ditambahkan', `${name} (${category}) ditambahkan ke katalog.`, 'add_circle', 'forest');
      showToast(`Menu baru "${name}" berhasil ditambahkan`);
    }

    closeMenuModal();
    renderCatalogMenu();
  });

  // Pre-Order Form Toggle
  byId('btn-toggle-preorder-form')?.addEventListener('click', () => {
    byId('form-add-preorder')?.classList.toggle('hidden');
  });
  byId('btn-cancel-preorder-form')?.addEventListener('click', () => {
    byId('form-add-preorder')?.classList.add('hidden');
  });

  // Form Submit Pre-Order
  byId('form-add-preorder')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const customer = byId('po-customer-name').value.trim();
    const menu = byId('po-menu-name').value;
    const quantity = Number(byId('po-quantity').value) || 1;
    const schedule = byId('po-schedule').value.trim();
    const notes = byId('po-notes').value.trim() || 'Tidak ada catatan';
    const status = byId('po-status').value;

    const nextId = `PO-${101 + crmPreorders.length}`;
    const newPO = {
      id: nextId,
      customer,
      menu,
      quantity,
      schedule,
      notes,
      status,
      createdAt: '2026-11-20 ' + new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date())
    };

    crmPreorders.unshift(newPO);
    saveState(STORAGE_KEYS.preorders, crmPreorders);
    logActivity('preorder_created', 'Pre-Order Baru Diterima', `Pre-Order ${nextId} (${customer} - ${menu} x${quantity}) dicatat.`, 'schedule_send', 'forest');

    renderPreorders();
    e.target.reset();
    byId('form-add-preorder').classList.add('hidden');
    showToast(`Simulasi Pre-Order ${nextId} berhasil dibuat`);
  });

  // Modal WA Pre-Order Event Listeners
  byId('btn-close-modal-wa-po')?.addEventListener('click', () => {
    byId('modal-wa-preorder').classList.add('hidden');
    byId('modal-wa-preorder').classList.remove('flex');
  });

  byId('btn-copy-wa-po')?.addEventListener('click', () => {
    const text = byId('modal-wa-po-text').value;
    navigator.clipboard?.writeText(text);
    showToast('Template pesan Pre-Order berhasil disalin');
  });

  byId('btn-open-wa-system')?.addEventListener('click', () => {
    byId('modal-wa-preorder').classList.add('hidden');
    byId('modal-wa-preorder').classList.remove('flex');
    switchView('whatsapp');
    const poTpl = WA_TEMPLATES.find(t => t.id === 'wa-preorder');
    if (poTpl) {
      selectedWaTemplate = poTpl;
      renderWaTemplates();
      updateWaPreview();
    }
  });
}

function renderPreorders() {
  const tbody = byId('preorder-table-rows');
  if (!tbody) return;

  if (crmPreorders.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="p-6 text-center text-xs text-muted">Belum ada simulasi pesanan pre-order yang dicatat.</td>
      </tr>
    `;
    return;
  }

  const statusBadge = (s) => {
    if (s === 'Menunggu Konfirmasi') return 'bg-amber-100 text-amber-800 border-amber-200';
    if (s === 'Dikonfirmasi') return 'bg-blue-100 text-blue-800 border-blue-200';
    if (s === 'Selesai') return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    return 'bg-rose-100 text-rose-800 border-rose-200';
  };

  tbody.innerHTML = crmPreorders.map(po => `
    <tr class="transition hover:bg-cream/40">
      <td class="px-4 py-3 font-bold text-forest-dark whitespace-nowrap">${escapeHTML(po.id)}</td>
      <td class="px-4 py-3 font-semibold text-ink whitespace-nowrap">${escapeHTML(po.customer)}</td>
      <td class="px-4 py-3">
        <span class="block font-semibold text-forest-dark">${escapeHTML(po.menu)}</span>
        <span class="block text-[11px] text-muted">${po.quantity} Porsi</span>
      </td>
      <td class="px-4 py-3 text-muted whitespace-nowrap">${escapeHTML(po.schedule)}</td>
      <td class="px-4 py-3 text-ink max-w-xs truncate" title="${escapeHTML(po.notes)}">${escapeHTML(po.notes)}</td>
      <td class="px-3 py-3 whitespace-nowrap">
        <select data-poid="${escapeHTML(po.id)}" class="po-status-select h-7 rounded-lg border border-line bg-white px-2 text-[10px] font-semibold outline-none focus:border-forest cursor-pointer">
          <option value="Menunggu Konfirmasi" ${po.status === 'Menunggu Konfirmasi' ? 'selected' : ''}>Menunggu Konfirmasi</option>
          <option value="Dikonfirmasi" ${po.status === 'Dikonfirmasi' ? 'selected' : ''}>Dikonfirmasi</option>
          <option value="Selesai" ${po.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
          <option value="Dibatalkan" ${po.status === 'Dibatalkan' ? 'selected' : ''}>Dibatalkan</option>
        </select>
      </td>
      <td class="px-4 py-3 text-right whitespace-nowrap">
        <div class="flex items-center justify-end gap-1.5">
          <button type="button" data-poid="${escapeHTML(po.id)}" class="btn-po-wa inline-flex items-center gap-1 rounded-lg border border-forest bg-sage/60 px-2 py-1 text-[11px] font-semibold text-forest-dark transition hover:bg-forest hover:text-white">
            <span class="material-symbols-outlined text-[14px]">chat</span>Pesan WA
          </button>
          <button type="button" data-poid="${escapeHTML(po.id)}" class="btn-po-del inline-flex items-center justify-center h-7 w-7 rounded-lg border border-rose-200 bg-rose-50 text-rose-700 transition hover:bg-rose-600 hover:text-white" title="Hapus Pre-Order">
            <span class="material-symbols-outlined text-[14px]">delete</span>
          </button>
        </div>
      </td>
    </tr>
  `).join('');

  // Status Change listener
  tbody.querySelectorAll('.po-status-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const id = sel.dataset.poid;
      const target = crmPreorders.find(item => item.id === id);
      if (target) {
        target.status = sel.value;
        saveState(STORAGE_KEYS.preorders, crmPreorders);
        logActivity('preorder_status', 'Status Pre-Order Berubah', `Pre-Order ${id} diubah ke ${target.status}.`, 'sync', 'blue');
        showToast(`Status ${id} diperbarui: ${target.status}`);
      }
    });
  });

  // Action Buttons
  tbody.querySelectorAll('.btn-po-wa').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.poid;
      const target = crmPreorders.find(item => item.id === id);
      if (target) openPreorderWaModal(target);
    });
  });

  tbody.querySelectorAll('.btn-po-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.poid;
      if (confirm(`Hapus data pre-order ${id}?`)) {
        crmPreorders = crmPreorders.filter(item => item.id !== id);
        saveState(STORAGE_KEYS.preorders, crmPreorders);
        renderPreorders();
        showToast(`Pre-Order ${id} dihapus`);
      }
    });
  });
}

function openPreorderWaModal(po) {
  const modal = byId('modal-wa-preorder');
  const textarea = byId('modal-wa-po-text');
  const directBtn = byId('btn-direct-wa-po');

  const message = `Halo TUUMIS, saya ingin melakukan pre-order:

Nama Menu: ${po.menu}
Jumlah: ${po.quantity} Porsi
Jadwal: ${po.schedule}
Catatan: ${po.notes}

Mohon informasi lebih lanjut mengenai pesanan saya. Terima kasih.`;

  textarea.value = message;
  directBtn.href = `https://wa.me/6288228692190?text=${encodeURIComponent(message)}`;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

/* ==================== MODUL 7: KAMPANYE UGC & BIO LINK (SO1) ==================== */
function renderUgcCampaign() {
  // 1. Render Campaign Info
  if (byId('ugc-info-title')) byId('ugc-info-title').textContent = crmCampaign.title;
  if (byId('ugc-info-desc')) byId('ugc-info-desc').textContent = crmCampaign.desc;
  if (byId('ugc-info-hashtag')) byId('ugc-info-hashtag').textContent = crmCampaign.hashtag;
  if (byId('ugc-info-period')) byId('ugc-info-period').textContent = crmCampaign.period;
  if (byId('ugc-info-instructions')) byId('ugc-info-instructions').textContent = crmCampaign.instructions;

  const badge = byId('ugc-info-badge');
  if (badge) {
    badge.textContent = crmCampaign.active ? 'Aktif Berjalan' : 'Nonaktif';
    badge.className = `rounded-full px-2.5 py-0.5 text-[10px] font-bold ${crmCampaign.active ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-200 text-stone-700'}`;
  }

  // 2. Render 4 Stat Cards
  const totalUgc = crmUgc.length;
  const uniqueParticipants = new Set(crmUgc.map(u => u.creator.toLowerCase())).size;
  const bioMembersCount = crmCustomers.filter(c => c.joined && c.joined >= '2026-11-01').length;

  if (byId('ugc-stat-total')) byId('ugc-stat-total').textContent = INTEGER.format(totalUgc);
  if (byId('ugc-stat-participants')) byId('ugc-stat-participants').textContent = INTEGER.format(uniqueParticipants);
  if (byId('ugc-stat-bio-members')) byId('ugc-stat-bio-members').textContent = INTEGER.format(bioMembersCount);
  if (byId('ugc-stat-status')) byId('ugc-stat-status').textContent = crmCampaign.active ? 'Aktif' : 'Nonaktif';
  if (byId('ugc-stat-hashtag-note')) byId('ugc-stat-hashtag-note').textContent = crmCampaign.hashtag;

  // 3. Render UGC Table
  const filterVerify = byId('ugc-filter-verify')?.value || 'all';
  const filtered = crmUgc.filter(u => filterVerify === 'all' || u.status === filterVerify);

  const tbody = byId('ugc-table-rows');
  const empty = byId('ugc-empty-state');

  if (filtered.length === 0) {
    if (tbody) tbody.innerHTML = '';
    if (empty) empty.classList.remove('hidden');
    return;
  }

  if (empty) empty.classList.add('hidden');

  const statusBadge = (s) => {
    if (s === 'Disetujui') return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    if (s === 'Ditolak') return 'bg-rose-100 text-rose-800 border-rose-200';
    return 'bg-amber-100 text-amber-800 border-amber-200';
  };

  if (tbody) {
    tbody.innerHTML = filtered.map(u => `
      <tr class="transition hover:bg-cream/40">
        <td class="px-4 py-3 whitespace-nowrap">
          <span class="block font-bold text-forest-dark">${escapeHTML(u.id)}</span>
          <span class="block text-[10px] text-muted">${escapeHTML(u.date)}</span>
        </td>
        <td class="px-4 py-3 font-semibold text-ink whitespace-nowrap">${escapeHTML(u.creator)}</td>
        <td class="px-3 py-3 whitespace-nowrap">
          <span class="inline-flex items-center gap-1 text-[11px] font-medium text-forest-dark">
            <span class="material-symbols-outlined text-[15px]">${u.platform === 'TikTok' ? 'music_note' : 'photo_camera'}</span>
            ${escapeHTML(u.platform)}
          </span>
        </td>
        <td class="px-4 py-3 max-w-xs">
          <p class="truncate text-xs text-ink" title="${escapeHTML(u.caption)}">${escapeHTML(u.caption)}</p>
          <a href="${escapeHTML(u.url)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[10px] font-bold text-forest hover:underline">
            Buka Konten <span class="material-symbols-outlined text-[12px]">open_in_new</span>
          </a>
        </td>
        <td class="px-3 py-3 text-center whitespace-nowrap">
          <select data-ugcid="${escapeHTML(u.id)}" class="ugc-status-select h-7 rounded-lg border border-line bg-white px-2 text-[10px] font-semibold outline-none focus:border-forest cursor-pointer">
            <option value="Menunggu" ${u.status === 'Menunggu' ? 'selected' : ''}>Menunggu</option>
            <option value="Disetujui" ${u.status === 'Disetujui' ? 'selected' : ''}>Disetujui</option>
            <option value="Ditolak" ${u.status === 'Ditolak' ? 'selected' : ''}>Ditolak</option>
          </select>
        </td>
        <td class="px-4 py-3 text-right whitespace-nowrap">
          <div class="flex items-center justify-end gap-1">
            <button type="button" data-ugcid="${escapeHTML(u.id)}" class="btn-ugc-edit inline-flex items-center justify-center h-7 w-7 rounded-lg border border-line bg-white text-muted hover:bg-forest hover:text-white" title="Edit Konten">
              <span class="material-symbols-outlined text-[14px]">edit</span>
            </button>
            <button type="button" data-ugcid="${escapeHTML(u.id)}" class="btn-ugc-del inline-flex items-center justify-center h-7 w-7 rounded-lg border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white" title="Hapus Konten">
              <span class="material-symbols-outlined text-[14px]">delete</span>
            </button>
          </div>
        </td>
      </tr>
    `).join('');

    tbody.querySelectorAll('.ugc-status-select').forEach(sel => {
      sel.addEventListener('change', () => {
        const id = sel.dataset.ugcid;
        const target = crmUgc.find(item => item.id === id);
        if (target) {
          target.status = sel.value;
          saveState(STORAGE_KEYS.ugc, crmUgc);
          logActivity('ugc_status_changed', 'Status UGC Diperbarui', `Konten ${id} (${target.creator}) diubah ke status ${target.status}.`, 'verified', 'forest');
          showToast(`Status verifikasi ${id}: ${target.status}`);
        }
      });
    });

    tbody.querySelectorAll('.btn-ugc-edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.ugcid;
        const target = crmUgc.find(item => item.id === id);
        if (target) openUgcForm('edit', target);
      });
    });

    tbody.querySelectorAll('.btn-ugc-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.ugcid;
        if (confirm(`Apakah Anda yakin ingin menghapus konten UGC ${id}?`)) {
          crmUgc = crmUgc.filter(item => item.id !== id);
          saveState(STORAGE_KEYS.ugc, crmUgc);
          renderUgcCampaign();
          showToast(`Konten UGC ${id} berhasil dihapus`);
        }
      });
    });
  }
}

function openUgcForm(mode = 'add', data = null) {
  const form = byId('form-add-ugc');
  const heading = byId('ugc-form-heading');
  byId('ugc-edit-id').value = data ? data.id : '';

  if (mode === 'edit' && data) {
    heading.textContent = `Edit Konten UGC (${data.id})`;
    byId('ugc-input-creator').value = data.creator;
    byId('ugc-input-platform').value = data.platform;
    byId('ugc-input-url').value = data.url;
    byId('ugc-input-caption').value = data.caption || '';
    byId('ugc-input-status').value = data.status;
  } else {
    heading.textContent = 'Input Konten UGC Baru';
    form.reset();
    byId('ugc-input-status').value = 'Menunggu';
  }

  form.classList.remove('hidden');
  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function openBioMemberModal() {
  const modal = byId('modal-bio-member');
  byId('form-bio-member-reg').reset();
  byId('bio-member-alert').classList.add('hidden');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function setupUgcEvents() {
  // Campaign Info Edit
  byId('btn-edit-campaign-info')?.addEventListener('click', () => {
    byId('cfg-campaign-title').value = crmCampaign.title;
    byId('cfg-campaign-hashtag').value = crmCampaign.hashtag;
    byId('cfg-campaign-period').value = crmCampaign.period;
    byId('cfg-campaign-desc').value = crmCampaign.desc;
    byId('cfg-campaign-instructions').value = crmCampaign.instructions;
    byId('cfg-campaign-active').checked = crmCampaign.active;
    byId('form-edit-campaign')?.classList.remove('hidden');
  });

  byId('btn-cancel-campaign-edit')?.addEventListener('click', () => {
    byId('form-edit-campaign')?.classList.add('hidden');
  });

  byId('form-edit-campaign')?.addEventListener('submit', (e) => {
    e.preventDefault();
    crmCampaign.title = byId('cfg-campaign-title').value.trim();
    crmCampaign.hashtag = byId('cfg-campaign-hashtag').value.trim();
    crmCampaign.period = byId('cfg-campaign-period').value.trim();
    crmCampaign.desc = byId('cfg-campaign-desc').value.trim();
    crmCampaign.instructions = byId('cfg-campaign-instructions').value.trim();
    crmCampaign.active = byId('cfg-campaign-active').checked;

    saveState(STORAGE_KEYS.campaign, crmCampaign);
    logActivity('campaign_updated', 'Konfigurasi Kampanye UGC Diperbarui', `Informasi kampanye ${crmCampaign.title} berhasil diperbarui.`, 'campaign', 'forest');
    byId('form-edit-campaign').classList.add('hidden');
    renderUgcCampaign();
    showToast('Informasi kampanye UGC berhasil diperbarui');
  });

  // UGC Content Form Events
  byId('btn-toggle-ugc-form')?.addEventListener('click', () => openUgcForm('add'));
  byId('btn-cancel-ugc-form')?.addEventListener('click', () => byId('form-add-ugc').classList.add('hidden'));

  byId('form-add-ugc')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = byId('ugc-edit-id').value;
    const creator = byId('ugc-input-creator').value.trim();
    const platform = byId('ugc-input-platform').value;
    const url = byId('ugc-input-url').value.trim();
    const caption = byId('ugc-input-caption').value.trim();
    const status = byId('ugc-input-status').value;

    if (editId) {
      const target = crmUgc.find(u => u.id === editId);
      if (target) {
        target.creator = creator;
        target.platform = platform;
        target.url = url;
        target.caption = caption;
        target.status = status;
        saveState(STORAGE_KEYS.ugc, crmUgc);
        showToast(`Konten UGC ${editId} diperbarui`);
      }
    } else {
      const nextId = `UGC-${String(crmUgc.length + 1).padStart(2, '0')}`;
      const newUgc = {
        id: nextId,
        creator,
        platform,
        url,
        caption,
        date: new Intl.DateTimeFormat('en-CA').format(new Date()),
        status,
        verifiedBy: '-'
      };
      crmUgc.unshift(newUgc);
      saveState(STORAGE_KEYS.ugc, crmUgc);
      logActivity('ugc_submitted', 'Konten UGC Baru Masuk', `Pengiriman konten dari ${creator} (${platform}).`, 'photo_camera', 'forest');
      showToast(`Konten UGC ${nextId} berhasil dicatat`);
    }

    byId('form-add-ugc').classList.add('hidden');
    renderUgcCampaign();
  });

  byId('ugc-filter-verify')?.addEventListener('change', renderUgcCampaign);

  // Bio Link URL copy
  byId('btn-copy-bio-url')?.addEventListener('click', () => {
    const input = byId('input-bio-link-url');
    navigator.clipboard?.writeText(input.value);
    showToast('Tautan Bio Link berhasil disalin');
  });

  // Bio Link Preview Modals
  byId('btn-open-bio-preview')?.addEventListener('click', () => {
    byId('modal-bio-preview').classList.remove('hidden');
    byId('modal-bio-preview').classList.add('flex');
  });
  byId('btn-quick-preview-bio')?.addEventListener('click', () => {
    byId('modal-bio-preview').classList.remove('hidden');
    byId('modal-bio-preview').classList.add('flex');
  });
  byId('btn-close-bio-preview')?.addEventListener('click', () => {
    byId('modal-bio-preview').classList.add('hidden');
    byId('modal-bio-preview').classList.remove('flex');
  });

  byId('preview-btn-member')?.addEventListener('click', () => {
    byId('modal-bio-preview').classList.add('hidden');
    byId('modal-bio-preview').classList.remove('flex');
    openBioMemberModal();
  });
  byId('preview-btn-catalog')?.addEventListener('click', () => {
    byId('modal-bio-preview').classList.add('hidden');
    byId('modal-bio-preview').classList.remove('flex');
    switchView('menu-catalog');
  });
  byId('preview-btn-ugc')?.addEventListener('click', () => {
    byId('modal-bio-preview').classList.add('hidden');
    byId('modal-bio-preview').classList.remove('flex');
    switchView('ugc-campaign');
  });

  // Bio Member Registration Modal
  byId('btn-open-member-reg-modal')?.addEventListener('click', openBioMemberModal);
  byId('btn-close-bio-member')?.addEventListener('click', () => {
    byId('modal-bio-member').classList.add('hidden');
    byId('modal-bio-member').classList.remove('flex');
  });
  byId('btn-cancel-bio-member')?.addEventListener('click', () => {
    byId('modal-bio-member').classList.add('hidden');
    byId('modal-bio-member').classList.remove('flex');
  });

  // Form Submit Member Registration (Sinkronisasi ke Data Pelanggan)
  byId('form-bio-member-reg')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const alertBox = byId('bio-member-alert');
    alertBox.classList.add('hidden');

    const name = byId('bio-reg-name').value.trim();
    let wa = byId('bio-reg-wa').value.trim().replace(/\D/g, '');
    const email = byId('bio-reg-email').value.trim();
    const segment = byId('bio-reg-segment').value;

    if (!name) {
      alertBox.textContent = 'Nama lengkap wajib diisi.';
      alertBox.className = 'rounded-xl border border-rose-300 bg-rose-50 p-2.5 text-[11px] font-semibold text-rose-700';
      alertBox.classList.remove('hidden');
      return;
    }

    if (!wa || wa.length < 9) {
      alertBox.textContent = 'Nomor WhatsApp wajib diisi minimal 9 digit angka valid.';
      alertBox.className = 'rounded-xl border border-rose-300 bg-rose-50 p-2.5 text-[11px] font-semibold text-rose-700';
      alertBox.classList.remove('hidden');
      return;
    }

    if (wa.startsWith('0')) {
      wa = '62' + wa.slice(1);
    }

    // Cek Duplikasi Nomor WhatsApp di crmCustomers
    const existing = crmCustomers.find(c => c.wa.replace(/\D/g, '') === wa);
    if (existing) {
      alertBox.innerHTML = `Nomor WhatsApp <strong>${escapeHTML(wa)}</strong> sudah terdaftar atas nama <strong>${escapeHTML(existing.name)}</strong> (${existing.id}). Tidak ada duplikasi data.`;
      alertBox.className = 'rounded-xl border border-amber-300 bg-amber-50 p-2.5 text-[11px] font-semibold text-amber-800';
      alertBox.classList.remove('hidden');
      return;
    }

    // Registrasi Pelanggan Baru ke Sumber Data Tunggal CRM
    const nextNum = String(crmCustomers.length + 1).padStart(3, '0');
    const today = new Intl.DateTimeFormat('en-CA').format(new Date());
    const newCustomer = {
      id: `CUST-${nextNum}`,
      name,
      wa,
      email: email || `${name.toLowerCase().replace(/\s+/g, '.')}@member.tuumis.id`,
      joined: today,
      segment,
      status: 'Member Loyal',
      orders: 1,
      lastOrder: today
    };

    crmCustomers.unshift(newCustomer);
    saveState(STORAGE_KEYS.customers, crmCustomers);

    logActivity('customer_registered', 'Member Baru dari Bio Link', `${name} mendaftar via Bio Link Instagram sebagai Member Loyal.`, 'person_add', 'forest');

    renderCustomers();
    renderUgcCampaign();
    if (typeof renderCrmDashboard === 'function') renderCrmDashboard();

    alertBox.innerHTML = `Selamat! Pendaftaran member atas nama <strong>${escapeHTML(name)}</strong> (ID: ${newCustomer.id}) berhasil disinkronkan ke basis data pelanggan CRM TUUMIS. Voucher MEMBER15 aktif!`;
    alertBox.className = 'rounded-xl border border-emerald-300 bg-emerald-50 p-2.5 text-[11px] font-semibold text-emerald-800';
    alertBox.classList.remove('hidden');

    showToast(`Member baru ${name} (${newCustomer.id}) berhasil didaftarkan`);
    setTimeout(() => {
      byId('modal-bio-member').classList.add('hidden');
      byId('modal-bio-member').classList.remove('flex');
    }, 1800);
  });
}

/* ==================== MODUL 8: PETA STRATEGI TOWS ==================== */
function renderTowsStrategy() {
  const catFilter = byId('tows-filter-category')?.value || 'all';
  const phaseFilter = byId('tows-filter-phase')?.value || 'all';

  // 1. Filter Pemetaan Tabel
  const filtered = TOWS_MAPPINGS.filter(m => {
    const matchCat = catFilter === 'all' || m.code.includes(catFilter);
    const matchPhase = phaseFilter === 'all' || m.phase === phaseFilter;
    return matchCat && matchPhase;
  });

  const tbody = byId('tows-table-rows');
  const countBadge = byId('tows-count-badge');
  if (countBadge) countBadge.textContent = `${filtered.length} pemetaan strategi`;

  const statusBadge = (s) => {
    if (s === 'Selesai') return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    if (s === 'Sedang Dikerjakan') return 'bg-amber-100 text-amber-800 border-amber-300';
    return 'bg-stone-200 text-stone-700 border-stone-300';
  };

  if (tbody) {
    tbody.innerHTML = filtered.map(item => {
      const statusKey = `${item.code.replace(/[^A-Za-z0-9]/g, '_')}_${item.phase}`;
      const currentStatus = crmTowsStatus[statusKey] || item.status || 'Selesai';

      return `
        <tr class="transition hover:bg-cream/40">
          <td class="px-5 py-3.5 whitespace-nowrap">
            <span class="inline-flex rounded-lg bg-forest/10 px-2.5 py-1 font-bold text-forest-dark border border-forest/20">${escapeHTML(item.code)}</span>
          </td>
          <td class="px-5 py-3.5 font-bold text-ink">${escapeHTML(item.feature)}</td>
          <td class="px-5 py-3.5 text-muted">${escapeHTML(item.page)}</td>
          <td class="px-3 py-3.5 text-center whitespace-nowrap">
            <span class="inline-flex rounded-full bg-sage px-2.5 py-0.5 text-[10px] font-bold text-forest-dark border border-line">${escapeHTML(item.phase)}</span>
          </td>
          <td class="px-4 py-3.5 whitespace-nowrap">
            <select data-status-key="${escapeHTML(statusKey)}" class="tows-status-select h-7 rounded-lg border border-line bg-white px-2 text-[10px] font-bold outline-none focus:border-forest cursor-pointer">
              <option value="Selesai" ${currentStatus === 'Selesai' ? 'selected' : ''}>Selesai</option>
              <option value="Sedang Dikerjakan" ${currentStatus === 'Sedang Dikerjakan' ? 'selected' : ''}>Sedang Dikerjakan</option>
              <option value="Belum Dikerjakan" ${currentStatus === 'Belum Dikerjakan' ? 'selected' : ''}>Belum Dikerjakan</option>
            </select>
          </td>
          <td class="px-5 py-3.5 text-right whitespace-nowrap">
            <div class="flex items-center justify-end gap-1.5">
              <button type="button" data-view="${escapeHTML(item.targetView)}" class="btn-tows-goto inline-flex items-center gap-1 rounded-xl bg-forest px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm hover:bg-forest-dark transition">
                <span>Buka Fitur</span>
                <span class="material-symbols-outlined text-[13px]">arrow_forward</span>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    tbody.querySelectorAll('.tows-status-select').forEach(sel => {
      sel.addEventListener('change', () => {
        const key = sel.dataset.statusKey;
        crmTowsStatus[key] = sel.value;
        saveState(STORAGE_KEYS.towsStatus, crmTowsStatus);
        showToast(`Status implementasi strategi diperbarui: ${sel.value}`);
      });
    });

    tbody.querySelectorAll('.btn-tows-goto').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        if (view) switchView(view);
      });
    });
  }

  // 2. Render Cards Detail Strategi Worksheet
  const cardsContainer = byId('tows-cards-container');
  if (cardsContainer) {
    cardsContainer.innerHTML = TOWS_STRATEGIES.map(strat => {
      const colorBorder = strat.type === 'SO' ? 'border-l-emerald-600' : strat.type === 'WO' ? 'border-l-blue-600' : strat.type === 'ST' ? 'border-l-gold' : 'border-l-rose-600';
      return `
        <article class="flex flex-col justify-between rounded-2xl border-l-4 ${colorBorder} border border-line bg-white p-5 shadow-card transition hover:shadow-md">
          <div>
            <div class="flex items-center justify-between">
              <span class="font-display text-lg font-bold text-forest-dark">${escapeHTML(strat.code)}</span>
              <span class="rounded-full bg-cream px-2 py-0.5 text-[10px] font-bold text-forest-dark border border-line">${escapeHTML(strat.phase)}</span>
            </div>
            <p class="mt-2 text-xs font-semibold text-forest-dark leading-relaxed">${escapeHTML(strat.substance)}</p>
          </div>

          <div class="mt-4 pt-3 border-t border-line/60">
            <span class="block text-[10px] font-bold uppercase tracking-wider text-muted">Fitur Terhubung:</span>
            <p class="text-xs font-medium text-ink">${escapeHTML(strat.feature)}</p>
            <div class="mt-3 flex items-center justify-between">
              <button type="button" data-strat-code="${escapeHTML(strat.code)}" class="btn-strat-detail text-xs font-bold text-forest hover:underline flex items-center gap-1">
                <span>Lihat Detail</span><span class="material-symbols-outlined text-[14px]">visibility</span>
              </button>
              <button type="button" onclick="switchView('${strat.targetView}')" class="inline-flex items-center gap-1 text-[11px] font-semibold text-muted hover:text-forest-dark">
                Menuju Halaman <span class="material-symbols-outlined text-[13px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    cardsContainer.querySelectorAll('.btn-strat-detail').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.dataset.stratCode;
        const target = TOWS_STRATEGIES.find(s => s.code === code);
        if (target) openTowsModal(target);
      });
    });
  }
}

let activeTowsModalView = null;

function openTowsModal(strat) {
  const modal = byId('modal-tows-detail');
  byId('modal-tows-code').textContent = strat.code;
  byId('modal-tows-type').textContent = strat.typeName;
  byId('modal-tows-substance').textContent = strat.substance;
  byId('modal-tows-feature').textContent = strat.feature;
  byId('modal-tows-page').textContent = strat.pageName;
  byId('modal-tows-phase').textContent = strat.phase;

  const statusEl = byId('modal-tows-status');
  statusEl.textContent = 'Selesai Diimplementasikan';
  statusEl.className = 'mt-1 inline-block rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 font-bold';

  activeTowsModalView = strat.targetView;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function setupTowsEvents() {
  byId('tows-filter-category')?.addEventListener('change', renderTowsStrategy);
  byId('tows-filter-phase')?.addEventListener('change', renderTowsStrategy);
  byId('tows-btn-reset-filters')?.addEventListener('click', () => {
    if (byId('tows-filter-category')) byId('tows-filter-category').value = 'all';
    if (byId('tows-filter-phase')) byId('tows-filter-phase').value = 'all';
    renderTowsStrategy();
  });

  // Group cards quick filter
  document.querySelectorAll('.tows-group-card').forEach(card => {
    card.addEventListener('click', () => {
      const grp = card.dataset.filterGroup;
      if (byId('tows-filter-category')) {
        byId('tows-filter-category').value = grp;
        renderTowsStrategy();
        showToast(`Memfilter strategi kategori ${grp}`);
      }
    });
  });

  byId('btn-close-modal-tows')?.addEventListener('click', () => {
    byId('modal-tows-detail').classList.add('hidden');
    byId('modal-tows-detail').classList.remove('flex');
  });
  byId('btn-close-modal-tows-action')?.addEventListener('click', () => {
    byId('modal-tows-detail').classList.add('hidden');
    byId('modal-tows-detail').classList.remove('flex');
  });

  byId('btn-tows-navigate-view')?.addEventListener('click', () => {
    byId('modal-tows-detail').classList.add('hidden');
    byId('modal-tows-detail').classList.remove('flex');
    if (activeTowsModalView) switchView(activeTowsModalView);
  });
}
