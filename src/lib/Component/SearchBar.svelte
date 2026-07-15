<script lang="ts">
	import { navbarState } from '$lib/state/general/state.svelte';
    import { fade, fly } from 'svelte/transition';
</script>

{#if navbarState.searching}
    <!-- 1. BACKDROP BLUR (Latar Belakang) -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div 
        transition:fade={{ duration: 200 }}
        class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 cursor-pointer"
    ></div>

    <!-- 2. MODAL HELPER (Selalu di Kanan & Warna Putih) -->
    <div 
        transition:fly={{ x: 300, duration: 300 }}
        class="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 p-6 flex flex-col font-sans"
    >
        <!-- Header Modal -->
        <div class="flex justify-between items-center border-b border-gray-100 pb-4">
            <h2 class="text-base font-semibold text-gray-900">Search Products</h2>
            <button onclick={() => navbarState.unsearch()}
                class="p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

        <!-- Konten/Helper Tempat Ngetik atau Hasil Search -->
        <div class="mt-4 flex-1">
            <input 
                type="text" 
                placeholder="What are you looking for?" 
                class="w-full border-b border-gray-200 py-2 text-sm outline-none focus:border-black transition-colors"
                autofocus
            />
            
            <div class="mt-6 text-xs text-gray-400">
                <p class="font-medium text-gray-500 mb-2">Popular Searches</p>
                <ul class="space-y-2 text-gray-600">
                    <li class="hover:text-black cursor-pointer">New Arrivals</li>
                    <li class="hover:text-black cursor-pointer">Best Sellers</li>
                </ul>
            </div>
        </div>
    </div>
{/if}