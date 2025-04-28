import React from "react";
import { Link } from '@inertiajs/react';
import { useState, useEffect, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { sideBarItems, settingItems } from "../data";
import ThemeContext from "../contexts/ThemeContext";
import { CiBrightnessUp } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
// import SearchContext from "../contexts/SearchContext";

const Sidebar = ({ collapsed, onClose, isMobile, isSettingDashboard }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Determine sidebar classes based on state
  const sidebarClasses = `
    sidebar-wrapper
    ${isMobile ? "fixed left-0 top-0 h-full z-30" : "relative"} 
    ${isMobile && collapsed ? "-translate-x-full" : "translate-x-0"}
    transition-transform duration-300 ease-in-out
    ${collapsed && !isMobile ? "w-20" : "w-64"}
  `

  return (
    <aside className={sidebarClasses}>
      {/* Mobile close button */}
      {isMobile && !collapsed && (
        <>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button onClick={toggleDarkMode} className="block lg:hidden pl-[17px]">
            {isDarkMode ? <CiBrightnessUp color="#fff" size={32} /> : <MdDarkMode color="#000" size={32} />}
          </button>
        </>
      )}

      {isLoading ? (
        <div className="px-6">
          <Skeleton height={20} count={sideBarItems.flat().length} className="mb-2" />
        </div>
      ) : !isSettingDashboard ? (
        <>
          {sideBarItems.map((group, index) => (
            <div key={`group-${index}`} className={`${index === 1 && "mt-6"}`}>
              {group.map((item) => (
                <NavItem
                  key={item.path}
                  iconLight={item.iconLight}
                  iconDark={item.iconDark}
                  title={item.title}
                  path={item.path}
                  collapsed={collapsed && !isMobile}
                  onClick={isMobile ? onClose : undefined}
                />
              ))}
            </div>
          ))}
        </>
      ) : (
        <div>
          {settingItems.map((item) => (
            <NavItem
              key={item.path}
              title={item.title}
              path={item.path}
              collapsed={collapsed && !isMobile}
              isTextOnly
              onClick={isMobile ? onClose : undefined}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          ))}
        </div>
      )}
    </aside>
  )
}
const NavItem = ({ iconLight, iconDark, title, path, collapsed, isTextOnly, onClick, isDarkMode, toggleDarkMode }) => (
  <>
    <Link
      to={path}
      className={`flex items-center w-full ${collapsed ? "px-2 justify-center" : "px-6"} nav-item group`}
      onClick={onClick}
    >
      {!isTextOnly && (
        <>
          <img
            src={iconDark}
            alt=""
            className="w-4 mr-4 block dark:hidden"
          />
          <img
            src={iconLight}
            alt=""
            className="w-4 mr-4 hidden dark:block"
          />
        </>
      )}

      {collapsed ? null : <span className="capitalize">{title}</span>}
    </Link>
  </>
)

export default Sidebar
