"use client"

const FormInput = ({ label, name, type = "text", value, onChange, placeholder, helpText, ...props }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-theme-color bg-white text-gray-900"
        {...props}
      />
      {helpText && <p className="text-xs text-gray-500">{helpText}</p>}
    </div>
  )
}

export default FormInput
