<script lang="ts">
    import './layout.css';
    // 💡 Tambahkan ekstensi .svelte di akhir import!
    import NavHeader from "$lib/NavHeader.svelte";
    import NavFooter from "$lib/NavFooter.svelte";

    let { children } = $props();
</script>

<svelte:head><link rel="icon"  /></svelte:head>

<NavHeader/>
{@render children()}
<NavFooter/>
