/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        marineBlue: "hsl(213, 96%, 18%)",
        purplishBlue: "hsl(243, 100%, 62%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberryRed: "hsl(354, 84%, 57%)",
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
      },
      gridTemplateColumns: {
        form: "minmax(auto, 280px) auto",
      },
      backgroundImage: {
        sidebarDesktop: "url('/images/bg-sidebar-desktop.svg')",
        sidebarMobile: "url('/images/bg-sidebar-mobile.svg')",
      },
      borderWidth: {
        1: "1px",
      },
      screens: {
        box: "850px",
        ssmax: { max: "375px" },
        ssmin: "376px",
      },
    },
  },
  plugins: [],
};
