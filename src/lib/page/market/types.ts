export interface VarianBarang {
    Nama: string;
    FotoBarang: string;
    Deskripsi: string;
    Warna: string;
    Stok: number;          // Diubah jadi number
    PotonganDiskon: number;
    Sku: string;
    IsOriginal: boolean;
}

export interface CardProductData {
    NamaSeller: string;
    NamaBarang: string;
    KategoriBarang: VarianBarang[]; // Mengubah tipe stok ke number di dalam sini           // Disarankan pakai string URL
    VideoBarang?: string;         // Disarankan pakai string URL
    Star: number;
    Reviewer: number;
}