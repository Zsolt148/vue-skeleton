const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: "jit",
    darkMode: "class",
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        "./resources/js/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            // screens: {
            //     light: { raw: "(prefers-color-scheme: light)" },
            //     dark: { raw: "(prefers-color-scheme: dark)" }
            // },
            colors: {
                dark: {
                    bg: "#151823",
                    "eval-1": "#222738",
                    "eval-2": "#2A2F42",
                    "eval-3": "#2C3142",
                },
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        /*
        function({ addBase, config }) {
            addBase({
                body: {
                    color: config("theme.colors.black"),
                    backgroundColor: config("theme.colors.white")
                },
                "@screen dark": {
                    body: {
                        color: config("theme.colors.white"),
                        backgroundColor: config("theme.colors.black")
                    }
                }
            });
        }
        */
    ],
};
