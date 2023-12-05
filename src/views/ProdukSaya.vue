
<script lang="ts">
import { IonIcon } from '@ionic/vue';
import apiClient from '../http-common'; // Adjust the path accordingly
import { Product } from '../types/product'; 
export default {
  data() {
    return {
      products: [] as Product[], 
    };
  },
  mounted() {
    // Fetch products data from Laravel API when the component is mounted
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        // Make a GET request using the apiClient
        const response = await apiClient.get('/v1/merchants/me/products');

        // Update the 'products' data property with the fetched data
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
};
</script>


<template>
  <div>
    <h1>Produk Saya</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          <div>
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>Price: {{ product.price }}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

  
  