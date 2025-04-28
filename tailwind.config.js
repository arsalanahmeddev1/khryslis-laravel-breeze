import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
          colors: {
            'theme-color': '#5213AA',
            'gradient-start': '#1e3a8a',
            'gradient-end': '#6b21a8',
    
            'gradient-start-hover': '#172554',
            'gradient-end-hover': '#581c87',
          }
        },
      },

    plugins: [forms],
};
