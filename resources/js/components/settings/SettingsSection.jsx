const SettingsSection = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium mb-4 text-gray-900">{title}</h2>
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        {children}
      </div>
    </div>
  )
}

export default SettingsSection
