import type { Config } from "tailwindcss";
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/app/[locale]/**/*.{js,ts,jsx,tsx,mdx}", // Include dynamic routes
  ],
  theme: {
	  extend: {
		  colors: {
			  background: 'var(--background)',
			  foreground: 'var(--foreground)',
			  card: {
				  DEFAULT: 'var(--card)',
				  foreground: 'var(--card-foreground)',
			  },
			  popover: {
				  DEFAULT: 'var(--popover)',
				  foreground: 'var(--popover-foreground)',
			  },
			  primary: {
				  DEFAULT: 'var(--primary)',
				  foreground: 'var(--primary-foreground)',
			  },
			  secondary: {
				  DEFAULT: 'var(--secondary)',
				  foreground: 'var(--secondary-foreground)',
			  },
			  muted: {
				  DEFAULT: 'var(--muted)',
				  foreground: 'var(--muted-foreground)',
			  },
			  accent: {
				  DEFAULT: 'var(--accent)',
				  foreground: 'var(--accent-foreground)',
			  },
			  destructive: {
				  DEFAULT: 'var(--destructive)',
				  foreground: 'var(--destructive-foreground)',
			  },
			  border: 'var(--border)',
			  input: 'var(--input)',
			  ring: 'var(--ring)',
			  chart: {
				  '1': 'var(--chart-1)',
				  '2': 'var(--chart-2)',
				  '3': 'var(--chart-3)',
				  '4': 'var(--chart-4)',
				  '5': 'var(--chart-5)',
			  },
		  },
	  }
  },
  plugins: [addVariablesForColors,require("tailwindcss-animate")],
} satisfies Config;
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
	addBase({
		":root": newVars,
	})
}
