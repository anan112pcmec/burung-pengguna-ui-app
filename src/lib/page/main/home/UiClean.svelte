<script lang="ts">
    import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
</script>

<section id="kelebihan-app" class="w-full h-[28rem] p-6 lg:p-8 grid grid-cols-[45%_10%_45%] items-center my-8">
    <div class="flex flex-col justify-between h-full">
        <div>
            <h2 class="text-[10px] font-bold tracking-[0.18em] text-slate-950/40 uppercase">
                UI CLEAN SUPER CEPAT
            </h2>
            
            <h3 class="text-xl lg:text-2xl font-bold text-slate-950 uppercase tracking-tight leading-snug mt-1">
                Kami tidak bertele-tele dengan animasi berat dan verbose.
            </h3>

            <ul class="space-y-3.5 mt-4">
                <li>
                    <span class="font-bold text-slate-950 uppercase text-[11px] tracking-wider block">
                        — UI PILIHAN BARANG SIMPLE
                    </span>
                    <p class="text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                        Menampilkan produk dengan jelas, mudah dicari, dan cepat dipilih.
                    </p>
                </li>

                <li>
                    <span class="font-bold text-slate-950 uppercase text-[11px] tracking-wider block">
                        — UI PENJUAL SIMPLE
                    </span>
                    <p class="text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                        Informasi penjual tersaji rapih, sehingga kamu tahu dari siapa membeli tanpa kebingungan.
                    </p>
                </li>

                <li>
                    <span class="font-bold text-slate-950 uppercase text-[11px] tracking-wider block">
                        — UI PENGIRIMAN & ENGAGEMENT
                    </span>
                    <p class="text-xs text-slate-600 font-light leading-relaxed mt-0.5">
                        Status pengiriman dan interaksi dengan penjual mudah diikuti, semua transparan.
                    </p>
                </li>
            </ul>
        </div>

        <div class="pt-4">
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

    <div></div>

    <div class="flex items-center justify-center h-full overflow-hidden">
        <DotLottieSvelte
            src="src\constant\ecommerce.json"
            autoplay={true}
            loop={true}
            speed={1}
        />
    </div>
</section>