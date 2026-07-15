<script lang="ts">
    import type { katakata } from "./types";
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    const slides: katakata[] = [
        { a: "simple", b: "fast" },  
        { a: "smart",  b: "far" },    
        { a: "smooth", b: "free" },  
        { a: "secure", b: "sure" },   
        { a: "sleek",  b: "chic" },   
        { a: "shared", b: "paired" }, 
        { a: "sharp",  b: "first" }   
    ];
    
    let indeksA = $state(0);
    let indeksB = $state(0);

    let teksA = $derived(slides[indeksA].a);
    let teksB = $derived(slides[indeksB].b);

    const randomangka = (): number => Math.floor(Math.random() * slides.length);
    const randomdetik = (): number => Math.floor(Math.random() * (12000 - 5000 + 1)) + 5000;

    // Fungsi untuk mengembalikan angka 1 atau -1 secara acak
    const acakArah = (): number => (Math.random() > 0.5 ? 1 : -1);

    $effect(() => {
        let timeoutA: ReturnType<typeof setTimeout>;
        let timeoutB: ReturnType<typeof setTimeout>;

        const putarA = () => {
            timeoutA = setTimeout(() => {
                indeksA = randomangka();
                putarA();
            }, randomdetik());
        };

        const putarB = () => {
            timeoutB = setTimeout(() => {
                indeksB = randomangka();
                putarB();
            }, randomdetik());
        };

        putarA();
        putarB();

        return () => {
            clearTimeout(timeoutA);
            clearTimeout(timeoutB);
        };
    });

    function scrollAfterDelay(node: HTMLElement) {
        let timer: ReturnType<typeof setTimeout>;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 1. Elemen masuk layar -> Mulai hitung mundur 5 detik (5000ms)
                    timer = setTimeout(() => {
                        window.scrollBy({
                            top: 428, // <--- Sesuaikan jarak scroll-nya di sini
                            behavior: 'smooth'
                        });
                    }, 5000);
                } else {
                    // 2. Elemen keluar layar sebelum 5 detik -> Batalkan timer (Safety check)
                    clearTimeout(timer);
                }
            });
        }, {
            threshold: 0.5 // Elemen dianggap "masuk" kalau sudah kelihatan minimal 50%
        });

        // Mulai mengamati elemen
        observer.observe(node);

        // Cleanup saat komponen di-destroy
        return {
            destroy() {
                observer.unobserve(node);
                clearTimeout(timer);
            }
        };
    }
</script>

<section use:scrollAfterDelay id="filosofi" class="w-full h-[24rem] font-bold mt-20 p-4 text-7xl/tight text-right font-sans text-slate-900 flex justify-center items-center">
    <h1> 
        Keep it 
        <span class="inline-grid grid-cols-1 grid-rows-1 text-left vertical-align-middle">
            {#key teksA}
                <span
                    in:fly={{ y: 25 * acakArah(), duration: 700, delay: 200, easing: quintOut }} 
                    out:fly={{ y: -25 * acakArah(), duration: 300, easing: quintOut }}  
                    class="tulisan_a inline-block col-start-1 row-start-1">
                    {teksA}
                </span>
            {/key}
        </span>, 
        Fly 
        <span class="inline-grid grid-cols-1 grid-rows-1 text-left vertical-align-middle">
            {#key teksB}
                <span 
                    in:fly={{ y: 25 * acakArah(), duration: 700, delay: 200, easing: quintOut }} 
                    out:fly={{ y: -25 * acakArah(), duration: 300, easing: quintOut }} 
                    class="tulisan_b inline-block col-start-1 row-start-1">
                    {teksB}
                </span>
            {/key}
        </span>
    </h1>
</section>