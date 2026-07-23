<script lang="ts">
    // Pure hardcoded UI tanpa state
</script>

{#snippet ListTransaksi()}
    <!-- Container Utama Kartu Transaksi -->
    <div class="grid grid-cols-[70%_30%] w-full min-h-[12rem] bg-white  hover:border hover:rounded-sm hover:border-zinc-300 transition duration-700 overflow-hidden shadow-xs">
        
        <!-- Kolom Kiri: Detail Utama (Grid 3 Row) -->
        <div class="grid grid-rows-[auto_1fr_auto] p-4 gap-3 border-r border-zinc-100">
            
            <!-- Row 1 (Header Transaksi): Meta Data Penting -->
            <div class="flex items-center justify-between text-xs text-slate-500 border-b border-zinc-100 pb-2">
                <div class="flex items-center gap-2">
                    <span class="font-medium text-slate-900">22 Jul 2026</span>
                    <span class="text-zinc-300">•</span>
                    <span class="font-mono text-slate-600">TRX-8930219482</span>
                    <span class="text-zinc-300">•</span>
                    <span class="text-slate-600">3 Barang</span>
                </div>
                
                <!-- Status Badge (Diproses) -->
                <span class="text-[11px] font-medium px-2 py-0.5 rounded-sm bg-amber-50 text-amber-700 border border-amber-200/60">
                    Diproses
                </span>
            </div>

            <!-- Row 2 (Detail Barang & Harga): Adaptasi dari Cart Item -->
            <div class="flex items-center justify-between gap-4 py-1">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="relative w-14 h-14 bg-zinc-100 rounded-sm overflow-hidden shrink-0 border border-zinc-200">
                        <img 
                            src="src/constant/hm-removebg-preview.png" 
                            alt="Product" 
                            class="w-full h-full object-cover" 
                        />
                    </div>
                    <div class="min-w-0 space-y-0.5">
                        <p class="text-[10px] text-slate-400 font-medium uppercase tracking-wider truncate">
                            Official Store Nike
                        </p>
                        <h4 class="text-xs font-semibold text-slate-800 truncate leading-tight">
                            Sepatu Running Nike Air Zoom - Sepatu Olahraga
                        </h4>
                        <p class="text-[11px] text-slate-500">
                            Hitam / 42 • <span class="text-slate-700 font-medium">1x Rp 150.000</span>
                        </p>
                    </div>
                </div>

                <!-- Total Belanja Transaksi -->
                <div class="text-right shrink-0 border-l border-zinc-100 pl-4">
                    <span class="text-[10px] text-slate-400 block">Total Belanja</span>
                    <span class="text-sm font-bold text-slate-900 font-mono">
                        Rp 450.000
                    </span>
                </div>
            </div>

            <!-- Row 3 (Footer Actions & Info Kebijakan) -->
            <div class="flex items-center justify-between text-xs pt-2 border-t border-zinc-100 mt-auto">
                <span class="text-[10px] text-slate-400 flex items-center gap-1">
                    <svg class="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Garansi dikembalikan jika barang tidak sesuai
                </span>

                <div class="flex items-center gap-2">
                    <button type="button" class="px-3 py-1 text-xs border border-zinc-200 text-slate-700 hover:bg-zinc-50 rounded-sm transition cursor-pointer">
                        Lihat detail
                    </button>
                    <button type="button" class="px-3 py-1 text-xs bg-slate-900 text-white font-medium hover:bg-slate-800 rounded-sm transition cursor-pointer">
                        Beli lagi
                    </button>
                    <button type="button" class="px-1.5 py-1 text-slate-400 hover:text-slate-800 transition cursor-pointer" title="Opsi lainnya">
                        •••
                    </button>
                </div>
            </div>
        </div>

        <!-- Kolom Kanan: Pengiriman & Logistik (30%) -->
        <div class="bg-zinc-50/50 p-3.5 flex flex-col justify-between text-xs space-y-3">
            <!-- Header Tipe Pengiriman -->
            <div class="flex items-center justify-between border-b border-zinc-200/60 pb-2">
                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Pengiriman
                </span>
                <span class="text-[10px] font-medium px-2 py-0.5 rounded-xs bg-slate-900 text-white">
                    Ekspedisi
                </span>
            </div>

            <!-- Detail Logistik dari Struct -->
            <div class="space-y-2 text-slate-600 text-[11px]">
                <div class="flex justify-between items-center">
                    <span class="text-slate-400">Layanan</span>
                    <span class="font-medium text-slate-800">Reguler (Motor)</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-slate-400">Resi</span>
                    <span class="font-mono text-slate-800 font-medium">JP-92049182</span>
                </div>
                
                <!-- Latest Tracking Info (JejakPengiriman) -->
                <div class="bg-white p-2 rounded-xs border border-zinc-200 space-y-1">
                    <span class="text-[9px] text-amber-700 font-medium block">
                        • Posisi Terakhir
                    </span>
                    <p class="text-[10px] text-slate-700 font-medium leading-tight truncate">
                        Gudang Transit Jakarta Barat
                    </p>
                    <p class="text-[9px] text-slate-400">
                        Paket telah diserahterimakan ke kurir
                    </p>
                </div>
            </div>

            <!-- Footer Kolom Pengiriman -->
            <div class="pt-2 border-t border-zinc-200/60 flex items-center justify-between text-[10px] text-slate-400">
                <span>Berat: 1.2 Kg</span>
                <a href="#track" class="text-slate-800 font-medium hover:underline">Lacak paket &rarr;</a>
            </div>
        </div>

    </div>
{/snippet}

<section id="transaksi-result" class="mt-2 overflow-y-auto scrollbar-none p-4 lg:p-6 space-y-4">
    {#each Array(5) as _}
        {@render ListTransaksi()}
    {/each}
</section>