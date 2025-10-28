/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                light: '#F5F5F7',
                surface: '#FFFFFF',
                'text-light': '#0F1724',
                'muted-light': '#6B7280',
                dark: '#0D0D0F',
                'surface-dark': '#111216',
                'text-dark': '#E6EEF6',
                accent: '#4F9CF9',
                accentSoft: '#8BD3E6'
            },
            boxShadow: {
                'soft': '0 6px 20px rgba(15, 23, 36, 0.06)',
                'soft-dark': '0 8px 30px rgba(2,6,23,0.6)'
            },
            borderRadius: {
                'xl-2': '1rem'
            },
            scrollbarHide: {
                '&::-webkit-scrollbar': { display: 'none' },
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none'
            }
        }
    },
    plugins: []
}