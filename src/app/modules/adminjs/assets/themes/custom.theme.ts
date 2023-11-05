import { ThemeOverride } from '@adminjs/design-system';

export const CustomTheme: Partial<ThemeOverride> = {
	colors: {
		// Primary
		primary100: '#062849',
		primary80: '#91A2BF',
		primary60: '#2F4F77',
		primary40: '#A9BAFA',
		primary20: '#CBD5FD',

		// accent
		accent: '#38CAF1',
		love: '#454655',

		// grey
		grey100: '#1C1C38',
		grey80: '#454655',
		grey60: '#898A9A',
		grey40: '#C0C0CA',
		grey20: '#F6F7FB',
		white: '#fff',

		// Alerts
		errorDark: '#DE405D',
		error: '#FF4567',
		errorLight: '#FFA5B5',

		successDark: '#32A887',
		success: '#70C9B0',
		successLight: '#DBF0F1',

		infoDark: '#4268F6',
		info: '#879FFA',
		infoLight: '#CBD5FD',

		// Backgrounds
		filterBg: '#1E002E',
		hoverBg: '#535B8E',

		// global
		border: '#DDE1E5',

		// Elements
		inputBorder: '#C0C0CA',
		separator: '#C0C0CA',
		highlight: '#F6F7FB',
		filterInputBorder: 'rgba(255,255,255,0.15)',
		filterDisabled: 'rgba(83,91,142,0.05)',
		bg: '#EDEDED',
	},
	borderWidths: {
		default: '0px',
	},
	borders: {
		input: '1px solid #C0C0CA',
		filterInput: ' 1px rgba(255,255,255,0. solid15)',
		bg: '1px solid #F6F7FB',
		default: '1px solid #DDE1E5',
	},
	font: "'Roboto', sans-serif" as never,
	fontSizes: {
		xs: '10px',
		sm: '12px',
		default: '14px',
		md: '14px',
		lg: '16px',
		xl: '18px',
		h4: '24px',
		h3: '28px',
		h2: '32px',
		h1: '40px',
	},
	fontWeights: {
		lighter: '200',
		light: '300',
		normal: '400',
		bold: '500',
		bolder: '900',
	},
	lineHeights: {
		xs: '10px',
		sm: '12px',
		default: '16px',
		md: '16px',
		lg: '24px',
		xl: '32px',
		xxl: '40px',
	},
	shadows: {
		login: '0 15px 24px 0 rgba(137,138,154,0.15)',
		cardHover: '0 4px 12px 0 rgba(137,138,154,0.4)',
		drawer: '-2px 0 8px 0 rgba(137,138,154,0.2)',
		card: '0 1px 6px 0 rgba(137,138,154,0.4)',
		inputFocus: '0 2px 4px 0 rgba(135,159,250,0.4)',
		buttonFocus: '0 4px 6px 0 rgba(56,202,241,0.3)',
	},
	sizes: {
		navbarHeight: '64px',
		sidebarWidth: '300px',
		maxFormWidth: '740px',
	},
	space: {
		xs: '2px',
		sm: '4px',
		default: '8px',
		md: '8px',
		lg: '16px',
		xl: '24px',
		xxl: '32px',
		x3: '48px',
		x4: '64px',
		x5: '80px',
		x6: '128px',
	},
};
