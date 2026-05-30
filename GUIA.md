# 📋 GUÍA COMPLETA DE ENTREGA — Landing Page React + Vue

Esta guía contiene **todo** lo que necesitas para completar la actividad:
ejecutar los proyectos, desplegarlos, subirlos a GitHub, grabar el video y
hacer la comparativa.

---

## 1. ▶️ EJECUTAR LOS PROYECTOS EN LOCAL

Tienes dos carpetas:
- `react-cafeteria/` → versión en React
- `vue-cafeteria/`   → versión en Vue (mismo diseño)

Para cada uno, abre una terminal dentro de la carpeta y ejecuta:

```bash
npm install     # solo la primera vez (instala dependencias)
npm run dev     # arranca el servidor de desarrollo
```

Abre el navegador en la dirección que aparece (normalmente
`http://localhost:5173`). Verás la landing page funcionando.

Para detener el servidor: `Ctrl + C` en la terminal.

---

## 2. 🧩 ¿POR QUÉ "TODO BASADO EN COMPONENTES"?

Cada parte de la página es un componente reutilizable e independiente.
**El formulario** es el mejor ejemplo: cada campo (input, select, textarea) es
su propio componente.

### Cómo mover un campo de lugar (lo que pediste)
Quieres mover, por ejemplo, el **select de "Tipo de mesa"** a otra posición.

**En React** → abre `react-cafeteria/src/components/Reservation.jsx`.
Busca este bloque y simplemente **córtalo (Ctrl+X) y pégalo (Ctrl+V)** donde
quieras:
```jsx
<SelectField
  label="Tipo de mesa"
  name="mesa"
  value={form.mesa}
  onChange={handleChange}
  error={errors.mesa}
  options={['Interior', 'Terraza', 'Ventana', 'Privada']}
/>
```

**En Vue** → abre `vue-cafeteria/src/components/Reservation.vue`.
Corta y pega este bloque donde quieras:
```vue
<SelectField
  label="Tipo de mesa"
  v-model="form.mesa"
  :error="errors.mesa"
  :options="['Interior', 'Terraza', 'Ventana', 'Privada']"
/>
```

Como cada campo es un componente, **no se rompe nada**: solo cambia de posición
en la pantalla. Lo mismo aplica para `InputField`, `TextAreaField`, etc.

---

## 3. 🌐 DESPLIEGUE PÚBLICO (Vercel — el más fácil)

Vercel despliega proyectos React y Vue automáticamente. Es gratis.

### Opción A — Desde GitHub (recomendada, queda profesional)
1. Sube tus proyectos a GitHub (ver sección 4).
2. Entra a https://vercel.com e inicia sesión con tu cuenta de GitHub.
3. Clic en **"Add New… → Project"**.
4. Selecciona el repositorio del proyecto React.
5. Vercel detecta Vite automáticamente. Deja todo por defecto:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Clic en **"Deploy"**. En 1 minuto tendrás una URL pública.
7. **Repite los pasos 3–6** para el proyecto de Vue.

> Si tus dos proyectos están en un mismo repositorio (carpetas separadas), en el
> paso 5 configura el **"Root Directory"** apuntando a `react-cafeteria` para
> uno y `vue-cafeteria` para el otro.

### Opción B — Sin GitHub (arrastrar carpeta, súper rápido)
1. En cada proyecto ejecuta `npm run build` → se crea la carpeta `dist/`.
2. Entra a https://vercel.com (o https://app.netlify.com/drop para Netlify).
3. Arrastra la carpeta `dist/` a la página. ¡Listo, URL pública!

> Guarda las dos URLs públicas, las necesitas para el video y la entrega.
> **Verifica que ambos enlaces abran bien antes de entregar.**

---

## 4. 🐙 SUBIR A GITHUB (repositorio organizado)

Necesitas Git instalado. Para **cada** proyecto:

```bash
# dentro de react-cafeteria (y luego repite en vue-cafeteria)
git init
git add .
git commit -m "Landing page Café Aroma en React"
git branch -M main
# crea un repositorio vacío en github.com y copia su URL:
git remote add origin https://github.com/TU_USUARIO/react-cafeteria.git
git push -u origin main
```

Consejos para que el repo se vea organizado:
- Usa nombres claros (`react-cafeteria`, `vue-cafeteria`).
- El `README.md` ya está incluido en cada proyecto (explica todo).
- El `.gitignore` ya evita subir `node_modules`.

> Puedes hacer **un repo por proyecto** (más limpio) o **un solo repo** con las
> dos carpetas dentro. Cualquiera es válido.

---

## 5. 🎥 GUION DEL VIDEO (qué decir y mostrar)

Graba la pantalla (con OBS, la grabadora de Windows `Win+G`, o Loom).
Debes hacer **un recorrido por cada tecnología**. Habla natural, no leas.

### 🅰️ Parte React
1. **Creación del proyecto**: explica que se crea con Vite:
   `npm create vite@latest react-cafeteria -- --template react`
   (o muestra que ya está creado y explica la estructura).
2. **Explicación de la tecnología**:
   - React es una **librería** de JavaScript para construir interfaces.
   - Se basa en **componentes** reutilizables y en JSX (HTML dentro de JS).
   - Maneja el estado con **hooks** (`useState`).
   - Ventajas: enorme comunidad, muy demandado laboralmente, flexible.
3. **Estructura**: abre la carpeta `src/components` y muestra que cada sección
   y cada campo del formulario es un componente.
4. **Ejecución local**: corre `npm run dev` y muestra la página en el navegador.
5. **Funcionamiento de la landing**: navega por el menú, la sección Nosotros,
   muestra que es responsive (achica la ventana).
6. **Formulario**: envía vacío para mostrar las **validaciones** (errores en
   rojo). Luego llénalo bien y muestra el mensaje de éxito.
7. **Despliegue**: muestra cómo lo subiste a Vercel.
8. **Sistema desplegado**: abre la URL pública y navega en ella.

### 🅱️ Parte Vue
Repite los **mismos 8 pasos** con el proyecto Vue. Diferencias a mencionar:
- Vue es un **framework progresivo**.
- Usa **componentes de un solo archivo** (`.vue`): template + script + estilos.
- Estado reactivo con `ref` y `reactive`; enlace de formularios con `v-model`.
- Directivas como `v-for` (listas) y `v-if` (condicionales).
- Ventajas: curva de aprendizaje suave, sintaxis muy clara.

### 🆚 Comparativa (al final del 2do video)
Usa la tabla de la sección 6 y **explícala con tus palabras** según tu
experiencia.

---

## 6. 🆚 COMPARATIVA TÉCNICA: REACT vs VUE

> Úsala como base, pero exprésala con **tu experiencia personal** desarrollando
> estos dos proyectos.

| Aspecto | React | Vue | Mi experiencia |
|---|---|---|---|
| **Facilidad de aprendizaje** | Requiere entender JSX y hooks; curva un poco más pronunciada. | Más sencillo al inicio; el template se parece a HTML. | Vue se sintió más fácil para empezar. |
| **Organización del proyecto** | Componentes en `.jsx`; mucha libertad (puede ser confuso al inicio). | Componentes `.vue` que agrupan plantilla, lógica y estilo en un archivo. | Vue agrupa todo de forma más ordenada. |
| **Manejo de componentes** | Props + `useState`; datos van por props y eventos por funciones. | Props + `v-model` para formularios (menos código). | El `v-model` de Vue ahorró bastante código en el formulario. |
| **Facilidad para crear interfaces** | JSX muy potente y flexible; mezcla lógica y vista. | Directivas (`v-for`, `v-if`) muy legibles. | Ambas rápidas; las directivas de Vue son muy claras. |
| **Experiencia de despliegue** | Idéntica con Vite: `npm run build` → `dist`. | Idéntica con Vite: `npm run build` → `dist`. | Igual de simple en los dos (Vercel). |
| **Rendimiento percibido** | Muy rápido; bundle algo mayor. | Muy rápido; bundle más pequeño en este proyecto. | Ambos instantáneos en local; Vue generó un bundle menor. |
| **Comunidad / empleo** | Comunidad enorme, más ofertas laborales. | Comunidad sólida y creciente. | React parece tener más demanda laboral. |

**Preferencia personal (ejemplo, ajústalo a lo que sentiste):**
> "Para aprender y para proyectos pequeños preferí **Vue** por su sintaxis clara
> y el `v-model`. Sin embargo, elegiría **React** para proyectos grandes o
> profesionales por su comunidad y demanda laboral. Ambos resolvieron el mismo
> diseño sin problema."

---

## 7. 🎓 PREGUNTAS QUE PODRÍA HACER EL DOCENTE (prepárate)

- **¿Qué es un componente?** Un bloque reutilizable de interfaz con su propia
  lógica y vista. Ej: `MenuCard` se reutiliza por cada producto.
- **¿Cómo pasas datos a un componente?** Con **props**. Ej: a `MenuCard` le paso
  `:item` / `item={...}`.
- **¿Cómo manejas el estado del formulario?**
  - React: con el hook `useState` (objeto `form`).
  - Vue: con `reactive` y `ref`.
- **¿Cómo funcionan las validaciones?** En la función `validar()` reviso cada
  campo; si hay errores los guardo en `errors` y los muestro bajo cada input.
- **¿Qué es `v-model` (Vue) / `onChange` (React)?** El enlace entre el input y
  la variable de estado. `v-model` lo hace en dos vías automáticamente.
- **¿Qué hace `map` / `v-for`?** Recorre la lista del menú y crea una tarjeta
  por cada elemento.
- **¿Por qué Vite?** Es el empaquetador; da servidor de desarrollo rápido y
  genera la carpeta `dist` para producción.

---

## ✅ CHECKLIST FINAL ANTES DE ENTREGAR
- [ ] Los dos proyectos corren en local (`npm run dev`).
- [ ] El formulario muestra errores y mensaje de éxito en ambos.
- [ ] Diseño responsive (probado achicando la ventana).
- [ ] Ambos repositorios subidos a GitHub con README.
- [ ] Las dos URLs públicas abren correctamente.
- [ ] Video grabado mostrando ambos proyectos + comparativa.
- [ ] Practicaste explicar el código con tus palabras.
