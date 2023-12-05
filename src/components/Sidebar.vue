<script setup lang="ts">
import { ref } from 'vue'
import { useSidebar } from '../composables/useSidebar'
import { defineProps } from 'vue';

const props = defineProps(['noPadding']);

const { isOpen } = useSidebar()
const activeClass = ref(
  'bg-[#0063A7] text-white font-bold border-[#0063A7]',
)
const inactiveClass = ref(
  'border-white text-black font-bold hover:bg-gray-600  hover:border-gray-600 hover:border-opacity-25 hover:bg-opacity-25 hover:text-gray-100',
)
</script>

<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
      @click="isOpen = false"
    />
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0"
    >
     <div class="flex px-5 items-center mt-10">
      <img src="src/assets/img1.png" class="w-14 h-14 rounded-md">
      <div class="flex-row px-3">
        <h1 class="font-bold text-md">Nawal Rizky</h1>
        <h1 class="text-[#5541D7] font-bold text-[0.8rem]">Verified</h1>
      </div>
     </div>
     <hr class="h-px my-4 bg-gray-600 border-1 mx-3">

      <nav class="mt-8">
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
          to="/dashboard"
        >
        <svg
            class="w-5 h-5 text-[#9A9AB0]"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
              fill="currentColor"
            />
            <path
              d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
              fill="currentColor"
            />
            <path
              d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
              fill="currentColor"
            />
            <path
              d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
              fill="currentColor"
            />
          </svg>

          <span class="mx-4">Dashboard</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Statistik' ? activeClass : inactiveClass]"
          to="/statistik"
        >
        <ion-icon name="stats-chart-outline" class="w-5 h-5 text-[#9A9AB0]"></ion-icon>

          <span class="mx-4">Statistik</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'ProdukSaya' ? activeClass : inactiveClass]"
          to="/produksaya"
        >
        <ion-icon name="bag-outline"  class="w-5 h-5 text-[#9A9AB0]"></ion-icon>

          <span class="mx-4">Produk saya</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Order' ? activeClass : inactiveClass]"
          to="/order"
        >
        <ion-icon name="cart-outline" class="w-5 h-5 text-[#9A9AB0]"></ion-icon>

          <span class="mx-4">Order</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Transaksi' ? activeClass : inactiveClass]"
          to="/transaksi"
        >
        <ion-icon name="card-outline" class="w-5 h-5 text-[#9A9AB0]"></ion-icon>

          <span class="mx-4">Transaksi</span>
        </router-link>
      
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Promosi' ? activeClass : inactiveClass]"
          to="/promosi"
        >
        <ion-icon name="newspaper-outline" class="w-5 h-5 text-[#9A9AB0]"></ion-icon>
          <span class="mx-4">Promosi</span>
        </router-link>

        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Pesan' ? activeClass : inactiveClass]"
          to="/pesan"
        >
       
        <ion-icon name="chatbubbles-outline" class="w-5 h-5 text-[#9A9AB0]"></ion-icon>
          <span class="mx-4">Pesan</span>
        </router-link>
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Review' ? activeClass : inactiveClass]"
          to="/review"
        >
        <ion-icon name="chatbox-ellipses-outline" class="w-5 h-5 text-[#9A9AB0]"></ion-icon>

          <span class="mx-4">Review</span>
        </router-link>
        <router-link
          class="flex items-center p-4 rounded-md mx-5 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Setting' ? activeClass : inactiveClass]"
          to="/setting"
        >
        <ion-icon name="settings-outline" class="w-5 h-5 text-[#9A9AB0]"></ion-icon>

          <span class="mx-4">Pengaturan</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>
