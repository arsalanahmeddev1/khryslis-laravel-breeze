import { usePage, Link } from '@inertiajs/react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { User, Bell, Shield, Play, Monitor, Download, Settings, ChevronRight } from "lucide-react";

const SettingsSidebar = ({ categories, loading }) => {
  const { url } = usePage(); // Use url instead of pathname

  const getIcon = (iconName) => {
    switch (iconName) {
      case "user":
        return <User size={20} />;
      case "bell":
        return <Bell size={20} />;
      case "shield":
        return <Shield size={20} />;
      case "play":
        return <Play size={20} />;
      case "monitor":
        return <Monitor size={20} />;
      case "download":
        return <Download size={20} />;
      case "settings":
        return <Settings size={20} />;
      default:
        return <Settings size={20} />;
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <Skeleton height={32} width="70%" className="mb-6" />
        {[...Array(7)].map((_, index) => (
          <div key={index} className="mb-2">
            <Skeleton height={40} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Settings</h1>
      <nav>
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={category.path} // Changed from to to href
                className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  url === category.path
                    ? "bg-gray-100 text-black font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-gray-500">{getIcon(category.icon)}</span>
                  <span>{category.label}</span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SettingsSidebar;