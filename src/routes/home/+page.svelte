<script>
	import Contributor from "$lib/home/Contributor.svelte";
	import LangkahIntegrasi from "$lib/home/LangkahIntegrasi.svelte";
	import Pengenalan from "$lib/home/Pengenalan.svelte";
	import PointsPresentation from "$lib/home/PointsPresentation.svelte";
	import Testimoni from "$lib/home/Testimoni.svelte";
import { MarginFromHeader } from "../../constant/NavbarDesign";
	import UiClean from "$lib/home/UiClean.svelte";
	import TanpaDataVerbose from "$lib/home/TanpaDataVerbose.svelte";

</script>
<div class="pr-18 pl-18 space-y-4 {MarginFromHeader}">
    <Pengenalan/>
    <PointsPresentation/>
    <UiClean/>
    <TanpaDataVerbose/>
    <LangkahIntegrasi/>
    <Testimoni/>
    <Contributor/>
</div>