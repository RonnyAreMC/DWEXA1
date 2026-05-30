// COMPONENTE: Campo de texto reutilizable (input)
// Recibe todo por props -> puedes copiar/pegar y reubicar este componente
// donde quieras dentro del formulario.
export default function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder = '',
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'invalid' : ''}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  )
}
