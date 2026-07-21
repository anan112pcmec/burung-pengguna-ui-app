<script lang="ts">
    // Murni markup tanpa state
</script>

<div class="h-full relative">
    <aside class="sticky top-30 w-full flex flex-col space-y-4 p-4 bg-white rounded-sm">
        
        <div class="border-b border-zinc-800/10 pb-3">
            <h3 class="text-[10px] font-bold tracking-[0.18em] text-slate-950/50 uppercase">
                RINGKASAN BELANJA
            </h3>
        </div>

        <div class="space-y-2.5 text-xs">
            <div class="flex justify-between items-center">
                <span class="text-slate-800/60 uppercase text-[10px] tracking-wider">
                    Total Harga (2 Barang)
                </span>
                <span class="font-mono font-semibold text-slate-900">
                    Rp 300.000
                </span>
            </div>

            <div class="flex justify-between items-center">
                <span class="text-slate-800/60 uppercase text-[10px] tracking-wider">
                    Total Diskon
                </span>
                <span class="font-mono text-slate-900/40">
                    - Rp 0
                </span>
            </div>

            <div class="flex justify-between items-center">
                <span class="text-slate-800/60 uppercase text-[10px] tracking-wider">
                    Estimasi Biaya Kirim
                </span>
                <span class="font-mono text-[10px] text-slate-900/40 uppercase">
                    Dihitung nanti
                </span>
            </div>
        </div>

        <hr class="border-t border-zinc-800/10 my-1" />

        <div class="flex items-end justify-between pt-1">
            <div class="flex flex-col space-y-0.5">
                <span class="text-[9px] font-bold tracking-[0.18em] text-slate-950/50 uppercase">
                    TOTAL TAGIHAN
                </span>
                <span class="text-base font-bold font-mono text-slate-950">
                    Rp 300.000
                </span>
            </div>
        </div>

        <button 
            type="button" 
            class="w-full mt-2 text-xs tracking-[0.15em] bg-slate-950 text-white py-3 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium"
        >
            LANJUT PEMBAYARAN
        </button>
    </aside>
</div>