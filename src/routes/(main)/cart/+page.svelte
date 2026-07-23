<script lang="ts">
	import CartHeader from "$lib/page/main/cart/CartHeader.svelte";
	import ListCart from "$lib/page/main/cart/ListCart.svelte";
	import TotalBelanja from "$lib/page/main/cart/TotalBelanja.svelte";


</script>

<main class="mt-[7rem] grid grid-cols-[72%_28%] pl-2 pr-2">
   <div>
   <CartHeader/>
   <ListCart/>

   </div>
    <TotalBelanja/>
</main>