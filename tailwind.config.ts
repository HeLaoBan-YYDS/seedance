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
				// 科技风格 - 霓虹青色系
				'neon-cyan': {
					50: '#E0FFFF',
					100: '#B3FFFF',
					200: '#80FFFF',
					300: '#4DFFFF',
					400: '#1AFFFF',
					500: '#00E5E5', // 主色 - 霓虹青
					600: '#00CCCC',
					700: '#00B3B3',
					800: '#009999',
					900: '#008080',
				},
				// 科技风格 - 电光蓝
				'electric-blue': {
					50: '#E6F0FF',
					100: '#CCE0FF',
					200: '#99C2FF',
					300: '#66A3FF',
					400: '#3385FF',
					500: '#0066FF', // 电光蓝
					600: '#0052CC',
					700: '#003D99',
					800: '#002966',
					900: '#001433',
				},
				// 科技风格 - 紫色霓虹
				'neon-purple': {
					50: '#F3E5FF',
					100: '#E6CCFF',
					200: '#CC99FF',
					300: '#B366FF',
					400: '#9933FF',
					500: '#8000FF', // 霓虹紫
					600: '#6600CC',
					700: '#4D0099',
					800: '#330066',
					900: '#1A0033',
				},
				// 科技风格 - 矩阵绿
				'matrix-green': {
					50: '#E6FFE6',
					100: '#CCFFCC',
					200: '#99FF99',
					300: '#66FF66',
					400: '#33FF33',
					500: '#00FF00', // 矩阵绿
					600: '#00CC00',
					700: '#009900',
					800: '#006600',
					900: '#003300',
				},
				// 科技风格 - 深空灰
				'deep-space': {
					50: '#E8E9ED',
					100: '#D1D3DB',
					200: '#A3A7B7',
					300: '#757B93',
					400: '#474F6F',
					500: '#1A1F3A', // 深空背景
					600: '#15192E',
					700: '#101323',
					800: '#0A0D17',
					900: '#05060C',
				},
				// 科技风格 - 赛博粉
				'cyber-pink': {
					50: '#FFE6F7',
					100: '#FFCCEF',
					200: '#FF99DF',
					300: '#FF66CF',
					400: '#FF33BF',
					500: '#FF00AF', // 赛博粉
					600: '#CC008C',
					700: '#990069',
					800: '#660046',
					900: '#330023',
				},
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
