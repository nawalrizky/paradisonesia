<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import apiClient from '../http-common';

const route = useRoute();
const orderId = ref(route.params.orderId);
const orderDetail = ref<orderDetail | null>(null);


interface orderDetail {
  id: number;
  net_price: number;
  price: number;
  product_name: string;
  product_description: string;
  start_date: string;
  end_date: string;
  quantity: number;
  note: string;
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    // ... other properties from the product
  };
  transaction: {
    id: number;
    invoice_number: string;
    item_total_price: number;
    item_total_net_price: number;
    total_voucher_price: number;
    amount: number;
    status: {
      id: number;
      name: string | null;
      description: string;
    };
  };
  status: {
    id: number;
    name: string;
    description: string;
  };
}

onMounted(async () => {
  try {
    const response = await apiClient.get<{ data: orderDetail }>(`/v1/items/${orderId.value}`);
    orderDetail.value = response.data.data || null;
  } catch (error) {
    console.error('Error fetching order details:', error);
  }
});

</script>
<template>
  <div class="px-6 py-8">
  <div class="flex justify-between">
    <h1 class=" text-3xl font-bold">
      Detail Order
    </h1>

    <router-link to="/produksaya/tambah-produk"
      class="px-8 py-1 text-sm flex items-center tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#0063A7] rounded-lg hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
      Chat Pembeli
    </router-link>
  </div>
  <div class="bg-white rounded-md py-5 px-4 mt-10 shadow-md">
    <h1 class="font-bold">Informasi Produk</h1>

    <div class="mt-5 relative ">

      <table class="w-full text-sm text-left rtl:text-right  rounded-lg overflow-hidden ">
        <tbody class="">
          <tr class="border-b border-gray-200 dark:border-gray-700  ">
            <th scope="row"
              class="px-5 py-2 w-1/6 font-semibold  text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Nama Produk
            </th>
            <td class="px-3 py-2">
              {{ orderDetail?.product?.name }}
            </td>

          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700 ">
            <th scope="row" class="px-5 py-2 font-semibold text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Kategori Produk
            </th>
            <td class="px-3 py-2">
              Paket Wisata
            </td>

          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" class="px-5 py-2 font-semibold  text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Harga
            </th>
            <td class=" px-3 py-2">
              Rp {{ orderDetail?.product?.price }}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" class="px-5 py-2 font-semibold  text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Deskripsi
            </th>
            <td class=" px-3 py-2">
              {{ orderDetail?.product?.description }}
            </td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
  <div class="bg-white rounded-md py-5 px-4 mt-10 shadow-md">
    <h1 class="font-bold">Informasi Pembeli</h1>

    <div class="mt-5 relative ">

      <table class="w-full text-sm text-left rtl:text-right rounded-lg overflow-hidden ">
        <tbody class="">
          <tr class="border-b border-gray-200 dark:border-gray-700  ">
            <th scope="row"
              class="px-5 py-2 w-1/6 font-semibold  text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Nama
            </th>
            <td class="px-3 py-2">
              Nawal
            </td>

          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700 ">
            <th scope="row" class="px-5 py-2 font-semibold text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Alamat E-mail
            </th>
            <td class="px-3 py-2">
              nawal@gmail.com
            </td>

          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" class="px-5 py-2 font-semibold  text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Nomor Telepon
            </th>
            <td class=" px-3 py-2">
              08123456789
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
  <div class="bg-white rounded-md py-5 px-4 mt-10 shadow-md">
    <h1 class="font-bold">Informasi Order</h1>

    <div class="mt-5 relative ">

      <table class="w-full text-sm text-left rtl:text-right rounded-lg overflow-hidden ">
        <tbody class="">
          <tr class="border-b border-gray-200 dark:border-gray-700  ">
            <th scope="row"
              class="px-5 py-2 w-1/6 font-semibold  text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Status
            </th>
            <td class="px-3 py-2">
              Belum Konfirmasi
            </td>

          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700 ">
            <th scope="row" class="px-5 py-2 font-semibold text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Nomor
            </th>
            <td class="px-3 py-2">
             {{ orderDetail?.transaction?.invoice_number }}
            </td>

          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" class="px-5 py-2 font-semibold  text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Jumlah
            </th>
            <td class=" px-3 py-2">
              {{ orderDetail?.transaction?.amount}}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" class="px-5 py-2 font-semibold  text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Total Harga
            </th>
            <td class=" px-3 py-2">
              Rp  {{ orderDetail?.transaction?.item_total_price }}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" class="px-5 py-2 font-semibold  text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Metode Pembayaran
            </th>
            <td class=" px-3 py-2">
              Gopay
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
  <div class="mt-10 flex gap-5 justify-end">
    <button
    class=" px-7 py-2 text-sm border-red-600 border text-white bg-red-600 rounded-lg hover:bg-gray-100 hover:text-red-600 focus:outline-none">
    Hapus
  </button>
  <button
    class=" px-7 py-2 text-sm border-[#0063A7] border text-white bg-[#0063A7] rounded-lg hover:bg-gray-100 hover:text-[#0063A7] focus:outline-none">
    Konfirmasi
  </button>
</div>
</div>
</template>