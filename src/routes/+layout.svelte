<script lang="ts">
    import './layout.css';
    // 💡 Tambahkan ekstensi .svelte di akhir import!
    import NavHeader from "$lib/NavHeader.svelte";
    import NavFooter from "$lib/NavFooter.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon"  />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Zen+Dots&display=swap" rel="stylesheet">
</svelte:head>

<NavHeader/>
{@render children()}
<NavFooter/>
