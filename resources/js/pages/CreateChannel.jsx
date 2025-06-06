import React, { useEffect, useState } from "react";
import { router, useForm } from "@inertiajs/react";
import Layout from "../components/Layouts/Layout";
import { useData } from "../contexts/DataContext";

const CreateChannel = () => {
  const { hasChannels } = useData();
  const [profilePreview, setProfilePreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);

  const { data, setData, post, processing, errors } = useForm({
    name: "",
    description: "",
    profile: null,
    banner: null,
  });

  useEffect(() => {
    if (hasChannels) {
      router.visit("/studio/dashboard");
    }
  }, [hasChannels]);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    if (type === "file" && files[0]) {
      setData(name, files[0]);

      const reader = new FileReader();
      reader.onload = (event) => {
        if (name === "profile") {
          setProfilePreview(event.target.result);
        } else if (name === "banner") {
          setBannerPreview(event.target.result);
        }
      };
      reader.readAsDataURL(files[0]);
    } else {
      setData(name, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post("/channels", {
      forceFormData: true, // needed for file uploads
      onSuccess: () => router.visit("/studio/dashboard"),
      onError: () => {
        alert("Validation failed. Please check your inputs.");
      },
    });
  };

  return (
    <Layout title="Create Channel">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">Create Your Channel</h1>

          <form onSubmit={handleSubmit}>
            {/* Banner Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Channel Banner</label>
              <div
                className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                onClick={() => document.getElementById("banner-upload").click()}
              >
                {bannerPreview ? (
                  <div className="relative">
                    <img src={bannerPreview} alt="Banner preview" className="w-full h-40 object-cover rounded-lg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition rounded-lg">
                      <span className="text-white">Change Banner</span>
                    </div>
                  </div>
                ) : (
                  <div className="py-10">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Click to upload banner image</p>
                  </div>
                )}
                <input
                  id="banner-upload"
                  name="banner"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleChange}
                />
              </div>
              {errors.banner && <p className="text-sm text-red-500 mt-1">{errors.banner}</p>}
            </div>

            {/* Profile Picture Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Profile Picture</label>
              <div className="flex items-center">
                <div
                  className="w-24 h-24 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition overflow-hidden"
                  onClick={() => document.getElementById("profile-upload").click()}
                >
                  {profilePreview ? (
                    <img src={profilePreview} alt="Profile preview" className="w-full h-full object-cover" />
                  ) : (
                    <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  )}
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Upload a profile picture</p>
                  <button
                    type="button"
                    className="mt-1 text-sm text-purple-600 dark:text-purple-400 hover:underline"
                    onClick={() => document.getElementById("profile-upload").click()}
                  >
                    Choose file
                  </button>
                </div>
                <input
                  id="profile-upload"
                  name="profile"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleChange}
                />
              </div>
              {errors.profile && <p className="text-sm text-red-500 mt-1">{errors.profile}</p>}
            </div>

            {/* Channel Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Channel Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
                placeholder="Enter your channel name"
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Channel Description */}
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Channel Description
              </label>
              <textarea
                id="description"
                name="description"
                value={data.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-900 text-black dark:text-white"
                placeholder="Tell viewers about your channel"
              />
              {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={processing}
                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition disabled:opacity-50"
              >
                {processing ? "Creating Channel..." : "Create Channel"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateChannel;
