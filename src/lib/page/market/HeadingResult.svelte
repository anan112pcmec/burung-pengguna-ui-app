<script lang="ts">
	import { MarginFromHeader } from "../../../constant/NavbarDesign";
	import { Full } from "../../../constant/UiConstant";

    let section: string[] = $state<string[]>(["View All[18]", "Anak", 'Wanita', "Sale[2]", "Flash sale[1]"])
</script>

<div class="w-full h-[10rem] mt-29 grid grid-rows-[12%_30%_2%_33%_5%_18%]">
    <div class="bg-slate-400 text-sm">
        <p class="{Full}">
            search result
        </p>
    </div>



    <div class="bg-red-500">
        <h1>nama search</h1>
    </div>


    <div><!-- Hanya sebagai jarak --></div>


    <div class="bg-blue-500 flex items-start space-x-3 p-2">
        {#each section as s, i}
            <button class="p-1.5 text-slate-800/60 text-lg/tight border border-slate-900/30">{s}</button>
        {/each}
    </div>


    <div><!-- Hanya sebagai jarak --></div>

    
    <div class="bg-teal-800 grid grid-cols-2">
        <dir>Urut berdasar</dir>
        <div class="text-right">Semua Filter</div>
    </div>
</div>