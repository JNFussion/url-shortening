module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#2ACFCF",
        "dark-violet": "#3B3054",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "dark-blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        shorten: "url('./assets/images/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('./assets/images/bg-shorten-mobile.svg')",
        boost: "url('./assets/images/bg-boost-desktop.svg')",
        "boost-mobile": "url('./assets/images/bg-boost-mobile.svg')",
      },
    },
  },
  plugins: [],
};
