<script lang="ts">
    import { fade } from "svelte/transition";
    import { Full } from "../../../../constant/UiConstant";
	import { goto } from "$app/navigation";

    // Mock Data berdasarkan Struct Go 'Seller'
    const seller = {
        id_seller: 12,
        username: "archisan_studio",
        nama: "Archisan Studio",
        email: "official@archisan.id",
        jenis: "Official Store",
        seller_dedication: "Pakaian & Fashion",
        jam_operasional: "08.00 - 20.00 WIB",
        punchline: "Crafting timeless aesthetic apparel for daily wear.",
        deskripsi: "Studio desain independen yang berfokus pada pakaian minimalis dan tahan lama.",
        status: "Online",
        created_at: "2023-01-15T00:00:00Z"
    };

    // State untuk interaksi tombol (Svelte 5 Runes)
    let isFollowed = $state(false);
    let isMuted = $state(false);

    function toggleFollow() {
        isFollowed = !isFollowed;
    }

    function toggleNotif() {
        isMuted = !isMuted;
    }

    let y = $state(0);
    let progress = $state(0);

    function updateProgress() {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        const totalScroll = documentHeight - windowHeight;

        progress = totalScroll > 0 
            ? (scrollTop / totalScroll) * 100 
            : 0;
    }

    $effect(() => {
        updateProgress();
    });

     let activeTab = $state<'home' | 'search' | 'stats'>('home');

    // List Navigasi Tab
    const tabs = [
        { id: 'home', label: 'Beranda Toko', go: 'seller-overview'},
        { id: 'search', label: 'Cari Produk', go: 'cari-produk'},
        { id: 'stats', label: 'Statistik & Detail', go: 'statistik-detail'}
    ] as const;

    function selectTab(id: 'home' | 'search' | 'stats') {
        activeTab = id;
    }
</script>

<svelte:window 
    bind:scrollY={y}
    onscroll={updateProgress}
/>

<header class="bg-white border-b border-zinc-200 selection:bg-slate-900 selection:text-white sticky top-0 z-40">
    <!-- TOP BAR: Brand Watermark & Progress Line -->
    <div class="{Full} px-6 py-1.5 flex items-center justify-between text-zinc-400 text-[10px] tracking-wider relative border-b border-zinc-100 font-mono">
        <div class="flex items-center gap-2 select-none">
            <!-- Icon Logo Burung Minimalis SVG -->
            <svg class="w-3.5 h-3.5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 7n-4 4 4 4" />
                <path d="M22 6c-3-1-7 1-10 4-3 3-5 7-6 11 3-1 7-3 10-6 3-3 5-7 6-9z" />
                <path d="M6 18c-2 1-4 1-5 0 0-2 1-4 2-5" />
            </svg>
            <span class="font-bold tracking-widest text-slate-900 uppercase">burunginc</span>
            <span class="text-zinc-300">/</span>
            <span class="text-zinc-500 font-normal">@{seller.username}</span>
        </div>

        <div class="flex gap-2 items-center">
            <button type="button" class="cursor-pointer hover:text-slate-900 transition px-1 py-0.5 rounded-xs" title="Opsi Toko">
                •••
            </button>
        </div>

        <!-- Scroll Progress Bar Indicator -->
        <div 
            class="absolute bottom-0 left-0 h-[2px] bg-slate-900 transition-all duration-75 ease-out" 
            style="width: {progress}%"
        ></div>
    </div>  

    <!-- MAIN HEADER CONTENT -->
    <section class="grid grid-cols-[5%_85%_10%] h-[7.5rem] px-4">
        
        <!-- KOLOM 1 (5%): Navigasi Kembali -->
        <div class="flex items-center justify-start h-full">
            <button 
                type="button" 
                aria-label="Kembali"
                class="p-2 text-zinc-400 hover:text-slate-900 hover:bg-zinc-100 rounded-sm transition duration-200 cursor-pointer"
            >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>
        </div>

        <!-- KOLOM 2 (85%): Informasi Utilitas Seller -->
        <div class="grid grid-cols-[20%_30%_50%] h-full items-center border-x border-zinc-100 px-4 gap-2">
            
            <!-- Sub-kolom 1 (20%): Foto Seller & Status Dot -->
            <div class="flex items-center justify-center">
                <div class="relative w-16 h-16 rounded-full bg-zinc-50 border border-zinc-200 overflow-hidden shrink-0 group">
                    <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" 
                        alt={seller.nama} 
                        class="w-full h-full object-cover transition duration-500 group-hover:scale-105" 
                    />
                    <!-- Indicator Status Online / Offline -->
                    <span 
                        class="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white 
                        {seller.status === 'Online' ? 'bg-emerald-500' : 'bg-zinc-400'}"
                        title="Status: {seller.status}"
                    ></span>
                </div>
            </div>

            <!-- Sub-kolom 2 (30%): Identitas, Punchline & Jam Operasional -->
            <div class="flex flex-col justify-center min-w-0 pr-3 space-y-1">
                <div class="flex items-center gap-1.5 truncate">
                    <h1 class="text-sm font-bold text-slate-900 truncate tracking-tight">
                        {seller.nama}
                    </h1>
                    <!-- Badge Jenis Seller -->
                    <span class="text-[9px] font-mono bg-slate-900 text-white px-1.5 py-0.5 rounded-xs uppercase tracking-wider shrink-0 font-medium">
                        {seller.jenis}
                    </span>
                </div>

                <!-- Punchline -->
                <p class="text-[11px] text-zinc-500 truncate font-normal leading-tight italic">
                    "{seller.punchline}"
                </p>

                <!-- Metadata Operasional -->
                <div class="flex items-center gap-2 pt-0.5 text-[10px] text-zinc-400 font-mono">
                    <span class="truncate">🕒 {seller.jam_operasional}</span>
                    <span>•</span>
                    <span class="truncate">{seller.seller_dedication}</span>
                </div>
            </div>

            <!-- Sub-kolom 3 (50%): Statistik Ringkas E-Commerce -->
            <div class="grid grid-cols-4 gap-2 border-l border-zinc-100 pl-6 items-center">
                
                <div class="flex flex-col">
                    <span class="text-[10px] uppercase font-semibold tracking-[0.15em] text-zinc-400">
                        Rating
                    </span>
                    <span class="text-xs font-bold font-mono text-slate-900 mt-1 flex items-center gap-1">
                        <span class="text-amber-500 text-xs">★</span> 4.9 <span class="text-[10px] font-normal text-zinc-400">(12.4k)</span>
                    </span>
                </div>

                <div class="flex flex-col">
                    <span class="text-[10px] uppercase font-semibold tracking-[0.15em] text-zinc-400">
                        Pengikut
                    </span>
                    <span class="text-xs font-bold font-mono text-slate-900 mt-1">
                        48.2k
                    </span>
                </div>

                <div class="flex flex-col">
                    <span class="text-[10px] uppercase font-semibold tracking-[0.15em] text-zinc-400">
                        Terjual
                    </span>
                    <span class="text-xs font-bold font-mono text-slate-900 mt-1">
                        150.3k
                    </span>
                </div>

                <div class="flex flex-col">
                    <span class="text-[10px] uppercase font-semibold tracking-[0.15em] text-zinc-400">
                        Chat
                    </span>
                    <span class="text-xs font-bold font-mono text-emerald-600 mt-1">
                        99% <span class="text-[9px] font-normal text-zinc-400">Balas</span>
                    </span>
                </div>

            </div>

        </div>

        <!-- KOLOM 3 (10%): Action Buttons -->
        <div class="flex items-center justify-end gap-2 h-full pl-2">
            <!-- Mute / Unmute Notif -->
            <button 
                type="button" 
                onclick={toggleNotif}
                title={isMuted ? "Aktifkan Notifikasi" : "Mute Notifikasi"}
                class="p-2 border border-zinc-200 hover:border-slate-400 text-slate-600 rounded-xs transition duration-150 cursor-pointer bg-white"
            >
                {#if isMuted}
                    <svg class="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25M10.5 6a7.5 7.5 0 017.5 7.5v3h1.5m-18 0h16.5M12 21a2.25 2.25 0 002.25-2.25h-4.5A2.25 2.25 0 0012 21z" />
                    </svg>
                {:else}
                    <svg class="w-4 h-4 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 01-5.714 0" />
                    </svg>
                {/if}
            </button>

            <!-- Toggle Follow Button -->
            <button 
                type="button" 
                onclick={toggleFollow}
                class="px-3.5 py-2 text-xs/  font-medium tracking-tight rounded-xs transition duration-200 cursor-pointer shrink-0
                {isFollowed 
                    ? 'border border-zinc-200 bg-zinc-50 text-slate-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'}"
            >
                {isFollowed ? 'Mengikuti' : '+ Ikuti'}
            </button>
        </div>
    </section>
</header>
<section 
    id="select-page" 
    class="w-full bg-white border-b border-zinc-200 sticky rem] z-30 selection:bg-slate-900 selection:text-white"
>
    <div class="px-6 lg:px-12 flex items-center justify-between text-xs">
        
        <!-- Tab Buttons Container -->
        <div class="flex items-center gap-1 sm:gap-6">
            {#each tabs as tab}
                <button
                    type="button"
                    onclick={() => {
                        selectTab(tab.id)
                        goto(tab.go)
                    }}
                    class="relative py-3.5 px-2.5 sm:px-4 flex items-center gap-2 font-medium tracking-wider uppercase transition-colors duration-150 cursor-pointer select-none
                    {activeTab === tab.id ? 'text-slate-900 font-bold' : 'text-zinc-400 hover:text-slate-700'}"
                >
                    <!-- Micro Number Indexing -->

                    <span>{tab.label}</span>

                    <!-- Active Indicator Line (Bottom Border Accent) -->
                    {#if activeTab === tab.id}
                        <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900"></div>
                    {/if}
                </button>
            {/each}
        </div>

        <!-- Quick Filter / Display Info (Kanan) -->
        <div class="hidden md:flex items-center gap-2 text-[10px] text-zinc-400 font-mono uppercase tracking-widest">
            <span>Tampilan:</span>
            <span class="text-slate-900 font-semibold px-2 py-0.5 bg-zinc-100 rounded-xs">
                {activeTab === 'home' ? 'Katalog Utama' : activeTab === 'search' ? 'Katalog Pencarian' : 'Rincian Performa'}
            </span>
        </div>

    </div>
</section>

