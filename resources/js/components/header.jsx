import React from "react"
import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext";
import logo from "../assets/images/logo.png"
import { Link, usePage } from '@inertiajs/react';
import profile from "../assets/icons/profile.png"
import { CiBrightnessUp } from "react-icons/ci"
import { MdDarkMode } from "react-icons/md"
import SearchBar from "./SearchBar";
import Dropdown from '@/Components/Dropdown';

const TopNavBar = ({ onMenuClick }) => {
  const user = usePage().props.auth.user;
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <header className="header">
      <div className="flex items-center">
        {/* <button
          onClick={onMenuClick}
          className="lg:hidden menu-toggle-btn text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}

        <button className="menu-toggle-btn" onClick={onMenuClick}>
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
        <Link to={"/"} className="logo-wrapper">
          <img src={logo} alt="Logo" className="w-40" />
        </Link>
      </div>

      <SearchBar className="hidden lg:flex" />

      <div className="auth-btn-wrapper">
        <div className="hidden sm:ms-6 sm:flex sm:items-center">
          <div className="relative ms-3">
            <Dropdown>
              <Dropdown.Trigger>
                <span className="inline-flex rounded-md">
                  <button
                    type="button"
                    className="inline-flex items-center auth-link-wrapper rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                  >
                    <img src={profile} alt="Profile" />
                    {user ? user.name : 'Log In'}

                    <svg
                      className="-me-0.5 ms-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </Dropdown.Trigger>

              <Dropdown.Content>
                <Dropdown.Link
                  href={route('profile.edit')}
                >
                  Profile
                </Dropdown.Link>
                <Dropdown.Link
                  href={route('logout')}
                  method="post"
                  as="button"
                >
                  Log Out
                </Dropdown.Link>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
        {/* <button className="w-8 h-8 ml-2 rounded-full bg-purple-600 flex items-center justify-center">
          <span className="font-medium text-sm">A</span>
        </button> */}
        <button onClick={toggleDarkMode} className="hidden lg:block">
          {isDarkMode ? <CiBrightnessUp color="#fff" size={32} /> : <MdDarkMode color="#000" size={32} />}
        </button>
      </div>
    </header>
  )
}

export default TopNavBar
