<script>
	import Filosofi from "$lib/page/home/Filosofi.svelte";
	import LangkahIntegrasi from "$lib/page/home/LangkahIntegrasi.svelte";
	import Pengenalan from "$lib/page/home/Pengenalan.svelte";
	import PointsPresentation from "$lib/page/home/PointsPresentation.svelte";
	import TanpaDataVerbose from "$lib/page/home/TanpaDataVerbose.svelte";
	import Testimoni from "$lib/page/home/Testimoni.svelte";
	import UiClean from "$lib/page/home/UiClean.svelte";
	import { MarginFromHeader } from "../../constant/NavbarDesign";

	

</script>
<div class="pr-18 pl-18 space-y-4 {MarginFromHeader}">
    <Pengenalan/>
    <PointsPresentation/>
    <UiClean/>
    <TanpaDataVerbose/>
    <LangkahIntegrasi/>
    <Filosofi/>
    <Testimoni/>
</div>