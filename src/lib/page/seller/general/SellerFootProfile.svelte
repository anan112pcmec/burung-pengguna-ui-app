<script lang="ts">
    import { Full } from "../../../../constant/UiConstant";

    // Reusable styling constant sesuai standar lu
    const footerHeaders = "text-[10px] font-bold tracking-[0.18em] text-slate-950/60 uppercase mb-3 font-mono";
    const footerLinks = "text-slate-600 hover:text-slate-950 transition-colors block mb-1.5 text-xs font-medium tracking-tight";

    // Mock Data dari Struct Seller + EntitySocialMedia + BarangDiDiskon
    const seller = {
        nama: "Archisan Studio",
        username: "archisan_studio",
        deskripsi: "Studio desain independen yang berfokus pada pakaian minimalis, tahan lama, dan berorientasi pada fungsionalitas harian.",
        jam_operasional: "08.00 - 20.00 WIB",
        total_etalase: 84,
        total_diskon_aktif: 12
    };

    const socialMedia = {
        whatsapp: "6281234567890",
        facebook: "https://facebook.com/archisanstudio",
        tiktok: "@archisan_official",
        instagram: "@archisan.studio"
    };
</script>

<footer class="w-full mt-20 bg-white border-t border-zinc-200 selection:bg-slate-900 selection:text-white font-sans">
    
    <!-- SEKSI 1: SELLER SPECIFIC SECTION (Top Footer Level) -->
    <div class="border-b border-zinc-100 bg-zinc-50/40">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 px-8 lg:px-12 py-8 items-start">
            
            <!-- Branding Seller & Mascott / Logo Profil (Col: 5) -->
            <div class="md:col-span-5 space-y-3">
                <div class="flex items-center gap-3">
                    <!-- Logo / Mascot Seller (Ukuran Ringkas) -->
                    <div class="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 font-mono text-xs font-bold border border-zinc-200 overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" 
                            alt={seller.nama}
                            class="w-full h-full object-cover opacity-90"
                        />
                    </div>
                    <div>
                        <h3 class="text-xs font-bold tracking-tight text-slate-900 uppercase font-mono">
                            {seller.nama}
                        </h3>
                        <span class="text-[10px] text-zinc-400 font-mono block">
                            @{seller.username} • Official Store
                        </span>
                    </div>
                </div>

                <p class="text-slate-500 text-xs leading-relaxed font-light pr-4">
                    {seller.deskripsi}
                </p>

                <!-- Status Jam Operasional -->
                <div class="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-100 rounded-xs text-[10px] font-mono text-slate-600">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Jam Operasional: {seller.jam_operasional}</span>
                </div>
            </div>

            <!-- Etalase & Promo Metrics (Col: 3) -->
            <div class="md:col-span-3 space-y-2 border-l border-zinc-200/60 pl-6 hidden md:block">
                <h4 class={footerHeaders}>Ringkasan Toko</h4>
                <div class="space-y-1.5 font-mono text-xs">
                    <div class="flex justify-between items-center pr-4">
                        <span class="text-zinc-400 text-[11px]">Total Etalase:</span>
                        <span class="font-bold text-slate-900">{seller.total_etalase} Etalase</span>
                    </div>
                    <div class="flex justify-between items-center pr-4">
                        <span class="text-zinc-400 text-[11px]">Barang Promo:</span>
                        <span class="font-bold text-emerald-600">{seller.total_diskon_aktif} Aktif</span>
                    </div>
                </div>
            </div>

            <!-- Social Media Entity (Col: 4) -->
            <div class="md:col-span-4 space-y-2 lg:pl-6 lg:border-l lg:border-zinc-200/60">
                <h4 class={footerHeaders}>Koneksi Sosial Toko</h4>
                <div class="grid grid-cols-2 gap-2 text-xs font-mono">
                    {#if socialMedia.instagram}
                        <a href="https://instagram.com/{socialMedia.instagram}" target="_blank" class="flex items-center gap-1.5 text-slate-600 hover:text-slate-950 transition">
                            <span class="text-[10px] text-zinc-400">IG:</span>
                            <span class="truncate">{socialMedia.instagram}</span>
                        </a>
                    {/if}

                    {#if socialMedia.tiktok}
                        <a href="https://tiktok.com/{socialMedia.tiktok}" target="_blank" class="flex items-center gap-1.5 text-slate-600 hover:text-slate-950 transition">
                            <span class="text-[10px] text-zinc-400">TT:</span>
                            <span class="truncate">{socialMedia.tiktok}</span>
                        </a>
                    {/if}

                    {#if socialMedia.whatsapp}
                        <a href="https://wa.me/{socialMedia.whatsapp}" target="_blank" class="flex items-center gap-1.5 text-slate-600 hover:text-slate-950 transition">
                            <span class="text-[10px] text-zinc-400">WA:</span>
                            <span class="truncate">+{socialMedia.whatsapp}</span>
                        </a>
                    {/if}

                    {#if socialMedia.facebook}
                        <a href={socialMedia.facebook} target="_blank" class="flex items-center gap-1.5 text-slate-600 hover:text-slate-950 transition">
                            <span class="text-[10px] text-zinc-400">FB:</span>
                            <span class="truncate">Archisan</span>
                        </a>
                    {/if}
                </div>
            </div>

        </div>
    </div>

    <!-- SEKSI 2: GENERAL PLATFORM FOOTER (Bottom Footer Level) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 lg:px-12 py-10">
        
        <!-- Platform Branding & Mascott Minimalis -->
        <div class="space-y-3">
            <div class="flex items-center gap-2">
                <!-- Mascot Burung SVG Icon Kecil -->
                <svg class="w-4 h-4 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 7n-4 4 4 4" />
                    <path d="M22 6c-3-1-7 1-10 4-3 3-5 7-6 11 3-1 7-3 10-6 3-3 5-7 6-9z" />
                    <path d="M6 18c-2 1-4 1-5 0 0-2 1-4 2-5" />
                </svg>
                <h3 class="text-xs font-bold tracking-widest text-slate-950 uppercase font-mono">BURUNG.COM</h3>
            </div>
            <p class="text-slate-500 text-xs leading-relaxed font-light">
                Platform e-commerce minimalis modern dengan sistem transaksi terenkripsi dan kurasi barang independen.
            </p>
        </div>

        <!-- Links Navigasi Umum -->
        <div>
            <h4 class={footerHeaders}>Jelajah Pasar</h4>
            <ul class="space-y-1">
                <li><a href="/market" class={footerLinks}>Semua Produk</a></li>
                <li><a href="/market?cat=pria" class={footerLinks}>Pakaian Pria</a></li>
                <li><a href="/market?cat=wanita" class={footerLinks}>Pakaian Wanita</a></li>
                <li><a href="/official" class={footerLinks}>Official Stores</a></li>
            </ul>
        </div>

        <div>
            <h4 class={footerHeaders}>Bantuan & Legal</h4>
            <ul class="space-y-1">
                <li><a href="/help/order" class={footerLinks}>Lacak Pesanan</a></li>
                <li><a href="/help/faq" class={footerLinks}>Pusat Bantuan</a></li>
                <li><a href="/privacy" class={footerLinks}>Kebijakan Privasi</a></li>
                <li><a href="/terms" class={footerLinks}>Syarat & Ketentuan</a></li>
            </ul>
        </div>

        <!-- Langganan Newsletter General -->
        <div class="space-y-3 lg:pl-6 lg:border-l lg:border-zinc-200/60">
            <h4 class={footerHeaders}>WARTA BURUNG</h4>
            <p class="text-slate-500 text-xs leading-relaxed font-light">
                Dapatkan rilis produk terbatas dan voucher eksklusif langsung ke email kamu.
            </p>
            
            <form onsubmit={(e) => e.preventDefault()} class="flex flex-col gap-2 pt-1">
                <input 
                    type="email" 
                    placeholder="ALAMAT EMAIL..." 
                    class="w-full bg-zinc-50 border border-zinc-200 px-3 py-2 text-xs font-mono text-slate-900 placeholder:text-zinc-400 focus:outline-none focus:border-slate-950 transition rounded-xs"
                />
                <button 
                    type="submit" 
                    class="bg-slate-950 text-white text-[10px] font-mono font-medium tracking-[0.18em] py-2.5 px-4 hover:bg-slate-800 transition duration-300 rounded-xs uppercase cursor-pointer"
                >
                    BERLANGGANAN →
                </button>
            </form>
        </div>

    </div>

    <!-- COPYRIGHT & CREDITS -->
    <div class="border-t border-zinc-200/60 bg-zinc-50 py-3.5 px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-zinc-400 gap-2">
        <div>
            &copy; 2026 BURUNG GROUP. ALL RIGHTS RESERVED.
        </div>
        <div class="flex items-center gap-3 text-zinc-400">
            <span>DESIGNED BY FAIZ HANNAN HAKIM</span>
            <span>•</span>
            <span class="text-slate-600 font-semibold">JAKARTA, ID</span>
        </div>
    </div>

</footer>