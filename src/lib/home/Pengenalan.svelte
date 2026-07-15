<script lang="ts">
	import { Full } from '../../constant/UiConstant';
    const Headername: string[] = ["Header1", "Header2", "Header3"]
    let zin: number = 100;
    let pos: number = 0;

    let rotate:boolean = $state(false)
</script>

<style>
    .perspective-1000 {
    perspective: 1000px;
}

.transform-style-3d {
    transform-style: preserve-3d;
}

.card-flipped {
    transform: rotateY(180deg);
}

.backface-hidden {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.rotate-y-180 {
    transform: rotateY(180deg);
}
</style>
<section id="pengenalan" class="w-full mb-4 h-[22rem] p-2 grid grid-cols-[42%_18%_40%] z-10">
<section id="signup-login" class="flex justify-center items-center h-[20rem] perspective-1000">
        
    <div
        class="relative w-full max-w-md h-full transition-transform duration-700 transform-style-3d"
        class:card-flipped={rotate}
    >
        
        <!-- SISI DEPAN -->
       <div
    class="absolute inset-0 backface-hidden border border-zinc-900/10 p-6 bg-gradient-to-br w-[95%] from-slate-100/60 via-slate-100/40 to-white/30 backdrop-blur-xl rounded-2xl grid grid-rows-[50%_50%] overflow-hidden shadow-xl shadow-slate-900/5"
    style:z-index={rotate ? 10 : 20}
>
    <div class="relative overflow-hidden">
        <!-- efek cahaya -->
        <div class="absolute -top-20 -right-20 w-40 h-40 bg-white/50 blur-3xl rounded-full"></div>

        <div class="grid grid-cols-[15%_75%_10%] relative">
            <div></div>

            <div>
                <h1 class="text-left mt-6 font-bold text-4xl text-slate-800 font-sans tracking-normal">
                    Jual Beli Jadi Gampang
                </h1>

                <div class="mt-2 w-[30%] h-1 rounded-full bg-slate-900/80"></div>
            </div>

            <div></div>
        </div>
    </div>


    <div>
        <div class="grid grid-cols-[15%_75%_10%] h-full">

            <div></div>

            <div class="flex flex-col justify-between pb-6">

                <h4 class="text-left font-display text-lg/tight text-slate-900 font-semi-bold font-signature leading-relaxed">
                    Bersama Burung temukan barang incaranmu dengan usapan jari
                </h4>


                <div class="space-x-4 flex justify-left mt-4 mb-10">

                    <button
                        class="group relative overflow-hidden text-white bg-slate-900 px-4 py-2 rounded-lg transition duration-300 shadow-md shadow-slate-900/10 hover:shadow-lg hover:bg-slate-800"
                    >
                        <span class="relative z-10">
                            Tentang Kami
                        </span>
                    </button>


                    <button
                        onclick={() => rotate = true}
                        class="relative px-4 py-2 rounded-lg border border-slate-900/10 hover:border-slate-900 transition duration-300 hover:bg-slate-900 hover:text-white"
                    >
                        Bergabung
                    </button>

                </div>

            </div>

            <div></div>

        </div>
    </div>

</div>


        <!-- SISI BELAKANG -->
        <div
            class="absolute inset-0 backface-hidden rotate-y-180 bg-slate-50 border border-zinc-900/10 rounded-2xl flex flex-col justify-center py-4 sm:px-6 lg:px-8 overflow-y-auto"
            style:z-index={rotate ? 20 : 10}
        >
            <div class="sm:mx-auto sm:w-full sm:max-w-sm px-4">

                <h1 class="text-left font-display font-semibold text-2xl text-slate-900 tracking-tight">
                    Login
                </h1>

                <div class="mt-3">
                    <form class="space-y-2.5" onsubmit={(e) => e.preventDefault()}>

                        <div>
                            <label class="block text-xs font-medium text-slate-600 mb-0.5">
                                Email
                            </label>

                            <input 
                                type="email"
                                class="w-full rounded-md border border-slate-300 p-2 text-sm text-slate-950 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition"
                                placeholder="name@example.com"
                                required
                            />
                        </div>


                        <div>
                            <label class="block text-xs font-medium text-slate-600 mb-0.5">
                                Password
                            </label>

                            <input
                                type="password"
                                class="w-full rounded-md border border-slate-300 p-2 text-sm text-slate-950 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition"
                                placeholder="••••••••"
                                required
                            />
                        </div>


                        <div class="grid grid-cols-2 gap-3 pt-1">

                            <button
                                type="submit"
                                class="w-full bg-slate-900 text-white hover:bg-slate-800 transition duration-300 px-3 py-2 text-xs font-medium rounded-md text-center shadow-sm"
                            >
                                Login
                            </button>

                            <a
                                href="/signup"
                                class="w-full text-slate-900 bg-white border border-slate-300 px-3 py-2 text-xs font-medium rounded-md transition duration-300 text-center hover:bg-slate-50 block"
                            >
                                Sign Up
                            </a>

                        </div>

                    </form>


                    <div class="flex justify-start mt-4 pt-2 border-t border-slate-200">

                        <button
                            onclick={() => rotate = false}
                            class="text-slate-500 bg-transparent px-2 py-1 text-xs font-medium rounded-md transition duration-300 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                            Kembali
                        </button>

                    </div>

                </div>
            </div>

        </div>

    </div>
</section>
    <div>

    </div>
    <!-- 1. Tambahkan class 'relative' pada container utama agar menjadi patokan koordinat -->
     <section id="carousel-slide" class="relative {Full} p-4">
        {#each Headername as h, i}
            <!-- Menggunakan transform: translateY dan nilainya dikurangi (-) agar naik ke atas -->
       <!-- Mengurangi nilai dasar z-index langsung di HTML (misal dimulai dari 10) -->
        <div style="z-index: {(10) - (i * 10)}; transform: translateY({pos - (i * 15)}px) translateX({pos + (i * 15)}px) rotate(4deg) skewX(4deg);" class="absolute top-0 left-0 w-[100%] h-[100%] grid grid-rows-[11%_89%] origin-bottom-left">
            <!-- Header Section -->
            <div class="bg-slate-100/60 backdrop-blur-sm border-b-slate-100 border-t border-l border-r border-zinc-400/50 rounded-t-lg {Full}">
                <h3 class="ml-2">{h}</h3>
            </div>
            
            <!-- Content Section -->
            <div class="bg-slate-100/90 backdrop-blur-sm border-t border-b border-l border-r border-zinc-400/40 rounded-b-sm {Full}">
            
            </div>
        </div>
        {/each}
    </section>
</section>