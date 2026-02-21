import '@testing-library/jest-dom';

// @vitejs/plugin-react injects fast-refresh code that checks for this global.
// In a jsdom test environment the preamble script never runs, so we set it manually.
(window as unknown as Record<string, unknown>).__vite_plugin_react_preamble_installed__ = true;
