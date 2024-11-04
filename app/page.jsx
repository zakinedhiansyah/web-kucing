"use client"; // Menandai komponen ini sebagai Client Component

import Image from "next/image";
import { useState } from "react";

async function fetchCats() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10", { cache: 'no-store' });
  return response.json();
}

async function fetchDogs() {
  const response = await fetch("https://api.thedogapi.com/v1/images/search?limit=10", { cache: 'no-store' });
  return response.json();
}

export default function Home() {
  const [dataKucing, setDataKucing] = useState([]);
  const [dataAnjing, setDataAnjing] = useState([]);

  const handleFetchCats = async () => {
    const cats = await fetchCats();
    setDataKucing(cats);
  };

  const handleFetchDogs = async () => {
    const dogs = await fetchDogs();
    setDataAnjing(dogs);
  };

  const handleCancelCats = () => {
    setDataKucing([]); // Mengosongkan state dataKucing
  };

  const handleCancelDogs = () => {
    setDataAnjing([]); // Mengosongkan state dataKucing
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4 shadow-md p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg">
        Menampilkan Foto Kucing dan Anjing</h2>
    

      {/* Container untuk memusatkan tombol */}
      <div className="flex justify-center mb-4">
        <button
          onClick={handleFetchCats}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2"
        >
          Tampilkan Foto Kucing
        </button>

        <button
          onClick={handleCancelCats}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mx-2"
        >
          Tutup Foto Kucing
        </button>

        <button
          onClick={handleFetchDogs}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2"
        >
          Tampilkan Foto Anjing
        </button>




        <button
          onClick={handleCancelDogs}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mx-2"
        >
          Tutup Foto Anjing
        </button>

      </div>






      <div className="flex flex-row gap-5 ">

        <div className="">
          <h2 className=" text-2xl text-center">Foto Kucing</h2>
          <div className="grid grid-cols-2 gap-4 ">
            {dataKucing.map((cat, i) => (
              <div key={i} >
                <Image unoptimized src={cat.url} alt={`Cat`} width={400} height={400} className="rounded-2xl w-[400px] h-[400px]" />
                {/* Menghapus bagian yang menampilkan ID */}
                {/* <p className="mt-2 text-sm text-gray-600">ID: {cat.id}</p> */}
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl text-center">Foto Anjing</h2>
          <div className="grid grid-cols-2 gap-4">
            {dataAnjing.map((cat, i) => (
              <div key={i} >
                <Image unoptimized src={cat.url} alt={`Cat`} width={400} height={400} className="rounded-2xl w-[400px] h-[400px]" />
                {/* Menghapus bagian yang menampilkan ID */}
                {/* <p className="mt-2 text-sm text-gray-600">ID: {cat.id}</p> */}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
