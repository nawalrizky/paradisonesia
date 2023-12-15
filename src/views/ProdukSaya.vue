<!-- ProdukSaya.vue -->
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { IonIcon } from '@ionic/vue';
import apiClient from '../http-common';
import StarRating from '../components/StarRating.vue';
interface SubCategory {
  id: number;
  name: string;
  icon: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  average_rating: number;
  is_published: boolean;
  stock: number | null; 
  thumbnail: string; 
  sub_category: SubCategory; // Add this line to include sub_category information
}

const selectedCategory = ref<string>(''); 
const products = ref<Product[]>([]);
  const showSuccessAlert = ref(false);
onMounted(async () => {
  try {
    const response = await apiClient.get('/v1/merchants/me/products');

    if (response.data.data) {
      products.value = response.data.data || [];
    } else {
      console.error('Error fetching products:', response.data.message || 'Unexpected response structure');
    }
  } catch (error: any) {
    console.error('Error fetching products:', (error as Error).message);
  }
});
const deleteProduct = async (productId: number, productName: string) => {
  try {
    await apiClient.delete(`/v1/products/${productId}`);
    // Setelah berhasil menghapus dari API, Anda dapat memperbarui data lokal atau melakukan aksi lain yang diperlukan
    products.value = products.value.filter((product) => product.id !== productId);

    // Set showSuccessAlert to true to display the success alert
    showSuccessAlert.value = true;

    // Hide the success alert after a certain period (e.g., 3 seconds)
    setTimeout(() => {
      showSuccessAlert.value = false;
    }, 3500);
  } catch (error) {
    console.error('Gagal menghapus produk:', error);
    // Handle error, mungkin dengan menampilkan pesan kesalahan kepada pengguna
  }
};

const filteredProducts = computed(() => {
  if (!selectedCategory.value || selectedCategory.value === 'Semua') {
    return products.value; 
  }

  return products.value.filter((product) => product.sub_category.name === selectedCategory.value);
});
</script>


<template> 
<div v-if="showSuccessAlert" class="p-4 mb-4 text-sm text-red-800 bg-red-50 " role="alert">
  <span class="font-medium">Berhasil!</span> Produk telah dihapus.
</div>
  <div class="px-6 py-8">
  <div class="flex justify-between">
    <h1 class=" text-3xl font-bold">
      Daftar Produk
    </h1>

    <router-link to="/produksaya/tambah-produk"
      class="px-4 py-2 font-medium flex items-center tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#0063A7] rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
      Tambah Produk <ion-icon name="add-outline" class="pl-5 pr-2"></ion-icon>
    </router-link>
  </div>
  <div class="flex flex-col justify-between mt-10 sm:flex-row bg-white rounded-lg py-4 px-3">
    <input placeholder="Search" class="block w-[30rem] rounded-xl p-2">
    <div class="flex justify-end w-1/2">
      <div class="relative w-full">
      <select v-model="selectedCategory" class="border-none font-bold w-full">
        <option value="" disabled selected hidden>Kategori</option>
        <option>Semua</option>
        <option>Paket Wisata</option>
        <option>Tiket Masuk</option>
        <option>Rental</option>
        <option>Guide</option>
        <option>Kamar Penginapan</option>
      </select>
    </div>
      <div class="relative w-full">
        <select class=" mr-3 border-none font-bold w-full">
          <option>Terbaru</option>
          <option>Terlama</option>
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
        <thead class="text-black bg-white border-b relative">
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
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg>
            </div>
          </th>
          <th scope="col" class="px-6 py-4 ">
            <div class="flex items-center justify-between">
              Rating
              <svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg>
            </div>
          </th>
          <th scope="col" class="px-6 py-4 ">
            <div class="flex items-center justify-between">
              Harga
              <svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg>
            </div>
          </th>
          <th scope="col" class="px-6 py-4 ">
            <div class="flex items-center justify-between">
              Stok
           <svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg>
            </div>
          </th>
          <th scope="col" class="px-6 py-4 ">
            <div class="flex items-center justify-between">
              Status
             <svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg>
            </div>
          </th>


        </tr>

        </thead>
        <tbody>
          <tr v-for="product in filteredProducts" :key="product.id" class="bg-white border-b hover:bg-gray-50 text-black">
            <td class="w-4 p-4">
            <div class="flex items-center">
              <input id="checkbox-all-search" type="checkbox"
                class="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ">
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </td>
          <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
  <img class="w-10 h-10 rounded-md" :src="product.thumbnail" alt="Product Thumbnail">
  <div class="pl-3">
    <div class="text-base font-semibold">{{ product.name }}</div>
    <div class="font-normal text-[0.6rem] text-gray-500">{{ product.sub_category.name }}</div>
  </div>
</th>

          <td scope="row" class=" px-6 py-4">
            <div class="text-sm"> <StarRating :rating="product.average_rating" /></div>
          </td>
          <td class="px-6 py-4">
            <div class="flex">
              <h1 class="border p-2 font-semibold bg-[#F7F7FC] text-sm border-gray-300 rounded-l-lg">Rp</h1>
              <div type="text" id="minimal_produk"
                class="w-full rounded-lg rounded-l-none border border-l-white border-gray-300 text-sm text-gray-600 ">
                {{ product.price }}
              </div>

            </div>
          </td>

          <td class="px-6 py-4">
            <div type="text" id="minimal_produk"
              class="w-full rounded-lg  border  border-gray-300 text-sm text-gray-600 ">
              {{ product.stock !== null ? product.stock : 'null' }}
            </div>
          </td>

          <td class="px-6 py-4">
  <label class="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="product.is_published"
      class="sr-only peer"
      disabled
    />
    <div
      :class="{
        'w-11 h-6 bg-gray-200': !product.is_published,
        'w-11 h-6 bg-green-500': product.is_published
      }"
      class="peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-100 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
    ></div>
    <span class="ml-3 text-sm font-medium text-[#FFA216]">
  <a href="#" @click="() => deleteProduct(product.id, product.name)">Hapus</a>
</span>

  </label>
</td>

            
          </tr>
        </tbody>
      </table>
  </div>
 
  </div>
</template>
