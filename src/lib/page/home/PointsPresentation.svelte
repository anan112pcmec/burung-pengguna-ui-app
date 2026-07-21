<script lang="ts">
    // Murni markup tanpa state
</script>

<section id="points-presentation" class="mt-20 w-full h-[28rem] p-6 lg:p-8 grid grid-rows-[8%_32%_2%_48%_10%] items-center">
    <div>
        <h2 class="text-[10px] font-bold tracking-[0.18em] text-slate-950/40 uppercase">
            OUR POINTS
        </h2>
    </div>

    <div> 
        <h1 class="mt-1 text-left font-bold text-2xl lg:text-5xl text-slate-950 uppercase tracking-tight leading-snug">
            Platform e-commerce untuk semua kebutuhanmu.
        </h1>
    </div>

    <div></div>

    <div>
        <p class="text-xs lg:text-lg text-slate-700 font-light leading-relaxed tracking-wide">
            Di Burung, kami percaya pengalaman belanja online seharusnya sederhana. Kamu cukup mencari produk yang dibutuhkan, menambahkannya ke keranjang, dan menyelesaikan pembayaran dengan aman. Tidak ada langkah yang rumit, tidak ada iklan yang mengganggu. Semua dirancang agar kamu bisa fokus pada apa yang penting — menemukan produk dengan cepat, membandingkan harga dengan jelas, dan menerima barang tepat waktu. Burung dibuat untuk memudahkan, bukan membingungkan.
        </p>
    </div>

    <div class="grid grid-cols-[80%_20%] items-center">
        <div></div>
        <div class="flex justify-end">
            <button 
                type="button"
                class="border border-zinc-800/30 text-slate-950 px-5 py-2.5 text-[10px] font-medium tracking-[0.18em] uppercase rounded-xs hover:bg-slate-950 hover:text-white transition duration-300"
                onclick={() => {
                    window.scrollBy({
                        top: 400, 
                        behavior: 'smooth' 
                    });
                }}
            >
                YANG KAMI TAWARKAN ↓
            </button>
        </div>
    </div>
</section>