<script lang="ts">
    // Import tetap bisa diisi jika dibutuhkan nanti
</script>

<section class="w-full pl-3 pt-2 pb-4 flex flex-col space-y-3 pb-2 border-b border-zinc-800/20">
    <div>
        <span class="text-[10px] uppercase tracking-[0.18em] font-medium text-slate-950/50">
            KERANJANG RESULT
        </span>
    </div>

    <div>
        <h1 class="text-2xl font-bold tracking-tight text-slate-900 uppercase">
            ITEM(22)
        </h1>
    </div>

    <div class="grid grid-cols-2 items-center text-xs text-slate-800/70 pt-2">
        
        <div class="relative">
            <button 
                type="button"
                class="flex items-center gap-2 text-left hover:text-slate-950 transition group"
            >
                <span class="tracking-[0.15em] text-[10px] font-medium uppercase group-hover:underline">
                    URUTKAN BERDASAR
                </span>

                <svg 
                    class="w-3.5 h-3.5 text-slate-700"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill-rule="evenodd" clip-rule="evenodd" 
                        d="M12 4.875C12.6213 4.875 13.125 5.37868 13.125 6V10.8752V13.1252V18.0007C13.125 18.622 12.6213 19.1257 12 19.1257C11.3787 19.1257 10.875 18.622 10.875 18.0007V13.1252V10.8752V6C10.875 5.37868 11.3787 4.875 12 4.875Z" 
                        fill="currentColor"/>
                    <g opacity="0.4">
                        <path d="M18.0007 10.875H13.1252V13.125H18.0007C18.622 13.125 19.1257 12.6213 19.1257 12C19.1257 11.3787 18.622 10.875 18.0007 10.875Z" fill="currentColor"/>
                        <path d="M6 13.125H10.8752V10.875H6C5.37868 10.875 4.875 11.3787 4.875 12C4.875 12.6213 5.37868 13.125 6 13.125Z" fill="currentColor"/>
                    </g>
                </svg>
            </button>

            <div class="hidden absolute left-0 top-full mt-2 w-56 bg-white border border-zinc-800/20 rounded-sm shadow-md py-1.5 z-50">
                <div class="px-3 py-1 text-[9px] font-bold text-slate-950/40 uppercase tracking-[0.18em]">
                    Opsi Urutan
                </div>
                
                <a href="/market" class="px-3 py-2 text-[11px] text-slate-800 hover:bg-slate-50 hover:text-slate-950 flex items-center justify-between transition">
                    <span>Harga Tertinggi ke Terendah</span>
                    <span class="text-[9px] font-mono text-slate-400">→</span>
                </a>
                
                <a href="/market" class="px-3 py-2 text-[11px] text-slate-800 hover:bg-slate-50 hover:text-slate-950 flex items-center justify-between transition">
                    <span>Harga Terendah ke Tertinggi</span>
                    <span class="text-[9px] font-mono text-slate-400">→</span>
                </a>

                <a href="/market" class="px-3 py-2 text-[11px] text-slate-800 hover:bg-slate-50 hover:text-slate-950 flex items-center justify-between transition">
                    <span>Terbaru Ditambahkan</span>
                    <span class="text-[9px] font-mono text-slate-400">→</span>
                </a>
                
                <div class="border-t border-zinc-800/10 my-1"></div>

                <button 
                    type="button"
                    class="w-full text-center text-[10px] text-slate-500 font-medium uppercase tracking-wider hover:text-slate-950 py-1"
                >
                    [ Tutup ]
                </button>
            </div>
        </div>

        <div class="flex items-center justify-end">
            <button type="button" class="flex items-center gap-2 hover:text-slate-950 transition group">
                <svg 
                    class="w-3.5 h-3.5 text-slate-700"
                    viewBox="0 0 25 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M3.38501 9.75C3.38501 9.12868 3.88869 8.625 4.51001 8.625L20.51 8.625C21.1313 8.625 21.635 9.12868 21.635 9.75C21.635 10.3713 21.1313 10.875 20.51 10.875L4.51001 10.875C3.88869 10.875 3.38501 10.3713 3.38501 9.75Z" fill="currentColor"/>
                    <g opacity="0.4">
                        <path d="M18.01 13.125C18.6313 13.125 19.135 13.6287 19.135 14.25C19.135 14.8713 18.6313 15.375 18.01 15.375H7.01001C6.38869 15.375 5.88501 14.8713 5.88501 14.25C5.88501 13.125 6.38869 13.125 7.01001 13.125H18.01Z" fill="currentColor"/>
                    </g>
                </svg>

                <span class="tracking-[0.15em] text-[10px] font-medium uppercase group-hover:underline">
                    FILTER
                </span>
            </button>
        </div>

    </div>
</section>