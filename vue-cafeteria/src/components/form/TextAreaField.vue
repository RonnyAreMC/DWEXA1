<script setup>
// COMPONENTE: Área de texto reutilizable (textarea)
defineProps({
  label: String,
  modelValue: String,
  error: String,
  placeholder: { type: String, default: '' },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="field">
    <label>{{ label }}</label>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :class="{ invalid: error }"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <span v-if="error" class="error-msg">{{ error }}</span>
  </div>
</template>
