<script lang="ts">

</script>

{#snippet ProductCard()}
    <div class="grid grid-cols-2 h-[13rem] w-[19rem] rounded-sm">
        <div class="relative bg-slate-400/25 rounded-l-sm overflow-hidden w-full h-full">
  <!-- Foto di paling belakang -->
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Product" class="absolute inset-0 w-full h-full object-cover z-0" />
        
        <!-- Icon love di kanan atas melayang (ukuran menggunakan persen) -->
        <button class="absolute top-[3%] right-[3%] z-10 bg-white shadow-md text-slate-500 hover:scale-110 transition rounded-full flex items-center justify-center w-[12%] aspect-square">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-[60%] h-[60%]">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        </button>
        <!-- Harga di bawah melayang (ukuran menggunakan persen) -->
        <div class="absolute bottom-[3%] left-[3%] right-[3%] z-10  rounded-md flex flex-col justify-center px-[5%] h-[18%]">
            <p class="text-sm font-bold text-slate-900">Rp 150.000</p>
        </div>
        </div>
        <div class="bg-slate-800 rounded-r-sm p-2 grid grid-rows-[13%_22%_15%_32%_18%]">
            <div class="text-white">Nama seller</div>
            <div class="text-white">Nama barang</div>
            <div class="text-white">deskripsi</div>
            <div class="text-white">badge</div>
            <div class="text-white">tambah keranjang</div>
            <div></div>
        </div>
    </div>
{/snippet}

<div class="ml-2 w-full flex flex-wrap items-start space-y-1 gap-1 min-h-screen">
    {@render ProductCard()}
    {@render ProductCard()}
    {@render ProductCard()}
    {@render ProductCard()}
</div>