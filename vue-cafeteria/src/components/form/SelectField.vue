<script setup>
// COMPONENTE: Campo de selección reutilizable (select)
// Las opciones llegan por props. Componente independiente y movible.
defineProps({
  label: String,
  modelValue: String,
  error: String,
  options: { type: Array, default: () => [] },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="field">
    <label>{{ label }}</label>
    <select
      :value="modelValue"
      :class="{ invalid: error }"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="">Seleccione...</option>
      <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
    </select>
    <span v-if="error" class="error-msg">{{ error }}</span>
  </div>
</template>
