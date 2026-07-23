<script>
	import Filosofi from '$lib/page/main/home/Filosofi.svelte';
	import LangkahIntegrasi from '$lib/page/main/home/LangkahIntegrasi.svelte';
	import Pengenalan from '$lib/page/main/home/Pengenalan.svelte';
	import PointsPresentation from '$lib/page/main/home/PointsPresentation.svelte';
	import TanpaDataVerbose from '$lib/page/main/home/TanpaDataVerbose.svelte';
	import Testimoni from '$lib/page/main/home/Testimoni.svelte';
	import UiClean from '$lib/page/main/home/UiClean.svelte';


	import { navbarState } from '$lib/state/general/state.svelte';
	import { MarginFromHeader } from "../../../constant/NavbarDesign";

	

</script>
<main class="pr-18 pl-18 space-y-4 {MarginFromHeader}">
    <Pengenalan/>
    <PointsPresentation/>
    <UiClean/>
    <TanpaDataVerbose/>
    <LangkahIntegrasi/>
    <Filosofi/>
    <Testimoni/>
</main>