import type { Snippet } from "svelte";

export interface kartuPengenalanData {
    header: string;
    isi?: Snippet;
}


export interface carouselData {
    header: string;
    isi: string;
}

export interface katakata{
    a: string;
    b:string
}

export interface Testimoni{
    nama: string;
    gelar: string;
    ulasan: string;
    bintang: number;
    commited: string;
}