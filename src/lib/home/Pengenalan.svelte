<script lang="ts">
	import { Full } from '../../constant/UiConstant';
    const Headername: string[] = ["Header1", "Header2", "Header3"]
    let zin: number = 100;
    let pos: number = 0;
    
</script>

<section id="pengenalan" class="w-full mb-4 h-[22rem] p-2 grid grid-cols-[38%_22%_40%] z-10">
<section id="signup-login">
    <div class=" border border-zinc-900/10  bg-slate-100/40 backdrop-blur-lg {Full} rounded-2xl grid grid-rows-[42%_58%]">
    <div class="grid grid-cols-[18%_72%_10%]">
       <div></div>
       <div>
         <h1 class="text-left mt-10 font-display text-5xl text-slate-900 font-semi-bold ">
            Jual Beli Jadi Gampang
        </h1>
       </div>
       <div></div>
    </div>
    <div>
        <div class="grid grid-cols-[18%_72%_10%]">
       <div></div>
       <div>
         <h1 class="text-left font-display text-lg text-slate-900 font-semi-bold ">
            Bersama Burung temukan barang incaranmu dengan usapan jari
        </h1>
        <br>
        <div class="space-x-4 flex justify-left">
            <button class="text-white bg-slate-900 px-5 py-2.5 border border-transparent rounded-lg transition duration-300
               hover:bg-transparent hover:text-slate-800 hover:border-zinc-900/10 ">
                Tentang Kami
            </button>
            <button class="hover:bg-slate-900 hover:text-white transition duration-300 px-5 py-2.5 rounded-lg">Bergabung</button>
        </div>
       </div>
       <div></div>
    </div>
    </div>
        
    </div>
    </section>
    <div>

    </div>
    <!-- 1. Tambahkan class 'relative' pada container utama agar menjadi patokan koordinat -->
     <section id="carousel-slide" class="relative {Full} p-4">
        {#each Headername as h, i}
            <!-- Menggunakan transform: translateY dan nilainya dikurangi (-) agar naik ke atas -->
       <!-- Mengurangi nilai dasar z-index langsung di HTML (misal dimulai dari 10) -->
        <div style="z-index: {(10) - (i * 10)}; transform: translateY({pos - (i * 15)}px) translateX({pos + (i * 15)}px) rotate(4deg) skewX(4deg);" class="absolute top-0 left-0 w-[100%] h-[100%] grid grid-rows-[11%_89%] origin-bottom-left">
            <!-- Header Section -->
            <div class="bg-slate-100/60 backdrop-blur-sm border-b-slate-100 border-t border-l border-r border-zinc-400/50 rounded-t-lg {Full}">
                <h3 class="ml-2">{h}</h3>
            </div>
            
            <!-- Content Section -->
            <div class="bg-slate-100/90 backdrop-blur-sm border-t border-b border-l border-r border-zinc-400/40 rounded-b-sm {Full}">
            
            </div>
        </div>
        {/each}
    </section>
</section>