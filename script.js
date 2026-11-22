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

/* ==================== DATA DEFAULT CRM TUUMIS ==================== */
const DEFAULT_CUSTOMERS = [
  { id: 'CUST-001', name: 'Nadia Putri Maharani', wa: '6281234567801', email: 'nadia.putri@mhs.ac.id', joined: '2026-09-12', segment: 'Mahasiswa', status: 'Member Loyal', orders: 14, lastOrder: '2026-10-31' },
  { id: 'CUST-002', name: 'Dimas Arya Pratama', wa: '6281234567802', email: 'dimas.arya@gmail.com', joined: '2026-09-18', segment: 'Pekerja', status: 'Member Loyal', orders: 11, lastOrder: '2026-10-30' },
  { id: 'CUST-003', name: 'Salsabila Khairunnisa', wa: '6281234567803', email: 'salsa.kh@mhs.ac.id', joined: '2026-09-25', segment: 'Mahasiswa', status: 'Reguler', orders: 5, lastOrder: '2026-10-29' },
  { id: 'CUST-004', name: 'Bagas Kurniawan', wa: '6281234567804', email: 'bagas.k@gmail.com', joined: '2026-08-20', segment: 'Pekerja', status: 'Tidak Aktif', orders: 7, lastOrder: '2026-10-08' },
  { id: 'CUST-005', name: 'Aulia Rahmawati', wa: '6281234567805', email: 'aulia.rahma@mhs.ac.id', joined: '2026-10-02', segment: 'Mahasiswa', status: 'Member Loyal', orders: 9, lastOrder: '2026-10-31' },
  { id: 'CUST-006', name: 'Reza Firmansyah', wa: '6281234567806', email: 'reza.f@mhs.ac.id', joined: '2026-09-05', segment: 'Mahasiswa', status: 'Tidak Aktif', orders: 4, lastOrder: '2026-10-05' },
  { id: 'CUST-007', name: 'Fitri Handayani', wa: '6281234567807', email: 'fitri.h@gmail.com', joined: '2026-10-10', segment: 'Pekerja', status: 'Reguler', orders: 3, lastOrder: '2026-10-28' }
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
    desc: 'Mengajak kembali pelanggan yang belum memesan selama >14 hari.',
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
    guide: 'Sebutkan nomor WA terdaftar di kasir (Dine-in/Takeaway) atau ketik kode MEMBER15 saat konfirmasi Pre-Order WhatsApp.'
  },
  {
    code: 'AKHIRBULAN9K',
    title: 'Promo Hemat Mahasiswa Akhir Bulan',
    discount: 'Potongan Rp4.000 Menu Pilihan',
    minOrder: 15000,
    period: 'Tanggal 25 – 31 Setiap Bulan',
    segment: 'Segmen Mahasiswa',
    terms: 'Minimal belanja Rp15.000 dengan menunjukkan Kartu Tanda Mahasiswa (KTM) aktif pada pukul 14.00–17.00 WIB.',
    guide: 'Tunjukkan KTM dan kode kupon AKHIRBULAN9K sebelum melakukan pembayaran QRIS/Tunai di kasir.'
  },
  {
    code: 'PEMULIHAN10',
    title: 'Voucher Garansi Layanan & SLA',
    discount: 'Potongan Langsung Rp10.000',
    minOrder: 10000,
    period: 'Berlaku 14 Hari Sejak Diterbitkan',
    segment: 'Pelanggan Terdampak Keluhan',
    terms: 'Diberikan khusus bagi pelanggan yang mengalami keterlambatan SLA atau kesalahan add-on. Minimal transaksi Rp10.000.',
    guide: 'Tunjukkan pesan WhatsApp resmi dari admin TUUMIS yang memuat kode PEMULIHAN10 saat memesan kembali.'
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
  customers: 'tuumis_crm_customers_v1',
  tickets: 'tuumis_crm_tickets_v1',
  coupons: 'tuumis_crm_coupons_v1',
  activities: 'tuumis_crm_activities_v1'
};

function normalizeTicket(t, index) {
  const respMinutes = typeof t.responseTimeMin === 'number'
    ? t.responseTimeMin
    : (t.slaState === 'Aman' ? 12 : t.slaState === 'Mendekati Batas' ? 24 : t.slaState === 'Melewati SLA' ? 38 : null);
  const resolMinutes = typeof t.resolutionTimeMin === 'number'
    ? t.resolutionTimeMin
    : (t.status === 'Selesai' ? (t.slaState === 'Melewati SLA' ? 145 : 45) : null);

  return {
    id: t.id || `TKT-${201 + index}`,
    customerId: t.customerId || 'CUST-001',
    customer: t.customer || 'Pelanggan TUUMIS',
    category: t.category || 'Antrean Rush Hour',
    priority: t.priority || 'Sedang',
    pic: t.pic || 'Admin WA CS',
    desc: t.desc || '',
    createdAt: t.createdAt || '2026-11-19 12:00',
    targetResponseMin: Number(t.targetResponseMin || 30),
    targetResolutionMin: Number(t.targetResolutionMin || 120),
    responseTimeMin: respMinutes,
    resolutionTimeMin: resolMinutes,
    resolvedAt: t.resolvedAt || (t.status === 'Selesai' ? '2026-11-19 12:45' : null),
    elapsed: t.elapsed || 'Baru masuk',
    slaState: t.slaState || (t.status === 'Selesai' ? 'Selesai' : 'Aman'),
    status: t.status || 'Baru',
    followup: t.followup || '-'
  };
}

let crmCustomers = loadState(STORAGE_KEYS.customers, DEFAULT_CUSTOMERS);
let crmTickets = loadState(STORAGE_KEYS.tickets, DEFAULT_TICKETS).map((t, idx) => normalizeTicket(t, idx));
let crmCoupons = loadState(STORAGE_KEYS.coupons, DEFAULT_COUPONS);
let crmActivities = loadState(STORAGE_KEYS.activities, DEFAULT_ACTIVITIES);
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
    timestamp: '2026-11-19 ' + new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date())
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
  coupons: 'Program Diskon & Kupon Member'
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

  byId('kpi-cust-total').textContent = INTEGER.format(crmCustomers.length);
  byId('kpi-cust-member').textContent = INTEGER.format(crmCustomers.filter((c) => c.status === 'Member Loyal').length);
  byId('kpi-cust-inactive').textContent = INTEGER.format(crmCustomers.filter((c) => c.status === 'Tidak Aktif').length);
  byId('badge-customers').textContent = crmCustomers.length;
  byId('cust-table-count').textContent = `${filtered.length} pelanggan`;

  const statusBadge = (status) => {
    if (status === 'Member Loyal') return 'bg-amber-100 text-amber-800 border-amber-200';
    if (status === 'Tidak Aktif') return 'bg-rose-100 text-rose-800 border-rose-200';
    return 'bg-sage text-forest-dark border-emerald-200';
  };

  byId('customer-rows').innerHTML = filtered.map((c) => `
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
      </td>
      <td class="px-4 py-3.5 text-center font-semibold">${INTEGER.format(c.orders)}x</td>
      <td class="whitespace-nowrap px-4 py-3.5 text-muted">${escapeHTML(c.lastOrder)}</td>
      <td class="whitespace-nowrap px-5 py-3.5 text-right">
        <button type="button" data-wa-name="${escapeHTML(c.name)}" data-wa-phone="${escapeHTML(c.wa)}" class="btn-quick-wa inline-flex items-center gap-1 rounded-lg bg-sage px-2.5 py-1.5 text-[11px] font-semibold text-forest-dark transition hover:bg-forest hover:text-white">
          <span class="material-symbols-outlined text-[15px]">chat</span>Sapa WA
        </button>
      </td>
    </tr>
  `).join('');

  document.querySelectorAll('.btn-quick-wa').forEach((btn) => {
    btn.addEventListener('click', () => {
      byId('wa-target-name').value = `Kak ${btn.dataset.waName.split(' ')[0]}`;
      byId('wa-target-phone').value = btn.dataset.waPhone;
      updateWaPreview();
      switchView('whatsapp');
      showToast(`Kontak ${btn.dataset.waName} dimuat ke Template WA`);
    });
  });
}

/* ==================== MODUL 3: TICKETING KELUHAN & MONITORING SLA ==================== */
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
        ${t.status !== 'Selesai'
          ? `<button type="button" data-resolve-id="${escapeHTML(t.id)}" class="btn-resolve-tkt inline-flex items-center gap-1 rounded-lg bg-forest px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-forest-dark"><span class="material-symbols-outlined text-[15px]">check</span>Tandai Selesai</button>`
          : `<span class="text-[11px] font-semibold text-forest">Tuntas</span>`
        }
      </td>
    </tr>
  `).join('');

  document.querySelectorAll('.btn-resolve-tkt').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = crmTickets.find((item) => item.id === btn.dataset.resolveId);
      if (target) {
        target.status = 'Selesai';
        target.resolvedAt = '2026-11-19 13:10';
        target.resolutionTimeMin = target.resolutionTimeMin || (target.slaState === 'Melewati SLA' ? 145 : 35);
        target.slaState = (target.resolutionTimeMin <= target.targetResolutionMin && target.slaState !== 'Melewati SLA') ? 'Selesai' : 'Melewati SLA';
        target.elapsed = `Selesai (${target.resolutionTimeMin} mnt)`;
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
  byId('btn-open-wa').href = `[https://wa.me/$](https://wa.me/$){phone}?text=${encodeURIComponent(composed)}`;
}

/* ==================== MODUL 5: PROGRAM KUPON MEMBER ==================== */
function renderCoupons() {
  byId('coupon-grid').innerHTML = crmCoupons.map((c) => `
    <article class="flex flex-col justify-between rounded-2xl border border-line bg-white p-5 shadow-card">
      <div>
        <div class="flex items-center justify-between gap-2">
          <span class="rounded-lg border border-dashed border-forest bg-sage px-3 py-1 font-mono text-xs font-bold tracking-wider text-forest-dark">${escapeHTML(c.code)}</span>
          <span class="rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold text-amber-800">${escapeHTML(c.segment)}</span>
        </div>
        <h3 class="mt-3 font-display text-lg font-semibold text-forest-dark">${escapeHTML(c.title)}</h3>
        <p class="mt-1 text-sm font-bold text-forest">${escapeHTML(c.discount)}</p>

        <div class="mt-4 space-y-2 rounded-xl bg-cream/80 p-3 text-xs">
          <div><strong class="text-ink">Periode Promo:</strong> <span class="text-muted">${escapeHTML(c.period)}</span></div>
          <div><strong class="text-ink">Syarat Penggunaan:</strong> <span class="text-muted">${escapeHTML(c.terms)}</span></div>
          <div><strong class="text-ink">Petunjuk Pemakaian:</strong> <span class="text-muted">${escapeHTML(c.guide)}</span></div>
        </div>
      </div>

      <button type="button" data-copy-code="${escapeHTML(c.code)}" class="btn-copy-coupon mt-4 inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-xl border border-line bg-white text-xs font-semibold text-forest-dark transition hover:bg-sage">
        <span class="material-symbols-outlined text-[16px]">content_copy</span>Salin Kode Kupon
      </button>
    </article>
  `).join('');

  document.querySelectorAll('.btn-copy-coupon').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigator.clipboard?.writeText(btn.dataset.copyCode);
      byId('sim-coupon-code').value = btn.dataset.copyCode;
      showToast(`Kode kupon ${btn.dataset.copyCode} disalin`);
    });
  });
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
  if (amount < Number(found.minOrder || 0)) {
    resBox.classList.add('bg-rose-50', 'text-rose-800');
    resBox.textContent = `Belum memenuhi syarat: Total belanja ${money(amount)} masih di bawah minimal transaksi ${money(found.minOrder)} untuk kupon ${found.code}.`;
    return;
  }
  resBox.classList.add('bg-emerald-50', 'text-emerald-800');
  resBox.textContent = `VALID! Kupon ${found.code} (${found.discount}) berhasil diterapkan pada transaksi senilai ${money(amount)}.`;
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
    avgResolution
  };
}

function filterCrmTicketsByPeriod(period = 'thisMonth') {
  if (period === 'today') {
    return crmTickets.filter(t => t.createdAt && t.createdAt.startsWith('2026-11-19'));
  }
  if (period === '7days') {
    return crmTickets.filter(t => t.createdAt && t.createdAt >= '2026-11-13' && t.createdAt <= '2026-11-19 23:59');
  }
  if (period === 'thisMonth') {
    return crmTickets.filter(t => t.createdAt && t.createdAt.startsWith('2026-11'));
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
    slaEl.className = 'mt-0.5 inline-flex items-center gap-1 font-bold text-emerald-700';
    slaEl.innerHTML = '<span class="material-symbols-outlined text-[15px]">check_circle</span>Memenuhi SLA';
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

  byId('modal-tkt-desc').textContent = t.desc || '-';
  byId('modal-tkt-created').textContent = t.createdAt || '19 Nov 12:00';

  byId('modal-tkt-response').textContent = typeof t.responseTimeMin === 'number'
    ? `${t.responseTimeMin} mnt (Target ≤ ${t.targetResponseMin} mnt)`
    : 'Belum direspons';

  byId('modal-tkt-resolution').textContent = typeof t.resolutionTimeMin === 'number'
    ? `${t.resolutionTimeMin} mnt (Target ≤ ${t.targetResolutionMin} mnt)`
    : (t.status === 'Selesai' ? 'Selesai diverifikasi' : 'Dalam proses berjalan');

  byId('modal-tkt-followup').textContent = t.followup || '-';

  byId('modal-btn-process').classList.toggle('hidden', t.status !== 'Baru');
  byId('modal-btn-resolve').classList.toggle('hidden', t.status === 'Selesai');

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
  byId('crm-kpi-cust-trend').textContent = `+2 baru bulan ini (${loyalCount} member loyal)`;

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

  // 2. Grafik
  updateCrmCharts(periodTickets);

  // 3. Tabel Tiket
  renderCrmTicketsTable(periodTickets);

  // 4. Panel Aktivitas
  renderCrmActivities();
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
    byId('form-add-ticket').classList.remove('hidden');
    byId('tkt-customer').focus();
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
      t.slaState = t.slaState === 'Melewati SLA' ? 'Melewati SLA' : 'Aman';
      t.responseTimeMin = t.responseTimeMin || 10;
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
      t.resolvedAt = '2026-11-19 13:10';
      t.resolutionTimeMin = t.resolutionTimeMin || (t.slaState === 'Melewati SLA' ? 145 : 35);
      t.slaState = (t.resolutionTimeMin <= t.targetResolutionMin && t.slaState !== 'Melewati SLA') ? 'Selesai' : 'Melewati SLA';
      t.elapsed = `Selesai (${t.resolutionTimeMin} mnt)`;
      saveState(STORAGE_KEYS.tickets, crmTickets);
      logActivity('ticket_resolved', 'Tiket Keluhan Selesai', `Tiket ${t.id} (${t.customer}) tuntas diselesaikan.`, 'task_alt', 'emerald');
      renderTickets();
      renderCrmDashboard();
      openTicketDetail(t.id);
      showToast(`Tiket ${t.id} ditandai Selesai`);
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
  // Pelanggan
  byId('toggle-customer-form').addEventListener('click', () => byId('form-add-customer').classList.toggle('hidden'));
  byId('cancel-customer-form').addEventListener('click', () => byId('form-add-customer').classList.add('hidden'));
  byId('form-add-customer').addEventListener('submit', (e) => {
    e.preventDefault();
    const nextNum = String(crmCustomers.length + 1).padStart(3, '0');
    const custName = byId('cust-name').value.trim();
    const custSegment = byId('cust-segment').value;
    const newCust = {
      id: `CUST-${nextNum}`,
      name: custName,
      wa: byId('cust-wa').value.trim(),
      email: byId('cust-email').value.trim(),
      joined: '2026-11-19',
      segment: custSegment,
      status: byId('cust-status').value,
      orders: 1,
      lastOrder: '2026-11-19'
    };
    crmCustomers.unshift(newCust);
    saveState(STORAGE_KEYS.customers, crmCustomers);
    logActivity('customer_registered', 'Pelanggan Baru Terdaftar', `${custName} (${custSegment}) berhasil ditambahkan ke database CRM.`, 'person_add', 'forest');
    renderCustomers();
    if (typeof renderCrmDashboard === 'function') renderCrmDashboard();
    e.target.reset();
    byId('form-add-customer').classList.add('hidden');
    showToast('Pelanggan baru berhasil ditambahkan ke database');
  });
  byId('cust-search').addEventListener('input', renderCustomers);
  byId('cust-filter-status').addEventListener('change', renderCustomers);

  // Ticketing & SLA
  byId('toggle-ticket-form').addEventListener('click', () => byId('form-add-ticket').classList.toggle('hidden'));
  byId('cancel-ticket-form').addEventListener('click', () => byId('form-add-ticket').classList.add('hidden'));
  byId('form-add-ticket').addEventListener('submit', (e) => {
    e.preventDefault();
    const slaState = byId('tkt-sla-state').value;
    const priority = byId('tkt-priority')?.value || 'Sedang';
    const pic = byId('tkt-pic')?.value || 'Admin WA CS';
    const customer = byId('tkt-customer').value.trim();
    const category = byId('tkt-category').value;
    const desc = byId('tkt-desc').value.trim();
    const followup = byId('tkt-followup').value.trim();
    const elapsedMap = {
      'Aman': '3 mnt (Batas 30 mnt)',
      'Mendekati Batas': '23 mnt (Batas 30 mnt)',
      'Melewati SLA': '35 mnt (Batas 30 mnt)'
    };
    const respTimeMap = {
      'Aman': 5,
      'Mendekati Batas': 23,
      'Melewati SLA': 35
    };
    const nextId = `TKT-${201 + crmTickets.length}`;
    const newTicket = {
      id: nextId,
      customerId: 'CUST-001',
      customer,
      category,
      priority,
      pic,
      desc,
      createdAt: '2026-11-19 13:00',
      targetResponseMin: 30,
      targetResolutionMin: 120,
      responseTimeMin: respTimeMap[slaState] || 8,
      resolutionTimeMin: null,
      resolvedAt: null,
      elapsed: elapsedMap[slaState] || 'Baru masuk',
      slaState,
      status: 'Baru',
      followup
    };
    crmTickets.unshift(newTicket);
    saveState(STORAGE_KEYS.tickets, crmTickets);
    logActivity('ticket_created', 'Tiket Baru Dibuat', `Tiket ${nextId} (${category}) diajukan untuk ${customer}.`, 'add_alert', 'amber');
    renderTickets();
    if (typeof renderCrmDashboard === 'function') renderCrmDashboard();
    e.target.reset();
    byId('form-add-ticket').classList.add('hidden');
    showToast(`Tiket keluhan ${nextId} berhasil dibuat`);
  });
  byId('tkt-filter-sla').addEventListener('change', renderTickets);

  // Template WA
  byId('wa-target-name').addEventListener('input', updateWaPreview);
  byId('wa-target-phone').addEventListener('input', updateWaPreview);
  byId('btn-copy-wa').addEventListener('click', () => {
    navigator.clipboard?.writeText(byId('wa-preview-box').value);
    showToast('Template pesan WhatsApp berhasil disalin');
  });

  // Kupon Member
  byId('toggle-coupon-form').addEventListener('click', () => byId('form-add-coupon').classList.toggle('hidden'));
  byId('cancel-coupon-form').addEventListener('click', () => byId('form-add-coupon').classList.add('hidden'));
  byId('form-add-coupon').addEventListener('submit', (e) => {
    e.preventDefault();
    crmCoupons.unshift({
      code: byId('cpn-code').value.trim().toUpperCase(),
      title: byId('cpn-title').value.trim(),
      discount: byId('cpn-discount').value.trim(),
      minOrder: 15000,
      period: byId('cpn-period').value.trim(),
      segment: 'Semua Member',
      terms: byId('cpn-terms').value.trim(),
      guide: byId('cpn-guide').value.trim()
    });
    saveState(STORAGE_KEYS.coupons, crmCoupons);
    renderCoupons();
    e.target.reset();
    byId('form-add-coupon').classList.add('hidden');
    showToast('Program kupon baru berhasil diterbitkan');
  });
  byId('btn-validate-coupon').addEventListener('click', validateCouponSimulation);

  // Reset simulasi CRM
  byId('reset-crm-demo').addEventListener('click', () => {
    crmCustomers = structuredClone(DEFAULT_CUSTOMERS);
    crmTickets = structuredClone(DEFAULT_TICKETS).map((t, idx) => normalizeTicket(t, idx));
    crmCoupons = structuredClone(DEFAULT_COUPONS);
    crmActivities = structuredClone(DEFAULT_ACTIVITIES);
    saveState(STORAGE_KEYS.customers, crmCustomers);
    saveState(STORAGE_KEYS.tickets, crmTickets);
    saveState(STORAGE_KEYS.coupons, crmCoupons);
    saveState(STORAGE_KEYS.activities, crmActivities);
    renderCustomers();
    renderTickets();
    renderCoupons();
    if (typeof renderCrmDashboard === 'function') renderCrmDashboard();
    showToast('Data simulasi CRM dikembalikan ke awal');
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
  if (['crm-dashboard', 'customers', 'tickets', 'whatsapp', 'coupons'].includes(initialHash)) {
    switchView(initialHash);
  }
}

document.addEventListener('DOMContentLoaded', initializeDashboard);