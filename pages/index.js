/** @type {import('tailwindcss').Config} */
module.exports = {
  // Aquí es donde Tailwind busca las clases CSS en tus archivos
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Asegúrate de incluir cualquier otra carpeta donde uses clases de Tailwind
  ],
  theme: {
    extend: {
      // Configura la fuente Inter para todo el proyecto
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Define gradientes personalizados para tus botones
      // Esto te permitirá usar clases como 'bg-btn-gradient', 'bg-btn-blue', etc.
      backgroundImage: theme => ({
        'btn-gradient': 'linear-gradient(to right, #4ade80, #34d399)', // Verde
        'btn-blue': 'linear-gradient(to right, #3b82f6, #2563eb)',    // Azul
        'btn-purple': 'linear-gradient(to right, #9333ea, #7e22ce)',  // Púrpura
        'btn-green': 'linear-gradient(to right, #10b981, #059669)',  // Verde más oscuro
      }),
      // Puedes añadir más configuraciones de tema aquí
    },
  },
  plugins: [],
};
