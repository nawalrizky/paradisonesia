<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import apiClient from '../http-common';

const route = useRoute();
const orderId = ref(route.params.orderId);

interface Order {
  id: number;
  price: number;
  product_name: string;
  quantity: number;
  // Add other properties from your API response
}

const orders = ref<Order[]>([]);

onMounted(async () => {
  try {
    const response = await apiClient.get('/v1/merchants/me/items');
    orders.value = response.data.data || [];
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
});
</script>
<template>
  <div class="px-6 py-8">
  <div class="flex justify-between">
    <h1 class=" text-3xl font-bold">
    Order
    </h1>

  
  </div>
  <div class="flex mt-8 text-[#BEBEBE]">
    <h1 class="pr-6 text-black">Semua Item(3)</h1>
    <h1 class="pr-6">Belum Dikonfirmasi(1)</h1>
 
  </div>
  <div class="flex flex-col justify-between mt-10 sm:flex-row bg-white rounded-lg py-4 px-3">
    <input placeholder="Search" class="block w-[30rem] rounded-xl p-2">
    <div class="flex justify-end w-1/2">
      <div class="relative w-full">
        <select class=" border-none font-bold w-full">
          <option value="" disabled selected hidden>Kategori</option>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div>
      <div class="relative w-full">
        <select class=" mr-3 border-none font-bold w-full">
          <option value="" disabled selected hidden>Terbaru</option>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div>
      <div class="relative w-full">
        <select class="  border-none font-bold w-full ">
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
              Item
              <a href="#"><svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg></a>
            </div>
          </th>
          <th scope="col" class="px-6 py-4 ">
            <div class="flex items-center justify-between">
              Pembeli
              <a href="#"><svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg></a>
            </div>
          </th>
          <th scope="col" class="px-6 py-4 ">
            <div class="flex items-center justify-between">
              Harga
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
      <tbody class="">
         
        <tr v-for="order in orders" :key="order.id" class="bg-white border-b hover:bg-gray-50 text-black content-center">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input id="checkbox-all-search" type="checkbox"
                class="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ">
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </td>
          <th scope="row" class="flex items-center p-6 font-medium text-gray-900 h-full ">
            <router-link  :to="{ name: 'detail-order', params: { orderId: order.id } }" class="flex">
            <img class="w-10 h-10 rounded-md" src="src/assets/img1.png">
            <div class="pl-3">
              <div class="text-base font-semibold">{{ order.product_name }}</div>
              <div class="font-normal text-[0.6rem] text-gray-500">Paket Wisata</div>
            </div>
        </router-link>
          </th>
          
          <th scope="row" class=" items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
              <div class="text-base font-medium">Broto</div>
              <div class="font-normal text-[0.6rem] ">broto@gmail.com</div>
              <a href="#" class="text-sm text-[#FFA216]">Chat Pembeli</a>
          </th>
         
          <td class="px-6 py-4">
            <div class="flex">
              <h1 class="border p-2 font-semibold bg-[#F7F7FC] text-sm border-gray-300 rounded-l-lg">Rp </h1>
              <div type="text" id="minimal_produk"
                class="w-full rounded-lg rounded-l-none border border-l-white border-gray-300 text-sm text-gray-600 ">
                {{ order.price }}
              </div>
            </div>
          </td>

          <td class=" px-6 py-4 ">
            <div class="inline-flex gap-3">
            <button
    class=" px-7 py-1 text-sm border-red-600 border text-white bg-red-600 rounded-lg hover:bg-gray-100 hover:text-red-600 focus:outline-none">
    Hapus
  </button>
            <button
                    class=" px-7 py-1 text-sm border-[#0063A7] border text-white hover:bg-gray-100 hover:text-blue-600 bg-[#0063A7] rounded-lg focus:outline-none"
                    >
                  Konfirmasi
                  </button>
                </div>
          </td>
        </tr>
  
        
      </tbody>
    </table>
  </div>
  </div>
</template>
  
  