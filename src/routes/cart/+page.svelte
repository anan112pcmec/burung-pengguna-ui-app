<script lang="ts">
	import CartHeader from "$lib/page/cart/CartHeader.svelte";
	import ListCart from "$lib/page/cart/ListCart.svelte";
	import TotalBelanja from "$lib/page/cart/TotalBelanja.svelte";


</script>

<main class="mt-[7rem] grid grid-cols-[72%_28%]">
   <div>
   <CartHeader/>
   <ListCart/>

   </div>
    <TotalBelanja/>
</main>