<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Action } from 'svelte/action';
	import ProductCard from '../general/ProductCard.svelte';

    const ulang:number = 24
    let ke: number = 0
    function tambah(){
        ke++
    }
</script>


<div class="pr-2 pl-2 w-full flex flex-wrap items-start gap-x-1 gap-y-[10px] min-h-screen scrollbar-none">
        {#each Array(ulang) as _, i}
            <ProductCard id={i}/>
        {/each}
</div>