<script lang="ts">
    import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
</script>

<section id="kelebihan-app" class="w-full h-[28rem] mt-10 p-6 lg:p-8 grid grid-cols-[45%_10%_45%] items-center my-8">
    <div class="flex items-center justify-center h-full overflow-hidden">
        <DotLottieSvelte
            src="src\constant\Shopping_Cart_Loader.json"
            autoplay={true}
            loop={true}
            speed={1}
        />
    </div>

    <div></div>

    <div class="flex flex-col justify-between h-full">
        <div>
            <h2 class="text-[10px] font-bold tracking-[0.18em] text-slate-950/40 uppercase">
                TANPA DATA VERBOSE
            </h2>
            
            <h3 class="text-xl lg:text-2xl font-bold text-slate-950 uppercase tracking-tight leading-snug mt-1">
                Kami menyajikan data cepat, aktual, dan ringkas, sehingga setiap keputusan belanja kamu jadi mudah dan tepat.
            </h3>

            <ul class="space-y-3.5 mt-4">
                <li>
                    <span class="font-bold text-slate-950 uppercase text-[11px] tracking-wider block">
                        — DATA PRODUK RINGKAS
                    </span>
                    <p class="text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                        Harga, stok, dan detail penting langsung terlihat tanpa harus scroll panjang.
                    </p>
                </li>

                <li>
                    <span class="font-bold text-slate-950 uppercase text-[11px] tracking-wider block">
                        — DATA PENJUAL JELAS
                    </span>
                    <p class="text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                        Informasi penjual dan reputasi mudah dipahami, langsung bisa jadi pertimbangan.
                    </p>
                </li>

                <li>
                    <span class="font-bold text-slate-950 uppercase text-[11px] tracking-wider block">
                        — DATA PENGIRIMAN TERSAJI
                    </span>
                    <p class="text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                        Status, estimasi waktu, dan riwayat pengiriman terlihat sekilas, cepat dimengerti.
                    </p>
                </li>
            </ul>
        </div>

        <div class="pt-4 flex justify-end">
            <button 
                type="button"
                class="border border-zinc-800/30 text-slate-950 px-5 py-2.5 text-[10px] font-medium tracking-[0.18em] uppercase rounded-xs hover:bg-slate-950 hover:text-white transition duration-300"
                onclick={() => {
                    window.scrollBy({
                        top: 468, 
                        behavior: 'smooth' 
                    });
                }}
            >
                LANJUT ↓
            </button>
        </div>
    </div>
</section>