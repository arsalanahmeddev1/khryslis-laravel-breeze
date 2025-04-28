"use client"

const FormRadioGroup = ({ label, name, value, onChange, options, helpText }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="space-y-3">
        {options.map((option) => (
          <div key={option.value} className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id={`${name}-${option.value}`}
                name={name}
                type="radio"
                checked={value === option.value}
                onChange={() => onChange(name, option.value)}
                className="w-4 h-4 text-theme-color border-gray-300 focus:ring-theme-color"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor={`${name}-${option.value}`}
                className="font-medium text-gray-700 cursor-pointer"
              >
                {option.label}
              </label>
              {option.description && <p className="text-xs text-gray-500">{option.description}</p>}
            </div>
          </div>
        ))}
      </div>
      {helpText && <p className="text-xs text-gray-500">{helpText}</p>}
    </div>
  )
}

export default FormRadioGroup
