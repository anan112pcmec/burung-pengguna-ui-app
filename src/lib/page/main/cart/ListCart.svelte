<script lang="ts">
	import { Full } from "../../../../constant/UiConstant";

    const ulang: number = 5
</script>

{#snippet CartItem(id: number)}
    <div class="flex items-center h-[8rem] gap-3.5 p-3  border-b border-b-zinc-800/20 bg-white hover:border-zinc-800/40 transition cart-item-{id} w-full">
        
        <input 
            type="checkbox" 
            checked 
            class="accent-slate-950 text-slate-900 rounded-xs cursor-pointer shrink-0 w-3.5 h-3.5" 
        />

        <div class="relative w-16 h-16 bg-zinc-400/15 rounded-sm overflow-hidden shrink-0 border border-zinc-950/5">
            <img 
                src="src\constant\hm-removebg-preview.png" 
                alt="Product" 
                class="w-full h-full object-cover" 
            />
        </div>

        <div class="flex-1 min-w-0 flex flex-col justify-between py-0.5 space-y-1">
            <div class="text-slate-900/50 text-[9px] uppercase tracking-[0.18em] font-medium truncate">
                Nama Seller
            </div>

            <h4 class="text-xs font-semibold text-slate-800 tracking-[-0.01em] truncate leading-tight">
                Nama Barang Induk  - Nama Kategori Barang
            </h4>
            

            <div class="text-slate-700/60 text-[10px] font-light tracking-wide truncate">
                Hitam / XL • Ready Stock
            </div>
        </div>

        <div class="flex flex-col items-end justify-between self-stretch shrink-0 py-0.5 gap-2">
            
            <div class="flex items-center gap-3">
                <span class="text-xs font-bold text-slate-900 font-mono">
                    Rp 150.000
                </span>
                <button 
                    type="button" 
                    class="text-slate-400 hover:text-red-600 transition text-xs p-0.5" 
                    title="Hapus"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-3.5 h-3.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="flex items-center border border-slate-900/20 rounded-md overflow-hidden">
                <button 
                    type="button" 
                    class="w-5 h-5 flex items-center justify-center text-[10px] font-mono text-slate-700 hover:bg-slate-900 hover:text-white transition"
                >
                    -
                </button>
                <span class="px-2 text-[10px] font-bold font-mono text-slate-900 border-x border-slate-900/20 min-w-[20px] text-center">
                    1
                </span>
                <button 
                    type="button" 
                    class="w-5 h-5 flex items-center justify-center text-[10px] font-mono text-slate-700 hover:bg-slate-900 hover:text-white transition"
                >
                    +
                </button>
            </div>

        </div>
    </div>
{/snippet}

<section class="overflow-y-scroll scrollbar-none {Full}">
    {#each Array(ulang) as i, _}
    {@render CartItem(i)}
    {/each}
</section>