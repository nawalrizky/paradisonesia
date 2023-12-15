<script setup lang="ts">
import { ref, watch } from 'vue';
import apiClient from '../http-common';
import CKeditor from '../components/CKeditor.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const openInclude = ref(false);
const openExclude = ref(false);
const openRp = ref(false);
const openFAQ = ref(false);

const nama_produk = ref('');
const selectedCategory = ref('1');
const categories = ref(['Paket Wisata', 'Tiket Masuk', 'Rental', 'Guide', 'Kamar Penginapan']);
const product_sub_category_id = ref(1);
const price = ref(0);
const duration = ref(0);
const minimal_produk = ref(0);
const maximal_produk = ref(0);
const stock = ref(0);
// Tambahkan variabel untuk kolom-kolom lain pada tabel produk
const description = ref('');
const start_date = ref(''); // Atur nilai start_date sesuai dengan kebutuhan Anda
const end_date = ref(''); // Atur nilai end_date sesuai dengan kebutuhan Anda
const unit = ref('');
const thumbnail = ref<File | null>(null);
const address = ref('');
const coordinate = ref('');
const note = ref('');
const is_published = ref(false);  // Ganti sesuai kebutuhan, default false
const district_id = ref('3401010'); // Atur nilai sesuai kebutuhan Anda
const product_status_id = ref(''); 
const price_unit = ref('32')

// Watch for changes in selectedCategory
const handleThumbnailChange = (event?: Event) => {
  if (event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      thumbnail.value = file;
    }
  }
}


watch(
  // Watched value getter function
  () => selectedCategory.value,
  // Callback function
  (newValue, oldValue) => {
    if (selectedCategory.value === 'Paket Wisata') {
      // Set product_sub_category_id to 1 when 'Paket Wisata' is selected
      product_sub_category_id.value = 1;
    } else {
      // Set product_sub_category_id to a different value for other categories
      // Adjust the value based on your requirements
      product_sub_category_id.value = 2; // Change 2 to the desired value
    }
  }
);


const addProduct = async () => {
  try {
    const productData = {
      name: nama_produk.value,
      product_sub_category_id: selectedCategory.value, // Ganti subkategori menjadi product_sub_category_id
      price: price.value,
      duration: duration.value,
      min_person: minimal_produk.value,
      max_person: maximal_produk.value,
      description: description.value,
      start_date: start_date.value,
      end_date: end_date.value,
      unit: unit.value,
      stock: stock.value,
      thumbnail: thumbnail.value,
      address: address.value,
      coordinate: coordinate.value,
      note: note.value,
      is_published: is_published.value,
      price_unit: price_unit.value,
      district_id: district_id.value,
      product_status_id: product_status_id.value,
    
    };

    await apiClient.post('/v1/merchants/products', productData);

    console.log('Produk berhasil ditambahkan');

    // Clear the form fields after adding a new product
    nama_produk.value = '';
   // Setel kembali ke nilai default jika diperlukan
    price.value = 0;
    duration.value = 0;
    minimal_produk.value = 0;
    maximal_produk.value = 0;
    description.value = '';
    start_date.value = '';
    end_date.value = '';
    unit.value = '';
   
    thumbnail.value = null;
    address.value = '';
    coordinate.value = '';
    note.value = '';
    is_published.value = false;
    // Clear data tambahan
    district_id.value = '';
    product_status_id.value = '';
  } catch (error: any) {
    console.error('Terjadi kesalahan saat menambahkan produk:', error);
    
    if (error.response && error.response.data) {
      console.log('Pesan kesalahan dari server:', error.response.data);
    } else {
      console.log('Tidak ada informasi lebih lanjut dari server.');
    }
  }
}

const handleJualClick = async () => {
  // Handle Thumbnail Change
  handleThumbnailChange();

  // Call addProduct function
  await addProduct();
  
  // Additional logic after selling the product
  console.log('Produk dijual!');
  router.push('/produksaya');
}
</script>




<template>
  <div class="px-6 py-8">
    <h1 class=" text-3xl font-bold">
      Tambah Produk
    </h1>

    <div class="bg-white rounded-md py-5 px-4 mt-10">
      <h1 class="font-bold">Informasi Produk</h1>
      <form class=" relative">

        <label for="nama_produk" class="block mx-4 mt-5 mb-1 text-sm font-medium text-black">Nama Produk</label>
        <input v-model="nama_produk" type="text" id="nama_produk" class="w-full rounded-lg border border-gray-300"
          placeholder="" required>

        <label for="kategori_produk" class="block mx-4 mt-4 mb-1 text-sm font-medium text-black">Kategori Produk</label>
        <select v-model="selectedCategory" class="border-gray-300 rounded-lg w-full">
      <option v-for="(category, index) in categories" :key="index">{{ category }}</option>
    </select>
      </form>
    </div>
    <div class="bg-white rounded-md py-5 px-4 mt-10" id="Paket Wisata" >
      <h1 class="font-bold">Detail Produk</h1>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="harga" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Harga per pax</label>
            <input v-model="price" type="text" id="harga" class="w-full rounded-lg border border-gray-300" placeholder=""
              required>
          </div>
          <div>
            <label for="durasi" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Durasi</label>
            <div class="flex">
              <input v-model="duration" type="text" id="durasi"
                class="w-full rounded-lg rounded-r-none border border-r-white border-gray-300" placeholder="" required>
              <h1 class="border p-2 font-semibold bg-[#F7F7FC] text-sm border-gray-300 rounded-r-lg">Hari</h1>
            </div>
          </div>
          <div>
            <label for="minimal_produk" class="block mx-4 mb-1 text-sm font-medium text-black">Minimal</label>
            <div class="flex">
              <input v-model="minimal_produk" type="text" id="minimal_produk"
                class="w-full rounded-lg rounded-r-none border border-r-white border-gray-300" placeholder="" required>
              <h1 class="border p-2 font-semibold bg-[#F7F7FC] text-sm border-gray-300 rounded-r-lg">Orang</h1>
            </div>
          </div>
          <div>
            <label for="maximal_produk" class="block mx-4 mb-1 text-sm font-medium text-black">Maksimal</label>
            <div class="flex">
              <input v-model="maximal_produk" type="text" id="maximal_produk"
                class="w-full rounded-lg rounded-r-none border border-r-white border-gray-300" placeholder="" required>
              <h1 class="border p-2 font-semibold bg-[#F7F7FC] text-sm border-gray-300 rounded-r-lg">Orang</h1>
            </div>
          </div>
        </div>
        <div>
            <label for="stock" class="block mx-4 mb-1 text-sm font-medium text-black">Stock</label>
            <div class="flex">
              <input v-model="stock" type="text" id="maximal_produk"
                class="w-full rounded-lg rounded-r-none border border-r-white border-gray-300" placeholder="" required>
            </div>
          </div>
          <div>
  <label for="thumbnail" class="block  mx-4 mb-1 text-sm font-medium text-black">thumbnail</label>
  <div class="flex">
    <input
  type="file"
  id="thumbnail"
  class="w-full rounded-lg rounded-r-none border border-r-white border-gray-300"
  placeholder=""
  required
  @change="handleThumbnailChange($event)"
/>

  </div>
</div>

      </form>
    </div>
    <!-- <div class="bg-white rounded-md py-5 px-4 mt-10" id="Tiket Masuk" v-show="selectedCategory === 'Tiket Masuk'">
      <h1 class="font-bold">Detail Produk</h1>
      <form>
        <div class="mb-6">
          <label for="harga" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Harga </label>
          <input type="text" id="harga" class="w-full rounded-lg border border-gray-300" placeholder="1.000.000" required>
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="pembelian_minimal" class="block mx-4 mb-1 text-sm font-medium text-black">Pembelian
              Minimal</label>
            <input type="text" id="pembelian_minimal" class="w-full rounded-lg border  border-gray-300" placeholder="1"
              required>

          </div>
          <div>
            <label for="pembelian_maksimal" class="block mx-4 mb-1 text-sm font-medium text-black">Pembelian
              Maksimal</label>
            <input type="text" id="pembelian_maksimal" class="w-full rounded-lg border border-gray-300" placeholder="1"
              required>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-white rounded-md py-5 px-4 mt-10" id="Rental" v-show="selectedCategory === 'Rental'">
      <h1 class="font-bold mb-6">Detail Produk</h1>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2 items-center ">
          <div>
            <label for="harga_per_jam" class="block mx-4 mb-1 text-sm font-medium text-black">Harga per jam</label>
            <input type="text" id="harga_per_jam" class="w-full rounded-lg border  border-gray-300" placeholder="0"
              required>

          </div>
          <div>
            <div class="flex justify-end">
              <span class="text-sm font-medium text-black pr-3">Termasuk Sopir</span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-100  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-500">
                </div>

              </label>
            </div>
          </div>
        </div>

        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="kapasitas_penumpang" class="block mx-4 mb-1 text-sm font-medium text-black">Kapasitas
              Penumpang</label>
            <input type="text" id="kapasitas_penumpang" class="w-full rounded-lg border  border-gray-300" placeholder="1"
              required>

          </div>
          <div>
            <label for="bagasi" class="block mx-4 mb-1 text-sm font-medium text-black">Bagasi</label>
            <input type="text" id="bagasi" class="w-full rounded-lg border border-gray-300" placeholder="0" required>
          </div>
          <div>
            <label for="bahan_bakar" class="block mx-4 mb-1 text-sm font-medium text-black">Bahan Bakar</label>
            <input type="text" id="bahan_bakar" class="w-full rounded-lg border  border-gray-300" placeholder="Bensin"
              required>

          </div>
          <div>
            <label for="bagasi" class="block mx-4 mb-1 text-sm font-medium text-black">Transmisi</label>
            <select class=" border-gray-300 rounded-lg  w-full">
              <option>Manual</option>
              <option>Matic</option>
            </select>
          </div>
          <div>
            <label for="warna_mobil" class="block mx-4 mb-1 text-sm font-medium text-black">Warna</label>
            <input type="text" id="warna_mobil" class="w-full rounded-lg border  border-gray-300" placeholder="Putih"
              required>

          </div>
          <div>
            <label for="tahun_mobil" class="block mx-4 mb-1 text-sm font-medium text-black">Tahun</label>
            <input type="text" id="tahun_mobil" class="w-full rounded-lg border border-gray-300" placeholder="2012"
              required>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-white rounded-md py-5 px-4 mt-10" id="Guide" v-show="selectedCategory === 'Guide'">
      <h1 class="font-bold">Detail Produk</h1>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="harga" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Harga</label>
            <input type="text" id="harga" class="w-full rounded-lg border border-gray-300" placeholder="1.000.000"
              required>
          </div>
          <div>
            <label for="durasi" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Durasi</label>
            <div class="flex">
              <input type="text" id="durasi"
                class="w-full rounded-lg rounded-r-none border border-r-white border-gray-300" placeholder="1" required>
              <h1 class="border  p-2 font-semibold bg-[#F7F7FC] text-sm border-gray-300 rounded-r-lg">Jam</h1>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-white rounded-md py-5 px-4 mt-10" id="Kamar Penginapan"
      v-show="selectedCategory === 'Kamar Penginapan'">
      <h1 class="font-bold">Detail Produk</h1>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="harga" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Harga per malam</label>
            <input type="text" id="harga" class="w-full rounded-lg border border-gray-300" placeholder="1.000.000"
              required>
          </div>
          <div>
            <label for="luas_kamar" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Luas Kamar</label>
            <div class="flex">
              <input type="text" id="luas_kamar"
                class="w-full rounded-lg rounded-r-none border border-r-white border-gray-300" placeholder="1" required>
              <h1 class="border  p-2 font-semibold bg-[#F7F7FC] text-sm border-gray-300 rounded-r-lg">m²</h1>
            </div>
          </div>
          <div>
            <label for="kapasitas_kamar" class="block mx-4 mb-1 text-sm font-medium text-black">Kapasitas</label>
            <div class="flex">
              <input type="text" id="kapasitas_kamar"
                class="w-full rounded-lg rounded-r-none border border-r-white border-gray-300" placeholder="1" required>
              <h1 class="border  p-2 font-semibold bg-[#F7F7FC] text-sm border-gray-300 rounded-r-lg">Orang</h1>
            </div>
          </div>
          <div>
            <label for="jumlah_kamar" class="block mx-4 mb-1 text-sm font-medium text-black">Jumlah Kamar</label>
            <div class="flex">
              <input type="text" id="jumlah_kamar"
                class="w-full rounded-lg rounded-r-none border border-r-white border-gray-300" placeholder="" required>
              <h1 class="border  p-2 font-semibold bg-[#F7F7FC] text-sm border-gray-300 rounded-r-lg">Kamar</h1>
            </div>
          </div>
        </div>
      </form>
    </div> -->
    <div class="bg-white rounded-md py-5 px-4 mt-10">
      <h1 class="font-bold">Lokasi</h1>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="province" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Provinsi</label>
            <input type="text" id="harga" class="w-full rounded-lg border border-gray-300" placeholder="" required>
          </div>
          <div>
            <label for="city" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Kabupaten/Kota</label>
            <input type="text" id="harga" class="w-full rounded-lg border border-gray-300" placeholder="" required>
          </div>
          <div>
            <label for="kecamatan" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Kecamatan</label>
            <input type="text" id="harga" class="w-full rounded-lg border border-gray-300" placeholder="" required>
          </div>
          <div>
            <label for="postalcode" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Kode Pos</label>
            <input type="text" id="harga" class="w-full rounded-lg border border-gray-300" placeholder="" required>
          </div>
        </div>
        <div>
          <label for="address" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Alamat</label>
          <input v-model="address" type="text" id="harga" class="w-full rounded-lg border border-gray-300" placeholder="" required>
        </div>
      </form>
    </div>
    <div class="flex ">
      <div class="relative w-1/3 flex-row bg-white rounded-md py-5 px-4 mt-10">
        <h1 class="font-bold">Unggah Gambar</h1>
        <h1 class="mt-4 text-xl">Tentukan variasi gambar pada produk Anda, sehingga memudahkan pembeli memilih produk.
        </h1>
        <button  class="border mt-10 mb-3 border-[#FFA216] py-1 px-4 text-[#FFA216] rounded-xl text-sm"> Set Gambar</button>
      </div>
      <div class="relative w-full flex-row bg-white rounded-md ml-6 py-5 px-4 mt-10">
        <Dropzone class="w-full h-full" v-model="thumbnail"/>
      </div>
    </div>
    <div class="bg-white rounded-md py-5 px-4 mt-10">
      <h1 class="font-bold">Deskripsi Produk</h1>
      <div class="mt-5" />
      <CKeditor v-model="description" />
    </div>
    <div class="bg-white rounded-md py-5 px-4 mt-10">
      <div class="flex justify-between ">
        <h1 class="font-bold">Rencana Perjalanan</h1>
        <button class="flex items-center font-semibold text-[#FFA216] rounded-xl text-sm" @click="openRp = true"><ion-icon
            name="add-outline" class="px-2"></ion-icon> Tambah </button>
      </div>
      <div class="flex h-full my-20 justify-center items-center">
        <div class="flex-col flex items-center px-[15rem] text-center">
          <button class="flex items-center font-bold text-[#FFA216] rounded-xl text-3xl mb-7"><ion-icon name="add-outline"
              class="px-2" @click="openRp = true"></ion-icon> Tambah </button>
          <h1>Rencana perjalan untuk produk ini belum diatur.<br />
            Silakan klik tambah untuk mengatur rencana perjalanan.</h1>
        </div>
      </div>
      <div :class="`modal ${!openRp && 'opacity-0 pointer-events-none'
        } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
        <div class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay" @click="openRp = false" />

        <div class="z-50 md:w-2/4 w-2/3 mx-auto overflow-y-auto bg-white rounded-md shadow-lg modal-container ">

          <!-- Add margin if you want to see some of the overlay behind the modal -->
          <div class="px-6 py-4 text-left modal-content">
            <!-- Title -->
            <div class="flex items-center justify-between pb-3">
              <p class="text-xl font-bold">
                Tambah Rencana Perjalanan
              </p>
              <div class="z-50 flex gap-2 cursor-pointer modal-close">

                <button
                  class=" px-7 py-1 text-sm border-red-600 border text-red-600 bg-transparent rounded-lg hover:bg-gray-100 hover:text-red-600 focus:outline-none"
                  @click="openRp = false">
                  Batal
                </button>
                <button
                  class=" px-7 py-1 text-sm border-[#FFA216] border text-white bg-[#FFA216] rounded-lg hover:bg-gray-100 hover:text-[#FFA216] focus:outline-none"
                  @click="openRp = false">
                  Selesai
                </button>
              </div>
            </div>
            <form>
              <div class="relative mt-5">
                <div class="flex justify-between">
                  <div class="flex w-full">
                    <h1 class="border w-1/6 p-2 font-semibold bg-[#F7F7FC] text-sm border-gray-300 rounded-l-lg">Hari ke-1
                    </h1>
                    <input type="text" id="judul kegiatan"
                      class="w-1/2 rounded-lg rounded-l-none border border-l-white border-gray-300 text-sm"
                      placeholder="Judul kegiatan" required>
                  </div>

                  <input type="date" id="tanggal kegiatan" class="w-1/3 rounded-lg  border  border-gray-300 text-sm"
                    placeholder="" required>
                </div>
              </div>

              <div class="relative mt-5">
                <h1>Detail Rencana Perjalanan</h1>
                <div class="p-3 border rounded-lg mt-3">
                  <div class="flex justify-between">
                    <div class="flex w-full">
                      <h1 class="border w-1/5 p-2 font-semibold bg-[#F7F7FC] text-sm border-gray-300 rounded-l-lg">Mulai
                      </h1>
                      <input type="time" id="tanggal kegiatan"
                        class="w-1/2 rounded-lg  border border-l-white rounded-l-none  border-gray-300 text-sm"
                        placeholder="" required>
                    </div>
                    <div class="flex w-full justify-end">
                      <h1 class="border w-1/5 p-2 font-semibold bg-[#F7F7FC] text-sm border-gray-300 rounded-l-lg">Selesai
                      </h1>
                      <input type="time" id="tanggal kegiatan"
                        class="w-1/2 rounded-lg  border border-l-white rounded-l-none  border-gray-300 text-sm"
                        placeholder="" required>
                    </div>
                  </div>
                  <label for="deskripsi perjalanan" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black"></label>
                  <textarea type="text" id="deskripsiperjalanan" class="w-full rounded-lg border border-gray-300 text-sm"
                    placeholder="Tulis deskripsi perjalanan..." required />
                </div>
              </div>
              <button
                class="mt-5 text-center py-1 text-sm w-full border-[#FFA216] border text-[#FFA216] bg-white rounded-lg hover:bg-gray-100 hover:text-[#FFA216] focus:outline-none">
                Tambahkan Detail Rencana Perjalanan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="flex ">
      <div class="relative w-1/3 flex-row bg-white rounded-md py-5 px-4 mt-10 mr-8 ">
        <div class="flex justify-between">
          <h1 class="font-bold">Include</h1>
          <button class="flex items-center font-semibold text-[#FFA216] rounded-xl text-sm"
            @click="openInclude = true"><ion-icon name="add-outline" class="px-2"></ion-icon> Tambah </button>
          <div :class="`modal ${!openInclude && 'opacity-0 pointer-events-none'
            } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
            <div class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay" @click="openInclude = false" />

            <div class="z-50 md:w-2/4 w-2/3 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container ">

              <!-- Add margin if you want to see some of the overlay behind the modal -->
              <div class="px-6 py-4 text-left modal-content">
                <!-- Title -->
                <div class="flex items-center justify-between pb-3">
                  <p class="text-xl font-bold">
                    Tambah Include
                  </p>
                  <div class="z-50 flex gap-2 cursor-pointer modal-close">

                    <button
                      class=" px-7 py-1 text-sm border-red-600 border text-red-600 bg-transparent rounded-lg hover:bg-gray-100 hover:text-red-600 focus:outline-none"
                      @click="openInclude = false">
                      Batal
                    </button>
                    <button
                      class=" px-7 py-1 text-sm border-[#FFA216] border text-white bg-[#FFA216] rounded-lg hover:bg-gray-100 hover:text-[#FFA216] focus:outline-none"
                      @click="openInclude = false">
                      Selesai
                    </button>
                  </div>
                </div>
                <form>
                  <div>
                    <label for="itembaru" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Tambah Item
                      Baru</label>
                    <input type="text" id="itembaru" class="w-full rounded-lg border border-gray-300" placeholder="Item"
                      required>
                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>
        <div class="h-[15rem] border mt-5 rounded-md w-full"></div>
      </div>
      <div class="relative w-1/3 flex-row bg-white rounded-md py-5 px-4 mt-10 mr-8">
        <div class="flex justify-between">
          <h1 class="font-bold">Exclude</h1>
          <button class="flex items-center font-semibold text-[#FFA216] rounded-xl text-sm"
            @click="openExclude = true"><ion-icon name="add-outline" class="px-2"></ion-icon> Tambah </button>
          <div :class="`modal ${!openExclude && 'opacity-0 pointer-events-none'
            } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
            <div class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay" @click="openExclude = false" />

            <div class="z-50 md:w-2/4 w-2/3 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container ">

              <!-- Add margin if you want to see some of the overlay behind the modal -->
              <div class="px-6 py-4 text-left modal-content">
                <!-- Title -->
                <div class="flex items-center justify-between pb-3">
                  <p class="text-xl font-bold">
                    Tambah Exclude
                  </p>
                  <div class="z-50 flex gap-2 cursor-pointer modal-close">

                    <button
                      class=" px-7 py-1 text-sm border-red-600 border text-red-600 bg-transparent rounded-lg hover:bg-gray-100 hover:text-red-600 focus:outline-none"
                      @click="openExclude = false">
                      Batal
                    </button>
                    <button
                      class=" px-7 py-1 text-sm border-[#FFA216] border text-white bg-[#FFA216] rounded-lg hover:bg-gray-100 hover:text-[#FFA216] focus:outline-none"
                      @click="openExclude = false">
                      Selesai
                    </button>
                  </div>
                </div>
                <form>
                  <div>
                    <label for="itembaru" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Tambah Item
                      Baru</label>
                    <input type="text" id="itembaru" class="w-full rounded-lg border border-gray-300" placeholder="Item"
                      required>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
        <div class="h-[15rem] border mt-5 rounded-md w-full"></div>
      </div>
      <div class="relative w-1/3 flex-row bg-white rounded-md py-5 px-4 mt-10 ">
        <h1 class="font-bold">Fasilitas</h1>
        <form>
          <label for="kategori_produk" class="block mx-4 mt-4 mb-1 text-sm font-medium text-black">Tambah
            Fasilitas</label>
          <select class=" border-gray-300 rounded-lg  w-full">
            <option value="" disabled selected hidden>Pilih</option>
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
        </form>
        <div class="h-[10rem] border mt-5 rounded-md w-full"></div>
      </div>
    </div>
    <div class="flex">
      <div class="relative w-1/2 flex-row bg-white rounded-md py-5 px-4 mt-10 mr-8 ">
        <h1 class="font-bold">Terms & Condition</h1>
        <div class="mt-5" />
        <CkEditor />
      </div>
      <div class="relative w-1/2 flex-row bg-white rounded-md py-5 px-4 mt-10  ">
        <div class="flex justify-between">
          <h1 class="font-bold">FAQ</h1>
          <button class="flex items-center font-semibold text-[#FFA216] rounded-xl text-sm"
            @click="openFAQ = true"><ion-icon name="add-outline" class="px-2"></ion-icon> Tambah </button>
          <div :class="`modal ${!openFAQ && 'opacity-0 pointer-events-none'
            } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`">
            <div class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay" @click="openFAQ = false" />

            <div class="z-50 md:w-2/4 w-2/3 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container ">

              <!-- Add margin if you want to see some of the overlay behind the modal -->
              <div class="px-6 py-4 text-left modal-content">
                <!-- Title -->
                <div class="flex items-center justify-between pb-3">
                  <p class="text-xl font-bold">
                    Tambah FAQ
                  </p>
                  <div class="z-50 flex gap-2 cursor-pointer modal-close">

                    <button
                      class=" px-7 py-1 text-sm border-red-600 border text-red-600 bg-transparent rounded-lg hover:bg-gray-100 hover:text-red-600 focus:outline-none"
                      @click="openFAQ = false">
                      Batal
                    </button>
                    <button
                      class=" px-7 py-1 text-sm border-[#FFA216] border text-white bg-[#FFA216] rounded-lg hover:bg-gray-100 hover:text-[#FFA216] focus:outline-none"
                      @click="openFAQ = false">
                      Selesai
                    </button>
                  </div>
                </div>
                <form>
                  <div>
                    <label for="pertanyaanbaru" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Tambah
                      Pertanyaan Baru
                    </label>
                    <input type="text" id="pertanyaanbaru" class="w-full rounded-lg border border-gray-300" placeholder=""
                      required>
                  </div>
                  <div>
                    <label for="pertanyaanbaru" class="block mx-4 mt-3 mb-1 text-sm font-medium text-black">Jawaban
                    </label>
                    <input type="text" id="pertanyaanbaru" class="w-full rounded-lg border border-gray-300" placeholder=""
                      required>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>

        <div class="h-[15rem] border mt-5 rounded-md w-full"></div>
      </div>
    </div>


    <div class="flex mt-8 justify-end gap-5">
      <button class="flex items-center py-2 px-7 font-semibold border border-[#0063A7] text-[#0063A7] rounded-lg text-sm">
        Simpan ke Draf </button>
      
      <button @click.prevent="handleJualClick"
      class="flex items-center py-2 px-10 font-semibold bg-[#0063A7] text-white rounded-lg text-sm hover:bg-blue-800">
      Jual </button>
  </div>
</div></template>

<style>.modal {
  transition: opacity 0.25s ease;
}</style>

