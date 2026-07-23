<script lang="ts">
    // Pure hardcoded UI tanpa state
    // Mengakomodasi skema Go Struct: Pengiriman & JejakPengiriman
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
                        Lacak Pengiriman Langsung
                    </h1>
                    <!-- Badging Jenis Pengiriman (Non Ekspedisi) -->
                    <span class="text-xs font-semibold px-2.5 py-0.5 rounded-sm bg-emerald-700 text-white">
                        DIRECT / INSTANT
                    </span>
                </div>
                <!-- ID Transaksi & Pengiriman -->
                <p class="text-xs text-slate-500 mt-0.5 font-mono">
                    ID Pengiriman: <span class="font-bold text-slate-800">SND-8820194</span> 
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
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hubungi Kurir
            </button>
        </div>
    </div>

    <!-- Main Content Layout (Grid 2 Kolom: Timeline Jejak 60% / Detail Logistik Direct 40%) -->
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
        
        <!-- KOLOM KIRI: TIMELINE JEJAK PENGIRIMAN (from JejakPengiriman) -->
        <div class="border border-zinc-200 rounded-sm p-5 space-y-6 bg-white ">
            <div class="flex items-center justify-between border-b border-zinc-100 pb-3">
                <h2 class="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Jejak Perjalanan Kurir
                </h2>
                <!-- Status dari Pengiriman.Status -->
                <span class="text-xs font-medium px-2.5 py-0.5 rounded-sm bg-blue-50 text-blue-700 border border-blue-200">
                    Status: On Delivery
                </span>
            </div>

            <!-- Card Profil Kurir Aktif -->
            <div class="flex items-center justify-between p-3 bg-zinc-50 border border-zinc-200 rounded-sm">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
                        KR
                    </div>
                    <div>
                        <p class="text-xs font-bold text-slate-900">Rian Ardianto</p>
                        <!-- IdKurir & KendaraanRequired -->
                        <p class="text-[11px] text-slate-500 font-mono">
                            ID Kurir: #KRR-0042 • Motor (B 4821 BCD)
                        </p>
                    </div>
                </div>
                <span class="text-[10px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-xs">
                    • Kurir Ditugaskan
                </span>
            </div>

            <!-- Vertical Timeline Component -->
            <div class="relative pl-6 space-y-6  p-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-200">
                
                <!-- Timeline Item 1 (Terbaru / Active) -->
                <div class="relative group">
                    <!-- Indicator Dot Active -->
                    <div class=" -left-6 top-1 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white ring-2 ring-emerald-600/20 flex items-center justify-center">
                        <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    
                    <div class="space-y-1">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-slate-900">
                                Kurir Dalam Perjalanan ke Alamat Penerima
                            </span>
                            <span class="text-[11px] font-mono text-slate-400">22 Jul 2026, 15:10</span>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Paket sudah diambil dari gudang penjual dan sedang diantar langsung menuju lokasi tujuan Anda.
                        </p>
                        <!-- Lokasi & Koordinat Geo (from JejakPengiriman) -->
                        <div class="flex items-center gap-3 pt-1 text-[10px] text-slate-400 font-mono">
                            <span>Lokasi: Jl. Raya Pajajaran</span>
                            <span>•</span>
                            <span>Lat/Long: -6.60124000, 106.80512000</span>
                        </div>
                    </div>
                </div>

                <!-- Timeline Item 2 -->
                <div class="relative group">
                    <div class=" -left-6 top-1 w-4 h-4 rounded-full bg-white border-2 border-zinc-400"></div>
                    
                    <div class="space-y-1">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-medium text-slate-800">
                                Kurir Mengambil Paket di Gudang (Picked Up)
                            </span>
                            <span class="text-[11px] font-mono text-slate-400">22 Jul 2026, 14:45</span>
                        </div>
                        <p class="text-xs text-slate-500 leading-relaxed">
                            Kurir telah sampai di gudang penjual dan memverifikasi fisik pesanan.
                        </p>
                        <div class="flex items-center gap-3 pt-1 text-[10px] text-slate-400 font-mono">
                            <span>Lokasi: Gudang Utama BSD</span>
                            <span>•</span>
                            <span>Lat/Long: -6.28821000, 106.67102000</span>
                        </div>
                    </div>
                </div>

                <!-- Timeline Item 3 (Awal) -->
                <div class="relative group">
                    <div class=" -left-6 top-1 w-4 h-4 rounded-full bg-white border-2 border-zinc-300"></div>
                    
                    <div class="space-y-1">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-medium text-slate-500">
                                Pesanan Diteruskan ke Sistem Kurir
                            </span>
                            <span class="text-[11px] font-mono text-slate-400">22 Jul 2026, 14:30</span>
                        </div>
                        <p class="text-xs text-slate-400 leading-relaxed">
                            Sistem mencari kurir terdekat untuk penjemputan barang secara langsung.
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <!-- KOLOM KANAN: SPESIFIKASI & RUTE DIRECT -->
        <div class="space-y-6">
            
            <!-- Rute Asal vs Tujuan Langsung (Point to Point) -->
            <div class="border border-zinc-200 rounded-sm p-4 space-y-4 bg-white">
                <h2 class="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-zinc-100 pb-2">
                    Rute Pengiriman Langsung
                </h2>

                <!-- Alamat Gudang (Asal) -->
                <div class="space-y-1 text-xs">
                    <div class="flex items-center gap-1.5 text-slate-400 font-medium">
                        <span class="w-2 h-2 rounded-full bg-slate-900 inline-block"></span>
                        <span>Asal (Gudang Penjual)</span>
                    </div>
                    <p class="font-semibold text-slate-900">Gudang Utama Nike Indonesia</p>
                    <p class="text-slate-600 text-[11px] leading-snug">
                        Kawasan Industri BSD Blok C3 No. 12, Serpong, Tangerang Selatan
                    </p>
                </div>

                <!-- Line Connector Direct Point -->
                <div class="flex items-center gap-2 px-1 my-1">
                    <div class="h-6 w-0.5 bg-zinc-200 ml-0.5"></div>
                    <span class="text-[10px] text-slate-400 font-mono">
                        Direct Delivery (Tanpa Hub)
                    </span>
                </div>

                <!-- Alamat Pengguna (Tujuan Langsung) -->
                <div class="space-y-1 text-xs">
                    <div class="flex items-center gap-1.5 text-emerald-600 font-medium">
                        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Tujuan Akhir (Pembeli)</span>
                    </div>
                    <p class="font-semibold text-slate-900">Budi Santoso</p>
                    <p class="text-slate-600 text-[11px] leading-snug">
                        Jl. Raya Pajajaran No. 45, Baranangsiang, Bogor Timur, Kota Bogor
                    </p>
                </div>
            </div>

            <!-- Detail Spesifikasi Pengiriman Direct -->
            <div class="border border-zinc-200 rounded-sm p-4 space-y-3 bg-zinc-50/50 text-xs">
                <h2 class="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-zinc-200/60 pb-2">
                    Detail Layanan
                </h2>

                <div class="space-y-2 text-slate-600">
                    <div class="flex justify-between">
                        <span>Jenis Layanan</span>
                        <span class="font-medium text-slate-900">Instant / Sameday</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Kendaraan Kurir</span>
                        <span class="font-medium text-slate-900">Motor</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Berat Total</span>
                        <span class="font-mono font-medium text-slate-900">2 Kg</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Jarak Tempuh</span>
                        <span class="font-medium text-slate-900">12.5 Km</span>
                    </div>
                    <div class="flex justify-between pt-2 border-t border-zinc-200/60">
                        <span class="font-medium text-slate-700">Ongkos Kurir (KurirPaid)</span>
                        <span class="font-mono font-bold text-slate-900">Rp 25.000</span>
                    </div>
                </div>
            </div>

            <!-- Card Bantuan Direct -->
            <div class="p-3 bg-white border border-zinc-200 rounded-sm text-[11px] text-slate-500 space-y-2">
                <p class="font-medium text-slate-900">Paket Belum Sampai?</p>
                <p class="leading-normal">
                    Anda dapat menghubungi kurir secara langsung atau membagikan pin lokasi penerima jika alamat sulit ditemukan.
                </p>
            </div>

        </div>

    </div>

</section>