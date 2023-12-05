<script lang="ts">
import { IonIcon } from '@ionic/vue';

</script>

<template>
     <div class="px-6 py-8">
  <div class="flex justify-between">
    <h1 class=" text-3xl font-bold">
      Promosi
    </h1>

    <router-link to="/produksaya/tambah-produk"
      class="px-4 py-2 font-medium flex items-center tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#0063A7] rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
      Tambah Promosi <ion-icon name="add-outline" class="pl-5 pr-2"></ion-icon>
    </router-link>
  </div>
  <div class="flex mt-3 text-gray-400">
    <h1 class="pr-6">Gunakan fitur ini untuk meningkatkan performa toko</h1>
  </div>
  <div class="flex flex-col mt-10 sm:flex-row bg-white rounded-lg py-4 px-3 justify-between ">
    <input placeholder="Search" class="block w-[30rem] rounded-xl p-2">
    <div class="flex justify-between gap-14">
      <div class="relative">
        <select class="  border-none font-bold w-full">
          <option value="" disabled selected hidden>Kategori</option>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div>
      <div class="relative">
        <select class="  border-none font-bold w-full">
          <option value="" disabled selected hidden>Terbaru</option>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div>
      <div class="relative">
        <select class="  border-none font-bold w-full">
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
              Nama Promo
              <a href="#"><svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg></a>
            </div>
          </th>
          <th scope="col" class="px-6 py-4 ">
            <div class="flex items-center justify-between">
              Kategori
              <a href="#"><svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg></a>
            </div>
          </th>
          <th scope="col" class="px-6 py-4 ">
            <div class="flex items-center justify-between">
              Mulai
              <a href="#"><svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg></a>
            </div>
          </th>
          <th scope="col" class="px-6 py-4 ">
            <div class="flex items-center justify-between">
              Selesai
              <a href="#"><svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg></a>
            </div>
          </th>
          <th scope="col" class="px-6 py-4 ">
            <div class="flex items-center justify-between">
              Status
              <a href="#"><svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
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
            <div class="">
              <div class="text-base font-semibold">Diskon hari raya</div>
              <div class="font-normal text-[0.6rem] text-gray-500">Paket Tur 1, Paket Tur 5</div>
            </div>
          </th>
          <td scope="row" class=" px-6 py-4">
            <div class="text-base">Diskon</div>
          </td>
          <td class="px-6 py-4 flex-col text-sm">
            <h1>22/01/2023</h1>
            <h1>06:00</h1>
          </td>

          <td class="px-6 py-4 flex-col text-sm">
            <h1>22/01/2023</h1>
            <h1>06:00</h1>
          </td>

          <td class=" px-6 py-4 ">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer">
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-100  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-500">
              </div>
              <span class="ml-3 text-sm font-medium text-[#FFA216] "><a href="#">Edit</a></span>
            </label>
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
            <div class="">
              <div class="text-base font-semibold">Diskon hari raya</div>
              <div class="font-normal text-[0.6rem] text-gray-500">Paket Tur 1, Paket Tur 5</div>
            </div>
          </th>
          <td scope="row" class=" px-6 py-4">
            <div class="text-base">Kode Promo</div>
          </td>
          <td class="px-6 py-4 flex-col text-sm">
            <h1>22/01/2023</h1>
            <h1>06:00</h1>
          </td>

          <td class="px-6 py-4 flex-col text-sm">
            <h1>22/01/2023</h1>
            <h1>06:00</h1>
          </td>

          <td class=" px-6 py-4 ">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer">
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-100  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-500">
              </div>
              <span class="ml-3 text-sm font-medium text-[#FFA216] "><a href="#">Edit</a></span>
            </label>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
</div>
</template>
  
  