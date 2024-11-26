const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js", // Include Flowbite files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Include the Flowbite plugin
  ],
});
