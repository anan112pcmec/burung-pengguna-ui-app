<script lang="ts">
    // Pure hardcoded UI tanpa state
    // Mengakomodasi skema Go Struct: PengirimanEkspedisi & JejakPengirimanEkspedisi
</script>

<section class="w-full max-w-6xl mx-auto p-4 md:p-6 lg:p-8 space-y-6 bg-white text-slate-900">
    
    <!-- Top Bar: Navigation & Status Head -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200">
        <div class="flex items-center gap-3">
            <a 
                href="/transaksi" 
                class="p-2 -ml-2 text-slate-400 hover:text-slate-900 hover:bg-zinc-100 rounded-sm transition cursor-pointer"
                title="Kembali"
            >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </a>
            <div>
                <div class="flex items-center gap-2">
                    <h1 class="text-xl font-bold tracking-tight text-slate-900">
                        Lacak Pengiriman Ekspedisi
                    </h1>
                    <!-- Badging Jenis Pengiriman -->
                    <span class="text-xs font-semibold px-2.5 py-0.5 rounded-sm bg-slate-900 text-white">
                        EKSPEDISI
                    </span>
                </div>
                <!-- ID Transaksi & Resi -->
                <p class="text-xs text-slate-500 mt-0.5 font-mono">
                    Resi: <span class="font-bold text-slate-800">EXP-JP-99201928</span> 
                    <span class="text-zinc-300 mx-1">•</span> ID Transaksi: TRX-20260722-90182
                </p>
            </div>
        </div>

        <!-- Action Quick Button -->
        <div class="flex items-center gap-2">
            <button 
                type="button" 
                class="px-3.5 py-1.5 text-xs font-medium text-slate-700 border border-zinc-200 hover:bg-zinc-50 rounded-sm transition cursor-pointer flex items-center gap-1.5"
            >
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Salin No. Resi
            </button>
        </div>
    </div>

    <!-- Main Content Layout (Grid 2 Kolom: Timeline Jejak 60% / Detail Logistik 40%) -->
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
        
        <!-- KOLOM KIRI: TIMELINE JEJAK PENGIRIMAN (from JejakPengirimanEkspedisi) -->
        <div class="border border-zinc-200 rounded-sm p-5 space-y-6 bg-white p-4">
            <div class="flex items-center justify-between border-b border-zinc-100 pb-3">
                <h2 class="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Jejak Pelacakan Real-Time
                </h2>
                <!-- Status dari PengirimanEkspedisi.Status -->
                <span class="text-xs font-medium px-2.5 py-0.5 rounded-sm bg-amber-50 text-amber-700 border border-amber-200">
                    Status: Picked Up
                </span>
            </div>

            <!-- Vertical Timeline Component -->
            <div class="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-200">
                
                <!-- Timeline Item 1 (Terbaru / Active) -->
                <div class="relative group space-y-2">
                    <!-- Indicator Dot -->
                    <div class="-left-6 top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-white ring-2 ring-slate-900/20 flex items-center justify-center">
                        <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    
                    
                    <div class="space-y-1">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-slate-900">
                                Paket Tiba di Hub Ekspedisi Jakarta Barat
                            </span>
                            <span class="text-[11px] font-mono text-slate-400">22 Jul 2026, 18:20</span>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Paket telah diterima oleh tim sortir di sorting hub utama dan siap disalurkan ke kurir pengantar.
                        </p>
                        <!-- Lokasi & Korodinat Geo -->
                        <div class="flex items-center gap-3 pt-1 text-[10px] text-slate-400 font-mono">
                            <span>Lokasi: Jakarta Barat</span>
                            <span>•</span>
                            <span>Lat/Long: -6.16832100, 106.75885000</span>
                        </div>
                    </div>
                </div>

                <!-- Timeline Item 2 -->
                <div class="relative group">
                    <div class=" -left-6 top-1 w-4 h-4 rounded-full bg-white border-2 border-zinc-400"></div>
                    
                    <div class="space-y-1">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-medium text-slate-800">
                                Paket Diisi ulang/Diserahkan ke Kurir Pertama
                            </span>
                            <span class="text-[11px] font-mono text-slate-400">22 Jul 2026, 16:05</span>
                        </div>
                        <p class="text-xs text-slate-500 leading-relaxed">
                            Kurir pengumpul (Pickup Agent) sedang membawa paket dari Gudang Seller menuju Ekspedisi Hub.
                        </p>
                        <div class="flex items-center gap-3 pt-1 text-[10px] text-slate-400 font-mono">
                            <span>Lokasi: Gudang Penjual - Tangerang</span>
                            <span>•</span>
                            <span>Lat/Long: -6.17830000, 106.63188000</span>
                        </div>
                    </div>
                </div>

                <!-- Timeline Item 3 (Awal) -->
                <div class="relative group">
                    <div class=" -left-6 top-1 w-4 h-4 rounded-full bg-white border-2 border-zinc-300"></div>
                    
                    <div class="space-y-1">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-medium text-slate-500">
                                Pesanan Diproses & Siap Picked Up
                            </span>
                            <span class="text-[11px] font-mono text-slate-400">22 Jul 2026, 14:35</span>
                        </div>
                        <p class="text-xs text-slate-400 leading-relaxed">
                            Nomor resi berhasil dibuat. Penjual telah mengemas barang dan menunggu penjemputan pihak ekspedisi.
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <!-- KOLOM KANAN: SPESIFIKASI & RUTE PENGIRIMAN -->
        <div class="space-y-6">
            
            <!-- Rute Gudang vs Ekspedisi (Address Cards) -->
            <div class="border border-zinc-200 rounded-sm p-4 space-y-4 bg-white">
                <h2 class="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
                    Rute Ekspedisi
                </h2>

                <!-- Alamat Gudang (Asal) -->
                <div class="space-y-1 text-xs">
                    <div class="flex items-center gap-1.5 text-slate-400 font-medium">
                        <svg class="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>Asal (Gudang Penjual)</span>
                    </div>
                    <p class="font-semibold text-slate-900">Gudang Utama Nike Indonesia</p>
                    <p class="text-slate-600 text-[11px] leading-snug">
                        Kawasan Industri BSD Blok C3 No. 12, Serpong, Kota Tangerang Selatan, Banten
                    </p>
                </div>

                <div class="border-t border-dashed border-zinc-200 my-2"></div>

                <!-- Alamat Ekspedisi Hub (Tujuan Ekspedisi) -->
                <div class="space-y-1 text-xs">
                    <div class="flex items-center gap-1.5 text-slate-400 font-medium">
                        <svg class="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Tujuan Drop (Hub Ekspedisi)</span>
                    </div>
                    <p class="font-semibold text-slate-900">Drop Center JNE Express Kebon Jeruk</p>
                    <p class="text-slate-600 text-[11px] leading-snug">
                        Jl. Panjang No. 88A, Kedoya Selatan, Kebon Jeruk, Jakarta Barat, DKI Jakarta 11520
                    </p>
                </div>
            </div>

            <!-- Detail Spesifikasi Pengiriman -->
            <div class="border border-zinc-200 rounded-sm p-4 space-y-3 bg-zinc-50/50 text-xs">
                <h2 class="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-zinc-200/60 pb-2">
                    Spesifikasi Logistik
                </h2>

                <div class="space-y-2 text-slate-600">
                    <div class="flex justify-between">
                        <span>Layanan</span>
                        <span class="font-medium text-slate-900">Reguler</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Kendaraan Dibutuhkan</span>
                        <span class="font-medium text-slate-900">Motor</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Berat Barang</span>
                        <span class="font-mono font-medium text-slate-900">2 Kg</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Jarak Tempuh</span>
                        <span class="font-medium text-slate-900">18.4 Km</span>
                    </div>
                    <div class="flex justify-between">
                        <span>ID Kurir</span>
                        <span class="font-mono text-slate-800">#KRR-00921</span>
                    </div>
                    <div class="flex justify-between pt-2 border-t border-zinc-200/60">
                        <span class="font-medium text-slate-700">Kurir Paid (Fee)</span>
                        <span class="font-mono font-bold text-slate-900">Rp 18.000</span>
                    </div>
                </div>
            </div>

            <!-- Card Bantuan / Kontak -->
            <div class="p-3 bg-white border border-zinc-200 rounded-sm text-[11px] text-slate-500 space-y-2">
                <p class="font-medium text-slate-900">Kendala Pengiriman?</p>
                <p class="leading-normal">
                    Jika paket tidak mengalami pembaharuan status dalam 2x24 jam, hubungi kurir atau customer service ekspedisi.
                </p>
                <button 
                    type="button" 
                    class="w-full py-1.5 text-xs text-slate-800 font-medium border border-zinc-200 hover:bg-zinc-50 rounded-sm transition cursor-pointer"
                >
                    Hubungi Layanan Ekspedisi
                </button>
            </div>

        </div>

    </div>

</section>