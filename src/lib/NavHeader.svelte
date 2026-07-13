<script lang="ts">
	import { FontSection } from "../constant/NavbarDesign";

    const full: string = "w-full h-full";
    
    // Data dummy buat nyontohin menu ala H&M
    const topMenus = ["Customer Service", "Newsletter", "Find a store"];
    const mainMenus = ["Ladies", "Men", "Divided", "Kids", "H&M HOME", "Sale"];
</script>

<header class="w-full bg-white border-b border-gray-200 grid grid-rows-[30%_70%] h-[9rem] font-sans text-[13px]">
    
    <div class="{full} px-6 flex items-center justify-between text-gray-500 text-[11px]">
        <div class="flex gap-4">
            {#each topMenus as menu}
                <a href="/" class="hover:text-black transition-colors {FontSection}">{menu}</a>
            {/each}
        </div>
        <div class="flex gap-2 items-center">
            <span class="cursor-pointer hover:text-black">•••</span>
        </div>
    </div>

    <div class="grid grid-cols-[40%_20%_40%] px-6 items-center">
        
        <div class="{full} flex items-center gap-5 font-medium tracking-wide text-gray-800">
            {#each mainMenus as menu}
                <a href="/" class="hover:text-grey-200 transition-colors {menu === 'Sale' ? 'text-grey-600 ' : ''} {FontSection}">
                    {menu}
                </a>
            {/each}
        </div>

        <div class="{full} flex items-center justify-center">
            <img class="h-25 mt-2" src="../src/constant/LogoBurung.png" alt="">
        </div>

        <div class="{full} flex items-center justify-end gap-6 text-gray-700 {FontSection}">
            <div class="relative border-b border-transparent hover:border-black focus-within:border-black pb-1 transition-colors">
                <input 
                    type="text" 
                    placeholder="Search products" 
                    class="bg-transparent outline-none text-[12px] w-32 focus:w-44 transition-all duration-300 placeholder-gray-400"
                />
            </div>
            
            <a  class="flex items-center gap-1 hover:text-black">
                <span>Sign in</span>
            </a>
            <a  class="flex items-center gap-1 hover:text-black">
                <span>Favorites</span>
            </a>
            <a  class="flex items-center gap-1 hover:text-black font-medium">
                <span>Bag (0)</span>
            </a>
        </div>

    </div>
</header>