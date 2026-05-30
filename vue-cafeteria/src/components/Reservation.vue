<script setup>
import { reactive, ref } from 'vue'
import InputField from './form/InputField.vue'
import SelectField from './form/SelectField.vue'
import TextAreaField from './form/TextAreaField.vue'
import Button from './form/Button.vue'

// COMPONENTE: Formulario de reservación.
// Cada campo es un componente independiente (InputField, SelectField,
// TextAreaField) conectado con v-model. Para mover un campo de lugar SOLO
// cambias la posición del componente en el <template> -> copiar/pegar/reubicar.

// Estado reactivo del formulario
const form = reactive({
  nombre: '',
  email: '',
  telefono: '',
  fecha: '',
  personas: '',
  mesa: '',
  comentarios: '',
})

const errors = reactive({})
const enviado = ref(false)

// VALIDACIONES BÁSICAS DEL FRONTEND
function validar() {
  // Limpiamos errores previos
  Object.keys(errors).forEach((k) => delete errors[k])

  if (!form.nombre.trim()) {
    errors.nombre = 'El nombre es obligatorio'
  } else if (form.nombre.trim().length < 3) {
    errors.nombre = 'Mínimo 3 caracteres'
  }

  if (!form.email.trim()) {
    errors.email = 'El correo es obligatorio'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Correo no válido'
  }

  if (!form.telefono.trim()) {
    errors.telefono = 'El teléfono es obligatorio'
  } else if (!/^\d{7,10}$/.test(form.telefono)) {
    errors.telefono = 'Ingrese de 7 a 10 dígitos'
  }

  if (!form.fecha) {
    errors.fecha = 'Seleccione una fecha'
  } else if (form.fecha < new Date().toISOString().split('T')[0]) {
    errors.fecha = 'La fecha no puede ser pasada'
  }

  if (!form.personas) errors.personas = 'Seleccione el número de personas'
  if (!form.mesa) errors.mesa = 'Seleccione el tipo de mesa'

  return Object.keys(errors).length === 0
}

// Al enviar: validamos. Si todo es correcto, mostramos mensaje de éxito.
function handleSubmit() {
  if (validar()) {
    enviado.value = true
    Object.assign(form, {
      nombre: '',
      email: '',
      telefono: '',
      fecha: '',
      personas: '',
      mesa: '',
      comentarios: '',
    })
    setTimeout(() => (enviado.value = false), 5000)
  }
}
</script>

<template>
  <section class="reservation" id="reservar">
    <div class="container">
      <h2 class="section-title">Reserva tu mesa</h2>
      <p class="section-subtitle">Completa el formulario y te esperamos</p>

      <form class="form-card" @submit.prevent="handleSubmit" novalidate>
        <div v-if="enviado" class="form-success">
          ✅ ¡Reservación enviada con éxito! Te contactaremos pronto.
        </div>

        <!-- Cada componente de campo se puede mover libremente de posición -->
        <div class="form-row">
          <InputField
            label="Nombre completo"
            v-model="form.nombre"
            :error="errors.nombre"
            placeholder="Ej: Ana Pérez"
          />
          <InputField
            label="Correo electrónico"
            type="email"
            v-model="form.email"
            :error="errors.email"
            placeholder="correo@ejemplo.com"
          />
        </div>

        <div class="form-row">
          <InputField
            label="Teléfono"
            v-model="form.telefono"
            :error="errors.telefono"
            placeholder="0999999999"
          />
          <InputField
            label="Fecha de reserva"
            type="date"
            v-model="form.fecha"
            :error="errors.fecha"
          />
        </div>

        <div class="form-row">
          <SelectField
            label="Número de personas"
            v-model="form.personas"
            :error="errors.personas"
            :options="['1', '2', '3', '4', '5', '6 o más']"
          />
          <SelectField
            label="Tipo de mesa"
            v-model="form.mesa"
            :error="errors.mesa"
            :options="['Interior', 'Terraza', 'Ventana', 'Privada']"
          />
        </div>

        <TextAreaField
          label="Comentarios (opcional)"
          v-model="form.comentarios"
          placeholder="Alguna petición especial..."
        />

        <Button type="submit" :block="true">Confirmar reservación</Button>
      </form>
    </div>
  </section>
</template>
