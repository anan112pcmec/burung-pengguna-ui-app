<script lang="ts">
    // Mock untuk loop rekomendasi produk
    const jumlahSaran: number = 6;
</script>

{#snippet ProductCard()}
    <div class="grid grid-cols-2 h-[15rem] w-[25.5rem] rounded-sm border border-zinc-800/20">
        <div class="relative bg-zinc-400/15 rounded-l-sm overflow-hidden w-full h-full">
  <!-- Foto di paling belakang -->
        <img src="src\constant\hm-removebg-preview.png" alt="Product" class="absolute inset-0 w-full h-full object-cover z-0" />
        
        <!-- Icon love di kanan atas melayang (ukuran menggunakan persen) -->
        <button class="absolute top-[3%] right-[3%] z-10 bg-white shadow-md text-slate-500 hover:scale-110 transition rounded-full flex items-center justify-center w-[12%] aspect-square">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-[60%] h-[60%]">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        </button>
        <!-- Harga di bawah melayang (ukuran menggunakan persen) -->
        <div class="absolute bottom-[-1.7%] left-[3%] right-[3%] z-10  rounded-md flex flex-col justify-center px-[2%] h-[18%]">
            <p class="text-sm font-bold text-slate-900">Rp 150.000</p>
        </div>
        </div>
        <div class="rounded-r-sm p-2 grid grid-rows-[13%_15%_19%_35%_18%]">

            <div class="text-slate-900/50 text-[10px] p-2 uppercase tracking-[0.18em] font-medium">
                Nama seller
            </div>

            <div class="text-slate-800 text-lg pl-2 pt-1 font-semibold tracking-[-0.02em]">
                Nama barang
            </div>

            <div class="min-h-0 text-slate-700/70 text-[10px] pl-2 pt-1.5 leading-relaxed font-light tracking-wide line-clamp-2 ">
                Tas kulit premium dengan bahan berkualitas tinggi, desain minimalis modern cocok digunakan untuk berbagai aktivitas harian, memiliki ruang penyimpanan luas dan nyaman dipakai sepanjang hari.
            </div>


            <div class="text-slate-900 text-[10px] grid grid-cols-3 font-medium items-center pr-1 tracking-wide">

                <div class="flex items-center justify-center gap-1">
                    <span class="text-slate-700">★</span>
                    <span>4.8</span>
                </div>

                <div class="flex justify-center text-slate-700/80">
                    2.1k terjual
                </div>

                <div class="flex justify-center text-slate-700/80">
                    Stok 12
                </div>

            </div>


           <button class="group flex items-center justify-center gap-2 
            text-slate-800/70 text-xs 
            border border-slate-900/20 
            px-3 py-1.5
            hover:border-slate-900/50 
            hover:bg-slate-900 
            hover:text-white 
            transition duration-300 
            rounded-lg">

                <span class="tracking-wide">
                    TAMBAH KERANJANG
                </span>

                  <span class="opacity-80 transition duration-300">
                        <svg 
                            class="w-[15px] h-[15px]"
                            viewBox="0 0 24 24" 
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">

                            <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M1.56641 4C1.56641 3.58579 1.90219 3.25 2.31641 3.25H3.49696C4.61854 3.25 5.56885 4.07602 5.72504 5.18668L5.7862 5.62161H19.7507C21.3714 5.62161 22.4605 7.28344 21.8137 8.76953L19.1464 14.8979C18.789 15.719 17.9788 16.25 17.0833 16.25L7.72179 16.25C6.60021 16.25 5.6499 15.424 5.49371 14.3133L4.23965 5.39556C4.18759 5.02534 3.87082 4.75 3.49696 4.75H2.31641C1.90219 4.75 1.56641 4.41421 1.56641 4Z"
                            fill="currentColor"/>

                        </svg>
                    </span>

            </button>

            <div></div>

        </div>
    </div>
{/snippet}

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
                {@render ProductCard()}
            </div>
        {/each}
    </div>
</section>