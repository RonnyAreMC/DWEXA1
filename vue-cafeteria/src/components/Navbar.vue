<script setup>
import { ref } from 'vue'

// COMPONENTE: Barra de navegación responsive con menú hamburguesa
const open = ref(false)
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <a href="#inicio" class="logo">☕ Café Aroma</a>

      <button class="nav-toggle" @click="open = !open" aria-label="Abrir menú">
        ☰
      </button>

      <ul class="nav-links" :class="{ open }">
        <li><a href="#inicio" @click="open = false">Inicio</a></li>
        <li><a href="#menu" @click="open = false">Menú</a></li>
        <li><a href="#nosotros" @click="open = false">Nosotros</a></li>
        <li><a href="#reservar" @click="open = false">Reservar</a></li>
      </ul>
    </div>
  </nav>
</template>
