<script lang="ts">
	import { navbarState } from "$lib/state/general/state.svelte";
	import { FontSection } from "../../../constant/NavbarDesign";
	import { Full } from "../../../constant/UiConstant";

	const topMenus = ["Customer Service", "Newsletter", "Find a store"];

	let y = $state(0);
	let progress = $state(0);

	function updateProgress() {
		const scrollTop = window.scrollY;
		const documentHeight = document.documentElement.scrollHeight;
		const windowHeight = window.innerHeight;

		const totalScroll = documentHeight - windowHeight;

		progress = totalScroll > 0 
			? (scrollTop / totalScroll) * 100 
			: 0;
	}

	$effect(() => {
		updateProgress();
	});
</script>

<svelte:window 
	bind:scrollY={y}
	onscroll={updateProgress}
/>

<header class="fixed top-0 w-full bg-white border-b border-gray-200 grid grid-rows-[25%_75%] h-[7rem] font-sans text-[13px] z-100">
	
	<div class="{Full} px-6 flex items-center justify-between text-gray-500 text-[11px] relative border-b border-gray-100">
		<div class="flex gap-4">
			{#each topMenus as menu}
				<a href="/" class="hover:text-black transition-colors {FontSection}">{menu}</a>
			{/each}
		</div>
		<div class="flex gap-2 items-center">
			<span class="cursor-pointer hover:text-black">•••</span>
		</div>

		<!-- Progress Bar Line sebagai pengganti border-b-2 -->
		<div 
			class="absolute bottom-0 left-0 h-[2px] bg-slate-900 transition-all duration-75 ease-out" 
			style="width: {progress}%"
		></div>
	</div>  

	<div class="grid grid-cols-[40%_20%_40%] px-6 items-center">
		
		<div class="{Full} flex items-center gap-5 font-medium tracking-wide text-gray-800">
	
			<button class="relative p-1.5 text-gray-600 hover:text-slate-900 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
				<span class="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-red-500"></span>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.35417 21C9.65582 21.6033 10.2798 22 11 22C11.7202 22 12.3442 21.6033 12.6458 21M18 8C18 4.13401 14.866 1 11 1C7.13401 1 4 4.13401 4 8C4 14 2 16 2 17H20C20 16 18 14 18 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>

			<button class="relative p-1.5 text-gray-600 hover:text-slate-900 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
				<span class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white px-1">3</span>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3 3H5L5.4 5M5.4 5L7 13H17L19 5H5.4ZM7 13L6 17H19M9 21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20C8 20 9 20 9 21ZM18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20 18 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>

			<div class="h-6 w-[1px] bg-gray-200"></div>

			<div class="group relative flex items-center gap-2 cursor-pointer py-1">
				<div class="h-8 w-8 rounded-full bg-slate-200 border border-gray-300 overflow-hidden flex-none">
					<img src="src/constant/LogoBurung.png" alt="Avatar" class="h-full w-full object-cover" />
				</div>
				
				<div class="hidden sm:block min-w-0 max-w-[80px]">
					<p class="text-xs font-semibold text-gray-900 truncate">nancuy.</p>
					<p class="text-[10px] text-gray-500 truncate">Yang bikin</p>
				</div>

				<svg class="text-gray-400 group-hover:text-gray-600 transition-transform duration-200 group-hover:rotate-180" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>

				<div class="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
					<a href="/profil" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-slate-900">Akun Saya</a>
					<a href="/pesanan" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-slate-900 flex justify-between items-center">
						<span>Pesanan Saya</span>
						<span class="bg-amber-100 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded-full">1</span>
					</a>
					<a href="/wishlist" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-slate-900">Wishlist Keluar</a>
					<hr class="border-gray-100 my-1" />
					<button class="w-full text-left block px-4 py-2 text-xs text-red-600 hover:bg-red-50 font-medium">Keluar</button>
				</div>
			</div>

		</div>

		<div class="{Full} flex items-center justify-center">
			<img class="h-20 mt-2" src="../src/constant/LogoBurung.png" alt="">
		</div>

		<div class="{Full} flex items-center justify-end gap-6 text-gray-700 {FontSection} transition duration-700">
			<div class="{Full} flex items-center justify-end gap-6 text-gray-700 {FontSection}">
    <!-- Wadah input: Lebar garis bawah memanjang mulus saat fokus -->
    <div class="relative border-b border-transparent hover:border-black focus-within:border-black pb-1 transition-colors duration-300">
        <input 
            type="text" 
            placeholder="Search products" 
            onfocus={() => navbarState.search()}
            onblur={() =>  navbarState.unsearch()}
            class="bg-transparent outline-none text-[12px] transition-all duration-500 ease-in-out placeholder-gray-400 {navbarState.searching ? 'w-64' : 'w-32'}"
        />
    </div>
    
    <!-- Bungkus menu kanan dalam wadah fleksibel dengan transisi lebar dan opacity -->
    <div class="flex items-center gap-6 overflow-hidden transition-all duration-500 ease-in-out {navbarState.searching ? 'w-0 opacity-0 pointer-events-none' : 'w-64 opacity-100'}">
        <a class="flex items-center gap-1 hover:text-black whitespace-nowrap transition-colors duration-200" href="/home"> 
            <span>Sign in</span>
        </a>
        <a class="flex items-center gap-1 hover:text-black whitespace-nowrap transition-colors duration-200">
            <span>Favorites</span>
        </a>
        <a class="flex items-center gap-1 hover:text-black font-medium whitespace-nowrap transition-colors duration-200">
            <span>Wishlist (0)</span>
        </a>
    </div>
</div>
		</div>

	</div>
</header>