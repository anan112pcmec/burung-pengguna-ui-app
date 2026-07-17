<script lang="ts">
	import { MarginFromHeader } from "../../../constant/NavbarDesign";
	import { Full } from "../../../constant/UiConstant";

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

    <div class="flex items-center gap-2">
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

        <span class="tracking-wide">
            FILTER
        </span>
    </div>

</div>
</div>