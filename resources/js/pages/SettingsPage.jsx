import { useState, useEffect } from "react";
import { Link, usePage, useForm, router as inertiaRouter } from '@inertiajs/react';
import Layout from "../components/Layouts/Layout";
import SettingsSidebar from "../components/settings/SettingsSidebar";
import AccountSettings from "../components/settings/AccountSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import PrivacySettings from "../components/settings/PrivacySettings";
import PlaybackSettings from "../components/settings/PlaybackSettings";
import AppearanceSettings from "../components/settings/AppearanceSettings";
import AdvancedSettings from "../components/settings/AdvancedSettings";
import DownloadsSettings from "../components/settings/DownloadsSettings";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SettingsPage = () => {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = inertiaRouter;
  const { url } = usePage();
  const { section } = usePage().props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [url]);

  const settingsCategories = [
    { id: "account", label: "Account", path: "/settings/account", icon: "user" },
    { id: "notifications", label: "Notifications", path: "/settings/notifications", icon: "bell" },
    { id: "playback", label: "Playback and performance", path: "/settings/playback", icon: "play" },
  ];

  useEffect(() => {
    if (url === "/settings") {
      router.visit("/settings/account");
    }
  }, [url]);

  const renderSettingsComponent = () => {
    if (loading) {
      return (
        <div className="p-6">
          <Skeleton height={40} width="60%" className="mb-6" />
          <Skeleton height={24} width="40%" className="mb-4" />
          <Skeleton height={16} count={3} className="mb-2" />
          <Skeleton height={40} className="mb-4 mt-6" />
          <Skeleton height={40} className="mb-4" />
          <Skeleton height={40} className="mb-4" />
          <Skeleton height={24} width="40%" className="mb-4 mt-6" />
          <Skeleton height={16} count={2} className="mb-2" />
        </div>
      );
    }

    switch (section) {
      case "account":
        return <AccountSettings />;
      case "notifications":
        return <NotificationSettings />;
      case "privacy":
        return <PrivacySettings />;
      case "playback":
        return <PlaybackSettings />;
      case "appearance":
        return <AppearanceSettings />;
      case "downloads":
        return <DownloadsSettings />;
      case "advanced":
        return <AdvancedSettings />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <Layout title="Settings">
      <div className="settings-page bg-white dark:bg-gray-900">
        <div className="md:hidden sticky top-0 z-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
          <button
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="font-medium">Settings</span>
            <svg
              className={`w-5 h-5 ml-2 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div
            className={`${mobileMenuOpen ? "block" : "hidden"
              } md:block md:w-64 lg:w-72 border-r border-gray-200 dark:border-gray-800 md:sticky md:top-0 md:h-screen`}
          >
            <SettingsSidebar categories={settingsCategories} loading={loading} />
          </div>
          <div className="flex-1 min-h-screen">
            <div className="p-4 md:p-6 overflow-y-auto">
              {renderSettingsComponent()}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;