<script lang="ts">
	import { Full } from '../../constant/UiConstant';
    const Headername: string[] = ["Header1", "Header2", "Header3"]
    let zin: number = 100;
    let pos: number = 0;
    
</script>

<section id="pengenalan" class="w-full h-[20rem] p-2 bg-amber-100 grid grid-cols-[45%_10%_45%] z-10">
<section id="signup-login">
    <div>Kolom1</div>
    </section>
    <div>j</div>
    <!-- 1. Tambahkan class 'relative' pada container utama agar menjadi patokan koordinat -->
     <section id="carousel-slide" class="relative {Full} p-4">
        {#each Headername as h, i}
            <!-- Menggunakan transform: translateY dan nilainya dikurangi (-) agar naik ke atas -->
       <!-- Mengurangi nilai dasar z-index langsung di HTML (misal dimulai dari 10) -->
<div style="z-index: {(10) - (i * 10)}; transform: translateY({pos - (i * 15)}px) translateX({pos + (i * 15)}px) rotate(4deg) skewX(4deg);" class="absolute top-0 left-0 w-[100%] h-[100%] grid grid-rows-[11%_89%] origin-bottom-left">
    <!-- Header Section -->
    <div class="bg-slate-100/90 backdrop-blur-sm border-b-slate-100 border-t border-l border-r border-zinc-400/50 rounded-t-lg {Full}">
        <h3 class="ml-2">{h}</h3>
    </div>
    
    <!-- Content Section -->
    <div class="bg-slate-100/90 backdrop-blur-sm border-t border-b border-l border-r border-zinc-400/40 rounded-b-sm {Full}">
    
    </div>
</div>
        {/each}
    </section>
</section>