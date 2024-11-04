"use client"; // Menandai komponen ini sebagai Client Component

import Image from "next/image";
import { useState } from "react";

async function fetchCats() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10", { cache: 'force-cache' });
  return response.json();
}

export default function Home() {
  const [dataKucing, setDataKucing] = useState([]);

  const handleFetchCats = async () => {
    const cats = await fetchCats();
    setDataKucing(cats);
  };

  const handleCancelCats = () => {
    setDataKucing([]); // Mengosongkan state dataKucing
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4 shadow-md p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg">
        Menampilkan 10 Foto Kucing</h2>
      <h3 className="text-3xl font-semibold text-center text-gray-900 mt-8 mb-4 underline"> Cute Cats</h3>

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
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {dataKucing.map((cat, i) => (
          <div key={i} >
            <Image src={cat.url} alt={`Cat`} width={400} height={400} className="rounded-2xl w-[400px] h-[400px]" />
            {/* Menghapus bagian yang menampilkan ID */}
            {/* <p className="mt-2 text-sm text-gray-600">ID: {cat.id}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
