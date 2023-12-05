<script setup lang="ts">
import ReviewCard from '../components/ReviewCard.vue';
</script>

<template>
    <div class="px-6 py-8">
        <h1 class=" text-3xl font-bold">
            Review
        </h1>
        <h1 class=" text-2xl font-bold mt-10">
            Produk Saya
        </h1>
        <div class="flex mt-8 items-center justify-between">
            <div class="inline-flex gap-8  text-gray-500">
                <h1 class=" text-black">Semua(2)</h1>
                <h1 class="">Belum Dibalas(1)</h1>
            </div>
            <div class="relative">
        <select class=" border-none font-medium w-full rounded-md">
          <option value="" disabled selected hidden>Rating</option>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div>
        </div>
        <div class="mt-10 flex gap-10 relative w-full">
            <ReviewCard class=""/>
            <ReviewCard class=""/>
           
            </div>
    </div>
</template>