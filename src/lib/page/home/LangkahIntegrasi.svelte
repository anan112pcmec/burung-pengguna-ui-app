{#snippet carouselData({header, isi}: carouselData, key: number)}
    <div 
        id={String(key)} 
        class="bg-white hover:bg-slate-950 hover:text-white transition duration-300 border border-zinc-800/20 rounded-t-3xl rounded-b-lg grid w-[100%] h-[6rem] p-4 grid-rows-[30%_5%_65%] shadow-sm text-slate-950"
    >
        <div>
            <h2 class="font-bold text-xs uppercase tracking-wider">{header}</h2>
        </div>
        <div></div>
        <ul>
            <li class="text-xs font-light leading-relaxed">
                {isi}
            </li>
        </ul>
    </div>
{/snippet}

<script lang="ts">
    import type { carouselData } from './types';

    const headeramaisi: carouselData[] = [
        {
            header: "Login Sekali Tap",
            isi: "Gak zaman masukin email & password ribet. Sekali ketuk langsung masuk, anti drama!"
        },
        {
            header: "Cari Barang Satset",
            isi: "Algoritma kita peka banget, langsung nampilin barang yang emang selera kamu banget."
        },
        {
            header: "Tinggal Beli, Beres!",
            isi: "Duduk manis aja, urusan packing sampai kurir kurir biar Burung yang handle semuanya."
        },
        {
            header: "Login Sekali Tap",
            isi: "Gak zaman masukin email & password ribet. Sekali ketuk langsung masuk, anti drama!"
        },
        {
            header: "Cari Barang Satset",
            isi: "Algoritma kita peka banget, langsung nampilin barang yang emang selera kamu banget."
        },
        {
            header: "Tinggal Beli, Beres!",
            isi: "Duduk manis aja, urusan packing sampai kurir kurir biar Burung yang handle semuanya."
        }
    ];

    function scrollEnd(node: HTMLElement) {
        const handleScroll = () => {
            // Toleransi 2-5px agar mulus di semua device
            const isBottom = Math.ceil(node.scrollTop + node.clientHeight) >= node.scrollHeight - 2;
            
            if (isBottom) {
                window.scrollBy({
                    top: 429, 
                    behavior: 'smooth'
                });
            }
        };

        // Pasang event listener saat elemen di-mount
        node.addEventListener('scroll', handleScroll);

        // Cleanup event listener saat elemen di-destroy (mencegah memory leak)
        return {
            destroy() {
                node.removeEventListener('scroll', handleScroll);
            }
        };
    }
</script>

<section id="kelebihan-app" class="w-full h-[24rem] p-4 grid grid-cols-[50%_5%_45%] mt-20">
    <div class="text-3xl lg:text-5xl text-right font-bold text-slate-950 uppercase tracking-tight leading-none flex justify-center items-center">
        Langkah Nya Cukup Mudah
    </div>
    <div></div>
    <div class="relative h-[22rem] mt-20">
        
        <div class="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>

        <div use:scrollEnd class="h-full overflow-y-auto p-2 scrollbar-none grid space-y-2 scroll-my-[100%] transition-colors duration-300 ease-in-out">
            {#each headeramaisi as d, i}
                {@render carouselData(d, i)}
            {/each}
        </div>

        <div class="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>

    </div>
</section>