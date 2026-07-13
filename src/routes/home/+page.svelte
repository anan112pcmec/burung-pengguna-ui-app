<script>
	import Contributor from "$lib/home/Contributor.svelte";
	import KelebihanApp from "$lib/home/KelebihanApp.svelte";
	import LangkahIntegrasi from "$lib/home/LangkahIntegrasi.svelte";
	import Pengenalan from "$lib/home/Pengenalan.svelte";
	import PointsPresentation from "$lib/home/PointsPresentation.svelte";
	import Testimoni from "$lib/home/Testimoni.svelte";
import { MarginFromHeader } from "../../constant/NavbarDesign";

</script>
<div class="p-5 space-y-4 {MarginFromHeader}">
    <Pengenalan/>

    <PointsPresentation/>

    <KelebihanApp/>

    <LangkahIntegrasi/>

    <Testimoni/>

    <Contributor/>
</div>
azs