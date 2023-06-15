import { extendTheme } from '@chakra-ui/react';

const Button = {
	baseStyle: {
		fontWeight: 'bold',
		borderRadius: 'full'
	},
	sizes: {
		xl: {
			h: '56px',
			fontSize: 'xl',
			px: '40px'
		},
		lg: {
			h: '40px',
			fontSize: 'lg',
			px: '32px'
		},
		md: {
			h: '32px',
			fontSize: 'md',
			px: '24px'
		},
		sm: {
			h: '29px',
			fontSize: 'sm',
			px: '16px'
		},
		full: {
			h: '40px',
			fontSize: 'lg',
			px: '32px'
		},
		degrade: {
			h: '40px',
			fontSize: 'sm',
			fontWeight: 'bold',
			w: '60%',
			color: 'white',
			rounded: 'full'
		}
	},
	variants: {
		primary: {
			bg: 'purple.500',
			color: 'white',
			_hover: {
				bg: 'purple.600'
			}
		},
		secondary: {
			bg: 'white',
			color: 'purple.500',
			borderColor: 'purple.500',
			_hover: {
				bg: 'purple.100'
			},
			maxW: '124px'
		},
		hero: {
			color: 'white',
			bg: 'purple.500',
			p: '24px 16px',
			w: 'fit-content',
			fontSize: '18px',
			fontWeight: '700',
			h: '55px',
			_hover: {
				bg: 'purple.600'
			}
		}
	}
};

const theme = extendTheme({
	fonts: {
		body: 'Plus Jakarta Sans',
		heading: 'Outfit, sans-serif'
	},
	colors: {
		purple: {
			100: '#E8E7FF',
			500: '#6D63EB'
		},
		green: {
			300: '#63D18B'
		}
	},
	components: {
		Button
	}
});

export default theme;

// export const fonts = {
//   default: 'Plus Jakarta Sans, sans-serif',
//   outfit: 'Outfit, sans-serif',
//   code: 'monospace',
// }
