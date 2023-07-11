const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
   
    

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
      ],
    plugins: [require("flowbite",)],
    variants: {
        opacity: ['disabled'],
        cursor: ['disabled'],
    },
    darkMode: true, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    
};
