<script lang="ts">
    // Pure hardcoded UI tanpa state
    // Mengakomodasi skema Go Struct: Transaksi & Pembayaran
</script>

<section class="w-full max-w-6xl mx-auto p-4 md:p-6 lg:p-8 space-y-6 bg-white text-slate-900">
    
    <!-- Top Bar: Navigation & General Status -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200">
        <div class="flex items-center gap-3">
            <a 
                href="/transaksi" 
                class="p-2 -ml-2 text-slate-400 hover:text-slate-900 hover:bg-zinc-100 rounded-sm transition cursor-pointer"
                title="Kembali ke Daftar Transaksi"
            >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </a>
            <div>
                <div class="flex items-center gap-2">
                    <h1 class="text-xl font-bold tracking-tight text-slate-900">
                        Detail Transaksi
                    </h1>
                    <!-- Status (from Transaksi.Status) -->
                    <span class="text-xs font-medium px-2.5 py-0.5 rounded-sm bg-amber-50 text-amber-700 border border-amber-200">
                        Diproses
                    </span>
                </div>
                <!-- KodeOrderSistem & CreatedAt -->
                <p class="text-xs text-slate-500 mt-0.5 font-mono">
                    TRX-20260722-90182 <span class="text-zinc-300 mx-1">•</span> 22 Juli 2026, 14:30 WIB
                </p>
            </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-2">
            <button 
                type="button" 
                class="px-3.5 py-1.5 text-xs font-medium text-slate-700 border border-zinc-200 hover:bg-zinc-50 rounded-sm transition cursor-pointer"
            >
                Cetak Faktur
            </button>
            <button 
                type="button" 
                class="px-3.5 py-1.5 text-xs font-medium bg-slate-900 text-white hover:bg-slate-800 rounded-sm transition cursor-pointer"
            >
                Beli Lagi
            </button>
        </div>
    </div>

    <!-- Main Content Grid Layout (2 Kolom: Utama 65% / Panel Kanan 35%) -->
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        
        <!-- KOLOM KIRI (Detail Utama) -->
        <div class="space-y-6">
            
            <!-- Section 1: Barang yang Dibeli -->
            <div class="border border-zinc-200 rounded-sm p-4 space-y-4">
                <div class="flex items-center justify-between border-b border-zinc-100 pb-3">
                    <div class="flex items-center gap-2">
                        <!-- Seller Info -->
                        <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span class="text-xs font-semibold text-slate-900">Official Store Nike</span>
                    </div>
                    <span class="text-xs text-slate-400">ID Seller: 1024</span>
                </div>

                <!-- Item Row -->
                <div class="flex items-start gap-4">
                    <div class="w-20 h-20 bg-zinc-100 rounded-sm overflow-hidden shrink-0 border border-zinc-200">
                        <img 
                            src="src/constant/hm-removebg-preview.png" 
                            alt="Produk" 
                            class="w-full h-full object-cover" 
                        />
                    </div>
                    <div class="flex-1 min-w-0 space-y-1">
                        <span class="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                            Pakaian & Fashion
                        </span>
                        <h3 class="text-sm font-medium text-slate-900 leading-snug">
                            Sepatu Running Nike Air Zoom - Sepatu Olahraga Pria
                        </h3>
                        <p class="text-xs text-slate-500">
                            Ukuran: 42 <span class="text-zinc-300 mx-1">•</span> Warna: Hitam
                        </p>
                        <p class="text-xs text-slate-700 font-medium">
                            1 x <span class="font-mono">Rp 350.000</span>
                        </p>
                    </div>
                    <div class="text-right font-mono font-semibold text-sm text-slate-900">
                        Rp 350.000
                    </div>
                </div>

                <!-- Catatan Pembeli (from Transaksi.Catatan) -->
                <div class="bg-zinc-50 p-3 rounded-sm border border-zinc-200/60 text-xs space-y-1">
                    <span class="text-slate-400 font-medium block">Catatan untuk Penjual:</span>
                    <p class="text-slate-700">
                        Tolong bungkus pakai double bubble wrap ya min, buat kado ulang tahun.
                    </p>
                </div>
            </div>

            <!-- Section 2: Informasi Pengiriman & Alamat -->
            <div class="border border-zinc-200 rounded-sm p-4 space-y-4">
                <h2 class="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
                    Informasi Pengiriman
                </h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <!-- Alamat Tujuan (from Transaksi.AlamatPengguna) -->
                    <div class="space-y-1.5">
                        <span class="text-slate-400 font-medium block">Alamat Penerima</span>
                        <p class="font-semibold text-slate-900">Budi Santoso</p>
                        <p class="text-slate-600 leading-relaxed">
                            Jl. Raya Pajajaran No. 45, RT 02/RW 05, Baranangsiang, Bogor Timur, Kota Bogor, Jawa Barat 16143
                        </p>
                        <p class="text-slate-500 font-mono">+62 812-3456-7890</p>
                    </div>

                    <!-- Detail Kurir & Logistik -->
                    <div class="space-y-2 border-t sm:border-t-0 sm:border-l border-zinc-100 sm:pl-4 pt-3 sm:pt-0">
                        <div class="flex justify-between">
                            <span class="text-slate-400">Jenis Layanan</span>
                            <!-- IsEkspedisi / JenisPengiriman -->
                            <span class="font-medium text-slate-900">Ekspedisi (Reguler)</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-slate-400">Kendaraan</span>
                            <span class="font-medium text-slate-900">Motor</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-slate-400">Jarak Tempuh</span>
                            <span class="font-medium text-slate-900">12.5 km</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-slate-400">Berat Total</span>
                            <span class="font-medium text-slate-900">2 Kg</span>
                        </div>
                        <div class="flex justify-between pt-1 border-t border-zinc-100">
                            <span class="text-slate-400">No. Resi</span>
                            <!-- KodeResiEkspedisi -->
                            <span class="font-mono font-medium text-slate-900">JP-882910492</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section 3: Detail Pembayaran (from Pembayaran) -->
            <div class="border border-zinc-200 rounded-sm p-4 space-y-3">
                <h2 class="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
                    Informasi Pembayaran
                </h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div class="flex justify-between sm:justify-start sm:gap-6">
                        <span class="text-slate-400 w-28">Metode</span>
                        <span class="font-medium text-slate-900">Virtual Account (BCA)</span>
                    </div>
                    <div class="flex justify-between sm:justify-start sm:gap-6">
                        <span class="text-slate-400 w-28">Provider PG</span>
                        <span class="font-medium text-slate-900">Midtrans</span>
                    </div>
                    <div class="flex justify-between sm:justify-start sm:gap-6">
                        <span class="text-slate-400 w-28">Kode PG</span>
                        <span class="font-mono text-slate-800">PG-TRX-992014</span>
                    </div>
                    <div class="flex justify-between sm:justify-start sm:gap-6">
                        <span class="text-slate-400 w-28">Waktu Bayar</span>
                        <span class="font-mono text-slate-800">22 Jul 2026, 14:32</span>
                    </div>
                </div>
            </div>

        </div>

        <!-- KOLOM KANAN (Rincian Biaya & Status Ringkas) -->
        <div class="space-y-6">
            
            <!-- Card Rincian Tagihan -->
            <div class="border border-zinc-200 rounded-sm p-4 space-y-4 bg-zinc-50/50">
                <h2 class="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-zinc-200/60 pb-2">
                    Rincian Pembayaran
                </h2>

                <div class="space-y-2 text-xs">
                    <div class="flex justify-between text-slate-600">
                        <span>Harga Barang (1 item)</span>
                        <span class="font-mono">Rp 350.000</span>
                    </div>
                    <div class="flex justify-between text-slate-600">
                        <span>Ongkos Kirim</span>
                        <span class="font-mono">Rp 20.000</span>
                    </div>
                    <div class="flex justify-between text-slate-600">
                        <span>Biaya Penanganan / Sistem</span>
                        <span class="font-mono">Rp 2.000</span>
                    </div>
                    <div class="flex justify-between text-emerald-600">
                        <span>Diskon / Potongan</span>
                        <span class="font-mono">-Rp 10.000</span>
                    </div>

                    <div class="border-t border-zinc-200/80 pt-3 flex justify-between items-center">
                        <span class="font-semibold text-slate-900">Total Belanja</span>
                        <span class="font-bold font-mono text-base text-slate-900">
                            Rp 362.000
                        </span>
                    </div>
                </div>
            </div>

            <!-- Card Pembagian Bagi Hasil (Breakdown System & Seller Internal Fee) -->
            <div class="border border-zinc-200 rounded-sm p-4 space-y-3 bg-white">
                <h2 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Breakdown Alokasi (Internal)
                </h2>

                <div class="space-y-1.5 text-xs font-mono">
                    <div class="flex justify-between text-slate-600">
                        <span class="font-sans text-slate-400">Seller Paid:</span>
                        <span>Rp 340.000</span>
                    </div>
                    <div class="flex justify-between text-slate-600">
                        <span class="font-sans text-slate-400">Kurir Paid:</span>
                        <span>Rp 18.000</span>
                    </div>
                    <div class="flex justify-between text-slate-600">
                        <span class="font-sans text-slate-400">Ekspedisi Paid:</span>
                        <span>Rp 2.000</span>
                    </div>
                    <div class="flex justify-between text-slate-600">
                        <span class="font-sans text-slate-400">Sistem Paid:</span>
                        <span>Rp 2.000</span>
                    </div>
                </div>
            </div>

            <!-- Bantuan / Syarat -->
            <div class="p-3 bg-zinc-100 rounded-sm text-[11px] text-slate-500 space-y-1">
                <p class="font-medium text-slate-700">Butuh Bantuan?</p>
                <p class="leading-normal">
                    Jika ada kendala terkait pengiriman atau barang, Anda dapat mengajukan komplain sebelum status pesanan menjadi Selesai.
                </p>
                <a href="#help" class="text-slate-900 font-semibold hover:underline block pt-1">
                    Pusat Bantuan &rarr;
                </a>
            </div>

        </div>

    </div>

</section>