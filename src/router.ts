import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Forms from './views/Forms.vue'
import Tables from './views/Tables.vue'
import UIElements from './views/UIElements.vue'
import Login from './views/Login.vue'
import Card from './views/Card.vue'
import Blank from './views/Blank.vue'
import ProdukSaya from './views/ProdukSaya.vue'
import TambahProduk from './views/TambahProduk.vue'
import Order from './views/Order.vue'
import DetailOrder from './views/DetailOrder.vue'
import Transaksi from './views/Transaksi.vue'
import DetailTransaksi from './views/DetailTransaksi.vue'
import Promosi from './views/Promosi.vue'
import Pesan from './views/Pesan.vue'
import Statistik from './views/Statistik.vue'
import Review from './views/Review.vue'
import Setting from './views/Setting.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { layout: 'empty' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms,
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Card,
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
  },
  {
    path: '/ui-elements',
    name: 'UIElements',
    component: UIElements,
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Blank,
  },
  {
    path: '/produksaya',
    name: 'ProdukSaya',
    component: ProdukSaya,
  },
  {
    path: '/produksaya/tambah-produk',
    name: 'TambahProduk',
    component: TambahProduk,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order, 
  },
  {
    path: '/order/detail-order/:orderId',
    name: 'detail-order',
    component: DetailOrder,
    props: true,
  },
  {
    path: '/transaksi',
    name: 'Transaksi',
    component: Transaksi,
  },
  {
    path: '/transaksi/detail-transaksi',
    name: 'DetailTransaksi',
    component: DetailTransaksi,
  },
  {
    path: '/promosi',
    name: 'Promosi',
    component: Promosi,
  },
  {
    path: '/pesan',
    name: 'Pesan',
    component: Pesan,
  },
  
  {
    path: '/statistik',
    name: 'Statistik',
    component: Statistik,
  },
  {
    path: '/review',
    name: 'Review',
    component: Review,
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting,
  }
 
  

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
