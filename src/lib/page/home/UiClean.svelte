<script lang="ts">
	import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";


</script>

<section id="kelebihan-app" class="  w-full h-[24rem] p-4  grid grid-cols-[45%_10%_45%]">
    <div class="">
        <h1 class="text-semibold text-lg text-zinc-700/80">Ui Clean Super Cepat</h1>
        <br>
        <b class="text-lg/tight text-zinc-950/90">Kami tidak bertele tele dengan animasi berat dan verbose</b>
        <ul class="text-shadow-mist-800 space-y-2 text-sm mt-4">
            <li>
                - UI Pilihan Barang Simple
                <p>Menampilkan produk dengan jelas, mudah dicari, dan cepat dipilih.</p>
            </li>
            <li>
                – UI Penjual Simple
                <p>Informasi penjual tersaji rapih, sehingga kamu tahu dari siapa membeli tanpa kebingungan.</p>
            </li>
            <li>
                – UI Pengiriman & Engagement
                <p>Status pengiriman dan interaksi dengan penjual mudah diikuti, semua transparan.</p>
            </li>
            <br>
            <button class="border text-right border-zinc-700/50 rounded-lg p-2 text-zinc-700/70 hover:text-white hover:bg-slate-800 transition duration-300"
                        onclick={() => {
                            window.scrollBy({
                            top: 468, 
                            behavior: 'smooth' 
                            });
                        }}>
                Lanjut
            </button>
        </ul>
    </div>
    <div></div>
    <div class="">
        <DotLottieSvelte
            src="src\constant\ecommerce.json"
            autoplay={true}
            loop={true}
            speed={1}
        />
    </div>
</section>