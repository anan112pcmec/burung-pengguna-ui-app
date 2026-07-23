<script lang="ts">
	import { FilterState } from "$lib/state/market/state.svelte";
	import type { Action } from "svelte/action";
	import { fade } from "svelte/transition";

   const othersideClick: Action = (node) => {
        // Cari elemen modal berdasarkan class
        const filtermodal = node.querySelector(".filter_bar") as HTMLDivElement;

        const handleClick = (el: MouseEvent) => {
            if (filtermodal && el.target instanceof Node) {
                if (!filtermodal.contains(el.target)) {
                    FilterState.unfiltering();
                }
            }
        };

        node.addEventListener("click", handleClick);

        return {
            destroy() {
                node.removeEventListener("click", handleClick);
            }
        };
    };
</script>

{#if FilterState.filter}
  <!-- Backdrop Blur & Background Hitam Transparan -->
<div in:fade out:fade use:othersideClick class="fixed inset-0 z-100 flex justify-end bg-black/40 backdrop-blur-sm">
        
    <!-- MODAL SISI KANAN (Putih Polos & Full Height) -->
    <div class="filter_bar w-full max-w-md h-screen bg-white shadow-2xl grid grid-rows-[82%_18%] border-l border-zinc-950/10">
    
        <!-- Isi Konten Modal (Scrollable) -->
        <div class="p-6 overflow-y-auto scrollbar-none h-full flex flex-col space-y-8 min-h-0">
            
            <!-- Header -->
            <div class="border-b border-zinc-950/10 pb-4">
                <h2 class="text-xl font-sans text-slate-900 text-center uppercase">FILTER</h2>
            </div>

            <!-- Sort By -->
            <div class="flex flex-col space-y-3">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">SORT BY</span>
                <div class="flex flex-wrap gap-2">
                    <button class="text-xs/loose border border-slate-950 px-2.5 py-0.5 bg-slate-950 text-white rounded-sm">Paling Sesuai</button>
                    <button class="text-xs/loose border border-slate-900/20 px-2.5 py-0.5 text-slate-800/60 hover:border-slate-900 hover:bg-slate-800 hover:text-white transition duration-300 rounded-sm">Terbaru</button>
                    <button class="text-xs/loose border border-slate-900/20 px-2.5 py-0.5 text-slate-800/60 hover:border-slate-900 hover:bg-slate-800 hover:text-white transition duration-300 rounded-sm">Harga Tertinggi</button>
                    <button class="text-xs/loose border border-slate-900/20 px-2.5 py-0.5 text-slate-800/60 hover:border-slate-900 hover:bg-slate-800 hover:text-white transition duration-300 rounded-sm">Harga Terendah</button>
                </div>
            </div>

            <!-- Jenis Seller -->
            <div class="flex flex-col space-y-3">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">JENIS SELLER</span>
                <div class="flex flex-wrap gap-2">
                    <button class="text-xs/loose border border-slate-900/20 px-2.5 py-0.5 text-slate-800/60 hover:border-slate-900 hover:bg-slate-800 hover:text-white transition duration-300 rounded-sm">Official Store</button>
                    <button class="text-xs/loose border border-slate-900/20 px-2.5 py-0.5 text-slate-800/60 hover:border-slate-900 hover:bg-slate-800 hover:text-white transition duration-300 rounded-sm">Power Seller</button>
                    <button class="text-xs/loose border border-slate-900/20 px-2.5 py-0.5 text-slate-800/60 hover:border-slate-900 hover:bg-slate-800 hover:text-white transition duration-300 rounded-sm">Star Seller</button>
                </div>
            </div>

            <!-- Lokasi & Rating (Grid 2 Kolom Berdampingan Agar Fit Vertikal) -->
            <!-- Lokasi & Rating Menu List -->
            <div class="flex flex-col space-y-6">
                <!-- Lokasi -->
                <button class="group flex items-center justify-between w-full py-1 text-left">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/80 uppercase">LOKASI</span>
                    <svg class="w-3.5 h-3.5 text-slate-800/40 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <!-- Rating -->
                <button class="group flex items-center justify-between w-full py-1 text-left">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/80 uppercase">RATING</span>
                    <svg class="w-3.5 h-3.5 text-slate-800/40 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <!-- Range Terjual & Dirilis (Dikunci Vertikal) -->
            <div class="flex flex-col space-y-6">
                <!-- Range Terjual -->
                <div class="flex flex-col space-y-3">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">RANGE TERJUAL</span>
                    <input 
                        type="number" 
                        placeholder="Minimal" 
                        class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70"
                    />
                </div>
                
                <!-- Dirilis -->
                <div class="flex flex-col space-y-3">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">DIRILIS</span>
                    <div class="grid grid-cols-3 gap-2 w-full">
                        <input 
                            type="number" 
                            placeholder="Tahun" 
                            class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70"
                        />
                        <input 
                            type="number" 
                            placeholder="Bulan" 
                            class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70"
                        />
                        <input 
                            type="number" 
                            placeholder="Hari" 
                            class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70"
                        />
                    </div>
                </div>
            </div>

        </div>

        <!-- Sticky Footer Aksi -->
        <div class="p-4 border-t border-zinc-950/10 bg-white grid grid-rows-[30%_70%] items-center">
            <div class="text-[10px] font-medium tracking-[0.15em] text-slate-900/50 uppercase text-center">
                HASIL <span class="text-slate-950 font-bold">9293 PRODUK</span>
            </div>
            
            <div class="grid grid-cols-2 gap-3 h-full pt-1">
                <button class="text-xs tracking-wide text-slate-800/70 border p-2 border-slate-900/20 hover:border-slate-950 hover:bg-slate-50 transition duration-300 rounded-sm uppercase">
                    Clear
                </button>
                <button class="text-xs tracking-wide bg-slate-950 text-white p-2 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium">
                    Terapkan
                </button>
            </div>
        </div>
    </div>

</div>
{/if}