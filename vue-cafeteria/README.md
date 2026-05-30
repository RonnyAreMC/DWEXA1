# ☕ Café Aroma — Landing Page (Vue)

Landing page de una cafetería desarrollada con **Vue 3 + Vite**, totalmente
basada en componentes y con un formulario de reservación validado en el frontend.
Mismo diseño que la versión en React.

## 🚀 Tecnologías
- **Vue 3** (Composition API con `<script setup>`) — framework progresivo.
- **Vite** — empaquetador y servidor de desarrollo ultrarrápido.
- **CSS puro** — diseño responsive sin frameworks.

## 📁 Estructura del proyecto
```
src/
├── main.js               # Punto de entrada
├── App.vue               # Componente raíz (une todas las secciones)
├── styles.css            # Estilos globales (mismo diseño que React)
├── data/
│   └── menu.js           # Datos del menú
└── components/
    ├── Navbar.vue        # Navegación responsive
    ├── Hero.vue          # Sección principal
    ├── Menu.vue          # Lista del menú
    ├── MenuCard.vue      # Tarjeta de producto (reutilizable)
    ├── About.vue         # Sección "Nosotros"
    ├── Reservation.vue   # Formulario con validaciones
    ├── Footer.vue        # Pie de página
    └── form/             # Campos reutilizables (cada campo = 1 componente)
        ├── InputField.vue
        ├── SelectField.vue
        ├── TextAreaField.vue
        └── Button.vue
```

> 💡 Cada campo del formulario es un **componente independiente** conectado con
> `v-model`. Para mover un campo de lugar solo cambias su posición en
> `Reservation.vue` (copiar/pegar).

## ▶️ Ejecutar en local
```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo -> http://localhost:5173
npm run build    # genera la versión de producción en /dist
npm run preview  # previsualiza la versión de producción
```

## ✅ Validaciones del formulario
- Nombre obligatorio (mínimo 3 caracteres).
- Correo con formato válido.
- Teléfono de 7 a 10 dígitos.
- Fecha obligatoria y no anterior a hoy.
- Número de personas y tipo de mesa obligatorios.

## 🌐 Despliegue
Ver la guía `GUIA.md` en la carpeta principal para desplegar en Vercel.
