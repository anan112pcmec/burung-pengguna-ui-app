<script lang="ts">
	import type { Action } from 'svelte/action';
	import type { kartuPengenalanData } from './types';
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import { fade } from 'svelte/transition';
	import { navbarState } from '$lib/state/general/state.svelte';
	import { Full } from '../../../../constant/UiConstant';
    const KontenKartuKanan: kartuPengenalanData[] = [
        {
            header: "Barang-barang",
            isi: Card1,
        },
         {
            header: "Layanan",
            isi: Card2,
        },
         {
            header: "Kecepatan",
            isi: Card3,
        }
    ]
    let pos: number = 0;

    let rotate:boolean = $state(false)

    const animationCard: Action = (node) => {
        let Cards: HTMLElement[] = [];
        let order = Array.from({ length: KontenKartuKanan.length }, (_, i) => i);

        // 1. Kumpulkan elemen kartu
        for (let i = 0; i < KontenKartuKanan.length; i++) {
            const existCard = node.getElementsByClassName(`card_${i}`)[0] as HTMLElement;
            if (existCard) {
                Cards.push(existCard);
                // CATATAN: z-index DIHAPUS dari transisi agar berubah secara INSTAN saat di luar tumpukan
                existCard.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease";
                existCard.style.cursor = "pointer";
                existCard.style.userSelect = "none";
            }
        }

        // 2. Fungsi hitung posisi & gaya visual
        const updateCardStyles = (animatingIndex?: number, direction?: 'up' | 'down') => {
            Cards.forEach((card, originalIndex) => {
                const currentPosition = order.indexOf(originalIndex);

                // POSISI DEFAULT (Saat diam / tumpukan rapi)
                let translateY = -(currentPosition * 15);
                let translateX = (currentPosition * 15);
                let rotateDeg = 4;
                let skewDeg = 4;
                let opacity = currentPosition === 0 ? "1" : "0.9";
                let zIndex = 30 - (currentPosition * 10);

                // FASE ANIMASI: Ketika kartu depan ditarik/dilepas
                if (animatingIndex !== undefined && direction) {
                    const isFrontCard = (originalIndex === animatingIndex);

                    if (isFrontCard) {
                        // Kartu depan melompat keluar & menukik dramatis
                        const dirSign = direction === 'up' ? -1 : 1;
                        translateY = (dirSign * 130); // sedikit dinaikkan jangkauannya agar benar-benar bebas dari tumpukan
                        translateX = -40; 
                        rotateDeg = direction === 'up' ? -12 : 15; 
                        skewDeg = -5;
                        zIndex = 40; // Tetap di paling depan saat melayang keluar
                        opacity = "0.6"; // Sedikit memudar saat melayang keluar
                    } else {
                        // Kartu belakang "merunduk" sedikit memberi jalan
                        const dirSign = direction === 'up' ? 1 : -1;
                        translateY = -(currentPosition * 15) + (dirSign * 12);
                        translateX = (currentPosition * 15) - 6;
                        rotateDeg = 2; 

                        // Kartu kedua langsung naik prioritas z-index agar siap jadi kartu utama
                        if (currentPosition === 1) {
                            zIndex = 35;
                        }
                    }
                }

                // Terapkan z-index secara instan & jalankan transformasi transform
                card.style.zIndex = zIndex.toString();
                card.style.opacity = opacity;
                card.style.transform = `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotateDeg}deg) skewX(${skewDeg}deg)`;
            });
        };

        // 3. Pasang event handler drag & swipe
        const handlers = Cards.map((card, originalIndex) => {
            let startY = 0;

            const handleStart = (e: MouseEvent | TouchEvent) => {
                const currentPosition = order.indexOf(originalIndex);
                if (currentPosition !== 0) return; 

                startY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
            };

            const handleEnd = (e: MouseEvent | TouchEvent) => {
                const currentPosition = order.indexOf(originalIndex);
                if (currentPosition !== 0) return;

                const endY = e instanceof MouseEvent ? e.clientY : e.changedTouches[0].clientY;
                const deltaY = endY - startY;

                let direction: 'up' | 'down' = 'up'; 
                if (Math.abs(deltaY) > 15) {
                    direction = deltaY < 0 ? 'up' : 'down';
                }

                triggerSwap(originalIndex, direction);
            };

            const triggerSwap = (targetIndex: number, direction: 'up' | 'down') => {
                // LOMPAT: Kartu depan melayang keluar, kartu belakang merunduk
                updateCardStyles(targetIndex, direction);

                // RESET: Saat kartu berada di luar tumpukan (250ms), pindahkan ke antrean belakang
                setTimeout(() => {
                    const first = order.shift();
                    if (first !== undefined) {
                        order.push(first);
                    }
                    
                    // Urutan array baru diterapkan. Kartu yang tadi melayang sekarang mendapat z-index: 10 secara INSTAN, 
                    // sehingga saat meluncur kembali ke posisi barunya, dia otomatis lewat belakang tumpukan.
                    updateCardStyles();
                }, 250); 
            };

            card.addEventListener('mousedown', handleStart);
            card.addEventListener('mouseup', handleEnd);
            card.addEventListener('touchstart', handleStart, { passive: true });
            card.addEventListener('touchend', handleEnd);

            return { 
                card, 
                cleanup: () => {
                    card.removeEventListener('mousedown', handleStart);
                    card.removeEventListener('mouseup', handleEnd);
                    card.removeEventListener('touchstart', handleStart);
                    card.removeEventListener('touchend', handleEnd);
                } 
            };
        });

        updateCardStyles();

        return {
            destroy() {
                handlers.forEach(({ cleanup }) => cleanup());
            }
        };
    };

    interface FeaturedProduct {
        id: number;
        name: string;
        status: 'Tersedia' | 'Pre-Order' | 'Stok Habis';
    }

    const statsCard1 = {
        trendRank: "#1",
        category: "Elektronik",
        newItemsCount: "+24"
    };

    const mainProductCard1 = {
        category: "Gadget",
        price: "Rp 2.499.000"
    };

    const featuredProductsCard1: FeaturedProduct[] = [
        { id: 1, name: "Wireless Earbuds X", status: "Tersedia" },
        { id: 2, name: "Mechanical Keyboard 65%", status: "Tersedia" },
        { id: 3, name: "Ultra-wide Monitor 29\"", status: "Pre-Order" },
        { id: 4, name: "Deskmat Minimalist", status: "Stok Habis" }
    ];

    interface SpeedDashboard {
        mainMetric: string;
        subText: string;
        ping: string;
        status: string;
    }

    const speedData: SpeedDashboard = {
        mainMetric: "0.18s",
        subText: "Waktu Respon Instan",
        ping: "12ms",
        status: "99.9% Aktif"
    };
</script>

<!-- ### SNIPPET -->

{#snippet Card1()}
    <div class="p-1.5 grid grid-rows-[35%_65%] {Full} gap-1.5 text-slate-800">
        <div class="p-1.5 space-x-1.5 grid grid-cols-[35%_65%] bg-white border border-zinc-800/20 rounded-sm">
            <div class="bg-slate-950 rounded-xs flex flex-col justify-center items-center text-white p-1">
                <span class="text-[8px] uppercase tracking-[0.18em] text-white/50 font-medium">TREND</span>
                <span class="text-xs font-bold font-mono tracking-tight">{statsCard1.trendRank}</span>
            </div>
            <div class="bg-slate-50 border border-zinc-800/10 rounded-xs p-1 flex flex-col justify-between">
                <div class="flex justify-between items-center">
                    <span class="text-[8px] font-bold text-slate-900/40 uppercase tracking-[0.18em]">{statsCard1.category}</span>
                    <span class="h-1.5 w-1.5 rounded-full bg-slate-950"></span>
                </div>
                <div class="flex justify-between items-baseline">
                    <span class="text-[10px] font-medium text-slate-800 uppercase tracking-wider">Barang Baru</span>
                    <span class="text-[9px] text-slate-900 font-mono font-bold">{statsCard1.newItemsCount}</span>
                </div>
            </div>
        </div>

        <div class="p-0.5 space-x-1.5 grid grid-cols-[35%_65%]">
            <div class="bg-white border border-zinc-800/20 rounded-sm p-1.5 flex flex-col justify-between">
                <div class="w-full aspect-square bg-zinc-400/15 border border-zinc-950/5 rounded-xs flex items-center justify-center relative overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-slate-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375 0 1 1-.75 0 .375 0 0 1 .75 0Z" />
                    </svg>
                </div>
                <div class="mt-1">
                    <p class="text-[8px] text-slate-900/50 uppercase tracking-wider truncate font-medium">{mainProductCard1.category}</p>
                    <p class="text-[10px] font-bold font-mono text-slate-900 truncate">{mainProductCard1.price}</p>
                </div>
            </div>

            <div class="bg-white border border-zinc-800/20 rounded-sm p-1.5 flex flex-col justify-between">
                <div class="space-y-1 flex-1 flex flex-col justify-center">
                    {#each featuredProductsCard1 as item (item.id)}
                        <div class="flex items-center justify-between p-1 rounded-xs bg-slate-50 border border-zinc-800/10">
                            <div class="flex items-center gap-1.5 min-w-0">
                                <div class="w-3.5 h-3.5 rounded-xs bg-slate-950/10 flex-shrink-0"></div>
                                <span class="text-[9px] font-medium text-slate-800 truncate">{item.name}</span>
                            </div>
                            <span class="text-[8.5px] font-mono font-bold text-slate-950 uppercase border border-zinc-800/20 px-1 rounded-xs flex-shrink-0">{item.status}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
{/snippet}

{#snippet Card2()}
    <div class="grid grid-rows-[75%_25%] {Full} bg-white border border-zinc-800/20 rounded-sm p-2">
        <div class="flex items-center justify-center overflow-hidden">
            <DotLottieSvelte
                src="src\constant\Customer_Support.json"
                autoplay={true}
                loop={true}
                speed={1}
            />
        </div>
        <div class="flex items-center justify-center px-2 text-center border-t border-zinc-800/10 pt-2">
            <p class="text-[10px] font-light text-slate-700 tracking-wide leading-relaxed">
                Dukungan penuh 24/7 siap membantu setiap kebutuhan transaksimu dengan cepat dan responsif.
            </p>
        </div>
    </div>
{/snippet}

{#snippet Card3()}
    <div class="p-1.5 grid grid-cols-[55%_45%] {Full} gap-1.5 text-slate-800">
        
        <div class="bg-white border border-zinc-800/20 rounded-sm p-3 flex flex-col justify-between relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-slate-950"></div>
            
            <div class="flex justify-between items-center pl-1">
                <span class="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-950/50">PERFORMA</span>
                <span class="inline-flex items-center px-1.5 py-0.5 rounded-xs text-[8px] font-mono uppercase font-bold bg-slate-950 text-white">
                    LIVE
                </span>
            </div>
            
            <div class="my-auto pl-1">
                <h2 class="text-3xl font-bold font-mono tracking-tight text-slate-950 leading-none">
                    {speedData.mainMetric}
                </h2>
                <p class="text-[9px] text-slate-600/80 font-light mt-1.5 tracking-wide">
                    {speedData.subText}
                </p>
            </div>
        </div>

        <div class="grid grid-rows-2 gap-1.5">
            <div class="bg-slate-950 text-white rounded-sm p-2 flex items-center justify-between">
                <div class="flex flex-col">
                    <span class="text-[8px] uppercase tracking-[0.18em] text-white/50">PING JARINGAN</span>
                    <span class="text-xs font-bold font-mono tracking-tight mt-0.5">{speedData.ping}</span>
                </div>
                <div class="w-5 h-5 rounded-xs bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span class="w-1.5 h-1.5 bg-white rounded-full animate-ping absolute"></span>
                    <span class="w-1.5 h-1.5 bg-white rounded-full relative"></span>
                </div>
            </div>

            <div class="bg-white border border-zinc-800/20 rounded-sm p-2 flex flex-col justify-between">
                <div class="flex justify-between items-center">
                    <span class="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-950/50">UPTIME</span>
                    <span class="text-[9px] font-mono font-bold text-slate-950 uppercase">{speedData.status}</span>
                </div>
                <div class="w-full bg-slate-100 h-1.5 rounded-xs overflow-hidden mt-1 border border-zinc-800/10">
                    <div class="bg-slate-950 h-full w-[95%] rounded-xs"></div>
                </div>
            </div>
        </div>

    </div>
{/snippet}
<!-- ###SNIPPET -->

<style>
    .searching * {
    transform: none !important;
    perspective: none !important;
    transform-style: flat !important;
}

    .perspective-1000 {
    perspective: 1000px;
}

    .transform-style-3d {
        transform-style: preserve-3d;
    }

    .card-flipped {
        transform: rotateY(180deg);
    }

    .backface-hidden {
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }

    .rotate-y-180 {
      transform: rotateY(180deg);
    }
</style>
<section id="pengenalan" class="w-full mb-4 h-[22rem] p-2 grid grid-cols-[42%_18%_40%] z-10">
<section id="signup-login" class="flex justify-center items-center h-[20rem] {navbarState.searching ? "": "perspective-1000"}  {navbarState.searching ? "": "perspective-1000"}"
>
        
    <div
        class="relative w-full max-w-md h-full transition-transform duration-700 {navbarState.searching ? "": "transform-style-3d" }"
        class:card-flipped={rotate}
    >

       <div
            class="absolute inset-0 backface-hidden border border-zinc-900/10 p-6 bg-gradient-to-br w-[95%] from-slate-100/60 via-slate-100/40 to-white/30 {navbarState.searching ? "": "backdrop-blur-xl"} rounded-sm grid grid-rows-[50%_50%] overflow-hidden shadow-xl shadow-slate-900/5"
            style:z-index={rotate && !navbarState.searching ? 10 : 20}
        >
            <div class="relative overflow-hidden">
                <div class="absolute -top-20 -right-20 w-40 h-40 bg-white/50 blur-3xl rounded-full"></div>

                <div class="grid grid-cols-[15%_75%_10%] relative">
                    <div></div>

                    <div>
                        <h1 class="text-left mt-6 font-bold text-4xl text-slate-950 font-sans tracking-tight uppercase leading-none">
                            JUAL BELI JADI GAMPANG
                        </h1>

                        <div class="mt-2 w-[30%] h-1 rounded-none bg-slate-950"></div>
                    </div>

                    <div></div>
                </div>
            </div>


            <div>
                <div class="grid grid-cols-[15%_75%_10%] h-full">

                    <div></div>

                    <div class="flex flex-col justify-between pb-6">

                        <h4 class="text-left font-sans text-sm text-slate-700 font-light leading-relaxed">
                            Bersama Burung temukan barang incaranmu dengan usapan jari
                        </h4>


                        <div class="space-x-4 flex justify-left mt-4 mb-10">

                            <button
                                class="group relative overflow-hidden text-white bg-slate-950 px-4 py-2 rounded-xs transition duration-300 shadow-md shadow-slate-900/10 hover:shadow-lg hover:bg-slate-800"
                            >
                              <span class="relative z-10 text-xs font-medium uppercase tracking-wider" onclick={() => {
                                    window.scrollBy({
                                        top: 478, 
                                        behavior: 'smooth' 
                                    });
                                }}>
                                    Tentang Kami
                                </span>
                            </button>


                            <button
                                onclick={() => rotate = true}
                                class="relative px-4 py-2 rounded-xs border border-slate-900/20 text-xs font-medium uppercase tracking-wider text-slate-950 hover:border-slate-950 transition duration-300 hover:bg-slate-950 hover:text-white"
                            >
                                Bergabung
                            </button>

                        </div>

                    </div>

                    <div></div>

                </div>
            </div>

        </div>


        <div
            class="absolute inset-0 backface-hidden rotate-y-180 bg-slate-50 border border-zinc-900/10 rounded-sm flex flex-col justify-center py-4 sm:px-6 lg:px-8 overflow-y-auto"
            style:z-index={rotate && !navbarState.searching ? 20 : 10}
        >
            <div class="sm:mx-auto sm:w-full sm:max-w-sm px-4">

                <h1 class="text-left font-sans font-bold text-xl text-slate-950 tracking-wider uppercase">
                    LOGIN
                </h1>

                <div class="mt-3">
                    <form class="space-y-2.5" onsubmit={(e) => e.preventDefault()}>

                        <div>
                            <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                                Email
                            </label>

                            <input 
                                type="email"
                                class="w-full rounded-xs border border-slate-300 p-2 text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:border-slate-950 focus:ring-1 focus:ring-slate-950 transition"
                                placeholder="name@example.com"
                                required
                            />
                        </div>


                        <div>
                            <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                                Password
                            </label>

                            <input
                                type="password"
                                class="w-full rounded-xs border border-slate-300 p-2 text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:border-slate-950 focus:ring-1 focus:ring-slate-950 transition"
                                placeholder="••••••••"
                                required
                            />
                        </div>


                        <div class="grid grid-cols-2 gap-3 pt-1">

                            <button
                                type="submit"
                                class="w-full bg-slate-950 text-white hover:bg-slate-800 transition duration-300 px-3 py-2 text-xs font-medium uppercase tracking-wider rounded-xs text-center shadow-sm"
                            >
                                Login
                            </button>

                            <a
                                href="/signup"
                                class="w-full text-slate-950 bg-white border border-slate-300 px-3 py-2 text-xs font-medium uppercase tracking-wider rounded-xs transition duration-300 text-center hover:bg-slate-950 hover:text-white block"
                            >
                                Sign Up
                            </a>

                        </div>

                    </form>


                    <div class="flex justify-start mt-4 pt-2 border-t border-slate-200">

                        <button
                            onclick={() => rotate = false}
                            class="text-slate-500 bg-transparent px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-xs transition duration-300 hover:text-slate-950 hover:bg-slate-100 flex items-center gap-1.5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                            Kembali
                        </button>

                    </div>

                </div>
            </div>

        </div>

    </div>
</section>
    <div>

    </div>
    <!-- 1. Tambahkan class 'relative' pada container utama agar menjadi patokan koordinat -->
     <section use:animationCard id="carousel-slide" class="relative {Full} p-4">
        {#each KontenKartuKanan as h, i}
            <!-- Menggunakan transform: translateY dan nilainya dikurangi (-) agar naik ke atas -->
            <!-- Mengurangi nilai dasar z-index langsung di HTML (misal dimulai dari 10) -->
                <div style="z-index: {(10) - (i * 10)}; transform: translateY({pos - (i * 15)}px) translateX({pos + (i * 15)}px) rotate(4deg) skewX(4deg);" class="card_{i} absolute top-0 left-0 w-[100%] h-[100%] grid grid-rows-[11%_89%] origin-bottom-left">
                    <!-- Header Section -->
                    <div class="bg-slate-100/60 backdrop-blur-sm border-b-slate-100 border-t border-l border-r border-zinc-400/50 rounded-t-lg {Full}">
                        <h3 class="ml-2 mt-2">{h.header}</h3>
                    </div>
                    
                    <!-- Content Section -->
                    <div class="bg-slate-100/90 backdrop-blur-sm border-t border-b border-l border-r border-zinc-400/40 rounded-b-sm {Full}">
                        {@render h.isi?.()}
                    </div>
                </div>
        {/each}
    </section>
</section>