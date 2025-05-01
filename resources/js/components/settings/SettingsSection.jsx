const SettingsSection = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium mb-4 text-app">{title}</h2>
      <div className="bg-app-grey rounded-lg border-app p-4">
        {children}
      </div>
    </div>
  )
}

export default SettingsSection
