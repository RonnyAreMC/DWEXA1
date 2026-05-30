import { useState } from 'react'
import InputField from './form/InputField'
import SelectField from './form/SelectField'
import TextAreaField from './form/TextAreaField'
import Button from './form/Button'

// COMPONENTE: Formulario de reservación.
// Cada campo es un componente independiente (InputField, SelectField,
// TextAreaField). Para mover un campo de lugar SOLO cambias la posición
// del componente en el JSX -> copiar / pegar / reubicar.
export default function Reservation() {
  // Estado: un objeto con todos los valores del formulario
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    personas: '',
    mesa: '',
    comentarios: '',
  })

  const [errors, setErrors] = useState({})
  const [enviado, setEnviado] = useState(false)

  // Actualiza el campo que cambió (uno solo para todos los inputs)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  // VALIDACIONES BÁSICAS DEL FRONTEND
  const validar = () => {
    const nuevos = {}

    if (!form.nombre.trim()) {
      nuevos.nombre = 'El nombre es obligatorio'
    } else if (form.nombre.trim().length < 3) {
      nuevos.nombre = 'Mínimo 3 caracteres'
    }

    if (!form.email.trim()) {
      nuevos.email = 'El correo es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nuevos.email = 'Correo no válido'
    }

    if (!form.telefono.trim()) {
      nuevos.telefono = 'El teléfono es obligatorio'
    } else if (!/^\d{7,10}$/.test(form.telefono)) {
      nuevos.telefono = 'Ingrese de 7 a 10 dígitos'
    }

    if (!form.fecha) {
      nuevos.fecha = 'Seleccione una fecha'
    } else if (form.fecha < new Date().toISOString().split('T')[0]) {
      nuevos.fecha = 'La fecha no puede ser pasada'
    }

    if (!form.personas) nuevos.personas = 'Seleccione el número de personas'
    if (!form.mesa) nuevos.mesa = 'Seleccione el tipo de mesa'

    return nuevos
  }

  // Al enviar: validamos. Si no hay errores, mostramos éxito.
  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevos = validar()
    setErrors(nuevos)

    if (Object.keys(nuevos).length === 0) {
      setEnviado(true)
      setForm({
        nombre: '',
        email: '',
        telefono: '',
        fecha: '',
        personas: '',
        mesa: '',
        comentarios: '',
      })
      setTimeout(() => setEnviado(false), 5000)
    }
  }

  return (
    <section className="reservation" id="reservar">
      <div className="container">
        <h2 className="section-title">Reserva tu mesa</h2>
        <p className="section-subtitle">Completa el formulario y te esperamos</p>

        <form className="form-card" onSubmit={handleSubmit} noValidate>
          {enviado && (
            <div className="form-success">
              ✅ ¡Reservación enviada con éxito! Te contactaremos pronto.
            </div>
          )}

          {/* Cada componente de campo se puede mover libremente de posición */}
          <div className="form-row">
            <InputField
              label="Nombre completo"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              error={errors.nombre}
              placeholder="Ej: Ana Pérez"
            />
            <InputField
              label="Correo electrónico"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="form-row">
            <InputField
              label="Teléfono"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              error={errors.telefono}
              placeholder="0999999999"
            />
            <InputField
              label="Fecha de reserva"
              name="fecha"
              type="date"
              value={form.fecha}
              onChange={handleChange}
              error={errors.fecha}
            />
          </div>

          <div className="form-row">
            <SelectField
              label="Número de personas"
              name="personas"
              value={form.personas}
              onChange={handleChange}
              error={errors.personas}
              options={['1', '2', '3', '4', '5', '6 o más']}
            />
            <SelectField
              label="Tipo de mesa"
              name="mesa"
              value={form.mesa}
              onChange={handleChange}
              error={errors.mesa}
              options={['Interior', 'Terraza', 'Ventana', 'Privada']}
            />
          </div>

          <TextAreaField
            label="Comentarios (opcional)"
            name="comentarios"
            value={form.comentarios}
            onChange={handleChange}
            placeholder="Alguna petición especial..."
          />

          <Button type="submit" block>Confirmar reservación</Button>
        </form>
      </div>
    </section>
  )
}
