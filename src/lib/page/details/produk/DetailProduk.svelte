<script lang="ts">
    // Mock Data berdasarkan Struct Go yang kamu berikan
    const barangInduk = {
        id_barang_induk: 101,
        id_seller: 12,
        nama: "Leather Courier Bag",
        jenis: "Premium Dedication",
        deskripsi: "Tas kulit premium dengan bahan berkualitas tinggi, desain minimalis modern cocok digunakan untuk berbagai aktivitas harian. Memiliki ruang penyimpanan luas dan nyaman dipakai sepanjang hari dengan durability yang telah teruji.",
        harga_kategori_barang: 150000 // Harga dasar/mulai dari
    };

    const kategoriBarang: any[] = [
        { id_kategori_barang: 1, nama_kategori_barang: "Obsidian Black", warna_kategori_barang: "#18181b", stok_kategori_barang: 12, harga_kategori_barang: 150000, sku_kategori: "LCB-BLK-01", is_original_kategori_barang: true },
        { id_kategori_barang: 2, nama_kategori_barang: "Ash Grey", warna_kategori_barang: "#71717a", stok_kategori_barang: 5, harga_kategori_barang: 165000, sku_kategori: "LCB-GRY-02", is_original_kategori_barang: true },
        { id_kategori_barang: 3, nama_kategori_barang: "Saddle Brown", warna_kategori_barang: "#78350f", stok_kategori_barang: 0, harga_kategori_barang: 150000, sku_kategori: "LCB-BRW-03", is_original_kategori_barang: true }
    ];

    const sellerInfo = {
        nama: "Archisan Studio",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop", // ganti pakai path/URL asli nanti
        badge: "Official Store",
        followers: "14.2k",
        total_penjualan: "48.9k",
        total_rating: "4.9 (12k ulasan)"
    };

    // State untuk varian yang dipilih (default varian pertama)
    let selectedVariant = $state(kategoriBarang[0]);
    let kuantitas = $state(1);

    function pilihVarian(varian: any) {
        if (varian.stok_kategori_barang > 0) {
            selectedVariant = varian;
        }
    }
</script>

<section class="w-full h-screen grid grid-cols-[36%_64%] overflow-hidden bg-white">
    <!-- KIRI: Area Foto (Diserahkan ke kreativitas/kebutuhan frame kamu) -->
    <div class="bg-zinc-100 relative overflow-hidden flex items-center justify-center border-r border-zinc-200">
        <span class="text-zinc-400 text-xs tracking-widest uppercase">Product Image Showcase</span>
    </div>

    <!-- KANAN: Detail Informasi (Minimalis & Terstruktur) -->
    <div class="h-full overflow-y-auto px-[8%] py-[6%] flex scrollbar-none flex-col justify-between text-slate-900 selection:bg-zinc-900 selection:text-white">
        
        <!-- Main Info Area -->
        <div class="space-y-8">
            <!-- Header & Badge -->
            <div class="space-y-2">
                <div class="flex items-center gap-2">
                    <span class="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded font-medium tracking-wider uppercase">
                        {barangInduk.jenis}
                    </span>
                    {#if selectedVariant.is_original_kategori_barang}
                        <span class="text-[10px] border border-zinc-200 text-zinc-500 px-2 py-0.5 rounded font-medium tracking-wider uppercase">
                            Original Certified
                        </span>
                    {/if}
                </div>
                <h1 class="text-3xl font-bold tracking-tight text-slate-950 font-sans">
                    {barangInduk.nama}
                </h1>
                <p class="text-xs text-zinc-400 font-mono tracking-wide">
                    SKU: {selectedVariant.sku_kategori}
                </p>
            </div>

            <!-- Pricing Area -->
            <div class="border-b border-zinc-100 pb-6">
                <div class="text-3xl font-semibold tracking-tight text-slate-900">
                    Rp {selectedVariant.harga_kategori_barang.toLocaleString('id-ID')}
                </div>
            </div>

            <!-- Description -->
            <div class="space-y-2">
                <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">Deskripsi</h3>
                <p class="text-xs text-slate-600/90 leading-relaxed font-light tracking-wide text-justify">
                    {barangInduk.deskripsi}
                </p>
            </div>

            <!-- Variant Selector -->
            <div class="space-y-3">
                <div class="flex justify-between items-center">
                    <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">Pilih Varian</h3>
                    <span class="text-[11px] text-zinc-500 font-medium">
                        {selectedVariant.nama_kategori_barang}
                    </span>
                </div>
                
                <div class="flex flex-wrap gap-2">
                    {#each kategoriBarang as varian}
                        <button 
                            onclick={() => pilihVarian(varian)}
                            disabled={varian.stok_kategori_barang === 0}
                            class="group relative px-4 py-2.5 rounded-md border text-xs font-medium tracking-wide transition-all flex items-center gap-2
                            {varian.stok_kategori_barang === 0 ? 'opacity-40 border-zinc-200 bg-zinc-50 cursor-not-allowed line-through text-zinc-400' : ''}
                            {selectedVariant.id_kategori_barang === varian.id_kategori_barang 
                                ? 'border-slate-900 bg-slate-900 text-white' 
                                : 'border-zinc-200 text-slate-800 hover:border-zinc-400'}"
                        >
                            <!-- Dot Warna Mikro -->
                            <span 
                                class="w-2.5 h-2.5 rounded-full border border-black/10 inline-block" 
                                style="background-color: {varian.warna_kategori_barang}">
                            </span>
                            {varian.nama_kategori_barang}
                        </button>
                    {/each}
                </div>
            </div>

            <!-- Stock Status & Management -->
            <div class="space-y-3">
    <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">Jumlah & Interaksi</h3>
    <div class="flex flex-wrap items-center gap-2.5">
        
        <!-- Counter Kuantitas (Dummy) -->
        <div class="flex items-center border border-zinc-200 rounded-md bg-white h-9">
            <button class="px-3 text-slate-600 hover:bg-zinc-50 text-sm h-full transition">-</button>
            <span class="px-2 text-xs font-mono font-medium text-slate-900 w-8 text-center select-none">
                1
            </span>
            <button class="px-3 text-slate-600 hover:bg-zinc-50 text-sm h-full transition">+</button>
        </div>

        <!-- Tombol LOVE (Dummy dengan Angka) -->
        <button class="group flex items-center gap-1.5 text-xs font-medium tracking-wide border border-zinc-200 bg-white text-slate-700 hover:border-zinc-400 h-9 px-3 rounded-md transition duration-300">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none"
                stroke="currentColor" 
                stroke-width="1.5" 
                class="w-4 h-4 text-slate-500 group-hover:text-red-500 group-hover:fill-red-500 transition-all"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <span class="font-mono text-[11px] font-semibold text-slate-600">
                342
            </span>
        </button>

        <!-- Tombol WISHLIST (Dummy Tanpa Angka) -->
        <button class="group flex items-center gap-1.5 text-xs font-medium tracking-wide border border-zinc-200 bg-white text-slate-700 hover:border-zinc-400 h-9 px-3 rounded-md transition duration-300">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.5" 
                class="w-4 h-4 text-slate-500 group-hover:text-slate-900 transition-colors"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            <span class="text-[11px] text-slate-600 tracking-wide">Wishlist</span>
        </button>

        <!-- Informasi Stok (Dummy) -->
        <span class="text-xs text-zinc-400 ml-auto lg:ml-2">
            Stok: <span class="font-medium text-slate-800 font-mono">12</span>
        </span>

    </div>
</div>
        </div>

        

        

        <!-- Sticky Bottom Action Button -->
        <div class="pt-8 border-t border-zinc-100 mt-8 flex gap-3">
            <button class="flex-[3] group flex items-center justify-center gap-2 text-xs font-medium tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition duration-300 py-3.5 rounded-lg shadow-sm">
                TAMBAH KE KERANJANG
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.56641 4C1.56641 3.58579 1.90219 3.25 2.31641 3.25H3.49696C4.61854 3.25 5.56885 4.07602 5.72504 5.18668L5.7862 5.62161H19.7507C21.3714 5.62161 22.4605 7.28344 21.8137 8.76953L19.1464 14.8979C18.789 15.719 17.9788 16.25 17.0833 16.25L7.72179 16.25C6.60021 16.25 5.6499 15.424 5.49371 14.3133L4.23965 5.39556C4.18759 5.02534 3.87082 4.75 3.49696 4.75H2.31641C1.90219 4.75 1.56641 4.41421 1.56641 4Z" fill="currentColor"/>
                </svg>
            </button>
            
            <button class="flex-1 border border-zinc-200 hover:border-zinc-400 text-slate-700 hover:bg-zinc-50 transition duration-300 py-3.5 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </button>
        </div>

    </div>
</section>
<div class="info-seller pl-5 pt-2 pr-5">
    <div class="space-y-4 pt-4 border-t border-zinc-100">
    <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">Informasi Penjual</h3>
    
    <div class="flex flex-col gap-4 bg-zinc-50/50 rounded-xl p-4 border border-zinc-100">
        <!-- Baris Atas: Profil Utama -->
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <!-- Avatar -->
                <div class="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden border border-zinc-300/30 flex-shrink-0">
                    <img src={sellerInfo.avatar} alt={sellerInfo.nama} class="w-full h-full object-cover" />
                </div>
                <!-- Nama & Badge -->
                <div class="space-y-0.5">
                    <div class="flex items-center gap-2">
                        <h4 class="text-sm font-semibold text-slate-900 tracking-tight">{sellerInfo.nama}</h4>
                        <span class="text-[9px] bg-zinc-900 text-white font-mono px-1.5 py-0.5 rounded tracking-wide uppercase scale-95 origin-left">
                            {sellerInfo.badge}
                        </span>
                    </div>
                    <p class="text-[11px] text-zinc-400 font-medium tracking-wide">{sellerInfo.followers} Pengikut</p>
                </div>
            </div>

            <!-- Tombol Aksi Toko -->
            <button class="text-[11px] font-medium tracking-wide text-slate-800 border border-zinc-200 hover:border-zinc-400 bg-white px-3 py-1.5 rounded-md transition">
                Kunjungi Toko
            </button>
        </div>

        <!-- Baris Bawah: Statistik Toko (Grid) -->
        <div class="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-200/40 text-[11px]">
            <div class="flex items-center gap-1.5 text-zinc-500">
                <span class="text-zinc-400">Total terjual:</span>
                <span class="font-semibold text-slate-800 font-mono">{sellerInfo.total_penjualan}</span>
            </div>
            <div class="flex items-center gap-1.5 text-zinc-500 justify-end">
                <span class="text-amber-500">★</span>
                <span class="font-semibold text-slate-800 font-mono">{sellerInfo.total_rating}</span>
            </div>
        </div>
    </div>
</div>
</div>
