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
              Paket Tur 1
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
              Rp 2.000.000
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" class="px-5 py-2 font-semibold  text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Deskripsi
            </th>
            <td class=" px-3 py-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets containing.
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
              891382192
            </td>

          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" class="px-5 py-2 font-semibold  text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Jumlah
            </th>
            <td class=" px-3 py-2">
              1
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" class="px-5 py-2 font-semibold  text-gray-900  bg-gray-50 dark:text-white dark:bg-gray-800">
              Total Harga
            </th>
            <td class=" px-3 py-2">
              Rp 2.000.000
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