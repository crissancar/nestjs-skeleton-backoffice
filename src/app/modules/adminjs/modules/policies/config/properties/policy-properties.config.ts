import PropertyOptions from 'adminjs/src/backend/decorators/property/property-options.interface';

import { policyLanguageValues } from './enums-values/policy-language.values';
import { policyTypeValues } from './enums-values/policy-type.values';

export const policyPropertiesConfig: Record<string, PropertyOptions> = {
	title: { isRequired: true },
	language: {
		isRequired: true,
		availableValues: policyLanguageValues,
	},
	type: {
		isRequired: true,
		availableValues: policyTypeValues,
	},
	description: { isRequired: true },
};
