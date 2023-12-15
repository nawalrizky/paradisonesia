<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['Produk Dilihat', 'Transaksi Berhasil', 'Conversion Rate', 'Produk Terjual'],
  datasets: [{ data: [40, 20, 12] }]
};

const chartOptions = {
  responsive: true
};

const BarChart = {
  name: 'BarChart',
  components: { Bar },
  chartData,
  chartOptions
};
</script>

<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>
