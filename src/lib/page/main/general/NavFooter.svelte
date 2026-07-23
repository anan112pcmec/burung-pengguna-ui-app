<script lang="ts">
    const footerHeaders = "text-[10px] font-bold tracking-[0.18em] text-slate-950/50 uppercase mb-4";
    const footerLinks = "text-slate-700/70 hover:text-slate-950 transition-colors block mb-2 text-xs font-medium tracking-wide";
</script>

<footer class="w-full mt-20 bg-white border-t border-zinc-800/20 font-sans">
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 lg:px-12 py-10">
        
        <div class="space-y-3">
            <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-slate-950 inline-block"></span>
                <h3 class="text-sm font-bold tracking-widest text-slate-950 uppercase font-mono">BURUNG.COM</h3>
            </div>
            <p class="text-slate-600/70 text-xs leading-relaxed font-light">
                Platform e-commerce minimalis modern dengan sistem transaksi terenkripsi dan kurasi barang independen.
            </p>
            
        </div>

        <div>
            <h4 class={footerHeaders}>Jelajah Pasar</h4>
            <ul class="space-y-1">
                <li><a href="/market" class={footerLinks}>Semua Produk</a></li>
                <li><a href="/market?cat=pria" class={footerLinks}>Pakaian Pria</a></li>
                <li><a href="/market?cat=wanita" class={footerLinks}>Pakaian Wanita</a></li>
                <li><a href="/market?cat=aksesoris" class={footerLinks}>Aksesori & Tech</a></li>
                <li><a href="/official" class={footerLinks}>Official Stores</a></li>
            </ul>
        </div>

        <div>
            <h4 class={footerHeaders}>Bantuan & Legal</h4>
            <ul class="space-y-1">
                <li><a href="/help/order" class={footerLinks}>Lacak Pesanan</a></li>
                <li><a href="/help/faq" class={footerLinks}>Pusat Bantuan</a></li>
                <li><a href="/help/seller" class={footerLinks}>Buka Toko (Seller)</a></li>
                <li><a href="/privacy" class={footerLinks}>Kebijakan Privasi</a></li>
                <li><a href="/terms" class={footerLinks}>Syarat & Ketentuan</a></li>
            </ul>
        </div>

        <div class="space-y-3 lg:pl-6 lg:border-l lg:border-zinc-800/10">
            <h4 class={footerHeaders}>LANGANAN WARTA BURUNG</h4>
            <p class="text-slate-600/80 text-xs leading-relaxed font-light">
                Dapatkan rilis produk terbatas dan voucher eksklusif langsung ke email kamu.
            </p>
            
            <form onsubmit={(e) => e.preventDefault()} class="flex flex-col gap-2 pt-1">
                <div class="relative">
                    <input 
                        type="email" 
                        placeholder="ALAMAT EMAIL..." 
                        class="w-full bg-slate-50 border border-zinc-800/20 px-3 py-2 text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 transition rounded-xs"
                    />
                </div>
                <button 
                    type="submit" 
                    class="bg-slate-950 text-white text-[10px] font-medium tracking-[0.18em] py-2.5 px-4 hover:bg-slate-800 transition duration-300 rounded-xs uppercase"
                >
                    BERLANGGANAN →
                </button>
            </form>
        </div>

    </div>

    <div class="border-t border-zinc-800/10 bg-slate-50/50 py-4 px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-slate-500 gap-2">
        <div>
            &copy; 2026 BURUNG GROUP. ALL RIGHTS RESERVED.
        </div>
        <div class="flex items-center gap-4 text-slate-400">
            <span>DESIGNED BY FAIZ HANNAN HAKIM</span>
            <span>•</span>
            <span class="text-slate-600 font-semibold">JAKARTA, ID</span>
        </div>
    </div>

</footer>