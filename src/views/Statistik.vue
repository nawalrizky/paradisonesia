<script setup lang="ts">
import DataProduk from '../components/DataProduk.vue';
</script>
<template>
    <div class="px-6 py-8">
        <DataProduk />
        <div class="relative mt-10 overflow-x-auto shadow-md bg-white sm:rounded-lg p-5">
            <div class="inline-flex justify-between w-full">
                <h1 class="font-bold">Orderan Terbaru</h1>
                <div class="inline-flex items-center gap-3">
                    <h1 class="font-bold">Minggu Ini</h1>
                    <svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 8">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                    </svg>
                </div>
            </div>
            <hr class="h-px my-4 bg-gray-600 border-1 ">
            <table class="w-full text-left text-black">
                <thead class=" text-black  bg-white  border-b relative">
                    <tr>
                        <th scope="col" class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox"
                                    class="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ">
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-4 ">
                            <div class="flex items-center justify-between">
                                Item
                                <svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 14 8">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                                </svg>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-4 ">
                            <div class="flex items-center justify-between">
                                Jumlah
                                <svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 14 8">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                                </svg>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-4 ">
                            <div class="flex items-center justify-between">
                                Tanggal
                                <a href="#"><svg class="w-3 h-3 text-black " aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                                    </svg></a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-4 ">
                            <div class="flex items-center justify-between">
                                Aksi

                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b hover:bg-gray-50 text-black">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox"
                                    class="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ">
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            <router-link to="/transaksi/detail-transaksi" class="flex items-center">
                                <img class="w-8 h-8 rounded-full" src="src/assets/img1.png">
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Paket Tur 1</div>
                                    
                                </div>
                            </router-link>
                        </th>
                        <td scope="row" class=" px-6 py-4">
                            <div class="text-sm">8918291892 </div>
                        </td>
                        <td scope="row" class=" px-6 py-4">
                            <div class="text-sm">8918291892 </div>
                        </td>


                        <td class="px-6 py-4 ">
                            <div class="inline-flex gap-5 w-full ">
                                <router-link to="/produksaya/tambah-produk"
                                    class="p-2 text-sm w-full  font-reguler text-centerr tracking-wide text-main-blue capitalize transition-colors duration-200 transform border border-main-blue rounded-md hover:text-white hover:bg-main-blue focus:outline-none focus:bg-main-blue">
                                    Chat Pembeli
                                </router-link>
                                <router-link to="/produksaya/tambah-produk"
                                    class="p-2 text-sm w-full font-reguler text-center tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#0063A7] rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
                                    Detail
                                </router-link>
                            </div>
                        </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-50 text-black">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox"
                                    class="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ">
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            <img class="w-8 h-8 rounded-full" src="src/assets/img1.png">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Paket Tur 2</div>
                                
                            </div>
                        </th>
                        <td scope="row" class=" px-6 py-4">
                            <div class="text-sm">8918291892 </div>
                        </td>
                        <td scope="row" class=" px-6 py-4">
                            <div class="text-sm">8918291892 </div>
                        </td>

                        <td class=" px-6 py-4 ">
                            <div class="inline-flex gap-5 w-full ">
                                <router-link to="/produksaya/tambah-produk"
                                    class="p-2 text-sm w-full  font-reguler text-centerr tracking-wide text-main-blue capitalize transition-colors duration-200 transform border border-main-blue rounded-md hover:text-white hover:bg-main-blue focus:outline-none focus:bg-main-blue">
                                    Chat Pembeli
                                </router-link>
                                <router-link to="/produksaya/tambah-produk"
                                    class="p-2 text-sm w-full font-reguler text-center tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#0063A7] rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
                                    Detail
                                </router-link>
                            </div>
                        </td>
                    </tr>
                    <tr class="bg-white border-b hover:bg-gray-50 text-black">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox"
                                    class="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ">
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            <img class="w-8 h-8 rounded-full" src="src/assets/img1.png">
                            <div class="pl-3">
                                <div class="text-base font-semibold">Paket Tur 3</div>
                                
                            </div>
                        </th>
                        <td scope="row" class=" px-6 py-4">
                            <div class="text-sm">8918291892 </div>
                        </td>
                        <td scope="row" class=" px-6 py-4">
                            <div class="text-sm">8918291892 </div>
                        </td>
                        
                        <td class=" px-6 py-4 ">
                            <div class="inline-flex gap-5 w-full ">
                                <router-link to="/produksaya/tambah-produk"
                                    class="p-2 text-sm w-full  font-reguler text-centerr tracking-wide text-main-blue capitalize transition-colors duration-200 transform border border-main-blue rounded-md hover:text-white hover:bg-main-blue focus:outline-none focus:bg-main-blue">
                                    Chat Pembeli
                                </router-link>
                                <router-link to="/produksaya/tambah-produk"
                                    class="p-2 text-sm w-full font-reguler text-center tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#0063A7] rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
                                    Detail
                                </router-link>
                            </div>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
</template>