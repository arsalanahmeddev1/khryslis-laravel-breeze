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
            {user ? (
              <Dropdown>
                <Dropdown.Trigger>
                  <span className="inline-flex rounded-md">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center auth-link-wrapper rounded-full w-[50px] h-[50px] bg-white text-gray-700 text-sm font-medium leading-4 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none"
                    >
                      <span className="font-semibold text-lg">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </button>
                  </span>
                </Dropdown.Trigger>

                <Dropdown.Content>
                  <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                  <Dropdown.Link href={route('logout')} method="post" as="button">
                    Log Out
                  </Dropdown.Link>
                  {user?.channels?.length > 0 ? (
                    <Dropdown.Link href={route('channel')}>Your Channel</Dropdown.Link>
                  ) : (
                    <Dropdown.Link href={route('create-channel')}>Create Channel</Dropdown.Link>
                  )
                
                }
                </Dropdown.Content>
              </Dropdown>
            ) : (
              // If not logged in, show sign in link
              <a
                href={route('login')}
                className="auth-link-wrapper inline-flex items-center gap-2 rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition"
              >
                <img src={profile} alt="Profile" className="w-5 h-5" />
                Sign In
              </a>
            )}
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
