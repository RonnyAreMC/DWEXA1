<script setup>
// COMPONENTE: Campo de texto reutilizable (input)
// Usa v-model gracias a modelValue + update:modelValue.
// Es independiente: para reubicarlo solo mueves la etiqueta en el formulario.
defineProps({
  label: String,
  type: { type: String, default: 'text' },
  modelValue: String,
  error: String,
  placeholder: { type: String, default: '' },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="field">
    <label>{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :class="{ invalid: error }"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="error" class="error-msg">{{ error }}</span>
  </div>
</template>
