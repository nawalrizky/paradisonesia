<!-- StarRating.vue -->
<template>
    <div class="star-rating">
      <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="{ 'text-yellow-300': i <= rating, 'text-gray-300': i > rating }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a1 1 0 0 1 .773.37l1.94 2.497 4.81.556a1 1 0 0 1 .554 1.705l-3.53 3.428.83 4.874a1 1 0 0 1-1.451 1.054L10 14.666l-4.315 2.26a1 1 0 0 1-1.45-1.055l.83-4.874-3.53-3.428a1 1 0 0 1 .554-1.705l4.81-.556L9.227 2.37A1 1 0 0 1 10 2z"/>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      rating: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .star-rating {
    display: flex;
    gap: 2px;
  }
  </style>
  