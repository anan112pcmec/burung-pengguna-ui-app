<script lang="ts">
    import { LeftOpsiState } from "$lib/state/profile/state.svelte";
	import type { Action } from "svelte/action";
	import { SvelteMap } from "svelte/reactivity";

    let UbahProfil: boolean = $state<boolean>(false)
    let EditAlamat2: boolean = $state<boolean>(false)
    
    async function ClickedAlamatList(node: HTMLDivElement, eventHandle: (el: MouseEvent) => void) {
        node.addEventListener("click", eventHandle);
    }

    const AlamatEditAction: Action = (node) => {
    const alamatList = node.querySelectorAll('[class*="card-alamat"]') as NodeListOf<HTMLDivElement>;
    const handlers: { alamat: HTMLDivElement; handler: (el: MouseEvent) => void }[] = [];
    
    // Menyimpan jumlah klik per alamat
    const alamatCountClick = new SvelteMap<HTMLDivElement, number>();
    // Menyimpan referensi timer timeout per alamat agar tidak saling bentrok
    const alamatTimers = new SvelteMap<HTMLDivElement, ReturnType<typeof setTimeout>>();

    for (const alamat of alamatList) {
        const eventmain = (el: MouseEvent) => {
            el.stopPropagation();
            el.preventDefault();

            // 1. Ambil hitungan saat ini dan tambahkan 1
            const currentCount = (alamatCountClick.get(alamat) ?? 0) + 1;
            alamatCountClick.set(alamat, currentCount);

            // 2. Jika ini klik pertama, mulai jendela waktu 700ms
            if (currentCount === 1) {
                const timer = setTimeout(() => {
                    // Waktu habis, reset hitungan kembali ke 0
                    alamatCountClick.set(alamat, 0);
                    alamatTimers.delete(alamat);
                }, 700);
                
                alamatTimers.set(alamat, timer);
            }

            // 3. Cek apakah klik sudah LEBIH DARI 2 KALI (artinya klik ke-3 atau lebih)
            if (currentCount > 2) {
                // Bersihkan timer jendela waktu yang sedang berjalan
                const activeTimer = alamatTimers.get(alamat);
                if (activeTimer) clearTimeout(activeTimer);
                
                // Reset data state hitungan
                alamatCountClick.set(alamat, 0);
                alamatTimers.delete(alamat);
                
                // Jalankan trigger edit
                EditAlamat2 = true;
            }
        };

        ClickedAlamatList(alamat, eventmain);
        handlers.push({ alamat, handler: eventmain });
    }

    return {
        destroy() {
            // Bersihkan semua timer yang tersisa saat komponen hancur
            for (const timer of alamatTimers.values()) {
                clearTimeout(timer);
            }
            // Bersihkan semua event listener
            for (const item of handlers) {
                item.alamat.removeEventListener("click", item.handler);
            }
        }   
    };

    
}

let activeTab: 'password' | 'pin' = $state<'password' | 'pin'>('password');

</script>


{#snippet Aktifitas()}
           <div class="flex flex-col space-y-6">
    <div class="border-b border-zinc-950/10 pb-3">
        <h3 class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">RANGKUMAN AKTIVITAS</h3>
    </div>

    <div class="grid grid-cols-2 gap-4">
        <div class="border border-zinc-950/10 p-3 rounded-sm">
            <span class="text-[9px] tracking-wider text-slate-800/40 uppercase block mb-1">Hari Ini</span>
            <span class="text-sm font-bold text-slate-900 font-mono">Rp 150.000</span>
        </div>
        <div class="border border-zinc-950/10 p-3 rounded-sm">
            <span class="text-[9px] tracking-wider text-slate-800/40 uppercase block mb-1">Minggu Ini</span>
            <span class="text-sm font-bold text-slate-900 font-mono">Rp 1.250.000</span>
        </div>
        <div class="border border-zinc-950/10 p-3 rounded-sm">
            <span class="text-[9px] tracking-wider text-slate-800/40 uppercase block mb-1">Bulan Ini</span>
            <span class="text-sm font-bold text-slate-900 font-mono">Maret — Rp 4.800.000</span>
        </div>
        <div class="border border-zinc-950/10 p-3 rounded-sm">
            <span class="text-[9px] tracking-wider text-slate-800/40 uppercase block mb-1">Tahun Ini</span>
            <span class="text-sm font-bold text-slate-900 font-mono">2026 — Rp 14.200.000</span>
        </div>
    </div>

    <div class="flex flex-col space-y-3 pt-2">
        <div class="flex items-center justify-between border-b border-zinc-950/10 pb-2">
            <h3 class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">PESAN & NOTIFIKASI</h3>
            <span class="text-[9px] font-mono text-slate-950/40 uppercase">3 Pesan</span>
        </div>

        <div class="flex flex-col divide-y divide-zinc-950/10 border border-zinc-950/10 rounded-sm bg-white">
            
            <div class="p-3 flex items-center justify-between hover:bg-slate-50 transition cursor-pointer group">
                <div class="flex flex-col space-y-0.5 pr-4">
                    <div class="flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-950 inline-block"></span>
                        <span class="text-[11px] font-bold text-slate-950 uppercase tracking-wide">Sistem Keamanan</span>
                    </div>
                    <p class="text-[10px] text-slate-800/70 line-clamp-1 pl-3.5">
                        Perubahan password akun Anda berhasil dilakukan pada 21 Jul 2026, 14:20 WIB.
                    </p>
                </div>
                
                <div class="flex flex-col items-end shrink-0 space-y-1">
                    <span class="text-[8px] tracking-wider text-white bg-slate-950 px-1.5 py-0.5 rounded-xs uppercase font-semibold">
                        Belum Dibuka
                    </span>
                    <span class="text-[9px] font-mono text-slate-800/40">10m lalu</span>
                </div>
            </div>

            <div class="p-3 flex items-center justify-between hover:bg-slate-50 transition cursor-pointer group">
                <div class="flex flex-col space-y-0.5 pr-4">
                    <div class="flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-transparent inline-block"></span>
                        <span class="text-[11px] font-medium text-slate-800 uppercase tracking-wide">Billing & Invoice</span>
                    </div>
                    <p class="text-[10px] text-slate-800/50 line-clamp-1 pl-3.5">
                        Tagihan transaksi bulanan #INV-90218 telah diterbitkan.
                    </p>
                </div>
                
                <div class="flex flex-col items-end shrink-0 space-y-1">
                    <span class="text-[8px] tracking-wider text-slate-950/50 border border-zinc-950/20 px-1.5 py-0.5 rounded-xs uppercase font-medium">
                        Dibuka
                    </span>
                    <span class="text-[9px] font-mono text-slate-800/40">Kemarin</span>
                </div>
            </div>

            <div class="p-3 flex items-center justify-between hover:bg-slate-50 transition cursor-pointer group">
                <div class="flex flex-col space-y-0.5 pr-4">
                    <div class="flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-transparent inline-block"></span>
                        <span class="text-[11px] font-medium text-slate-800 uppercase tracking-wide">Dukungan Pelanggan</span>
                    </div>
                    <p class="text-[10px] text-slate-800/50 line-clamp-1 pl-3.5">
                        Tiket bantuan #TK-402 telah diselesaikan oleh tim teknis kami.
                    </p>
                </div>
                
                <div class="flex flex-col items-end shrink-0 space-y-1">
                    <span class="text-[8px] tracking-wider text-slate-950/50 border border-zinc-950/20 px-1.5 py-0.5 rounded-xs uppercase font-medium">
                        Dibuka
                    </span>
                    <span class="text-[9px] font-mono text-slate-800/40">18 Jul</span>
                </div>
            </div>

        </div>
    </div>
</div>
{/snippet}

{#snippet Profil()}
     {#if !UbahProfil}
        <!-- TAMPILAN PROFIL DETAIL (Ketika tidak sedang mengubah) -->
        <div class="flex flex-col space-y-6 h-full grid grid-rows-[82%_18%]">
            <div class="overflow-y-auto scrollbar-none space-y-6 pr-1">
                
                <!-- Section Foto Profil & Metadata Dasar -->
                <div class="flex items-center space-x-4 border-b border-zinc-950/10 pb-5">
                    <!-- Bingkai Foto Kaku Khas Lu -->
                    <div class="w-16 h-16 bg-zinc-100 border border-zinc-950/10 rounded-sm overflow-hidden flex items-center justify-center">
                        <img src="src/constant/avatar-placeholder.png" alt="Avatar" class="w-full h-full object-cover grayscale" />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <h2 class="text-sm font-semibold text-slate-950 tracking-wide">@username_anda</h2>
                        <!-- Status Pengguna (Online/Offline) dari Struct Go -->
                        <div class="flex items-center space-x-1.5">
                            <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            <span class="text-[10px] text-slate-800/60 uppercase tracking-wider font-medium">Online</span>
                        </div>
                    </div>
                </div>

                <!-- Detail Informasi Berdasarkan Data Struct -->
                <div class="space-y-4">
                    <!-- Field: ID Pengguna -->
                    <div class="flex flex-col space-y-1">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">ID USER</span>
                        <span class="text-xs text-slate-900 font-mono font-medium">#10293847</span>
                    </div>

                    <!-- Field: Nama Lengkap -->
                    <div class="flex flex-col space-y-1">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Nama Lengkap</span>
                        <span class="text-xs text-slate-900 font-medium">Nama Pengguna Asli</span>
                    </div>

                    <!-- Field: Email -->
                    <div class="flex flex-col space-y-1">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Alamat Email</span>
                        <span class="text-xs text-slate-900">nama@domain.com</span>
                    </div>

                    <!-- Field: Waktu Dibuat -->
                    <div class="flex flex-col space-y-1">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Bergabung Sejak</span>
                        <span class="text-xs text-slate-900/70">20 Maret 2026</span>
                    </div>
                </div>
            </div>

            <!-- Bagian Footer Aksi untuk Pindah ke Mode Ubah Profil -->
            <div class="border-t border-zinc-950/10 pt-3 flex justify-end items-center">
                <button 
                    type="button" 
                    onclick={() => UbahProfil = true}
                    class="text-xs tracking-wide border border-slate-900/20 px-4 py-2 hover:border-slate-950 hover:bg-slate-50 transition duration-300 rounded-sm uppercase font-medium text-slate-800">
                    Ubah Data Profil
                </button>
            </div>
        </div>
        
     {:else}
        <!-- Form Ubah Profil Lu Bawaan Sebelumnya -->
        <form class="flex flex-col space-y-5 h-full grid grid-rows-[82%_18%]">
            <div class="overflow-y-auto scrollbar-none space-y-4 pr-1">
                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Username</span>
                    <input type="text" placeholder="Masukkan username" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                </div>
                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Nama Lengkap</span>
                    <input type="text" placeholder="Masukkan nama" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                </div>
                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Email</span>
                    <input type="email" placeholder="nama@domain.com" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                </div>
            </div>
            <div class="border-t border-zinc-950/10 pt-3 flex justify-end items-center gap-2">
                <!-- Tombol Batal Balik ke Tampilan Awal -->
                <button 
                    type="button"
                    onclick={() => UbahProfil = false}
                    class="text-xs tracking-wide border border-transparent text-slate-500 hover:text-slate-950 px-4 py-2 transition duration-300 rounded-sm uppercase font-medium">
                    Batal
                </button>
                <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium">
                    Simpan Perubahan
                </button>
            </div>
        </form>
     {/if}
{/snippet}

{#snippet Alamat()}
        {#snippet EditAlamat()}
            <form class="flex flex-col space-y-5 h-full grid grid-rows-[82%_18%]">
                <!-- Scroll Area Konten -->
                <div class="overflow-y-auto scrollbar-none space-y-5 pr-1">
                    
                    <!-- Header Ringkas -->
                    <div class="flex items-center justify-between border-b border-zinc-950/10 pb-3">
                        <div class="flex flex-col space-y-0.5">
                            <h3 class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">EDIT ALAMAT</h3>
                            <span class="text-xs font-bold text-slate-950 font-mono">#DUMMY-123</span>
                        </div>
                        <span class="text-[8px] tracking-widest text-white bg-slate-950 px-1.5 py-0.5 rounded-xs uppercase font-semibold">Utama</span>
                    </div>

                    <!-- Field 1: Nama & Panggilan -->
                    <div class="grid grid-cols-2 gap-3">
                        <div class="flex flex-col space-y-2">
                            <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Panggilan Alamat</span>
                            <input type="text" value="Rumah Utama" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
                        </div>
                        <div class="flex flex-col space-y-2">
                            <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Nama Lengkap</span>
                            <input type="text" value="John Doe" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
                        </div>
                    </div>

                    <!-- Field 2: Telepon -->
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Nomor Telepon</span>
                        <input type="text" value="081234567890" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900 font-mono" />
                    </div>

                    <!-- Field 3: Alamat -->
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Alamat Lengkap</span>
                        <input type="text" value="Jl. Jendral Sudirman No. 21, Kavling 4" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
                    </div>

                    <!-- Field 4: Regional -->
                    <div class="grid grid-cols-3 gap-2">
                        <div class="flex flex-col space-y-2">
                            <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Provinsi</span>
                            <input type="text" value="DKI Jakarta" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
                        </div>
                        <div class="flex flex-col space-y-2">
                            <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Kota</span>
                            <input type="text" value="Jakarta Selatan" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
                        </div>
                        <div class="flex flex-col space-y-2">
                            <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Kode Pos</span>
                            <input type="text" value="12930" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900 font-mono" />
                        </div>
                    </div>

                    <!-- Field 5: Catatan -->
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Deskripsi Catatan</span>
                        <input type="text" value="Pagar hitam besar, samping warung kopi." class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm text-slate-900" />
                    </div>
                </div>

                <!-- Sticky Footer Tombol Aksi -->
                <div class="border-t border-zinc-950/10 pt-3 flex justify-between items-center bg-white">
                    <button type="button" class="text-xs tracking-wide text-red-600/60 hover:text-red-600 transition uppercase font-medium">
                        Hapus
                    </button>
                    <div class="flex items-center gap-2">
                        <button type="button" class="text-xs tracking-wide text-slate-500 hover:text-slate-950 px-4 py-2 transition uppercase font-medium" onclick={() => {EditAlamat2 = false}}>
                            Batal
                        </button>
                        <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition rounded-sm uppercase font-medium">
                            Simpan
                        </button>
                    </div>
                </div>
            </form>
        {/snippet}
   {#if EditAlamat2 == false}
     <form class="flex flex-col space-y-5 h-full grid grid-rows-[82%_18%]">
        <div class="overflow-y-auto scrollbar-none space-y-5 pr-1">
            
            <!-- CAROUSEL HORIZONTAL: Daftar Alamat Terdaftar -->
            <div use:AlamatEditAction class="flex flex-col space-y-2">
                <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">Alamat Terdaftar</span>
                
                <div class="flex space-x-3 overflow-x-auto scrollbar-none pb-2 snap-x snap-mandatory">
                    <!-- Card Alamat 1 (Aktif / Utama) -->
                    <div class="card-alamat flex-none w-56 snap-start border border-slate-950 p-3 rounded-sm bg-white flex flex-col justify-between h-28 select-none">
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-[9px] font-bold tracking-[0.12em] text-slate-950 uppercase">Rumah Utama</span>
                                <span class="text-[8px] tracking-wider text-white bg-slate-950 px-1 py-0.5 rounded-xs uppercase font-medium">Utama</span>
                            </div>
                            <p class="text-[10px] text-slate-900 line-clamp-2 leading-tight">Jl. Sudirman No. 45, Gedung B Lantai 3, Karet Semanggi</p>
                        </div>
                        <div class="flex items-center justify-between border-t border-zinc-950/10 pt-1.5 mt-2">
                            <span class="text-[9px] font-mono text-slate-800/60">081234567890</span>
                            <span class="text-[9px] font-mono text-slate-800/60">12930</span>
                        </div>
                    </div>

                    <!-- Card Alamat 2 -->
                    <div class="card-alamat flex-none w-56 snap-start border border-zinc-950/10 p-3 rounded-sm bg-white flex flex-col justify-between h-28 select-none hover:border-slate-400 transition cursor-pointer">
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-[9px] font-medium tracking-[0.12em] text-slate-800/60 uppercase">Kantor</span>
                            </div>
                            <p class="text-[10px] text-slate-800/70 line-clamp-2 leading-tight">Mega Kuningan Kawasan E.3.3 Telkom Hub, Kuningan Timur</p>
                        </div>
                        <div class="flex items-center justify-between border-t border-zinc-950/5 pt-1.5 mt-2">
                            <span class="text-[9px] font-mono text-slate-800/40">089876543210</span>
                            <span class="text-[9px] font-mono text-slate-800/40">12950</span>
                        </div>
                    </div>

                    <!-- Card Alamat 3 -->
                    <div class="card-alamat flex-none w-56 snap-start border border-zinc-950/10 p-3 rounded-sm bg-white flex flex-col justify-between h-28 select-none hover:border-slate-400 transition cursor-pointer">
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-[9px] font-medium tracking-[0.12em] text-slate-800/60 uppercase">Apartemen</span>
                            </div>
                            <p class="text-[10px] text-slate-800/70 line-clamp-2 leading-tight">Tower Noord, Unit 12B, Jl. Antasari No. 8, Cilandak</p>
                        </div>
                        <div class="flex items-center justify-between border-t border-zinc-950/5 pt-1.5 mt-2">
                            <span class="text-[9px] font-mono text-slate-800/40">081122334455</span>
                            <span class="text-[9px] font-mono text-slate-800/40">12430</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="border-t border-zinc-950/10" />

            <!-- FORM INPUT: Tambah Alamat Baru -->
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Panggilan Alamat</span>
                        <input type="text" placeholder="Contoh: Rumah / Kantor" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Nomor Telepon</span>
                        <input type="text" placeholder="08xxxx" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                    </div>
                </div>
                
                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Alamat Lengkap</span>
                    <input type="text" placeholder="Nama jalan, gedung, nomor rumah" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                </div>
                
                <div class="grid grid-cols-3 gap-2">
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Provinsi</span>
                        <input type="text" placeholder="Provinsi" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Kota</span>
                        <input type="text" placeholder="Kota" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Kode Pos</span>
                        <input type="text" placeholder="Kode Pos" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                    </div>
                </div>
                
                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Deskripsi Catatan (Opsional)</span>
                    <input type="text" placeholder="Warna pagar, instruksi kurir, dsb" class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" />
                </div>
            </div>
        </div>
        
        <!-- FOOTER FORM -->
        <div class="border-t border-zinc-950/10 pt-3 flex justify-end items-center">
            <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium">
                Tambah Alamat
            </button>
        </div>
    </form>
   {:else}
   {@render EditAlamat()}
   {/if}
{/snippet}

{#snippet KeamananAkun()}
    {#snippet UbahPassword()}
        <form class="flex flex-col space-y-5 h-full justify-between">
            <div class="space-y-4">
                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Password Lama</span>
                    <input 
                        type="password" 
                        placeholder="••••••••" 
                        class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" 
                    />
                </div>

                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Password Baru</span>
                    <input 
                        type="password" 
                        placeholder="••••••••" 
                        class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70" 
                    />
                </div>

                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Alasan Mengubah</span>
                    <textarea 
                        rows="2"
                        placeholder="Jelaskan alasan perubahan keamanan ini..." 
                        class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70 resize-none"
                    ></textarea>
                </div>

                <div class="flex flex-col space-y-2 pt-1">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Metode Verifikasi</span>
                    <div class="grid grid-cols-2 gap-2">
                        <label class="flex items-center justify-center gap-2 border border-slate-900/20 py-2 px-3 rounded-sm cursor-pointer hover:border-slate-950 transition group">
                            <input type="radio" name="verification_method" value="email" class="accent-slate-950 cursor-pointer text-slate-900" checked />
                            <span class="text-[10px] font-medium tracking-wider text-slate-800 uppercase group-hover:text-slate-950">OTP via Email</span>
                        </label>
                        <label class="flex items-center justify-center gap-2 border border-slate-900/20 py-2 px-3 rounded-sm cursor-pointer hover:border-slate-950 transition group">
                            <input type="radio" name="verification_method" value="pin" class="accent-slate-950 text-slate-900  cursor-pointer" />
                            <span class="text-[10px] font-medium tracking-wider text-slate-800 uppercase group-hover:text-slate-950">Via PIN Security</span>
                        </label>
                    </div>
                </div>

                <div class="pt-2">
                    <label class="flex items-start gap-2.5 cursor-pointer select-none group">
                        <input type="checkbox" required class="mt-0.5 accent-slate-950 rounded-xs cursor-pointer" />
                        <span class="text-[10px] text-slate-900/70 leading-normal group-hover:text-slate-950">
                            Saya menyetujui dan mematuhi seluruh <span class="font-bold underline text-slate-950">aturan & ketentuan keamanan</span> yang berlaku.
                        </span>
                    </label>
                </div>
            </div>

            <div class="border-t border-zinc-950/10 pt-3 flex justify-end items-center mt-4">
                <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium">
                    Perbarui Keamanan
                </button>
            </div>
        </form>
    {/snippet}

    {#snippet UbahPin()}
        <form class="flex flex-col space-y-5 h-full justify-between">
            <div class="space-y-4">
                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">PIN Lama</span>
                    <input 
                        type="password" 
                        maxlength="6" 
                        pattern="[0-9]*"
                        inputmode="numeric"
                        placeholder="••••••" 
                        class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70 font-mono tracking-[0.3em]" 
                    />
                </div>

                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">PIN Baru (6 Angka)</span>
                    <input 
                        type="password" 
                        maxlength="6" 
                        pattern="[0-9]*"
                        inputmode="numeric"
                        placeholder="••••••" 
                        class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70 font-mono tracking-[0.3em]" 
                    />
                </div>

                <div class="flex flex-col space-y-2">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Konfirmasi PIN Baru</span>
                    <input 
                        type="password" 
                        maxlength="6" 
                        pattern="[0-9]*"
                        inputmode="numeric"
                        placeholder="••••••" 
                        class="w-full border border-slate-900/20 px-2.5 py-1.5 text-xs outline-none focus:border-slate-950 bg-transparent rounded-sm placeholder:text-slate-400/70 font-mono tracking-[0.3em]" 
                    />
                </div>

                <div class="flex flex-col space-y-2 pt-1">
                    <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">Metode Verifikasi</span>
                    <div class="grid grid-cols-2 gap-2">
                        <label class="flex items-center justify-center gap-2 border border-slate-900/20 py-2 px-3 rounded-sm cursor-pointer hover:border-slate-950 transition group">
                            <input type="radio" name="pin_verification_method" value="email" class="accent-slate-950 cursor-pointer" checked />
                            <span class="text-[10px] font-medium tracking-wider text-slate-800 uppercase group-hover:text-slate-950">OTP via Email</span>
                        </label>
                        <label class="flex items-center justify-center gap-2 border border-slate-900/20 py-2 px-3 rounded-sm cursor-pointer hover:border-slate-950 transition group">
                            <input type="radio" name="pin_verification_method" value="password" class="accent-slate-950 cursor-pointer" />
                            <span class="text-[10px] font-medium tracking-wider text-slate-800 uppercase group-hover:text-slate-950">Via Password</span>
                        </label>
                    </div>
                </div>

                <div class="pt-2">
                    <label class="flex items-start gap-2.5 cursor-pointer select-none group">
                        <input type="checkbox" required class="mt-0.5 accent-slate-950 rounded-xs cursor-pointer" />
                        <span class="text-[10px] text-slate-900/70 leading-normal group-hover:text-slate-950">
                            Saya mengerti bahwa PIN ini digunakan untuk <span class="font-bold underline text-slate-950">otorisasi transaksi penting</span>.
                        </span>
                    </label>
                </div>
            </div>

            <div class="border-t border-zinc-950/10 pt-3 flex justify-end items-center mt-4">
                <button type="submit" class="text-xs tracking-wide bg-slate-950 text-white px-4 py-2 hover:bg-slate-800 transition duration-300 rounded-sm uppercase font-medium">
                    Perbarui PIN
                </button>
            </div>
        </form>
    {/snippet}
       <div class="grid grid-cols-2 w-fit justify-center gap-1 border-b border-zinc-950/10 pb-1">
            <button
                type="button"
                onclick={() => activeTab = 'password'}
                class="px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] uppercase transition-all duration-200 select-none rounded-sm"
                style="
                background-color: {activeTab === 'password' ? '#020617' : 'transparent'};
                color: {activeTab === 'password' ? '#ffffff' : 'rgba(2, 6, 23, 0.5)'};
                border: {activeTab === 'password' ? '1px solid #020617' : '1px solid transparent'};
                "
            >
                Ubah Password
            </button>

            <button
                type="button"
                onclick={() => activeTab = 'pin'}
                class="px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] uppercase transition-all duration-200 select-none rounded-sm"
                style="
                background-color: {activeTab === 'pin' ? '#020617' : 'transparent'};
                color: {activeTab === 'pin' ? '#ffffff' : 'rgba(2, 6, 23, 0.5)'};
                border: {activeTab === 'pin' ? '1px solid #020617' : '1px solid transparent'};
                "
            >
                Ubah Pin
            </button>
            </div>

            <div class="mt-4">
            {#if activeTab === 'password'}
                {@render UbahPassword()}
            {:else if activeTab === 'pin'}
                {@render UbahPin()}
            {/if}
            </div>
{/snippet}
{#snippet Notifikasi()}
     <div class="flex flex-col space-y-6">
                <div class="border-b border-zinc-950/10 pb-3">
                    <h3 class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">PENGATURAN PUSH NOTIFICATION</h3>
                </div>
                <div class="space-y-4">
                    <label class="flex items-center justify-between w-full cursor-pointer py-1">
                        <span class="text-xs text-slate-800 tracking-wide">Notifikasi Transaksi & Pembayaran</span>
                        <input type="checkbox" checked class="accent-slate-950 w-4 h-4 cursor-pointer" />
                    </label>
                    <label class="flex items-center justify-between w-full cursor-pointer py-1">
                        <span class="text-xs text-slate-800 tracking-wide">Notifikasi Aktivitas Login Akun</span>
                        <input type="checkbox" checked class="accent-slate-950 w-4 h-4 cursor-pointer" />
                    </label>
                    <label class="flex items-center justify-between w-full cursor-pointer py-1">
                        <span class="text-xs text-slate-800 tracking-wide">Promo, Flash Sale & Info Logistik</span>
                        <input type="checkbox" class="accent-slate-950 w-4 h-4 cursor-pointer" />
                    </label>
                </div>
            </div>
{/snippet}

{#snippet PrivasiAkun()}
    <div class="flex flex-col space-y-6">
                <div class="border-b border-zinc-950/10 pb-3">
                    <h3 class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase">VISIBILITAS PUBLIK</h3>
                </div>
                <div class="space-y-4">
                    <label class="flex items-center justify-between w-full cursor-pointer py-1">
                        <span class="text-xs text-slate-800 tracking-wide">Sembunyikan daftar transaksi saya dari publik</span>
                        <input type="checkbox" class="accent-slate-950 w-4 h-4 cursor-pointer" />
                    </label>
                    <label class="flex items-center justify-between w-full cursor-pointer py-1">
                        <span class="text-xs text-slate-800 tracking-wide">Gunakan nama samaran (anonim) saat ulasan produk</span>
                        <input type="checkbox" checked class="accent-slate-950 w-4 h-4 cursor-pointer" />
                    </label>
                </div>
            </div>
{/snippet}


{#snippet Penautan()}
      <div class="flex flex-col space-y-5 h-full justify-between">
                <div class="space-y-4">
                    <div class="border-b border-zinc-950/10 pb-2 mb-4">
                        <span class="text-[10px] font-medium tracking-[0.18em] text-slate-950/50 uppercase block">MEDIA SOSIAL TERHUBUNG</span>
                    </div>
                    
                    <!-- Whatsapp -->
                    <div class="flex items-center justify-between py-1 border-b border-zinc-950/5 pb-2">
                        <div class="flex flex-col">
                            <span class="text-xs font-semibold text-slate-900">WhatsApp</span>
                            <span class="text-[10px] text-slate-800/50">+62 812-3456-7890</span>
                        </div>
                        <button class="text-[10px] tracking-widest text-slate-800/60 border border-slate-900/20 px-2 py-0.5 hover:border-slate-950 hover:bg-slate-50 transition rounded-sm uppercase">Putus</button>
                    </div>

                    <!-- Instagram -->
                    <div class="flex items-center justify-between py-1 border-b border-zinc-950/5 pb-2">
                        <div class="flex flex-col">
                            <span class="text-xs font-semibold text-slate-900">Instagram</span>
                            <span class="text-[10px] text-slate-800/40">Belum ditautkan</span>
                        </div>
                        <button class="text-[10px] tracking-widest bg-slate-950 text-white px-2 py-0.5 hover:bg-slate-800 transition rounded-sm uppercase">Tautkan</button>
                    </div>

                    <!-- Facebook -->
                    <div class="flex items-center justify-between py-1 border-b border-zinc-950/5 pb-2">
                        <div class="flex flex-col">
                            <span class="text-xs font-semibold text-slate-900">Facebook</span>
                            <span class="text-[10px] text-slate-800/40">Belum ditautkan</span>
                        </div>
                        <button class="text-[10px] tracking-widest bg-slate-950 text-white px-2 py-0.5 hover:bg-slate-800 transition rounded-sm uppercase">Tautkan</button>
                    </div>

                    <!-- TikTok -->
                    <div class="flex items-center justify-between py-1 pb-2">
                        <div class="flex flex-col">
                            <span class="text-xs font-semibold text-slate-900">TikTok</span>
                            <span class="text-[10px] text-slate-800/40">Belum ditautkan</span>
                        </div>
                        <button class="text-[10px] tracking-widest bg-slate-950 text-white px-2 py-0.5 hover:bg-slate-800 transition rounded-sm uppercase">Tautkan</button>
                    </div>
                </div>
            </div>
{/snippet}
<section class="grid grid-cols-[36%_64%] w-full h-[27rem] border border-zinc-950/10 rounded-sm bg-white">
    <!-- LEFT SIDEBAR: Navigasi Opsi -->
    <div class="grid grid-rows-7 pl-4 pr-4 border-r border-zinc-950/10 py-2">
        <!-- Tombol 1: Aktifitas -->
       <!-- Tombol 1: Aktifitas -->
<button 
    onclick={() => LeftOpsiState.setAktifitas()}
    class="w-full grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isAktifitas() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Aktifitas</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<!-- Tombol 2: Ubah Profil -->
<button 
    onclick={() => LeftOpsiState.setUbahProfil()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isUbahProfil() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Ubah Profil</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<!-- Tombol 3: Daftar Alamat -->
<button 
    onclick={() => LeftOpsiState.setDaftarAlamat()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isDaftarAlamat() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Daftar Alamat</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<!-- Tombol 4: Keamanan Akun -->
<button 
    onclick={() => LeftOpsiState.setKeamananAkun()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isKeamananAkun() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Keamanan Akun</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<!-- Tombol 5: Notifikasi -->
<button 
    onclick={() => LeftOpsiState.setNotifikasi()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isNotifikasi() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Notifikasi</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<!-- Tombol 6: Privasi Akun -->
<button 
    onclick={() => LeftOpsiState.setPrivasiAkun()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isPrivasiAkun() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Privasi Akun</span> 
    <span class="text-right text-zinc-400">-></span>
</button>

<!-- Tombol 7: Penautan -->
<button 
    onclick={() => LeftOpsiState.setPenautan()}
    class="w-full border-t border-zinc-950/10 grid grid-cols-2 items-center text-[10px] font-medium tracking-[0.18em] uppercase transition text-left {LeftOpsiState.isPenautan() ? 'text-slate-950 font-bold' : 'text-slate-800/50 hover:text-slate-950'}">
    <span>Penautan</span> 
    <span class="text-right text-zinc-400">-></span>
</button>
    </div>

    <!-- RIGHT CONTENT: Area Isi Data -->
    <div class="p-6 overflow-y-auto scrollbar-none h-full bg-white flex flex-col min-h-0">
        
        {#if LeftOpsiState.isAktifitas()}
            <!-- TAB: AKTIFITAS -->
           {@render Aktifitas()}

        {:else if LeftOpsiState.isUbahProfil()}
            <!-- TAB: UBAH PROFIL (Mengikuti struct Pengguna) -->
           {@render Profil()}

        {:else if LeftOpsiState.isDaftarAlamat()}
            <!-- TAB: DAFTAR ALAMAT (Mengikuti struct AlamatPengguna) -->
           {@render Alamat()}

        {:else if LeftOpsiState.isKeamananAkun()}
            <!-- TAB: KEAMANAN AKUN -->
         {@render KeamananAkun()}

        {:else if LeftOpsiState.isNotifikasi()}
            <!-- TAB: NOTIFIKASI -->
        {@render Notifikasi()}


        {:else if LeftOpsiState.isPrivasiAkun()}
            <!-- TAB: PRIVASI AKUN -->
            {@render PrivasiAkun()}

        {:else if LeftOpsiState.isPenautan()}
            <!-- TAB: PENAUTAN (Mengikuti struct EntitySocialMedia) -->
          {@render Penautan()}
        {/if}

    </div>
</section>