// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Escaneia arquivos HTML na raiz
    "./*.html",
    // Escaneia arquivos nas pastas pages, components, etc., mas NÃO no node_modules.
    "./{pages,components}/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}