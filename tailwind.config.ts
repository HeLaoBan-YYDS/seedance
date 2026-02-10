import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				// Seedance.ai 配色体系 - 主色
				'primary': {
					DEFAULT: '#165DFF', // 科技蓝 - 品牌主视觉
					50: '#E8F1FF',
					100: '#D0E3FF',
					200: '#A1C7FF',
					300: '#72ABFF',
					400: '#438EFF',
					500: '#165DFF',
					600: '#0D48CC',
					700: '#093799',
					800: '#062566',
					900: '#031333',
				},
				// Seedance.ai 配色体系 - 点缀色
				'purple': {
					DEFAULT: '#7B2FFD', // 活力紫 - 点缀色
					50: '#F3E8FF',
					100: '#E7D0FF',
					200: '#CF9FFF',
					300: '#B76FFF',
					400: '#9F3FFF',
					500: '#7B2FFD',
					600: '#6426CC',
					700: '#4E1D99',
					800: '#371466',
					900: '#1B0A33',
				},
				'pink': {
					DEFAULT: '#FF2E88', // 玫红 - 点缀色
					50: '#FFE6F1',
					100: '#FFD0E3',
					200: '#FFA1C7',
					300: '#FF72AB',
					400: '#FF438E',
					500: '#FF2E88',
					600: '#CC246C',
					700: '#991B51',
					800: '#661235',
					900: '#33091A',
				},
				// Seedance.ai 配色体系 - 装饰色
				'neon-cyan': {
					DEFAULT: '#00F0FF', // 低饱和度霓虹青 - 装饰色
					50: '#E6FFFF',
					100: '#CCFFFF',
					200: '#99FFFF',
					300: '#66FFFF',
					400: '#33FFFF',
					500: '#00F0FF',
					600: '#00C0CC',
					700: '#009099',
					800: '#006066',
					900: '#003033',
				},
				'neon-pink': {
					DEFAULT: '#FF00C8', // 低饱和度霓虹粉 - 装饰色
					50: '#FFE6FB',
					100: '#FFCCF7',
					200: '#FF99EE',
					300: '#FF66E5',
					400: '#FF33DD',
					500: '#FF00C8',
					600: '#CC00A3',
					700: '#99007E',
					800: '#660059',
					900: '#33002F',
				},
				// Seedance.ai 配色体系 - 中性色
				'black': '#000000',
				'dark-gray': '#333333',
				'light-gray': '#F5F7FA',
				'white': '#FFFFFF',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'tech': '0.25rem', // 科技感锐角
			},
			boxShadow: {
				'neon-cyan': '0 0 10px #00E5E5, 0 0 20px #00E5E5, 0 0 30px #00E5E5',
				'neon-blue': '0 0 10px #0066FF, 0 0 20px #0066FF, 0 0 30px #0066FF',
				'neon-purple': '0 0 10px #8000FF, 0 0 20px #8000FF, 0 0 30px #8000FF',
				'neon-pink': '0 0 10px #FF00AF, 0 0 20px #FF00AF, 0 0 30px #FF00AF',
				'neon-green': '0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00',
				'tech-glow': '0 0 15px rgba(0, 229, 229, 0.5), 0 0 30px rgba(0, 102, 255, 0.3)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'neon-pulse': {
					'0%, 100%': {
						opacity: '1',
						filter: 'brightness(1)'
					},
					'50%': {
						opacity: '0.8',
						filter: 'brightness(1.2)'
					}
				},
				'glitch': {
					'0%, 100%': {
						transform: 'translate(0)'
					},
					'20%': {
						transform: 'translate(-2px, 2px)'
					},
					'40%': {
						transform: 'translate(-2px, -2px)'
					},
					'60%': {
						transform: 'translate(2px, 2px)'
					},
					'80%': {
						transform: 'translate(2px, -2px)'
					}
				},
				'scan-line': {
					'0%': {
						transform: 'translateY(-100%)'
					},
					'100%': {
						transform: 'translateY(100%)'
					}
				},
				'data-stream': {
					'0%': {
						transform: 'translateY(-100%)',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100%)',
						opacity: '0'
					}
				},
				'tech-float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'border-beam': {
					'0%': {
						'offset-distance': '0%'
					},
					'100%': {
						'offset-distance': '100%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'glitch': 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
				'scan-line': 'scan-line 4s linear infinite',
				'data-stream': 'data-stream 3s linear infinite',
				'tech-float': 'tech-float 3s ease-in-out infinite',
				'border-beam': 'border-beam 2s linear infinite',
			},
			backgroundImage: {
				'grid-pattern': 'linear-gradient(to right, rgba(0, 229, 229, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 229, 229, 0.1) 1px, transparent 1px)',
				'tech-gradient': 'linear-gradient(135deg, #1A1F3A 0%, #0A0D17 100%)',
				'neon-gradient': 'linear-gradient(135deg, #00E5E5 0%, #0066FF 50%, #8000FF 100%)',
				'cyber-gradient': 'linear-gradient(135deg, #FF00AF 0%, #8000FF 50%, #0066FF 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;