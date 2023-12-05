<script lang="ts">
import { IonIcon } from '@ionic/vue';

</script>

<template>
    <div class="px-6 py-8">
    <div class="flex justify-between">
        <h1 class=" text-3xl font-bold">
            Transaksi Penjualan
        </h1>
        <div class="inline-flex gap-5">
            <router-link to="/produksaya/tambah-produk"
                class="px-4 py-2 font-medium flex items-center tracking-wide text-main-blue capitalize transition-colors duration-200 transform border border-main-blue rounded-md hover:text-white hover:bg-main-blue focus:outline-none focus:bg-main-blue">
                Buka Receipt Input
            </router-link>
            <router-link to="/produksaya/tambah-produk"
                class="px-4 py-2 font-medium flex items-center tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#0063A7] rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
                Unduh Transaksi
            </router-link>
        </div>
    </div>
    <div class="flex mt-8 text-[#BEBEBE]">
        <h1 class="pr-6 text-black">Semua(5)</h1>
        <h1 class="pr-6">Dibayar(1)</h1>
        <h1 class="pr-6">Menunggu Pembayaran(1)</h1>
        <h1 class="pr-6">Batal(1)</h1>
        <h1 class="pr-6">Refunded(1)</h1>
    </div>
    <div class="flex flex-col justify-between mt-10 sm:flex-row bg-white rounded-lg py-4 px-3">
        <input placeholder="Search" class="relative w-1/3 rounded-xl p-2">
        <div class="flex justify-between gap-[10rem]">
            <div class="relative">
                <select class="  border-none font-bold w-full">
                    <option value="" disabled selected hidden>Terbaru</option>
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                </select>
            </div>
            <div class="relative">
                <select class=" border-none font-bold w-full">
                    <option>30</option>
                    <option>10</option>
                    <option>20</option>
                </select>
            </div>
        </div>
    </div>

    <div class="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg">
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
                            Transaksi
                            <a href="#"><svg class="w-3 h-3 text-black " aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                                </svg></a>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-4 ">
                        <div class="flex items-center justify-between">
                            Nomor Transaksi
                            <a href="#"><svg class="w-3 h-3 text-black " aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                                </svg></a>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-4 ">
                        <div class="flex items-center justify-between">
                            Status
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
                            <a href="#"><svg class="w-3 h-3 text-black " aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                                </svg></a>
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
                        <router-link to="/transaksi/detail-transaksi" class="flex">
                        <img class="w-10 h-10 rounded-md" src="src/assets/img1.png">
                        <div class="pl-3">
                            <div class="text-base font-semibold">Paket Tur 1</div>
                            <div class="font-normal text-[0.6rem] text-gray-500">Nama Pembeli</div>
                        </div>
                    </router-link>
                    </th>
                    <td scope="row" class=" px-6 py-4">
                        <div class="text-sm">8918291892 </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="inline-flex gap-3 bg-[#54b93841] px-3 py-2 w-full rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                <defs>
                                    <mask id="ipSCheckOne0">
                                        <g fill="none" stroke-linejoin="round" stroke-width="4">
                                            <path fill="#fff" stroke="#fff"
                                                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
                                            <path stroke="#000" stroke-linecap="round" d="m16 24l6 6l12-12" />
                                        </g>
                                    </mask>
                                </defs>
                                <path fill="#55b938" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)" />
                            </svg>
                            <h1 class="font-semibold ">Sudah bayar</h1>
                        </div>
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
                        <img class="w-10 h-10 rounded-md" src="src/assets/img1.png">
                        <div class="pl-3">
                            <div class="text-base font-semibold">Paket Tur 2</div>
                            <div class="font-normal text-[0.6rem] text-gray-500">Nama Pembeli</div>
                        </div>
                    </th>
                    <td scope="row" class=" px-6 py-4">
                        <div class="text-sm">8918291892 </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="inline-flex gap-3 bg-[#eac6454c] px-3 py-2 w-full rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                <path fill="#eac645"
                                    d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17Zm-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20Zm21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z" />
                            </svg>
                            <h1 class="font-semibold">Belum bayar</h1>
                        </div>
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
                        <img class="w-10 h-10 rounded-md" src="src/assets/img1.png">
                        <div class="pl-3">
                            <div class="text-base font-semibold">Paket Tur 3</div>
                            <div class="font-normal text-[0.6rem] text-gray-500">Nama Pembeli</div>
                        </div>
                    </th>
                    <td scope="row" class=" px-6 py-4">
                        <div class="text-sm">8918291892 </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="inline-flex gap-3 bg-[#eac6454c] px-3 py-2 w-full rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                <defs>
                                    <mask id="ipSCheckOne0">
                                        <g fill="none" stroke-linejoin="round" stroke-width="4">
                                            <path fill="#fff" stroke="#fff"
                                                d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" />
                                            <path stroke="#000" stroke-linecap="round" d="m16 24l6 6l12-12" />
                                        </g>
                                    </mask>
                                </defs>
                                <path fill="#eac645" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)" />
                            </svg>
                            <h1 class="font-semibold">Refunded</h1>
                        </div>
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
                        <img class="w-10 h-10 rounded-md" src="src/assets/img1.png">
                        <div class="pl-3">
                            <div class="text-base font-semibold">Paket Tur 3</div>
                            <div class="font-normal text-[0.6rem] text-gray-500">Nama Pembeli</div>
                        </div>
                    </th>
                    <td scope="row" class=" px-6 py-4">
                        <div class="text-sm">8918291892 </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="inline-flex gap-3 bg-[#d6564542] px-3 py-2 w-full rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                <path fill="#d65745"
                                    d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17Zm-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20Zm21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z" />
                            </svg>
                            <h1 class="font-semibold">Batal</h1>
                        </div>
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
  
  