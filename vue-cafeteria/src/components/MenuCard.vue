<script setup>
// COMPONENTE: Tarjeta individual de un producto del menú
// Recibe un producto por props y muestra su información.
defineProps({
  item: { type: Object, required: true },
})
</script>

<template>
  <article class="menu-card">
    <img :src="item.img" :alt="item.nombre" />
    <div class="menu-body">
      <h3>{{ item.nombre }}</h3>
      <p>{{ item.descripcion }}</p>
      <span class="price">{{ item.precio }}</span>
    </div>
  </article>
</template>
