// COMPONENTE: Campo de selección reutilizable (select)
// Las opciones llegan por props. Es un componente independiente:
// para moverlo solo cambias su posición en el formulario.
export default function SelectField({
  label,
  name,
  value,
  onChange,
  error,
  options = [],
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? 'invalid' : ''}
      >
        <option value="">Seleccione...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <span className="error-msg">{error}</span>}
    </div>
  )
}
