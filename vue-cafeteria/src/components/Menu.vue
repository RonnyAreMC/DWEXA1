<script setup>
import MenuCard from './MenuCard.vue'
import { menuItems } from '../data/menu'

// COMPONENTE: Sección del menú. Recorre los datos con v-for y crea
// una tarjeta (MenuCard) por cada producto -> reutilización de componentes.
</script>

<template>
  <section class="menu" id="menu">
    <div class="container">
      <h2 class="section-title">Nuestro Menú</h2>
      <p class="section-subtitle">Selección de nuestros favoritos</p>

      <div class="menu-grid">
        <MenuCard v-for="item in menuItems" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>
