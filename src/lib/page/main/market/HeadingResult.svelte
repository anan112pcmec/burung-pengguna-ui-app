<script lang="ts">
	import { FilterState, UrutkanState } from "$lib/state/market/state.svelte";
	import { Full } from "../../../../constant/UiConstant";


    let section: string[] = $state<string[]>(["View All[18]", "Anak", 'Wanita', "Sale[2]", "Flash sale[1]"])
</script>

<div class="w-full h-[10rem] mt-29 grid grid-rows-[12%_30%_2%_33%_5%_18%]">
    <div class="text-sm">
        <p class="{Full} p-2 text-xs/loose">
            SEARCH RESULT
        </p>
    </div>



    <div class=" p-2 font-bold font-sans text-2xl">
        <h1>BARANG 1</h1>
    </div>


    <div><!-- Hanya sebagai jarak --></div>


    <div class="flex items-start space-x-3 p-2">
        {#each section as s, i}
            <button class=" text-slate-800/60 text-xs/loose border border-slate-900/30 pl-1 pr-1 hover:border-white hover:bg-slate-800 hover:text-white transition duration-300 ">{s}</button>
        {/each}
    </div>


    <div><!-- Hanya sebagai jarak --></div>

    
   <div class="p-2 grid grid-cols-2 items-center text-xs text-slate-800/70">

   <div class="p-2 grid grid-cols-2 items-center text-xs text-slate-800/70 relative">

    <button 
        type="button"
        class="flex items-center gap-2 text-left" 
        onclick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            UrutkanState.action()
        }}
    >
        <span class="tracking-wide">
            URUTKAN BERDASAR
        </span>

        <svg 
            class="w-4 h-4"
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" 
            d="M12 4.875C12.6213 4.875 13.125 5.37868 13.125 6V10.8752V13.1252V18.0007C13.125 18.622 12.6213 19.1257 12 19.1257C11.3787 19.1257 10.875 18.622 10.875 18.0007V13.1252V10.8752V6C10.875 5.37868 11.3787 4.875 12 4.875Z" 
            fill="currentColor"/>
            <g opacity="0.4">
                <path d="M18.0007 10.875H13.1252V13.125H18.0007C18.622 13.125 19.1257 12.6213 19.1257 12C19.1257 11.3787 18.622 10.875 18.0007 10.875Z" fill="currentColor"/>
                <path d="M6 13.125H10.8752V10.875H6C5.37868 10.875 4.875 11.3787 4.875 12C4.875 12.6213 5.37868 13.125 6 13.125Z" fill="currentColor"/>
            </g>
        </svg>
    </button>

    <!-- Dropdown dipindah ke luar button agar tag <a> di dalamnya berfungsi normal -->
    {#if UrutkanState.urutkan}
        <div class="absolute left-0 top-full mt-2 w-full bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-50">
            <div class="px-3 py-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Opsi</div>
            
            <a href="/market" class="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 flex items-center justify-between">
                <span>Harga Tertinggi ke Terendah</span>
                <span class="text-[10px] text-gray-400">-></span>
            </a>
            
            <a href="/market" class="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 flex items-center justify-between">
                <span>Harga Terendah ke Tertinggi</span>
                <span class="text-[10px] text-gray-400">-></span>
            </a>

             <a href="/market" class="block px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 flex items-center justify-between">
                <span>Terbaru</span>
                <span class="text-[10px] text-gray-400">-></span>
            </a>
            
            <hr class="border-gray-100 my-1" />
            <a href="/market" class="block text-center text-[11px] text-slate-800 font-medium hover:underline py-1" onclick={() =>{ UrutkanState.action()}}>
                tutup
            </a>
        </div>
    {/if}

</div>


    <div class="flex items-center justify-end gap-2">
        <svg 
            class="w-4 h-4"
            viewBox="0 0 25 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">

            <path d="M3.38501 9.75C3.38501 9.12868 3.88869 8.625 4.51001 8.625L20.51 8.625C21.1313 8.625 21.635 9.12868 21.635 9.75C21.635 10.3713 21.1313 10.875 20.51 10.875L4.51001 10.875C3.88869 10.875 3.38501 10.3713 3.38501 9.75Z" fill="currentColor"/>

            <g opacity="0.4">
                <path d="M18.01 13.125C18.6313 13.125 19.135 13.6287 19.135 14.25C19.135 14.8713 18.6313 15.375 18.01 15.375H7.01001C6.38869 15.375 5.88501 14.8713 5.88501 14.25C5.88501 13.6287 6.38869 13.125 7.01001 13.125H18.01Z" fill="currentColor"/>
            </g>

        </svg>

        <button onclick={(e) => {
            e.preventDefault();

            FilterState.filtering();
        }}>
        <span class="tracking-wide hover:text-slate-900/80">
            FILTER
        </span>
        </button>
    </div>

</div>
</div>