<script setup>
// COMPONENTE: Botón reutilizable
defineProps({
  type: { type: String, default: 'button' },
  block: { type: Boolean, default: false },
})
</script>

<template>
  <button :type="type" class="btn" :class="{ 'btn-block': block }">
    <slot />
  </button>
</template>
