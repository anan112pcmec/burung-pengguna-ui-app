<script lang="ts">
	import ProductCard from "$lib/page/main/general/ProductCard.svelte";

    // Mock untuk loop rekomendasi produk
    const jumlahSaran: number = 6;
</script>


<section class="space-y-4 pt-6 border-t border-zinc-100 pl-5 pr-5">
    <!-- Header Section -->
    <div class="flex items-center justify-between">
        <div class="space-y-0.5">
            <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
                Rekomendasi
            </h3>
            <p class="text-[11px] text-zinc-500 font-medium">
                Produk serupa yang mungkin Anda suka
            </p>
        </div>
        
        <!-- Indikator Geser Mikro (Opsional untuk estetika) -->
        <div class="text-[10px] font-mono text-zinc-400 tracking-wider uppercase select-none flex items-center gap-1">
            Geser <span>→</span>
        </div>
    </div>

    <!-- Container Horizontal Scroll -->
    <div class="w-full overflow-x-auto flex gap-1 pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth">
        {#each Array(jumlahSaran) as _, i}
            <!-- Wrapper snap agar pergeseran card terasa taktil & pas di grid -->
            <div class="snap-start flex-shrink-0">
                <ProductCard id={i}/>
            </div>
        {/each}
    </div>
</section>