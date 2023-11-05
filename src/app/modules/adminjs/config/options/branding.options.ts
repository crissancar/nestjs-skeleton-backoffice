import { BrandingOptions as AdminJSBrandingOptions } from 'adminjs';

import { CustomTheme } from '../../assets/themes/custom.theme';

export const brandingOptions: AdminJSBrandingOptions = {
	companyName: 'Skeleton',
	withMadeWithLove: false,
	logo: '/assets/img/logo.png',
	favicon: '/assets/img/favicon.png',
	theme: CustomTheme,
};
