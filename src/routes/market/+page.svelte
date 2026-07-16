<script lang="ts">
    import { page } from '$app/state';
    import { goto } from '$app/navigation';
	import HeadingResult from '$lib/page/market/HeadingResult.svelte';
	import SearchingResult from '$lib/page/market/SearchingResult.svelte';

    // ==========================================
    // 1. MEMBACA STATE DARI URL (Reaktif via Svelte 5 $derived)
    // ==========================================
    let searchParam = $derived(page.url.searchParams.get('q') ?? '');
    let categoryParam = $derived(page.url.searchParams.get('kategori') ?? '');
    let sellerTypeParam = $derived(page.url.searchParams.get('tipe_seller') ?? '');
    let sellerNameParam = $derived(page.url.searchParams.get('seller') ?? '');

    // ==========================================
    // 2. STATE LOCAL UNTUK INPUT/FILTER UI
    // ==========================================
    let searchQuery = $state('');
    let selectedCategory = $state('');
    let selectedSellerType = $state('');
    let sellerSearchQuery = $state('');

    // Sinkronisasi dari URL ke State Local saat halaman pertama kali dimuat / URL berubah
    $effect(() => {
        searchQuery = searchParam;
        selectedCategory = categoryParam;
        selectedSellerType = sellerTypeParam;
        sellerSearchQuery = sellerNameParam;
    });

    // ==========================================
    // 3. FUNGSI UPDATE URL (Pemicu Navigasi)
    // ==========================================
    function applyFilters() {
        const params = new URLSearchParams();

        if (searchQuery) params.set('q', searchQuery);
        if (selectedCategory) params.set('kategori', selectedCategory);
        if (selectedSellerType) params.set('tipe_seller', selectedSellerType);
        if (sellerSearchQuery) params.set('seller', sellerSearchQuery);

        // goto ke URL baru tanpa mereload halaman, mengupdate parameter reaktif
        goto(`/market?${params.toString()}`, { keepFocus: true });
    }

    function resetFilters() {
        searchQuery = '';
        selectedCategory = '';
        selectedSellerType = '';
        sellerSearchQuery = '';
        goto('/market');
    }

    // ==========================================
    // 4. DATA MOCKUP PRODUK (Contoh Filtering di Client-Side)
    // ==========================================
    const allProducts = [
        { id: 1, name: 'Sepatu Running Nike Aero', category: 'sepatu', seller: 'Sinar Sport', sellerType: 'star', price: 'Rp 1.200.000', img: '👟' },
        { id: 2, name: 'Kaos Polos Cotton Combed 30s', category: 'pakaian', seller: 'Polos Jaya', sellerType: 'regular', price: 'Rp 45.000', img: '👕' },
        { id: 3, name: 'Sandal Slide Adidas Comfort', category: 'sepatu', seller: 'Sinar Sport', sellerType: 'star', price: 'Rp 350.000', img: '🩴' },
        { id: 4, name: 'Jaket Coach Windbreaker Waterproof', category: 'pakaian', seller: 'Outerwear Co', sellerType: 'official', price: 'Rp 275.000', img: '🧥' },
        { id: 5, name: 'Raket Badminton Yonex Arcsaber', category: 'olahraga', seller: 'Toko Smash', sellerType: 'regular', price: 'Rp 850.000', img: '🏸' },
    ];

    // Filter produk secara real-time berdasarkan parameter URL yang aktif
    let filteredProducts = $derived(
        allProducts.filter(product => {
            const matchesSearch = !searchParam || product.name.toLowerCase().includes(searchParam.toLowerCase());
            const matchesCategory = !categoryParam || product.category === categoryParam;
            const matchesSellerType = !sellerTypeParam || product.sellerType === sellerTypeParam;
            const matchesSellerName = !sellerNameParam || product.seller.toLowerCase().includes(sellerNameParam.toLowerCase());
            
            return matchesSearch && matchesCategory && matchesSellerType && matchesSellerName;
        })
    );
</script>

<main class="pr-2 pl-2 space-y-4 scrollbar-none">
    <HeadingResult/>
    <SearchingResult/>
</main>