1. set up project
npm create vite@latest
2. move the current folder lmsfrontend
cd lmsfrontend
3. install dependency
 npm install
 4. start the server
 cd lmsftontend
 npm run dev
 Tailwindcss setup
 1. install tailwindcss
 ```
 npm install -D tailwindcss postcss autoprefixer
 
 ```
 2. tailwindcss init
 ```
 npx tailwindcss init -p
 
 ```
 3. setup tailwind.config.js file
 ```
 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
 ```
 5.Add the Tailwind directives to your CSS
 ```
 @tailwind base;
@tailwind components;
@tailwind utilities;
 
 ```
