import React from 'react';
import '../index.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './contexts/ThemeContext';
import { SearchProvider } from './contexts/SearchContext';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.jsx', { eager: true });
    console.log('Trying to load page:', name);
    console.log('Available pages:', Object.keys(pages));
    console.log('Resolved page:', pages[`./pages/${name}.jsx`]);
    return pages[`./pages/${name}.jsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <ThemeProvider>
        <SearchProvider>
          <App {...props} />
        </SearchProvider>
      </ThemeProvider>
    );
  },
});
