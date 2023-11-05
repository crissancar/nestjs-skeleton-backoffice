import PropertyOptions from 'adminjs/src/backend/decorators/property/property-options.interface';

import { faqLanguageValues } from './enums-values/faq-language.values';

export const faqPropertiesConfig: Record<string, PropertyOptions> = {
	id: { isRequired: true, type: 'uuid', isTitle: false },
	language: {
		isRequired: true,
		availableValues: faqLanguageValues,
	},
	title: { isRequired: true },
	text: { isRequired: true },
};
