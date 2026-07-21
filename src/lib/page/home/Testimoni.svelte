{#snippet CardTestimoni(item: Testimoni)}
    <div class="group h-[13rem] w-[13rem] border border-zinc-800/20 rounded-xs p-4 text-slate-950 select-none bg-white hover:bg-slate-950 hover:text-white transition-all duration-300 flex flex-col justify-between shadow-sm">
        <div class="min-w-0">
            <h4 class="font-bold text-xs truncate tracking-wider text-slate-950 transition-colors duration-300 group-hover:text-white">
                {item.nama}
            </h4>
            <p class="text-[9px] font-mono text-slate-500 tracking-tight truncate transition-colors duration-300 group-hover:text-slate-400 mt-0.5">
                {item.gelar}
            </p>
        </div>

        <p class="text-[11px] text-slate-700 font-light line-clamp-4 leading-relaxed my-1 italic whitespace-normal break-words transition-colors duration-300 group-hover:text-slate-300">
            "{item.ulasan}"
        </p>

        <div class="flex justify-between items-center text-[9px] font-mono text-slate-500 border-t border-zinc-800/10 pt-2 transition-colors duration-300 group-hover:text-slate-400 group-hover:border-white/10">
            <span class="font-medium flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-slate-950 transition-colors duration-300 group-hover:fill-amber-400" d="M12.6722 2.04308C12.5459 1.78707 12.2851 1.625 11.9996 1.625C11.7142 1.625 11.4534 1.78707 11.3271 2.04308L8.67288 7.4211L2.73788 8.28351C2.45536 8.32456 2.22065 8.52244 2.13243 8.79395C2.04421 9.06546 2.11779 9.36351 2.32222 9.56278L6.61682 13.749L5.603 19.66C5.55475 19.9414 5.67041 20.2257 5.90137 20.3936C6.13233 20.5614 6.43853 20.5835 6.69122 20.4506L11.9996 17.6598L17.3081 20.4506C17.5608 20.5835 17.867 20.5614 18.0979 20.3936C18.3289 20.2257 18.4445 19.9414 18.3963 19.66L17.3825 13.749L21.6771 9.56278C21.8815 9.36351 21.9551 9.06546 21.8669 8.79395C21.7786 8.52244 21.5439 8.32456 21.2614 8.28351L15.3264 7.4211L12.6722 2.04308Z"/>
                </svg>
                <span class="font-bold text-slate-950 group-hover:text-white transition-colors duration-300">{item.bintang}.0</span>
            </span>
            <span class="truncate max-w-[70px] text-right">[ {item.commited} ]</span>
        </div>
    </div>
{/snippet}

<script lang="ts">
    import { Full } from '../../../constant/UiConstant';
    import type { Testimoni } from './types';

    let testimoniBurung: Testimoni[] = $state<Testimoni[]>([
        {
            nama: "Budi Santoso",
            gelar: "Pembeli - Gadget Enthusiast",
            ulasan: "Beli handphone baru di aplikasi Burung pas event Migrasi Kilat dapet diskon gede. Pengiriman cepat, sehari sampai!",
            bintang: 5,
            commited: "2j yang lalu"
        },
        {
            nama: "Siti Rahmawati",
            gelar: "Seller - Toko Baju Modis",
            ulasan: "Jualan fashion di platform Burung ini untung banget. Potongan admin seller kecil dan sistem pencairan dananya cepet.",
            bintang: 5,
            commited: "1h yang lalu"
        },
        {
            nama: "Andi Wijaya",
            gelar: "Pembeli - Casual Buyer",
            ulasan: "Fitur Sangkar Belanja (keranjang) nya rapi banget, bisa misah-misahin barang belanjaan bulanan dengan gampang.",
            bintang: 4,
            commited: "3h yang lalu"
        },
        {
            nama: "Dewi Lestari",
            gelar: "Pembeli - Ibu Rumah Tangga",
            ulasan: "Awalnya penasaran kenapa namanya Burung, pas coba belanja kosmetik di sini ternyata aplikasinya ringan dan gak ribet.",
            bintang: 5,
            commited: "1m yang lalu"
        },
        {
            nama: "Rian Hidayat",
            gelar: "Pembeli - Hunter Diskon",
            ulasan: "Suka banget fitur Kicau Review, review video dari pembeli lain jujur-jujur, jadi gak takut ketipu barang KW.",
            bintang: 5,
            commited: "2m yang lalu"
        },
        {
            nama: "Eka Putri",
            gelar: "Pembeli - Skincare Lover",
            ulasan: "Rekomendasi produk di beranda pas banget sama yang lagi saya butuhin. Algoritma aplikasinya pinter nih.",
            bintang: 5,
            commited: "3m yang lalu"
        },
        {
            nama: "Fikri Haikal",
            gelar: "Seller - Elektronik Murah",
            ulasan: "Sistem keamanannya mantap. Rekening bersama bikin pembeli percaya belanja barang elektronik mahal di toko saya.",
            bintang: 5,
            commited: "1bln lalu"
        },
        {
            nama: "Amalia Siregar",
            gelar: "Pembeli - Mahasiswi",
            ulasan: "Opsi kurir instan Merpati Express-nya ngebantu banget pas butuh beli alat tulis yang besoknya mau dipake kuliah.",
            bintang: 5,
            commited: "1bln lalu"
        },
        {
            nama: "Rizky Pratama",
            gelar: "Pembeli - Gamer",
            ulasan: "Bintang 4 dulu, pas flash sale akbar servernya sempat agak delay pas mau bayar. Tapi untungnya dapet part PC yang diincar.",
            bintang: 4,
            commited: "2bln lalu"
        },
        {
            nama: "Nadia Utami",
            gelar: "Pembeli Baru",
            ulasan: "Pertama kali daftar langsung dapet voucher gratis ongkir tanpa minimal belanja. Auto langganan belanja di Burung!",
            bintang: 5,
            commited: "3bln lalu"
        }
    ]);

    let doubleTestimoni = [...testimoniBurung, ...testimoniBurung];

    setInterval(() => {
        // Mengambil item terakhir dan memindahkannya ke posisi paling depan
        const itemTerakhir = testimoniBurung.pop();
        if (itemTerakhir) {
            testimoniBurung = [itemTerakhir, ...testimoniBurung];
        }
    }, 2000);
</script>

<style>
    /* Jalur animasi geser kiri */
    @keyframes marquee {
        0% {
            transform: translateX(0%);
        }
        100% {
            /* Geser tepat setengah dari total panjang track duplikat */
            transform: translateX(-50%);
        }
    }

    .animate-marquee {
        display: flex;
        width: max-content;
        animation: marquee 40s linear infinite;
    }

    .animate-marquee:hover {
        animation-play-state: paused;
    }

    .mask-gradient {
        mask-image: linear-gradient(to right, transparent, white 4%, white 90%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, white 4%, white 90%, transparent);
    }
</style>

<section id="testimoni" class="w-full h-[28rem] mt-20 p-6 lg:p-8 grid grid-rows-[15%_10%_5%_70%] items-center my-8">
    <div>
        <h1 class="text-left font-bold text-3xl lg:text-4xl text-slate-950 uppercase tracking-tight leading-none">
            TESTIMONI
        </h1>
    </div>
    <div>
        <p class="text-xs text-slate-500 font-mono uppercase tracking-wider">
            INI YANG MEREKA BILANG SOAL BURUNG
        </p>
    </div>
    <div></div>
    
    <div class="{Full} overflow-hidden p-2 flex flex-row relative mask-gradient">
        <div class="flex flex-row space-x-3 animate-marquee whitespace-nowrap">
            {#each doubleTestimoni as d}
                <div class="flex-none">
                    {@render CardTestimoni(d)}
                </div>
            {/each}
        </div>
    </div>
</section>