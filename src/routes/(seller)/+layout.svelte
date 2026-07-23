<script lang="ts">
	 import '../layout.css';
	import NavFooter from '$lib/page/main/general/NavFooter.svelte';
	import SellerHeadProfile from '$lib/page/seller/general/SellerHeadProfile.svelte';
	import SellerFootProfile from '$lib/page/seller/general/SellerFootProfile.svelte';

    let { children } = $props();
</script>

<SellerHeadProfile/>
{@render children()}
<SellerFootProfile/>