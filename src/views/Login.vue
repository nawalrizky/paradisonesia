<!-- Login.vue -->
<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700">Paradisonesia</span>
      </div>

      <form class="mt-4" @submit.prevent="login">
        <div v-if="errorMessage" class="text-red-500 mb-4">{{ errorMessage }}</div>

        <label class="block">
          <span class="text-sm text-gray-700">Name</span>
          <input v-model="name" type="text" class="block w-full mt-1 border-gray-200 rounded-md focus:border-main-blue focus:ring focus:ring-opacity-40 focus:ring-main-blue" />
        </label>
        <label class="block mt-3">
          <span class="text-sm text-gray-700">Email</span>
          <input v-model="email" type="email" class="block w-full mt-1 border-gray-200 rounded-md focus:border-main-blue focus:ring focus:ring-opacity-40 focus:ring-main-blue" />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
          <input v-model="password" type="password" class="block w-full mt-1 border-gray-200 rounded-md focus:border-main-blue focus:ring focus:ring-opacity-40 focus:ring-main-blue" />
        </label>

        <div class="flex items-center justify-between mt-4">
          <div>
            <label class="inline-flex items-center">
              <input v-model="rememberMe" type="checkbox" class="text-main-blue border-gray-200 rounded-md focus:border-main-blue focus:ring focus:ring-opacity-40 focus:ring-indigo-500" />
              <span class="mx-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div>
            <a class="block text-sm text-main-blue fontme hover:underline" href="#">Forgot your password?</a>
          </div>
        </div>

        <div class="mt-6">
          <button type="submit" class="w-full px-4 py-2 text-sm text-center text-white bg-main-blue rounded-md focus:outline-none hover:bg-blue-800" :disabled="isLoading">
            {{ isLoading ? 'Signing in...' : 'Sign in' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '../auth';
import apiClient from '../http-common';
import { useRouter } from 'vue-router';

const { setToken } = useAuth();
const router = useRouter();

const name = ref('merchant');
const email = ref('merchant@mail.com');
const password = ref('password');
const rememberMe = ref(false);
const errorMessage = ref<string | null>(null);
const isLoading = ref(false);

const login = async (): Promise<void> => {
  try {
    isLoading.value = true;

    const response = await apiClient.post('/v1/auth', {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    console.log('Backend Response:', response.data);

    if ('token' in response.data.data) {
      setToken(response.data.data.token);

      const token = localStorage.getItem('token');
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      router.push('/dashboard');
    } else {
      errorMessage.value = 'Invalid response from the server';
    }

  } catch (err) {
    errorMessage.value = 'Failed to fetch CSRF cookie or invalid credentials';
    console.error('Login error:', err);
    isLoading.value = false;
  }
};
</script>
