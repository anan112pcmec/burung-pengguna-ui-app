<script lang="ts">
import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";

</script>

<section id="kelebihan-app" class="w-full mt-10 h-[24rem] p-4  grid grid-cols-[45%_10%_45%]">
     <div class="">
        <DotLottieSvelte
            src="src\constant\Shopping_Cart_Loader.json"
            autoplay={true}
            loop={true}
            speed={1}
        />
    </div>
    <div></div>

    <div class=" ">
        <h1 class="text-semibold text-lg text-zinc-700/80">-Tanpa Data Verbose</h1>
        <br>
        <b class="text-lg/tight text-zinc-950/90">Kami menyajikan data cepat, aktual, dan ringkas, sehingga setiap keputusan belanja kamu jadi mudah dan tepat.</b>
        <ul class="text-shadow-mist-800 space-y-2 text-sm mt-4">
            <li>
                – Data Produk Ringkas
                <p>Harga, stok, dan detail penting langsung terlihat tanpa harus scroll panjang.</p>
            </li>
            <li>
                – Data Penjual Jelas
                <p>Informasi penjual dan reputasi mudah dipahami, langsung bisa jadi pertimbangan.</p>
            </li>
            <li>
                – Data Pengiriman Tersaji
                <p>Status, estimasi waktu, dan riwayat pengiriman terlihat sekilas, cepat dimengerti.</p>
            </li>
            <br>
            <div class="grid grid-cols-[80%_20%]">
                <div></div>
                <div> 
                <button class="border text-right border-zinc-700/50 rounded-lg p-2 text-zinc-700/70 hover:text-white hover:bg-slate-800 transition duration-300"
                        onclick={() => {
                            window.scrollBy({
                            top: 468, 
                            behavior: 'smooth' 
                            });
                        }}
                >
                Lanjut
            </button></div>
            </div>
        </ul>
    </div>
</section>