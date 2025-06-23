
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
				},
				// Enhanced VoidNodes colors with better contrast and vibrancy
				void: {
					background: '#080B14',
					card: '#0F1219',
					accent: '#6366F1',
					glow: '#8B5CF6',
					'dark-gray': '#1A1D29',
					'light-gray': '#252837',
					'electric': '#00D9FF',
					'neon-purple': '#A855F7',
					'neon-pink': '#EC4899',
					'neon-yellow': '#F59E0B',
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-rainbow': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 25%, #EC4899 50%, #F59E0B 75%, #10B981 100%)',
				'gradient-aurora': 'linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(139, 92, 246, 0.4) 25%, rgba(236, 72, 153, 0.4) 50%, rgba(245, 158, 11, 0.4) 75%, rgba(16, 185, 129, 0.4) 100%)',
			},
			fontFamily: {
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
			},
			fontSize: {
				'xs': '0.75rem',
				'sm': '0.875rem',
				'base': '1rem',
				'lg': '1.125rem',
				'xl': '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '3.75rem',
				'7xl': '4.5rem',
				'8xl': '6rem',
				'9xl': '8rem',
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
				'34': '8.5rem',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translate3d(0, 0px, 0) rotate(0deg)' },
					'33%': { transform: 'translate3d(0, -8px, 0) rotate(1deg)' },
					'66%': { transform: 'translate3d(0, 4px, 0) rotate(-1deg)' }
				},
				'sparkle-twinkle': {
					'0%, 100%': { opacity: '0.4', transform: 'scale3d(0.8, 0.8, 1) rotate(0deg)' },
					'25%': { opacity: '1', transform: 'scale3d(1.2, 1.2, 1) rotate(90deg)' },
					'50%': { opacity: '0.7', transform: 'scale3d(1, 1, 1) rotate(180deg)' },
					'75%': { opacity: '0.9', transform: 'scale3d(1.1, 1.1, 1) rotate(270deg)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(99, 102, 241, 0.15), 0 0 80px rgba(99, 102, 241, 0.05)'
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(99, 102, 241, 0.6), 0 0 60px rgba(99, 102, 241, 0.3), 0 0 120px rgba(99, 102, 241, 0.1)'
					}
				},
				'gradient-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				},
				'slide-up': {
					'0%': { transform: 'translate3d(0, 30px, 0)', opacity: '0' },
					'100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale3d(0.9, 0.9, 1)', opacity: '0' },
					'50%': { transform: 'scale3d(1.05, 1.05, 1)', opacity: '0.8' },
					'100%': { transform: 'scale3d(1, 1, 1)', opacity: '1' }
				},
				'aurora': {
					'0%': { backgroundPosition: '0% 50%' },
					'25%': { backgroundPosition: '100% 50%' },
					'50%': { backgroundPosition: '100% 100%' },
					'75%': { backgroundPosition: '0% 100%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-gentle': 'float-gentle 8s ease-in-out infinite',
				'sparkle-twinkle': 'sparkle-twinkle 4s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'gradient-flow': 'gradient-flow 6s ease infinite',
				'text-shimmer': 'text-shimmer 4s linear infinite',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'scale-in': 'scale-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
				'aurora': 'aurora 8s ease-in-out infinite'
			},
			boxShadow: {
				'glow-sm': '0 0 10px rgba(99, 102, 241, 0.3)',
				'glow': '0 0 20px rgba(99, 102, 241, 0.4)',
				'glow-lg': '0 0 30px rgba(99, 102, 241, 0.5)',
				'glow-xl': '0 0 40px rgba(99, 102, 241, 0.6)',
				'neon': '0 0 5px currentColor, 0 0 20px currentColor, 0 0 35px currentColor',
				'aurora': '0 0 60px rgba(99, 102, 241, 0.4), 0 0 120px rgba(139, 92, 246, 0.3), 0 0 180px rgba(236, 72, 153, 0.2)',
			},
			backdropBlur: {
				'xs': '2px',
				'3xl': '32px',
				'4xl': '40px',
			},
			transitionDuration: {
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
				'900': '900ms',
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
