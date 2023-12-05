<script setup lang="ts">

</script>
<template>
    <div class="px-6 py-6">
        <h1 class=" text-3xl font-bold">
            Pengaturan
        </h1>
        <div class="inline-flex gap-5 mt-10 text-gray-500">
            <h1 class="text-black">Informasi</h1>
            <h1>Lokasi</h1>
            <h1>Pengaturan Pembayaran</h1>
        </div>
        <div class="bg-white px-5 py-3 mt-5 rounded-md">
            <div class="flex justify-between items-center">
                <h1 class="text-xl font-semibold">Banner Merchant</h1>
                <button class=" text-main-yellow rounded-md px-5 py-2">Edit</button>
            </div>
            <hr class="w-full mt-3">
            <img src="src/assets/banner.jpg" class="w-full h-[13rem]  rounded-lg py-5">
        </div>
        <div class="flex gap-5">
            <div class="bg-white w-1/3 px-5 py-3 mt-5 rounded-md">
                <div class="flex justify-between items-center">
                    <h1 class="text-xl font-semibold">Informasi Merchant</h1>
                    <button class=" text-main-yellow rounded-md px-5 py-2">Edit</button>
                </div>
                <hr class="w-full mt-3">
                <div class="mt-5" id="name">
                    <h1 class="font-medium">Nama</h1>
                    <h1 class="  font-light">Nawal Store</h1>
                </div>
                <div class="mt-5" id="password">
                    <h1 class="font-medium">Kata Sandi</h1>
                    <h1 class="  font-light">*********</h1>
                </div>
                <div class="mt-5" id="slogan">
                    <h1 class="font-medium">Slogan</h1>
                    <h1 class="  font-light">Pengen Kaya</h1>
                </div>
                <div class="mt-5" id="deskripsi">
                    <h1 class="font-medium">Deskripsi</h1>
                    <h1 class="  font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </h1>
                </div>
            </div>
            <div class="bg-white w-1/3 px-5 py-3 mt-5 rounded-md">
                <div class="flex justify-between items-center">
                    <h1 class="text-xl font-semibold">Verifikasi</h1>
                    <button class=" text-main-yellow rounded-md px-5 py-2">Edit</button>
                </div>
                <hr class="w-full mt-3">
                <div class="mt-5" id="name">
                    <h1 class="font-medium">Alamat Email</h1>
                    <h1 class="  font-light">paradiso@gmail.com</h1>
                </div>
                <div class="mt-5" id="password">
                    <h1 class="font-medium">Nomor Telepon</h1>
                    <h1 class="  font-light">+62 0120 5391</h1>
                </div>
            
            </div>
            <div class="bg-white w-1/3 px-5 py-3 mt-5 rounded-md">
                <div class="flex justify-between items-center">
                    <h1 class="text-xl font-semibold">Status Merchant</h1>
                    <button class=" text-main-yellow rounded-md px-5 py-2">Edit</button>
                </div>
                <hr class="w-full mt-3">
                <div class="mt-5" id="name">
                    <h1 class="font-medium">Status</h1>
                    <h1 class="  font-light">Buka</h1>
                </div>
                <div class="mt-5" id="password">
                    <h1 class="font-medium">Hari Buka</h1>
                    <h1 class="  font-light">Senin - Jumat</h1>
                </div>
            </div>
        </div>
    </div>
</template>